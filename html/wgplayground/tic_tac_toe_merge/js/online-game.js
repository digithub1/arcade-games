/**
 * Online Multiplayer Game Module
 * Handles matchmaking UI, WebSocket integration, and online game logic
 */

class OnlineGame {
    constructor() {
        this.wsClient = null;
        this.matchmakingModal = null;
        this.matchmakingStartTime = null;
        this.timerInterval = null;
        this.isInOnlineGame = false;
        this.serverUrl = window.TicTacToeConfig ? window.TicTacToeConfig.getWebSocketUrl() : 'ws://localhost:8887';
        this.pendingGameState = null; // Store game state received before UI is ready
        this.matchData = null; // Store match data
        this.lastPlacedCell = null; // Track last placed cell for animation
        this.currentGridSize = 5; // Store current grid size for "Play Again"
    }

    /**
     * Initialize online game module
     */
    init() {
        this.createMatchmakingModal();
        this.wsClient = new WebSocketClient();
        this.setupWebSocketCallbacks();
    }

    /**
     * Create matchmaking modal UI
     */
    createMatchmakingModal() {
        // Check if modal already exists
        if (document.getElementById('matchmaking-modal')) return;

        const modalHTML = `
            <div class="modal-overlay" id="matchmaking-modal" style="display:none">
                <div class="modal" style="max-width:400px; text-align:center;">
                    <h2 id="matchmaking-title" data-i18n="matchmaking.title">Matchmaking</h2>
                    
                    <div id="matchmaking-status-area" style="margin: 24px 0;">
                        <div id="matchmaking-connecting" style="display:none;">
                            <p data-i18n="matchmaking.connecting">Connecting to server...</p>
                            <div class="loading-spinner" style="margin: 16px auto; width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.1); border-top-color: #48dbfb; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                        </div>
                        
                        <div id="matchmaking-searching" style="display:none;">
                            <p data-i18n="matchmaking.searching">Searching for opponent...</p>
                            <div class="loading-spinner" style="margin: 16px auto; width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.1); border-top-color: #ff6b6b; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                            <p id="matchmaking-wait-time" style="color: var(--modal-subtext, #aaa); margin-top: 12px;">Waiting: 0s</p>
                        </div>
                        
                        <div id="matchmaking-found" style="display:none;">
                            <p data-i18n="matchmaking.found" style="color: #2ecc71; font-size: 1.2rem; font-weight: bold;">Opponent found!</p>
                            <p id="matchmaking-opponent-info" style="color: var(--modal-subtext, #aaa); margin-top: 8px;"></p>
                        </div>
                        
                        <div id="matchmaking-error" style="display:none;">
                            <p data-i18n="matchmaking.error" style="color: #e74c3c;">Connection error</p>
                            <p id="matchmaking-error-message" style="color: var(--modal-subtext, #aaa); margin-top: 8px; font-size: 0.9rem;"></p>
                        </div>
                    </div>
                    
                    <div style="display:flex; gap:12px; justify-content:center;">
                        <button class="btn btn-primary btn-cancel" id="btn-matchmaking-cancel" data-i18n="matchmaking.cancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.matchmakingModal = document.getElementById('matchmaking-modal');

        // Add spinner animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Bind cancel button
        document.getElementById('btn-matchmaking-cancel').addEventListener('click', () => {
            this.cancelMatchmaking();
        });

        // Apply translations if i18n is available
        if (window.i18n && window.i18n.applyTranslations) {
            window.i18n.applyTranslations();
        }
    }

    /**
     * Setup WebSocket callbacks
     */
    setupWebSocketCallbacks() {
        this.wsClient.onMatchmakingStatus = (status, waitTime) => {
            this.updateMatchmakingStatus(status, waitTime);
        };

        this.wsClient.onMatchFound = (message) => {
            this.handleMatchFound(message);
        };

        this.wsClient.onGameState = (message) => {
            this.handleGameState(message);
        };

        this.wsClient.onOpponentAction = (message) => {
            this.handleOpponentAction(message);
        };

        this.wsClient.onTurnChange = (currentTurn, timerRemaining) => {
            this.handleTurnChange(currentTurn, timerRemaining);
        };

        this.wsClient.onMoveResult = (message) => {
            this.handleMoveResult(message);
        };

        this.wsClient.onGameOver = (winner, finalScores, reason) => {
            this.handleGameOver(winner, finalScores, reason);
        };

        this.wsClient.onError = (code, message) => {
            this.handleError(code, message);
        };

        this.wsClient.onDisconnect = (code, reason) => {
            this.handleDisconnect(code, reason);
        };
    }

    /**
     * Start online matchmaking
     * @param {number} gridSize - Grid size (3 or 5), defaults to 5
     */
    startMatchmaking(gridSize = 5) {
        // Store grid size for matchmaking and "Play Again"
        this.pendingGridSize = gridSize;
        this.currentGridSize = gridSize;
        console.log('[OnlineGame] Starting matchmaking with grid size:', gridSize);

        // Show matchmaking modal
        this.showMatchmakingModal();
        this.showMatchmakingStep('connecting');

        // Disconnect first if already connected (for Play Again scenario)
        if (this.wsClient && this.wsClient.isConnectedToServer()) {
            this.wsClient.disconnect();
            // Wait for server to clean up before reconnecting
            setTimeout(() => this.doStartMatchmaking(), 300);
        } else {
            this.doStartMatchmaking();
        }
    }

    /**
     * Internal method to start matchmaking after ensuring disconnection
     */
    async doStartMatchmaking() {
        // Reset online game state
        this.isInOnlineGame = false;

        // Generate or get player ID
        const playerId = this.getOrCreatePlayerId();

        // Get current language from localStorage (same as i18n.js uses)
        const language = localStorage.getItem('game_lang') || 'en';

        // Connect to WebSocket server
        this.wsClient.connect(this.serverUrl);

        // Get player display name from GamePush
        const playerName = await this.getPlayerName();

        // Get grid size (default to 5 for backward compatibility)
        const gridSize = this.pendingGridSize || 5;

        // Wait for connection, then join matchmaking
        const checkConnection = setInterval(() => {
            if (this.wsClient.isConnectedToServer()) {
                clearInterval(checkConnection);
                this.showMatchmakingStep('searching');
                this.matchmakingStartTime = Date.now();
                this.startMatchmakingTimer();
                this.wsClient.joinMatchmaking(playerId, language, playerName, gridSize);
            }
        }, 100);

        // Timeout after 5 seconds if can't connect
        setTimeout(() => {
            if (!this.wsClient.isConnectedToServer()) {
                clearInterval(checkConnection);
                this.showMatchmakingError('Cannot connect to server');
            }
        }, 5000);
    }

    /**
     * Cancel matchmaking
     */
    cancelMatchmaking() {
        this.stopMatchmakingTimer();

        // Stop matchmaking sound when cancelling
        if (window.SoundManager) {
            window.SoundManager.stopMatchmaking();
        }

        if (this.wsClient && this.wsClient.isConnectedToServer()) {
            if (this.isInOnlineGame) {
                this.wsClient.leaveGame();
            } else {
                this.wsClient.leaveMatchmaking();
            }
            this.wsClient.disconnect();
        }

        this.hideMatchmakingModal();
        this.isInOnlineGame = false;

        // Notify GamePush that gameplay has stopped
        if (window.GamepushService && window.GamepushService.isAvailable()) {
            window.GamepushService.gameplayStop();
        } else {
            console.log('[Online] GamePush not available for gameplay notification');
        }

        // Show main menu
        const mainMenu = document.getElementById('main-menu');
        if (mainMenu) mainMenu.style.display = 'flex';

        // Show skin corner images when returning to main menu
        document.querySelectorAll('.skin-corner-image').forEach(el => el.style.display = 'block');
    }

    /**
     * Show matchmaking modal
     */
    showMatchmakingModal() {
        if (this.matchmakingModal) {
            this.matchmakingModal.style.display = 'flex';
            this.matchmakingModal.classList.add('active');
        }
    }

    /**
     * Hide matchmaking modal
     */
    hideMatchmakingModal() {
        if (this.matchmakingModal) {
            this.matchmakingModal.classList.remove('active');
            this.matchmakingModal.style.display = 'none';
        }
    }

    /**
     * Show specific matchmaking step
     */
    showMatchmakingStep(step) {
        const steps = ['connecting', 'searching', 'found', 'error'];
        steps.forEach(s => {
            const el = document.getElementById(`matchmaking-${s}`);
            if (el) el.style.display = (s === step) ? 'block' : 'none';
        });

        // Reset timer display when starting search
        if (step === 'searching') {
            const waitTimeEl = document.getElementById('matchmaking-wait-time');
            if (waitTimeEl) {
                if (window.i18n) {
                    waitTimeEl.textContent = window.i18n.t('matchmaking.waiting', { time: 0 });
                } else {
                    waitTimeEl.textContent = 'Waiting: 0s';
                }
            }
        }

        // Handle matchmaking sounds
        if (window.SoundManager) {
            if (step === 'searching') {
                // Start looping tictac sound when searching for opponent
                window.SoundManager.startMatchmaking();
            } else if (step === 'found') {
                // Stop matchmaking sound and play found sound when opponent is found
                window.SoundManager.stopMatchmaking();
                window.SoundManager.playFound();
            } else {
                // Stop matchmaking sound for other states (connecting, error)
                window.SoundManager.stopMatchmaking();
            }
        }

        // Hide cancel button when opponent is found (user cannot cancel at this point)
        const cancelBtn = document.getElementById('btn-matchmaking-cancel');
        if (cancelBtn) {
            cancelBtn.style.display = (step === 'found') ? 'none' : '';
        }
    }

    /**
     * Show matchmaking error
     */
    showMatchmakingError(message) {
        this.showMatchmakingStep('error');
        const errorMsg = document.getElementById('matchmaking-error-message');
        if (errorMsg) errorMsg.textContent = message;
    }

    /**
     * Start matchmaking timer
     */
    startMatchmakingTimer() {
        this.stopMatchmakingTimer();
        this.timerInterval = setInterval(() => {
            if (this.matchmakingStartTime) {
                const elapsed = Math.floor((Date.now() - this.matchmakingStartTime) / 1000);
                const waitTimeEl = document.getElementById('matchmaking-wait-time');
                if (waitTimeEl && window.i18n) {
                    waitTimeEl.textContent = window.i18n.t('matchmaking.waiting', { time: elapsed });
                } else if (waitTimeEl) {
                    waitTimeEl.textContent = `Waiting: ${elapsed}s`;
                }
            }
        }, 1000);
    }

    /**
     * Stop matchmaking timer
     */
    stopMatchmakingTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    /**
     * Update matchmaking status
     */
    updateMatchmakingStatus(status, waitTime) {
        console.log('[OnlineGame] Matchmaking status:', status, waitTime);
        // Server sends periodic status updates
    }

    /**
     * Handle match found
     */
    handleMatchFound(message) {
        console.log('[OnlineGame] Match found:', message);
        this.stopMatchmakingTimer();
        this.isInOnlineGame = true;
        this.matchData = message; // Store for later use

        // Preserve grid size - use from message if available, otherwise keep current
        if (message.gridSize !== undefined) {
            this.currentGridSize = message.gridSize;
            console.log('[OnlineGame] Grid size from server:', message.gridSize);
        } else {
            console.log('[OnlineGame] Server did not send gridSize, keeping current:', this.currentGridSize);
        }
        // If server didn't send gridSize, currentGridSize already set from startMatchmaking

        // Store maxScore for this match
        if (message.maxScore !== undefined && window.gameState) {
            window.gameState.maxScore = message.maxScore;
        }

        // Show match found
        this.showMatchmakingStep('found');

        const opponentInfo = document.getElementById('matchmaking-opponent-info');
        if (opponentInfo) {
            // Show only opponent name without type prefix
            opponentInfo.textContent = message.opponentName;
        }

        // Hide matchmaking modal after a short delay
        setTimeout(() => {
            this.hideMatchmakingModal();
            this.startOnlineGame(message);
        }, 1500);
    }

    /**
     * Start online game
     */
    async startOnlineGame(matchData) {
        console.log('[OnlineGame] Starting online game:', matchData);

        // Force reload image caches to ensure correct skin images are loaded
        if (typeof window.preloadPieceImages === 'function') {
            // Clear piece image cache
            if (window.pieceImageCache) {
                window.pieceImageCache.x = null;
                window.pieceImageCache.o = null;
                window.pieceImageCache.xUrl = null;
                window.pieceImageCache.oUrl = null;
            }
            // Reload images for both caches (ensures fallback works)
            window.preloadPieceImages();
        }
        if (typeof window.preloadHandImages === 'function') {
            window.preloadHandImages('x');
            window.preloadHandImages('o');
        }

        // Apply grid size from server (defaults to currentGridSize or 5 for backward compatibility)
        const gridSize = matchData.gridSize || this.currentGridSize || 5;
        console.log('[OnlineGame] Starting game with grid size:', gridSize, '(from matchData:', matchData.gridSize, ', current:', this.currentGridSize, ')');
        // Update currentGridSize only if server provided it
        if (matchData.gridSize !== undefined) {
            this.currentGridSize = matchData.gridSize;
        }
        if (typeof window.updateGridDimensions === 'function') {
            window.updateGridDimensions(gridSize);
        }
        if (typeof window.recreateCanvas === 'function') {
            window.recreateCanvas();
        }

        // Hide main menu
        const mainMenu = document.getElementById('main-menu');
        if (mainMenu) mainMenu.style.display = 'none';

        // Hide skin corner images when starting game
        document.querySelectorAll('.skin-corner-image').forEach(el => el.style.display = 'none');

        // Show game UI
        const gc = document.getElementById('game-container');
        const gf = document.querySelector('.game-footer');
        const gh = document.querySelector('.game-header');
        if (gc) { gc.classList.remove('hidden'); gc.classList.add('fade-in'); }
        if (gf) { gf.classList.remove('hidden'); gf.classList.add('fade-in'); }
        if (gh) { gh.classList.remove('hidden'); gh.classList.add('fade-in'); }

        // Notify GamePush that gameplay has started
        if (window.GamepushService && window.GamepushService.isAvailable()) {
            window.GamepushService.gameplayStart();
        } else {
            console.log('[Online] GamePush not available for gameplay notification');
        }

        // Resize canvas after container becomes visible
        if (typeof window.arrangeLayoutForDevice === 'function') window.arrangeLayoutForDevice();
        if (typeof window.resizeGame === 'function') window.resizeGame();

        // Hide "New Game" button in online mode (not applicable)
        const btnRestart = document.getElementById('btn-restart');
        if (btnRestart) btnRestart.style.display = 'none';

        // Set game mode to online
        if (window.currentMode !== undefined) window.currentMode = 'online';

        // Set pending online mode config BEFORE initGame so it can be applied
        window.pendingOnlineConfig = {
            vsOnline: true,
            vsAI: false,
            playerMarker: matchData.yourSymbol.toLowerCase(),
            mySymbol: matchData.yourSymbol.toLowerCase(),
            opponentName: matchData.opponentName,
            currentPlayer: matchData.currentTurn ? matchData.currentTurn.toLowerCase() : null // NEW: First turn info
        };

        // Initialize game UI (initGame will apply pendingOnlineConfig)
        if (typeof window.initGame === 'function') {
            window.initGame();
        }

        // Double-check online flags are set (in case initGame didn't apply them)
        if (window.gameState) {
            window.gameState.playerMarker = matchData.yourSymbol.toLowerCase();
            window.gameState.vsAI = false;
            window.gameState.vsOnline = true;
            window.gameState.opponentName = matchData.opponentName;
            window.gameState.mySymbol = matchData.yourSymbol.toLowerCase();
        }

        // Clear the pending config
        window.pendingOnlineConfig = null;

        // Apply pending game state from server if we received it before UI was ready
        if (this.pendingGameState) {
            console.log('[OnlineGame] Applying pending game state');
            this.applyGameState(this.pendingGameState);
            this.pendingGameState = null;
        }

        // Update player names
        await this.updatePlayerNames(matchData);

        // NEW: Start timer for current player
        if (window.gameState && window.gameState.currentPlayer) {
            const timerRemaining = matchData.timerRemaining !== undefined
                ? matchData.timerRemaining
                : 10000; // Default 10 seconds

            if (typeof window.startMoveTimer === 'function') {
                console.log('[OnlineGame] Starting initial timer for:', window.gameState.currentPlayer, 'remaining:', timerRemaining);
                window.startMoveTimer(window.gameState.currentPlayer, timerRemaining);
            }
        }

        // Arrange layout
        if (typeof window.arrangeLayoutForDevice === 'function') {
            window.arrangeLayoutForDevice();
        }
    }

    /**
     * Update player names for online game
     */
    async updatePlayerNames(matchData) {
        const mySymbol = matchData.yourSymbol.toLowerCase();
        const opponentSymbol = mySymbol === 'x' ? 'o' : 'x';

        // Get player name (from GamePush or stored)
        const myName = await this.getPlayerName();
        const opponentName = matchData.opponentName || 'Opponent';

        // Store names in gameState for later use
        if (window.gameState) {
            window.gameState.myName = myName;
            window.gameState.opponentName = opponentName;
        }

        console.log('[OnlineGame] Setting names:', myName, 'vs', opponentName);

        // Update panel headers
        const myPanel = document.querySelector(`#panel-${mySymbol} h3`);
        const oppPanel = document.querySelector(`#panel-${opponentSymbol} h3`);

        if (myPanel) {
            myPanel.textContent = myName;
            console.log('[OnlineGame] My panel updated:', mySymbol, myName);
        }
        if (oppPanel) {
            oppPanel.textContent = opponentName;
            console.log('[OnlineGame] Opponent panel updated:', opponentSymbol, opponentName);
        }
    }

    /**
     * Get or create player ID
     */
    getOrCreatePlayerId() {
        let playerId = localStorage.getItem('tictactoe_player_id');
        if (!playerId) {
            playerId = 'player_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            localStorage.setItem('tictactoe_player_id', playerId);
        }
        return playerId;
    }

    /**
     * Get player name (from GamePush or default)
     */
    async getPlayerName() {
        try {
            // Wait for GamePush to be ready
            if (window.GamepushService && window.GamepushService.ready) {
                await window.GamepushService.ready();
            }

            const gp = window._gamepush || window.gamepush;
            console.log('[OnlineGame] Getting player name, gp available:', !!gp);

            if (gp && gp.player) {
                console.log('[OnlineGame] gp.player:', {
                    name: gp.player.name,
                    id: gp.player.id,
                    stateName: gp.player.state?.name,
                    isStub: gp.player.isStub
                });

                // Try multiple sources for the name
                const name = gp.player.name ||
                            gp.player.state?.name ||
                            (gp.player.id ? `Player #${gp.player.id}` : null);

                if (name) {
                    console.log('[OnlineGame] Player name found:', name);
                    return name;
                }
            }

            console.warn('[OnlineGame] No player name available, using fallback');
        } catch (e) {
            console.error('[OnlineGame] Error getting player name:', e);
        }

        return 'Player';
    }

    /**
     * Handle game state update from server
     */
    handleGameState(message) {
        console.log('[OnlineGame] Game state:', message);

        // If UI is not ready yet (game container hidden), store for later
        const gc = document.getElementById('game-container');
        if (!window.gameState || !window.gameState.vsOnline || (gc && gc.classList.contains('hidden'))) {
            console.log('[OnlineGame] UI not ready, storing pending game state');
            this.pendingGameState = message;
            return;
        }

        this.applyGameState(message);
    }

    /**
     * Apply game state from server to local state
     */
    applyGameState(message) {
        if (!window.gameState) return;

        console.log('[OnlineGame] Applying game state:', message);

        // Update board (with merge effect detection)
        if (message.board) {
            console.log('[OnlineGame] Board from server:', JSON.stringify(message.board));
            const oldBoard = window.gameState.board;
            const newBoard = message.board;
            const mySymbol = window.gameState.mySymbol;

            // Detect board merges by comparing old and new levels
            // Only show effect for opponent's merges (own merges show effect optimistically)
            if (oldBoard && newBoard) {
                for (let row = 0; row < newBoard.length; row++) {
                    for (let col = 0; col < newBoard[row].length; col++) {
                        const oldCell = oldBoard[row] && oldBoard[row][col];
                        const newCell = newBoard[row][col];
                        // Check if same player's piece increased in level (board merge)
                        if (oldCell && newCell &&
                            oldCell.player === newCell.player &&
                            newCell.player !== mySymbol &&  // Only for opponent
                            newCell.level > oldCell.level) {
                            // Spawn visual effect for opponent's board merge
                            this.spawnBoardMergeEffect(row, col, newCell.player);
                        }
                    }
                }
            }

            window.gameState.board = message.board;
            console.log('[OnlineGame] gameState.board after update:', JSON.stringify(window.gameState.board));
        }

        // Update hands (with merge effect detection)
        if (message.hands) {
            const oldHands = window.gameState.hands;
            const newHands = message.hands;

            // Detect hand merges by comparing old and new levels
            // Only show effect for opponent's merges (own merges show effect optimistically)
            const mySymbol = window.gameState.mySymbol;
            for (const player of ['x', 'o']) {
                // Skip own merges - effect already shown optimistically
                if (player === mySymbol) continue;

                if (oldHands && oldHands[player] && newHands[player]) {
                    for (let i = 0; i < newHands[player].length; i++) {
                        const oldLevel = oldHands[player][i] || 0;
                        const newLevel = newHands[player][i] || 0;
                        // If level increased, a merge happened at this slot
                        if (newLevel > oldLevel && newLevel > 1) {
                            // Spawn visual effect for opponent's hand merge
                            this.spawnHandMergeEffect(player, i);
                        }
                    }
                }
            }

            window.gameState.hands = message.hands;
        }

        // Update scores (check both scores and finalScores for GAME_OVER message)
        if (message.scores || message.finalScores) {
            window.gameState.scores = message.scores || message.finalScores;
        }

        // Update maxScore if provided by server
        if (message.maxScore !== undefined) {
            window.gameState.maxScore = message.maxScore;
        }

        // Update current turn
        if (message.currentTurn) {
            window.gameState.currentPlayer = message.currentTurn.toLowerCase();
        }

        // Update game over state
        if (message.gameOver !== undefined) {
            window.gameState.gameOver = message.gameOver;
        }

        // Animate placed piece (if we tracked it)
        if (this.lastPlacedCell && window.animateCells) {
            window.animateCells.add(`${this.lastPlacedCell.row},${this.lastPlacedCell.col}`);
            this.lastPlacedCell = null; // Clear after using
        }

        // Process matches - trigger visual effects for each match
        if (message.matches && message.matches.length > 0) {
            for (const match of message.matches) {
                if (match.cells && match.cells.length > 0) {
                    // Calculate center of match (average of all cells, same as local game)
                    const centerRow = Math.round(match.cells.reduce((sum, cell) => sum + cell[0], 0) / match.cells.length);
                    const centerCol = Math.round(match.cells.reduce((sum, cell) => sum + cell[1], 0) / match.cells.length);
                    const player = match.player;
                    const score = match.score || 1;
                    const isCombo = match.combo && match.combo > 1;

                    // Show combo popup
                    if (typeof window.showComboPopup === 'function') {
                        window.showComboPopup(centerRow, centerCol, score, isCombo, player);
                    }

                    // Spawn merge effect on canvas
                    if (typeof window.spawnMergeEffect === 'function' && window.PADDING !== undefined && window.CELL_SIZE !== undefined) {
                        const effectX = window.PADDING + centerCol * window.CELL_SIZE + window.CELL_SIZE / 2;
                        const effectY = window.PADDING + centerRow * window.CELL_SIZE + window.CELL_SIZE / 2;
                        const color = window.COLORS ? (player === 'x' ? window.COLORS.x : window.COLORS.o) : 0xffffff;
                        window.spawnMergeEffect(effectX, effectY, color);
                    }

                    // Spawn particle burst
                    if (typeof window.spawnParticleBurst === 'function' && typeof window.getPlayerColor === 'function') {
                        const effectX = window.PADDING + centerCol * window.CELL_SIZE + window.CELL_SIZE / 2;
                        const effectY = window.PADDING + centerRow * window.CELL_SIZE + window.CELL_SIZE / 2;
                        const colorHex = window.getPlayerColor(player);
                        window.spawnParticleBurst(effectX, effectY, colorHex);
                    }

                    // Add center cell to animation set for scale animation
                    if (window.animateCells) {
                        window.animateCells.add(`${centerRow},${centerCol}`);
                    }
                }
            }
        }

        // Redraw everything
        if (typeof window.updateAllUI === 'function') {
            console.log('[OnlineGame] Calling updateAllUI');
            window.updateAllUI();
        }
        if (typeof window.redrawBoard === 'function') {
            console.log('[OnlineGame] Calling redrawBoard');
            window.redrawBoard();
        }

        // Update timer
        if (message.timerRemaining !== undefined && typeof window.startMoveTimer === 'function') {
            window.startMoveTimer(window.gameState.currentPlayer);
        }
    }

    /**
     * Handle opponent action
     */
    handleOpponentAction(message) {
        console.log('[OnlineGame] Opponent action:', message);

        // Show visual feedback for opponent's actions
        if (message.action === 'SELECT_HAND' && message.handIndex !== undefined) {
            // Highlight opponent's selected hand piece (optional visual)
        } else if (message.action === 'HOVER_CELL' && message.row !== undefined && message.col !== undefined) {
            // Show opponent's cursor position (optional visual)
        } else if (message.action === 'PLACE_PIECE' && message.row !== undefined && message.col !== undefined) {
            // Track opponent's placed cell for animation
            this.lastPlacedCell = { row: message.row, col: message.col };
        }
    }

    /**
     * Handle turn change (timeout on server or after move)
     */
    handleTurnChange(currentTurn, timerRemaining) {
        console.log('[OnlineGame] Turn change:', currentTurn, 'remaining:', timerRemaining);

        if (!window.gameState || !window.gameState.vsOnline) return;

        window.gameState.currentPlayer = currentTurn.toLowerCase();

        // Clear selection
        window.gameState.selectedHandIndex = null;
        window.gameState.selectedHandPlayer = null;

        // Update hand UI to reflect whose turn it is (only interaction state, not DOM)
        if (typeof window.updateHandInteractionState === 'function') {
            const isXTurn = currentTurn.toLowerCase() === 'x';
            const isMyXHand = window.gameState.mySymbol === 'x';
            const isMyOHand = window.gameState.mySymbol === 'o';
            window.updateHandInteractionState('x', isMyXHand && isXTurn && !window.gameState.gameOver);
            window.updateHandInteractionState('o', isMyOHand && !isXTurn && !window.gameState.gameOver);
        } else if (typeof window.updateHandUI === 'function') {
            // Fallback to old function for backward compatibility
            window.updateHandUI('x');
            window.updateHandUI('o');
        }

        // Update turn indicator
        const turnIndicator = document.getElementById('turn-indicator');
        if (turnIndicator) {
            try {
                if (window.i18n) {
                    const text = window.i18n.t('status.turn', { player: currentTurn.toUpperCase() });
                    turnIndicator.textContent = text;
                } else {
                    turnIndicator.textContent = `Turn ${currentTurn.toUpperCase()}`;
                }
            } catch(e) {
                turnIndicator.textContent = `Turn ${currentTurn.toUpperCase()}`;
            }
            turnIndicator.className = 'turn-indicator player-' + currentTurn.toLowerCase();

            // Update turn indicator color
            try {
                const rootStyle = getComputedStyle(document.documentElement);
                const px = (rootStyle.getPropertyValue('--player-x-color') || '').trim();
                const po = (rootStyle.getPropertyValue('--player-o-color') || '').trim();
                const turnX = (rootStyle.getPropertyValue('--turn-x-color') || px).trim();
                const turnO = (rootStyle.getPropertyValue('--turn-o-color') || po).trim();
                turnIndicator.style.color = currentTurn.toLowerCase() === 'x' ? turnX : turnO;
            } catch (e) { /* ignore */ }
        }

        // Update panel opacity to show whose turn it is
        const panelX = document.getElementById('panel-x');
        const panelO = document.getElementById('panel-o');
        if (panelX) panelX.style.opacity = currentTurn.toLowerCase() === 'x' ? '1' : '0.5';
        if (panelO) panelO.style.opacity = currentTurn.toLowerCase() === 'o' ? '1' : '0.5';

        // Restart timer with timerRemaining from server
        if (typeof window.startMoveTimer === 'function') {
            window.startMoveTimer(currentTurn.toLowerCase(), timerRemaining);
        }
    }

    /**
     * Handle move result
     */
    handleMoveResult(message) {
        console.log('[OnlineGame] Move result:', message);

        if (!message.success) {
            // Move was rejected - show error
            if (message.error && window.i18n) {
                alert(message.error);
            }
            return;
        }

        // Update game state with server result (directly apply, UI should be ready)
        this.applyGameState(message);

        // Show match animations if any
        if (message.matches && message.matches.length > 0) {
            // Matches are handled by the game state update
        }

        // Check for game over
        if (message.gameOver && message.winner) {
            if (typeof window.showWinModal === 'function') {
                setTimeout(() => window.showWinModal(message.winner.toLowerCase()), 1000);
            }
        }
    }

    /**
     * Handle game over
     */
    handleGameOver(message) {
        console.log('[OnlineGame] Game over:', message);

        this.isInOnlineGame = false;

        // Apply final game state if provided (board, hands, matches, scores)
        if (message.board || message.hands || message.matches || message.finalScores) {
            this.applyGameState(message);
        }

        if (window.gameState) {
            window.gameState.gameOver = true;
            window.gameState.gameOverReason = message.reason || null;
            if (message.finalScores) {
                window.gameState.scores = message.finalScores;
                // Update UI to reflect final scores
                if (typeof window.updateAllUI === 'function') {
                    window.updateAllUI();
                }
            }
        }

        // Show win modal with reason
        if (typeof window.showWinModal === 'function') {
            setTimeout(() => window.showWinModal(message.winner.toLowerCase(), message.reason), 1000);
        }
    }

    /**
     * Handle WebSocket error
     */
    handleError(code, message) {
        console.error('[OnlineGame] Error:', code, message);

        // Show error in matchmaking modal if visible
        if (this.matchmakingModal && this.matchmakingModal.classList.contains('active')) {
            this.showMatchmakingError(message);
        }
        // Silent during game - no alerts, reconnection happens automatically
    }

    /**
     * Handle disconnect (called only after all reconnection attempts exhausted)
     */
    handleDisconnect(code, reason) {
        console.log('[OnlineGame] Disconnected after all reconnect attempts:', code, reason);

        if (this.isInOnlineGame) {
            // Silent cleanup - no alerts
            // Return to menu
            this.cancelMatchmaking();
        }
    }

    /**
     * Send player move to server
     */
    sendPlacePiece(handIndex, row, col) {
        if (this.wsClient && this.wsClient.isConnectedToServer()) {
            this.wsClient.placePiece(handIndex, row, col);
        }
    }

    /**
     * Send hand merge to server
     */
    sendMergeHand(fromIndex, toIndex) {
        if (this.wsClient && this.wsClient.isConnectedToServer()) {
            this.wsClient.mergeHand(fromIndex, toIndex);
        }
    }

    /**
     * Spawn visual effect for hand merge (when opponent merges)
     */
    spawnHandMergeEffect(player, slotIndex) {
        try {
            const handEl = document.getElementById('hand-' + player);
            if (handEl && handEl.children[slotIndex]) {
                const target = handEl.children[slotIndex];
                const rect = target.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const colorHex = window.getPlayerColor ? window.getPlayerColor(player) : (player === 'x' ? '#ff6b6b' : '#48dbfb');
                if (typeof window.spawnParticleBurstDom === 'function') {
                    window.spawnParticleBurstDom(cx, cy, colorHex);
                }
                // Play merge sound
                if (window.SoundManager) {
                    window.SoundManager.playMerge();
                }
            }
        } catch (e) {
            console.warn('[OnlineGame] Failed to spawn hand merge effect:', e);
        }
    }

    /**
     * Spawn visual effect for board merge (when opponent places piece on their own piece)
     */
    spawnBoardMergeEffect(row, col, player) {
        try {
            if (window.PADDING !== undefined && window.CELL_SIZE !== undefined) {
                const effectX = window.PADDING + col * window.CELL_SIZE + window.CELL_SIZE / 2;
                const effectY = window.PADDING + row * window.CELL_SIZE + window.CELL_SIZE / 2;
                const colorHex = window.getPlayerColor ? window.getPlayerColor(player) : (player === 'x' ? '#ff6b6b' : '#48dbfb');
                if (typeof window.spawnParticleBurst === 'function') {
                    window.spawnParticleBurst(effectX, effectY, colorHex);
                }
                // Play merge sound
                if (window.SoundManager) {
                    window.SoundManager.playMerge();
                }
            }
        } catch (e) {
            console.warn('[OnlineGame] Failed to spawn board merge effect:', e);
        }
    }

    /**
     * Send hand selection to server
     */
    sendSelectHand(handIndex) {
        if (this.wsClient && this.wsClient.isConnectedToServer()) {
            this.wsClient.selectHand(handIndex);
        }
    }

    /**
     * Check if currently in online game
     */
    isOnline() {
        return this.isInOnlineGame;
    }
}

// Create global instance
window.onlineGame = new OnlineGame();
