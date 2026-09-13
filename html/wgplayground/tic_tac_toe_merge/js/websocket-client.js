/**
 * WebSocket Client for Tic-Tac-Toe Merge Online Multiplayer
 * Handles connection to the game server and real-time multiplayer functionality
 */

class WebSocketClient {
    constructor() {
        this.ws = null;
        this.serverUrl = 'ws://localhost:8080'; // Default server URL
        this.playerId = null;
        this.roomId = null;
        this.mySymbol = null;
        this.opponentType = null;
        this.opponentName = null;
        this.isConnected = false;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 30;
        this.reconnectDelay = 1000;
        this.isReconnecting = false;
        
        // Callbacks
        this.onMatchmakingStatus = null;
        this.onMatchFound = null;
        this.onGameState = null;
        this.onOpponentAction = null;
        this.onTurnChange = null;
        this.onMoveResult = null;
        this.onGameOver = null;
        this.onError = null;
        this.onDisconnect = null;
    }

    /**
     * Connect to WebSocket server
     * @param {string} serverUrl - WebSocket server URL (optional)
     */
    connect(serverUrl = null) {
        if (serverUrl) {
            this.serverUrl = serverUrl;
        }

        console.log('[WebSocket] Connecting to', this.serverUrl);

        try {
            this.ws = new WebSocket(this.serverUrl);
            
            this.ws.onopen = () => this.handleOpen();
            this.ws.onmessage = (event) => this.handleMessage(event);
            this.ws.onerror = (error) => this.handleError(error);
            this.ws.onclose = (event) => this.handleClose(event);
        } catch (error) {
            console.error('[WebSocket] Connection error:', error);
            if (this.onError) {
                this.onError('CONNECTION_FAILED', 'Failed to connect to server');
            }
        }
    }

    /**
     * Disconnect from server
     */
    disconnect() {
        // Stop reconnection attempts
        this.reconnectAttempts = this.maxReconnectAttempts; // Prevent auto-reconnect
        this.isReconnecting = false;

        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.isConnected = false;
        this.roomId = null;
        this.mySymbol = null;

        // Reset reconnect counter for next connection
        this.reconnectAttempts = 0;
    }

    /**
     * Handle WebSocket open event
     */
    handleOpen() {
        console.log('[WebSocket] Connected to server');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.isReconnecting = false;
    }

    /**
     * Handle WebSocket close event
     */
    handleClose(event) {
        console.log('[WebSocket] Disconnected:', event.code, event.reason);
        this.isConnected = false;

        // Auto-reconnect if not a clean close (silent, no alerts)
        if (event.code !== 1000 && this.reconnectAttempts < this.maxReconnectAttempts) {
            this.isReconnecting = true;
            this.reconnectAttempts++;
            console.log(`[WebSocket] Reconnecting... (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
            setTimeout(() => this.connect(), this.reconnectDelay);
            return; // Don't notify disconnect during reconnection attempts
        }

        // Only notify after all reconnection attempts exhausted or clean close
        this.isReconnecting = false;
        if (this.onDisconnect) {
            this.onDisconnect(event.code, event.reason);
        }
    }

    /**
     * Handle WebSocket error event
     */
    handleError(error) {
        console.error('[WebSocket] Error:', error);
        // Don't show error during reconnection attempts
        if (this.isReconnecting) {
            return;
        }
        if (this.onError) {
            this.onError('WEBSOCKET_ERROR', 'WebSocket error occurred');
        }
    }

    /**
     * Handle incoming WebSocket message
     */
    handleMessage(event) {
        try {
            const message = JSON.parse(event.data);
            console.log('[WebSocket] Received:', message);

            switch (message.type) {
                case 'MATCHMAKING_STATUS':
                    this.handleMatchmakingStatus(message);
                    break;
                case 'MATCH_FOUND':
                    this.handleMatchFound(message);
                    break;
                case 'GAME_STATE':
                    this.handleGameState(message);
                    break;
                case 'OPPONENT_ACTION':
                    this.handleOpponentAction(message);
                    break;
                case 'TURN_CHANGE':
                    this.handleTurnChange(message);
                    break;
                case 'MOVE_RESULT':
                    this.handleMoveResult(message);
                    break;
                case 'GAME_OVER':
                    this.handleGameOver(message);
                    break;
                case 'ERROR':
                    this.handleServerError(message);
                    break;
                default:
                    console.warn('[WebSocket] Unknown message type:', message.type);
            }
        } catch (error) {
            console.error('[WebSocket] Failed to parse message:', error);
        }
    }

    /**
     * Handle MATCHMAKING_STATUS message
     */
    handleMatchmakingStatus(message) {
        if (this.onMatchmakingStatus) {
            this.onMatchmakingStatus(message.status, message.waitTime);
        }
    }

    /**
     * Handle MATCH_FOUND message
     */
    handleMatchFound(message) {
        this.roomId = message.roomId;
        this.mySymbol = message.yourSymbol;
        this.opponentType = message.opponentType;
        this.opponentName = message.opponentName;

        console.log('[WebSocketClient] Assigned symbol:', this.mySymbol, 'room:', this.roomId);
        if (this.onMatchFound) {
            this.onMatchFound(message);
        }
    }

    /**
     * Handle GAME_STATE message
     */
    handleGameState(message) {
        if (this.onGameState) {
            this.onGameState(message);
        }
    }

    /**
     * Handle OPPONENT_ACTION message
     */
    handleOpponentAction(message) {
        if (this.onOpponentAction) {
            this.onOpponentAction(message);
        }
    }

    /**
     * Handle TURN_CHANGE message
     */
    handleTurnChange(message) {
        if (this.onTurnChange) {
            this.onTurnChange(message.currentTurn, message.timerRemaining);
        }
    }

    /**
     * Handle MOVE_RESULT message
     */
    handleMoveResult(message) {
        if (this.onMoveResult) {
            this.onMoveResult(message);
        }
    }

    /**
     * Handle GAME_OVER message
     */
    handleGameOver(message) {
        if (this.onGameOver) {
            this.onGameOver(message);
        }
    }

    /**
     * Handle ERROR message
     */
    handleServerError(message) {
        console.error('[WebSocket] Server error:', message.code, message.message);
        if (this.onError) {
            this.onError(message.code, message.message);
        }
    }

    /**
     * Send message to server
     */
    send(message) {
        if (!this.isConnected || !this.ws) {
            console.error('[WebSocket] Cannot send - not connected');
            return false;
        }

        try {
            const json = JSON.stringify(message);
            console.log('[WebSocket] Sending:', message, 'jsonLen=' + json.length, 'roomId=' + this.roomId, 'mySymbol=' + this.mySymbol);
            this.ws.send(json);
            return true;
        } catch (error) {
            console.error('[WebSocket] Send error:', error);
            return false;
        }
    }

    /**
     * Join matchmaking queue
     * @param {string} playerId - Unique player identifier
     * @param {string} language - Player's language (en, ru, de)
     * @param {string} playerName - Player's display name (from GamePush or default)
     * @param {number} gridSize - Grid size (3 or 5), defaults to 5
     */
    joinMatchmaking(playerId, language = 'en', playerName = 'Player', gridSize = 5) {
        this.playerId = playerId;
        return this.send({
            type: 'MATCHMAKING_JOIN',
            playerId: playerId,
            language: language,
            playerName: playerName,
            gridSize: gridSize
        });
    }

    /**
     * Leave matchmaking queue
     */
    leaveMatchmaking() {
        return this.send({
            type: 'MATCHMAKING_LEAVE'
        });
    }

    /**
     * Select a hand piece
     * @param {number} handIndex - Index of hand piece (0-2)
     */
    selectHand(handIndex) {
        return this.send({
            type: 'SELECT_HAND',
            handIndex: handIndex
        });
    }

    /**
     * Hover over a cell (for opponent to see cursor)
     * @param {number} row - Row index
     * @param {number} col - Column index
     */
    hoverCell(row, col) {
        return this.send({
            type: 'HOVER_CELL',
            row: row,
            col: col
        });
    }

    /**
     * Place a piece on the board
     * @param {number} handIndex - Index of hand piece
     * @param {number} row - Row index
     * @param {number} col - Column index
     */
    placePiece(handIndex, row, col) {
        return this.send({
            type: 'PLACE_PIECE',
            handIndex: handIndex,
            row: row,
            col: col
        });
    }

    /**
     * Merge two hand pieces
     * @param {number} fromIndex - Source hand index
     * @param {number} toIndex - Target hand index
     */
    mergeHand(fromIndex, toIndex) {
        return this.send({
            type: 'MERGE_HAND',
            fromIndex: fromIndex,
            toIndex: toIndex
        });
    }

    /**
     * Leave current game
     */
    leaveGame() {
        return this.send({
            type: 'LEAVE_GAME'
        });
    }

    /**
     * Check if connected to server
     */
    isConnectedToServer() {
        return this.isConnected && this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * Check if in a game
     */
    isInGame() {
        return this.roomId !== null;
    }

    /**
     * Get player's symbol (X or O)
     */
    getMySymbol() {
        return this.mySymbol;
    }

    /**
     * Get opponent type (PLAYER or AI)
     */
    getOpponentType() {
        return this.opponentType;
    }

    /**
     * Get opponent name
     */
    getOpponentName() {
        return this.opponentName;
    }
}

// Export for use in other scripts
window.WebSocketClient = WebSocketClient;
