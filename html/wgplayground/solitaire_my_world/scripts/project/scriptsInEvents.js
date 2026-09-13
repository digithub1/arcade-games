const gamePrefix = "Solitaire2_";
runOnStartup(runtimeInstance => {
    runtime = runtimeInstance;
    if (runtime && runtime.assets) {
        console.log("Runtime hazır.");
    } else {
        console.warn("Runtime henüz hazır değil.");
        const interval = setInterval(() => {
            if (runtime && runtime.assets) {
                clearInterval(interval);
                console.log("Runtime hazır.");
            }
        }, 1000);
    }
});



let runtime;
let currentLevel = 1;



//GAMEMECHANICS//

// Card generation patterns for different difficulty levels
const DIFFICULTY_PATTERNS = {
    easy: {
        maxValue: 7,  // Only use cards up to 7
        suitCount: 2  // Only use 2 suits
    },
    medium: {
        maxValue: 10,
        suitCount: 3
    },
    hard: {
        maxValue: 13, // Use all cards
        suitCount: 4  // Use all suits
    }
};

// Only include angle in save data if it's significantly different from 0
async function save() {
    console.log("Starting save process for solitaire level");
    
    const cards = runtime.objects.SCards.getAllInstances();
    if (cards.length === 0) {
        console.log("No cards found in layout");
        return;
    }

    const levelNumber = prompt("Enter level number:", "1");
    if (!levelNumber || isNaN(levelNumber)) {
        console.error("Invalid level number");
        return;
    }
    const levelNum = parseInt(levelNumber, 10);
    
    const difficulty = prompt("Enter difficulty (easy/medium/hard):", "medium");
    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
        console.error("Invalid difficulty");
        return;
    }

    const DECK_SIZES = {
        easy: 24,    
        medium: 20,  
        hard: 15     
    };

    const cardData = cards.map(currentCard => {
        const overlappingCards = cards.filter(otherCard => {
            if (currentCard === otherCard) return false;
            return runtime.collisions.testOverlap(currentCard, otherCard);
        });

        const blockingCards = overlappingCards.filter(
            otherCard => otherCard.zIndex > currentCard.zIndex
        );

        const isFree = blockingCards.length === 0;
        
        // Only include angle if it's actually rotated
        const angle = Math.abs(currentCard.angleDegrees) > 0.1 ? currentCard.angleDegrees : 0;
        
        const cardInfo = {
            x: currentCard.x,
            y: currentCard.y,
            width: currentCard.width,
            height: currentCard.height,
            animation: currentCard.animationName,
            isFree: isFree && !currentCard.instVars.hand && !currentCard.instVars.baseCard
        };

        // Only add angle property if it's not 0
        if (angle !== 0) {
            cardInfo.angle = angle;
        }

        return cardInfo;
    });
    
    const levelData = {
        cards: cardData,
        difficulty: difficulty,
        deckSize: DECK_SIZES[difficulty]
    };

    let existingData = { levels: [] };
    try {
        const response = await fetch("solitairelevels.json");
        if (response.ok) {
            existingData = await response.json();
        }
    } catch (error) {
        console.log("No existing solitairelevels.json found. Creating new one.");
    }

    const existingLevelIndex = existingData.levels.findIndex(l => l.level === levelNum);
    if (existingLevelIndex !== -1) {
        existingData.levels[existingLevelIndex] = { level: levelNum, ...levelData };
    } else {
        existingData.levels.push({ level: levelNum, ...levelData });
    }

    const jsonStr = JSON.stringify(existingData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "solitairelevels.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log(`Level ${levelNum} saved successfully`);
}


function generateDeck(maxValue, suitCount) {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'].slice(0, suitCount);
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].slice(0, maxValue);
    
    const deck = [];
    for (const suit of suits) {
        for (const value of values) {
            deck.push(`${value}${suit}`);
        }
    }
    return deck.sort(() => Math.random() - 0.5);
}


function getRandomCardFace() {
    const randomValue = CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)];
    const randomSuit = CARD_SUITS[Math.floor(Math.random() * CARD_SUITS.length)];
    return `${randomValue}${randomSuit}`;
}

async function checkAndRevealFreeCards() {
    const cards = runtime.objects.SCards.getAllInstances();
    if (cards.length === 0) {
        console.log("No cards found");
        return;
    }

    // Process each non-hand, non-base card
    cards.forEach(async currentCard => {
        if (currentCard.instVars.hand || currentCard.instVars.baseCard) return;

        // Find overlapping cards
        const overlappingCards = cards.filter(otherCard => {
            if (currentCard === otherCard) return false;
            return runtime.collisions.testOverlap(currentCard, otherCard);
        });

        // Check for cards blocking this one
        const blockingCards = overlappingCards.filter(
            otherCard => otherCard.zIndex > currentCard.zIndex
        );

        const shouldBeFree = blockingCards.length === 0;

        // Only process state changes
        if (shouldBeFree === currentCard.instVars.free) return;

        const originalWidth = currentCard.width;
        currentCard.instVars.free = shouldBeFree;

        // Shrink
        currentCard.behaviors.Tween.startTween("width", 0, 0.2, "linear");
        await new Promise(resolve => setTimeout(resolve, 200));

        // Update card face
        if (shouldBeFree) {
            const randomValue = CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)];
            const randomSuit = CARD_SUITS[Math.floor(Math.random() * CARD_SUITS.length)];
            currentCard.setAnimation(`${randomValue}${randomSuit}`);
            currentCard.animationFrame = 0;

            // Store money chance result to use after animation
            const shouldAddMoney = Math.random() < 0.3;
            if (shouldAddMoney) {
                currentCard.instVars.money = true;
            }
        } else {
            currentCard.setAnimation("back");
            currentCard.animationFrame = 1;
        }

        // Expand
        currentCard.behaviors.Tween.startTween("width", originalWidth, 0.2, "linear");
        
        // Wait for expand animation to complete before adding money sprite
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Add money sprite after card is fully expanded
        if (shouldBeFree && currentCard.instVars.money) {
            const moneySprite = runtime.objects.Sprite9.createInstance(
                "GameLayer",
                currentCard.x,
                currentCard.y
            );
            // Only set angle if needed
            moneySprite.angle = currentCard.angle;
        }
    });
}


// Helper function to determine if a card should be free
function isFree(card, allCards) {
    // In solitaire, a card is usually free if no other cards are on top of it
    const cardRect = card.getBoundingBox();
    
    // Check for any overlapping cards with higher z-index
    return !allCards.some(otherCard => {
        if (otherCard === card) return false;
        
        const otherRect = otherCard.getBoundingBox();
        const overlaps = !(
            cardRect.right < otherRect.left ||
            cardRect.left > otherRect.right ||
            cardRect.bottom < otherRect.top ||
            cardRect.top > otherRect.bottom
        );
        
        return overlaps && otherCard.zIndex > card.zIndex;
    });
}


// Game state management
const gameState = {
    deck: [],
    currentCard: null,
    moveHistory: [],
    isAnimating: false
};

// Constants
const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const CARD_SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const UNDO_COST = 50;
const TWEEN_DURATION = 300;

function createDeck() {
    const deck = [];
    for (const suit of CARD_SUITS) {
        for (const value of CARD_VALUES) {
            deck.push(`${value}${suit}`);
        }
    }
    // Shuffle deck
    return deck.sort(() => Math.random() - 0.5);
}

// Add to gameState
gameState.fullDeck = []; // Will store the full shuffled deck
gameState.currentDeckIndex = 0; // Track which card we're on

// Helper function to get card value from animation name
function getCardValueFromAnimation(animationName) {
    if (animationName === 'back') return null;
    // Parse values like "7Hearts" or "10Clubs"
    const rank = animationName.match(/^\d+|^[AJQK]/)[0];
    const suit = animationName.match(/[A-Z][a-z]+$/)[0];
    return { rank, suit };
}

// Add to gameState at the top of your code
if (!gameState.tutorialTimer) {
    gameState.tutorialTimer = null;
}

function startTutorialTimer() {
    // Clear any existing timer first
    if (gameState.tutorialTimer) {
        clearTimeout(gameState.tutorialTimer);
    }
    
    // Start new timer
    gameState.tutorialTimer = setTimeout(() => {
        checkPlayableTutorial();
    }, 4000);
}
// Add to gameState at the start of your code
if (!gameState.combo) {
    gameState.combo = 0;
}

function isPlayableCard() {
    const clickedCard = runtime.objects.SCards.getFirstPickedInstance();
    const baseCard = runtime.objects.SCards.getAllInstances()
        .find(c => c.instVars.baseCard);
    
    if (!baseCard || !clickedCard || clickedCard.animationName === 'back') {
        console.log('Card not playable');
        return false;
    }

    const baseAnimation = baseCard.animationName;
    const clickedAnimation = clickedCard.animationName;

    // If base card is wild, all free cards are playable
    if (baseAnimation === 'Wild') {
        if (!gameState.previousBaseCards) gameState.previousBaseCards = [];
        gameState.previousBaseCards.push(baseCard.animationName);
        gameState.moveHistory.push({
            type: clickedCard.instVars.hand ? 'draw' : 'field',
            card: clickedCard.uid,
            previousAnimation: clickedCard.animationName
        });
        
        setTimeout(() => {
            baseCard.destroy();
            setTimeout(() => {
                checkGameCompletion();
            }, 100);
        }, 500);

        // Handle money if clicked card has money
        if (clickedCard.instVars.money) {
            // Generate random gold amount between 10 and 20
            const goldAmount = Math.floor(Math.random() * 11) + 10;
            updateVariable("add", "gold", goldAmount);
            
            // Find and send the money sprite's UID
            const moneySprite = runtime.objects.Sprite9.getAllInstances()
                .find(sprite => 
                    Math.abs(sprite.x - clickedCard.x) < 5 && 
                    Math.abs(sprite.y - clickedCard.y) < 5
                );
            if (moneySprite) {
                runtime.callFunction("addM", moneySprite.uid.toString());
            }
        }

        // Clear all other money cards
        const allCards = runtime.objects.SCards.getAllInstances();
        allCards.forEach(card => {
            if (card !== clickedCard && card.instVars.money) {
                card.instVars.money = false;
                // Find and destroy associated money sprite
                const moneySprite = runtime.objects.Sprite9.getAllInstances()
                    .find(sprite => 
                        Math.abs(sprite.x - card.x) < 5 && 
                        Math.abs(sprite.y - card.y) < 5
                    );
                if (moneySprite) {
                    moneySprite.destroy();
                }
            }
        });

        clickedCard.instVars.baseCard = true;
        runtime.callFunction("PlayCard", clickedCard.uid.toString());
        unlockRandomCard();
        startTutorialTimer();

        // Handle combo
        gameState.combo += 1;
        console.log(`Combo increased to: ${gameState.combo}`);
        updateComboSprites(gameState.combo);
        
        if (gameState.combo >= 4) {
            console.log("Combo reached 4! Adding card to deck...");
            const deckText = runtime.objects.decktxt.getFirstInstance();
            if (deckText) {
                const currentCount = parseInt(deckText.text.replace('+', ''));
                if (!isNaN(currentCount)) {
                    deckText.text = `+${currentCount + 1}`;
                }
            }
            runtime.callFunction("combosucess");
            gameState.combo = 0;
            console.log("Combo reset to 0");
            updateComboSprites(0);
        }
        
        const backMove = runtime.objects.backMove.getFirstInstance();
        if (backMove) {
            const lastMove = gameState.moveHistory[gameState.moveHistory.length - 1];
            backMove.animationFrame = lastMove.type === 'draw' ? 0 : 1;
        }
        return true;
    }

    const baseMatch = baseAnimation.match(/^(\d+|[AJQK])/);
    const clickedMatch = clickedAnimation.match(/^(\d+|[AJQK])/);
    if (!baseMatch || !clickedMatch) {
        console.log('Could not parse card values');
        return false;
    }

    const baseValue = baseMatch[1];
    const clickedValue = clickedMatch[1];
    const valueMap = { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 };
    const baseNum = valueMap[baseValue] || parseInt(baseValue);
    const clickedNum = valueMap[clickedValue] || parseInt(clickedValue);
    
    const isPlayable = Math.abs(baseNum - clickedNum) === 1 || 
                      (baseNum === 1 && clickedNum === 13) || 
                      (baseNum === 13 && clickedNum === 1);
    
    if (isPlayable) {
        if (!gameState.previousBaseCards) gameState.previousBaseCards = [];
        gameState.previousBaseCards.push(baseCard.animationName);
        gameState.moveHistory.push({
            type: clickedCard.instVars.hand ? 'draw' : 'field',
            card: clickedCard.uid,
            previousAnimation: clickedCard.animationName
        });
        
        setTimeout(() => {
            baseCard.destroy();
            setTimeout(() => {
                checkGameCompletion();
            }, 100);
        }, 500);

        // Handle money if clicked card has money
        if (clickedCard.instVars.money) {
            // Generate random gold amount between 10 and 20
            const goldAmount = Math.floor(Math.random() * 11) + 10;
            updateVariable("add", "gold", goldAmount);
            
            // Find and send the money sprite's UID
            const moneySprite = runtime.objects.Sprite9.getAllInstances()
                .find(sprite => 
                    Math.abs(sprite.x - clickedCard.x) < 5 && 
                    Math.abs(sprite.y - clickedCard.y) < 5
                );
            if (moneySprite) {
                runtime.callFunction("addM", moneySprite.uid.toString());
            }
        }

        // Clear all other money cards
        const allCards = runtime.objects.SCards.getAllInstances();
        allCards.forEach(card => {
            if (card !== clickedCard && card.instVars.money) {
                card.instVars.money = false;
                // Find and destroy associated money sprite
                const moneySprite = runtime.objects.Sprite9.getAllInstances()
                    .find(sprite => 
                        Math.abs(sprite.x - card.x) < 5 && 
                        Math.abs(sprite.y - card.y) < 5
                    );
                if (moneySprite) {
                    moneySprite.destroy();
                }
            }
        });

        clickedCard.instVars.baseCard = true;
        runtime.callFunction("PlayCard", clickedCard.uid.toString());
        unlockRandomCard();
        startTutorialTimer();

        // Handle combo
        gameState.combo += 1;
        console.log(`Combo increased to: ${gameState.combo}`);
        updateComboSprites(gameState.combo);
        
        if (gameState.combo >= 4) {
            console.log("Combo reached 4! Adding card to deck...");
            const deckText = runtime.objects.decktxt.getFirstInstance();
            if (deckText) {
                const currentCount = parseInt(deckText.text.replace('+', ''));
                if (!isNaN(currentCount)) {
                    deckText.text = `+${currentCount + 1}`;
                }
            }
            runtime.callFunction("combosucess");
            gameState.combo = 0;
            console.log("Combo reset to 0");
            updateComboSprites(0);
        }
        
        const backMove = runtime.objects.backMove.getFirstInstance();
        if (backMove) {
            const lastMove = gameState.moveHistory[gameState.moveHistory.length - 1];
            backMove.animationFrame = lastMove.type === 'draw' ? 0 : 1;
        }
    }
    return isPlayable;
}

function unlockRandomCard() {
    // Get all locked cards
    const lockedCards = runtime.objects.SCards.getAllInstances()
        .filter(card => card.instVars.lock);

    if (lockedCards.length === 0) return;

    // Randomly select one locked card
    const randomCard = lockedCards[Math.floor(Math.random() * lockedCards.length)];
    
    // Find the lock sprite at this card's position
    const lockSprite = runtime.objects.lockcard.getAllInstances()
        .find(lock => 
            Math.abs(lock.x - randomCard.x) < 5 && 
            Math.abs(lock.y - randomCard.y) < 5
        );

    if (lockSprite) {
        // Animate the lock sprite before destroying
        lockSprite.behaviors.Tween.startTween("width", 0, 0.3, "linear");
        lockSprite.behaviors.Tween.startTween("height", 0, 0.3, "linear");

        // Destroy lock sprite after animation
        setTimeout(() => {
            lockSprite.destroy();
        }, 300);
    }

    // Unlock the card
    randomCard.instVars.lock = false;
}


// Function to animate card movement with tweens
async function animateCard(card, targetX, targetY, options = {}) {
    console.log(`Animating card to (${targetX}, ${targetY})`, options);
    
    return new Promise((resolve) => {
        gameState.isAnimating = true;
        
        // Get size reference from target position (baseCard or cardHolder)
        const baseCard = runtime.objects.baseCard.getFirstInstance();
        const cardHolder = runtime.objects.cardHolder.getFirstInstance();
        const targetWidth = options.toBase ? baseCard.width : cardHolder.width;
        const targetHeight = options.toBase ? baseCard.height : cardHolder.height;

        // In Construct 3, we need to wait for tweens using setTimeout
        // First move the card
        card.behaviors.Tween.startTween("x", targetX, TWEEN_DURATION/1000, "linear");
        card.behaviors.Tween.startTween("y", targetY, TWEEN_DURATION/1000, "linear");

        // After movement completes
        setTimeout(() => {
            if (options.flip) {
                // Start flip animation
                card.behaviors.Tween.startTween("width", 0, (TWEEN_DURATION/2)/1000, "linear");
                
                // When card is flat
                setTimeout(() => {
                    // Change animation
                    if (options.newAnimation) {
                        card.setAnimation(options.newAnimation);
                    }
                    
                    // Restore width
                    card.behaviors.Tween.startTween("width", targetWidth, (TWEEN_DURATION/2)/1000, "linear");
                    
                    // When card is fully restored
                    setTimeout(() => {
                        gameState.isAnimating = false;
                        resolve();
                    }, (TWEEN_DURATION/2));
                    
                }, (TWEEN_DURATION/2));
            } else {
                gameState.isAnimating = false;
                resolve();
            }
        }, TWEEN_DURATION);
    });
}


function manageBaseCards() {
    // Get all cards at base position
    const baseCard = runtime.objects.baseCard.getFirstInstance();
    if (!baseCard) return;

    const cardsAtBase = runtime.objects.SCards.getAllInstances().filter(card => 
        card.animationName !== 'back' && 
        Math.abs(card.x - baseCard.x) < 5 && 
        Math.abs(card.y - baseCard.y) < 5
    ).sort((a, b) => b.zIndex - a.zIndex); // Sort by z-index, top to bottom

    // Keep only the top two cards
    if (cardsAtBase.length > 2) {
        for (let i = 2; i < cardsAtBase.length; i++) {
            cardsAtBase[i].destroy();
        }
    }

    // Also limit move history to 1 step
    if (gameState.moveHistory.length > 1) {
        gameState.moveHistory = gameState.moveHistory.slice(-1);
    }

    // Update backMove button state
    const backMove = runtime.objects.backMove.getFirstInstance();
    if (backMove) {
        backMove.animationFrame = gameState.moveHistory.length > 0 ? 0 : 1;
    }
}

// Add to gameState initialization
if (!gameState.drawCount) gameState.drawCount = 0;

function getSmartCardAnimation() {
    gameState.drawCount = (gameState.drawCount + 1) % 3;
    const mustBePlayable = gameState.drawCount === 0;
    
    const freeCards = runtime.objects.SCards.getAllInstances()
        .filter(card => card.instVars.free && !card.instVars.hand && !card.instVars.baseCard);

    console.log("Free cards on field:", freeCards.map(card => card.animationName));
    console.log("Draw count:", gameState.drawCount, "Must be playable:", mustBePlayable);

    if ((mustBePlayable || Math.random() < 0.33) && freeCards.length > 0) {
        const targetCard = freeCards[Math.floor(Math.random() * freeCards.length)];
        const match = targetCard.animationName.match(/^(\d+|[AJQK])/);
        if (!match) return getSmartCardAnimation();

        const value = match[1];
        const targetNum = {'A':1,'J':11,'Q':12,'K':13}[value] || parseInt(value);

        const possibleValues = [];
        if (targetNum > 1) possibleValues.push(targetNum - 1);
        if (targetNum < 13) possibleValues.push(targetNum + 1);

        const valueMap = {1:'A',11:'J',12:'Q',13:'K'};
        const chosenNum = possibleValues[Math.floor(Math.random() * possibleValues.length)];
        const cardValue = valueMap[chosenNum] || chosenNum.toString(); // Ensure correct face card names

        const result = `${cardValue}${CARD_SUITS[Math.floor(Math.random() * CARD_SUITS.length)]}`;
        console.log("Drawing playable card:", result);
        return result;
    }

    const result = `${CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)]}${CARD_SUITS[Math.floor(Math.random() * CARD_SUITS.length)]}`;
    console.log("Drawing random card:", result);
    return result;
}

async function drawCard() {
    if (gameState.isAnimating) return;
    
    const cardHolder = runtime.objects.cardHolder.getFirstInstance();
    const baseCard = runtime.objects.baseCard.getFirstInstance();
    const deckText = runtime.objects.decktxt.getFirstInstance();
    
    if (!cardHolder || !baseCard) return;
    
    const deckCards = runtime.objects.SCards.getAllInstances()
        .filter(card => card.animationName === 'back' && card.instVars.hand)
        .sort((a, b) => a.x - b.x);
    
    if (deckCards.length === 0) return;
    
    const topCard = deckCards[deckCards.length - 1];
    topCard.moveToTop();
    
    const cardId = topCard.uid;
    const newAnimation = gameState.drawnCards?.[cardId] || getSmartCardAnimation();
    
    if (!gameState.drawnCards) gameState.drawnCards = {};
    gameState.drawnCards[cardId] = newAnimation;
    
    const currentBaseCard = runtime.objects.SCards.getAllInstances()
        .find(card => card.instVars.baseCard);
    if (currentBaseCard) {
        if (!gameState.previousBaseCards) gameState.previousBaseCards = [];
        gameState.previousBaseCards.push(currentBaseCard.animationName);
    }
    
    gameState.moveHistory.push({
        type: 'draw',
        card: cardId,
        previousAnimation: 'back',
        previousPosition: { x: topCard.x, y: topCard.y }
    });
    
    const backMove = runtime.objects.backMove.getFirstInstance();
    if (backMove) backMove.animationFrame = 0;
    
    await animateCard(topCard, baseCard.x, baseCard.y, {
        flip: true,
        newAnimation: newAnimation,
        toBase: true
    });
    runtime.objects.SCards.getAllInstances().forEach(card => {
        if (card.instVars.baseCard && card.uid !== topCard.uid) card.destroy();
    });
    
    topCard.instVars.baseCard = true;
    
    const currentCount = parseInt(deckText.text.replace('+', ''));
    if (!isNaN(currentCount) && currentCount > 0) {
        const newCount = currentCount - 1;
        deckText.text = `+${newCount}`;
        
        if (newCount > 0) {
            const handCards = runtime.objects.SCards.getAllInstances()
                .filter(card => card.animationName === 'back' && card.instVars.hand)
                .sort((a, b) => a.x - b.x);
            
            let newCardX = handCards.length > 0 ? handCards[0].x : cardHolder.x;
            let newCardY = handCards.length > 0 ? handCards[0].y : cardHolder.y;
            
            const newCard = runtime.objects.SCards.createInstance("GameLayer", newCardX, newCardY);
            newCard.setAnimation('back');
            newCard.width = 0;
            newCard.height = cardHolder.height;
            newCard.instVars.hand = true;
            newCard.instVars.moveWithHand = true;
            newCard.angle = 0;  // Set angle to 0 explicitly
            
            const updatedHandCards = runtime.objects.SCards.getAllInstances()
                .filter(card => card.animationName === 'back' && card.instVars.hand && card.uid !== newCard.uid)
                .sort((a, b) => a.x - b.x);
            
            updatedHandCards.forEach((card, index) => {
                card.behaviors.Tween.startTween("x", cardHolder.x + ((index + 1) * 25), TWEEN_DURATION / 1000, "linear");
                card.moveToTop();
            });
            
            newCard.behaviors.Tween.startTween("width", cardHolder.width, TWEEN_DURATION / 1000, "linear");
            newCard.behaviors.Tween.startTween("x", cardHolder.x, TWEEN_DURATION / 1000, "linear");
        }
    }
    
    manageBaseCards();
    gameState.currentCard = newAnimation;
    
    // Reset combo when drawing a card
    if (gameState.combo > 0) {
        console.log("Drawing card - Combo reset from:", gameState.combo, "to 0");
        gameState.combo = 0;
        updateComboSprites(0); // Reset all combo sprites to frame 0
    }
    
    // Start tutorial timer after drawing a card
    startTutorialTimer();
    // Check game completion after a short delay to allow animations to finish
    setTimeout(() => {
        checkGameCompletion();
    }, TWEEN_DURATION + 100);
}
async function undoMove() {
    if (gameState.isAnimating || !gameState.moveHistory.length) return;

    const currentGold = datainfo('gold');
    if (currentGold < UNDO_COST) return;

    localStorage.setItem(`${gamePrefix}gold`, (currentGold - UNDO_COST).toString());

    const cardHolder = runtime.objects.cardHolder.getFirstInstance();
    const baseCardObj = runtime.objects.baseCard.getFirstInstance();
    if (!cardHolder || !baseCardObj) return;

    const currentBase = runtime.objects.SCards.getAllInstances()
        .find(c => c.instVars.baseCard);
    if (!currentBase) return;

    // Only create previous base if there was one
    if (gameState.previousBaseCards?.length) {
        const previousBase = runtime.objects.SCards.createInstance(
            "GameLayer", 
            baseCardObj.x, 
            baseCardObj.y
        );
        previousBase.width = baseCardObj.width;
        previousBase.height = baseCardObj.height;
        previousBase.setAnimation(gameState.previousBaseCards.pop());
        previousBase.instVars.baseCard = true;
        currentBase.moveToTop();
    }

    let handCards = runtime.objects.SCards.getAllInstances()
        .filter(c => c.instVars.hand)
        .sort((a, b) => a.x - b.x);

    if (handCards.length >= 6) {
        const extraCard = handCards[0];
        extraCard.behaviors.Tween.startTween("width", 0, TWEEN_DURATION / 1000, "linear");
        await new Promise(resolve => setTimeout(resolve, TWEEN_DURATION));
        extraCard.destroy();
    }

    // Shift remaining hand cards
    let remainingHands = runtime.objects.SCards.getAllInstances()
        .filter(c => c.instVars.hand && c.uid !== currentBase.uid)
        .sort((a, b) => a.x - b.x);

    const shiftPromises = remainingHands.map((card, index) => {
        card.behaviors.Tween.startTween("x", cardHolder.x + (index * 25), TWEEN_DURATION / 1000, "linear");
        return new Promise(resolve => setTimeout(resolve, TWEEN_DURATION));
    });
    await Promise.all(shiftPromises);

    // Return current base to hand
    const targetX = cardHolder.x + (remainingHands.length * 25);
    await animateCard(currentBase, targetX, cardHolder.y, {
        flip: true,
        newAnimation: "back",
        toBase: false
    });

    currentBase.instVars.baseCard = false;
    currentBase.instVars.hand = true;
    currentBase.instVars.moveWithHand = true;
    currentBase.animationFrame = 1;

    const deckText = runtime.objects.decktxt.getFirstInstance();
    if (deckText) {
        const currCount = parseInt(deckText.text.replace('+', ''));
        if (!isNaN(currCount)) {
            deckText.text = `+${currCount + 1}`;
        }
    }

    gameState.moveHistory.pop();
    const backMove = runtime.objects.backMove.getFirstInstance();
    if (backMove) {
        backMove.animationFrame = gameState.moveHistory.length > 0 ? 0 : 1;
    }
}


function normalizeAngle(degrees) {
    degrees = degrees % 360;
    if (degrees < 0) degrees += 360;
    return degrees;
}
async function initGame() {
    const currentLevel = parseInt(localStorage.getItem(`${gamePrefix}currentLevel`), 10) || 1;
    console.log(`Initializing solitaire game with level ${currentLevel}`);
    
    gameState.deck = [];
    gameState.currentCard = null;
    gameState.moveHistory = [];
    gameState.isAnimating = false;
    gameState.previousBaseCards = [];
    gameState.drawCount = 0;
    
    try {
        const response = await fetch("solitairelevels.json");
        if (!response.ok) throw new Error("Failed to load level data");
        
        const levelData = await response.json();
        const level = levelData.levels.find(l => l.level === currentLevel);
        if (!level) {
            console.error(`Level ${currentLevel} not found in JSON.`);
            return;
        }
        
        runtime.objects.SCards.getAllInstances().forEach(card => card.destroy());
        const freeCardValues = [];
        const flatOpenCards = [];
        
        level.cards.forEach(cardData => {
            console.log("Creating card with data:", cardData);

            const card = runtime.objects.SCards.createInstance("GameLayer", cardData.x, cardData.y);
            
            // Set default properties
            card.instVars.hand = false;
            card.instVars.moveWithHand = false;
            card.instVars.lock = false;
            card.angle = 0;
            
            if (cardData.width !== undefined && cardData.height !== undefined) {
                card.setSize(cardData.width, cardData.height);
            }
            
            if (cardData.isFree) {
                const randomFace = getRandomCardFace();
                card.setAnimation(randomFace);
                card.animationFrame = 0;
                card.instVars.free = true;
                freeCardValues.push(randomFace);
                
                // Check if it's a flat card (angle check and isFree)
                if (!cardData.angle || cardData.angle === 0) {
                    flatOpenCards.push(card);
                    console.log("Added flat open card:", {
                        isFree: card.instVars.free,
                        angle: card.angle,
                        animation: card.animationName
                    });
                }
            } else {
                card.setAnimation("back");
                card.animationFrame = 1;
                card.instVars.free = false;
            }
            
            if (cardData.angle !== undefined) {
                console.log(`Setting angle for card ${card.uid} to ${cardData.angle}`);
                card.angle = cardData.angle * (Math.PI / 180);
            }
        });

        // Add debug logs before the lock condition
        console.log("Current level:", currentLevel);
        console.log("Flat open cards count:", flatOpenCards.length);
        console.log("All flat open cards:", flatOpenCards.map(card => ({
            isFree: card.instVars.free,
            angle: card.angle,
            animation: card.animationName
        })));

        // Handle locks for level 2 and above (removed the upper limit)
        if (currentLevel >= 2 && flatOpenCards.length >= 3) {
            console.log("Lock condition met!");
            console.log("Total flat open cards:", flatOpenCards.length);
            
            // Calculate number of cards to lock based on total flat open cards
            let numToLock;
            switch(flatOpenCards.length) {
                case 3: numToLock = 1; break;
                case 4: numToLock = 2; break;
                case 5: numToLock = 2; break;
                case 6: numToLock = 3; break;
                case 7: numToLock = 4; break;
                case 8: numToLock = 4; break;  // Explicitly handle 8 cards
                default: numToLock = Math.min(Math.ceil(flatOpenCards.length / 2), 4); break;
            }
            
            console.log("Will lock", numToLock, "cards");
            
            // Randomly select cards to lock
            const cardsToLock = flatOpenCards
                .sort(() => Math.random() - 0.5)
                .slice(0, numToLock);
            
            console.log("Selected cards to lock:", cardsToLock.map(card => ({
                isFree: card.instVars.free,
                angle: card.angle,
                animation: card.animationName
            })));

            // Apply locks
            cardsToLock.forEach(card => {
                card.instVars.lock = true;
                // Create lock sprite
                const lockSprite = runtime.objects.lockcard.createInstance(
                    "GameLayer",
                    card.x,
                    card.y
                );
                // Match the card's dimensions and angle
                lockSprite.width = card.width;
                lockSprite.height = card.height;
                lockSprite.angle = card.angle;
            });
        } else {
            console.log("Lock condition NOT met because:");
            if (currentLevel < 2) console.log("- Level is less than 2");
            if (flatOpenCards.length < 3) console.log("- Not enough flat open cards");
        }
        
        // Create base card
        const baseCardObj = runtime.objects.baseCard.getFirstInstance();
        if (baseCardObj && freeCardValues.length > 0) {
            const baseCard = runtime.objects.SCards.createInstance("GameLayer", baseCardObj.x, baseCardObj.y);
            baseCard.setSize(baseCardObj.width, baseCardObj.height);
            baseCard.instVars.baseCard = true;
            baseCard.angle = 0;
    
            let validBaseCard = false;
            while (!validBaseCard) {
                const randomFace = getRandomCardFace();
                const baseValue = randomFace.match(/^(\d+|[AJQK])/)[1];
                const baseNum = { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 }[baseValue] || parseInt(baseValue);
    
                validBaseCard = freeCardValues.some(freeCard => {
                    const freeValue = freeCard.match(/^(\d+|[AJQK])/)[1];
                    const freeNum = { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 }[freeValue] || parseInt(freeValue);
                    return Math.abs(baseNum - freeNum) === 1;
                });
    
                if (validBaseCard) {
                    baseCard.setAnimation(randomFace);
                    baseCard.animationFrame = 0;
                }
            }
        }
        
        // Create hand cards
        const cardHolder = runtime.objects.cardHolder.getFirstInstance();
        if (!cardHolder) return;
    
        const cardSpacing = 25;
        for (let i = 0; i < 6; i++) {
            const card = runtime.objects.SCards.createInstance("GameLayer", cardHolder.x + (i * cardSpacing), cardHolder.y);
            card.setSize(cardHolder.width, cardHolder.height);
            card.instVars.hand = true;
            card.instVars.moveWithHand = true;
            card.setAnimation('back');
            card.animationFrame = 1;
            card.angle = 0;
            gameState.deck.push(card);
        }
        
        const deckText = runtime.objects.decktxt.getFirstInstance();
        if (deckText) {
            deckText.text = `+${level.deckSize}`;
        }
        
        const backMove = runtime.objects.backMove.getFirstInstance();
        if (backMove) {
            backMove.animationFrame = 1;
        }

        // Start the tutorial timer after initializing the game
        startTutorialTimer();
        
    } catch (error) {
        console.error("Error loading level data:", error);
    }
}


function dartBooster() {
    const BOOSTER_COST = 750;
    const currentGold = datainfo('gold');
    
    console.log("Starting dartBooster. Current gold:", currentGold);

    // Check if player has enough gold
    if (currentGold < BOOSTER_COST) {
        console.log("Not enough gold for dart booster!");
        return false;
    }

    // Get all face-down cards that aren't in hand
    const closedCards = runtime.objects.SCards.getAllInstances().filter(card => 
        card.animationName === 'back' && 
        !card.instVars.hand &&
        !card.instVars.baseCard
    );

    if (closedCards.length === 0) {
        console.log("No closed cards to destroy!");
        return false;
    }

    // Deduct gold
    const newGold = currentGold - BOOSTER_COST;
    localStorage.setItem(`${gamePrefix}gold`, newGold.toString());

    // Randomly select one card
    const selectedCard = closedCards[Math.floor(Math.random() * closedCards.length)];

    // Find and destroy associated lock if it exists
    const lockSprite = runtime.objects.lockcard.getAllInstances()
        .find(lock => 
            Math.abs(lock.x - selectedCard.x) < 5 && 
            Math.abs(lock.y - selectedCard.y) < 5
        );
    if (lockSprite) {
        lockSprite.destroy();
    }

    // Play booster sound effect
    runtime.callFunction("boosterPlay", "dart");

    // Animate the card
    selectedCard.behaviors.Tween.startTween("width", 0, 0.3, "linear");
    selectedCard.behaviors.Tween.startTween("height", 0, 0.3, "linear");

    // Destroy the card after animation completes
    setTimeout(() => {
        selectedCard.destroy();
        checkAndRevealFreeCards();
    }, 300);

    return true;
}

function windmillBooster() {
    const BOOSTER_COST = 1500;
    const currentGold = datainfo('gold');
    
    console.log("Starting windmillBooster. Current gold:", currentGold);

    // Check if player has enough gold
    if (currentGold < BOOSTER_COST) {
        console.log("Not enough gold for windmill booster!");
        return false;
    }

    // Get all free cards that aren't in hand
    const freeCards = runtime.objects.SCards.getAllInstances().filter(card => 
        card.instVars.free && 
        !card.instVars.hand &&
        !card.instVars.baseCard
    );

    if (freeCards.length === 0) {
        console.log("No free cards to destroy!");
        return false;
    }

    // Deduct gold
    const newGold = currentGold - BOOSTER_COST;
    localStorage.setItem(`${gamePrefix}gold`, newGold.toString());

    // Play booster sound effect
    runtime.callFunction("boosterPlay", "windmill");

    // Animate and destroy each card with a slight delay between them
    freeCards.forEach((card, index) => {
        setTimeout(() => {
            // Find and destroy associated lock if it exists
            const lockSprite = runtime.objects.lockcard.getAllInstances()
                .find(lock => 
                    Math.abs(lock.x - card.x) < 5 && 
                    Math.abs(lock.y - card.y) < 5
                );
            if (lockSprite) {
                lockSprite.destroy();
            }

            // Animate the card
            card.behaviors.Tween.startTween("width", 0, 0.3, "linear");
            card.behaviors.Tween.startTween("height", 0, 0.3, "linear");

            // Destroy the card after animation completes
            setTimeout(() => {
                card.destroy();
                if (index === freeCards.length - 1) {
                    checkAndRevealFreeCards();
                }
            }, 300);
        }, index * 100);
    });

    return true;
}

function wildBooster() {
    const BOOSTER_COST = 500;
    const currentGold = datainfo('gold');
    
    console.log("Starting wildBooster. Current gold:", currentGold);

    // Check if player has enough gold
    if (currentGold < BOOSTER_COST) {
        console.log("Not enough gold for wild booster!");
        return false;
    }

    // Get current base card
    const baseCard = runtime.objects.SCards.getAllInstances()
        .find(c => c.instVars.baseCard);
    
    if (!baseCard) {
        console.log("No base card found!");
        return false;
    }

    // Store original width
    const originalWidth = baseCard.width;

    // Deduct gold
    const newGold = currentGold - BOOSTER_COST;
    localStorage.setItem(`${gamePrefix}gold`, newGold.toString());

    // Play booster sound effect
    runtime.callFunction("boosterPlay", "wild");

    // First tween: shrink to zero
    baseCard.behaviors.Tween.startTween("width", 0, 0.3, "linear");

    // After shrinking, change animation and grow back
    setTimeout(() => {
        baseCard.setAnimation("Wild");
        baseCard.behaviors.Tween.startTween("width", originalWidth, 0.3, "linear");
    }, 300);

    return true;
}

function deckBooster() {
    // [No changes needed in deckBooster - keeping original code]
    const BOOSTER_COST = 400;
    const CARDS_TO_ADD = 3;
    const MAX_VISIBLE_CARDS = 6;
    const currentGold = datainfo('gold');
    
    console.log("Starting deckBooster. Current gold:", currentGold);

    if (currentGold < BOOSTER_COST) {
        console.log("Not enough gold for deck booster!");
        return false;
    }

    const cardHolder = runtime.objects.cardHolder.getFirstInstance();
    const deckText = runtime.objects.decktxt.getFirstInstance();
    
    if (!cardHolder || !deckText) {
        console.log("Required objects not found!");
        return false;
    }

    const handCards = runtime.objects.SCards.getAllInstances()
        .filter(card => card.animationName === 'back' && card.instVars.hand)
        .sort((a, b) => a.x - b.x);

    const currentDeckCount = parseInt(deckText.text.replace('+', '')) || 0;
    const visibleCount = handCards.length;

    const newGold = currentGold - BOOSTER_COST;
    localStorage.setItem(`${gamePrefix}gold`, newGold.toString());

    runtime.callFunction("boosterPlay", "deck");

    const spaceForVisible = MAX_VISIBLE_CARDS - visibleCount;
    const cardsToMakeVisible = Math.min(spaceForVisible, CARDS_TO_ADD);
    const cardsToAddToDeck = CARDS_TO_ADD - cardsToMakeVisible;

    for (let i = 0; i < cardsToMakeVisible; i++) {
        const newCard = runtime.objects.SCards.createInstance("GameLayer", cardHolder.x, cardHolder.y);
        newCard.setAnimation('back');
        newCard.width = 0;
        newCard.height = cardHolder.height;
        newCard.instVars.hand = true;
        newCard.instVars.moveWithHand = true;
        newCard.angle = 0;

        const targetX = cardHolder.x + ((visibleCount + i) * 25);
        newCard.behaviors.Tween.startTween("width", cardHolder.width, 0.3, "linear");
        newCard.behaviors.Tween.startTween("x", targetX, 0.3, "linear");
        newCard.moveToTop();
    }

    if (cardsToAddToDeck > 0) {
        deckText.text = `+${currentDeckCount + cardsToAddToDeck}`;
    }

    return true;
}

function checkPlayableTutorial() {
    // Get base card first
    const baseCard = runtime.objects.SCards.getAllInstances()
        .find(c => c.instVars.baseCard);
        
    if (!baseCard) return;

    // Get all unlocked cards that are free but not in hand and not base
    const playableCards = runtime.objects.SCards.getAllInstances().filter(card => 
        card.instVars.free && 
        !card.instVars.hand && 
        !card.instVars.baseCard &&
        !card.instVars.lock
    );

    if (playableCards.length === 0) return;

    const baseAnimation = baseCard.animationName;
    const valueMap = { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 };

    // If base card is wild, all free unlocked cards are playable
    if (baseAnimation === 'Wild') {
        playableCards.forEach(card => {
            runtime.callFunction("playTutCard", card.uid.toString());
        });
        startTutorialTimer(); // Restart timer for next tutorial
        return;
    }

    // Get base card value
    const baseMatch = baseAnimation.match(/^(\d+|[AJQK])/);
    if (!baseMatch) return;
    
    const baseValue = baseMatch[1];
    const baseNum = valueMap[baseValue] || parseInt(baseValue);

    let foundPlayable = false;

    // Check each card
    playableCards.forEach(card => {
        const cardMatch = card.animationName.match(/^(\d+|[AJQK])/);
        if (!cardMatch) return;

        const cardValue = cardMatch[1];
        const cardNum = valueMap[cardValue] || parseInt(cardValue);

        // Check if card is playable (consecutive or A-K connection)
        const isPlayable = Math.abs(baseNum - cardNum) === 1 || 
                          (baseNum === 1 && cardNum === 13) || 
                          (baseNum === 13 && cardNum === 1);

        if (isPlayable) {
            runtime.callFunction("playTutCard", card.uid.toString());
            foundPlayable = true;
        }
    });

    // If we found and showed any playable cards, restart the timer
    if (foundPlayable) {
        startTutorialTimer();
    }
}


const CITY_DISTRIBUTIONS = {
    'Paris': { start: 1, end: 9 },
    'New York': { start: 10, end: 17 },
    'Tokyo': { start: 18, end: 26 },
    'London': { start: 27, end: 35 },
    'Rome': { start: 36, end: 44 },
    'Rio': { start: 45, end: 53 },
    'Burj Khalifa': { start: 54, end: 62 },
    'Berlin': { start: 63, end: 71 },
    'Beijing': { start: 72, end: 80 },
    'Istanbul': { start: 81, end: 89 },
    'Cairo': { start: 90, end: 100 }
};
function updateCityText() {
    if (runtime.layout.name === "Lobby") {
        const currentLevel = parseInt(localStorage.getItem(`${gamePrefix}currentLevel`), 10) || 1;
        
        // Get city text and sprite
        const cityText = runtime.objects.spriteText.getAllInstances()
            .find(text => text.instVars.w === "city");
        const citySprite = runtime.objects.Sprite3.getFirstInstance();
        const lobbyCreate = runtime.objects.LobbyCreate.getFirstInstance();
        const nextLevelsButton = runtime.objects.nextlevels.getFirstInstance();
        
        if (!cityText || !citySprite || !lobbyCreate) {
            console.log("Required objects not found");
            return;
        }

        // Find current city
        const currentCity = Object.entries(CITY_DISTRIBUTIONS)
            .find(([_, range]) => 
                currentLevel >= range.start && currentLevel <= range.end
            );

        if (currentCity) {
            const cityName = currentCity[0];
            const cityStartLevel = currentCity[1].start;
            cityText.text = cityName;
            citySprite.setAnimation(cityName);
            lobbyCreate.setAnimation(cityName);

            // Check if current level is beyond first 6 levels of the city
            if (currentLevel > cityStartLevel + 5) {
                // Hide nextlevels button if it's on frame 1
                if (nextLevelsButton && nextLevelsButton.animationFrame === 1) {
                    nextLevelsButton.isVisible = false;
                }

                const cityEndLevel = currentCity[1].end;
                const levelSprites = runtime.objects.Sprite13.getAllInstances()
                    .sort((a, b) => a.uid - b.uid);

                const nextStartLevel = cityStartLevel + 6;
                let lastVisibleSpriteIndex = null;
                let targetSpriteUID = null;

                levelSprites.forEach((sprite, index) => {
                    const levelNumber = nextStartLevel + index;
                    sprite.isVisible = true;  // Make all sprites visible initially
                    
                    if (levelNumber > cityEndLevel) {
                        sprite.isVisible = false;
                        const levelText = runtime.objects.spriteText.getAllInstances()
                            .find(text => text.instVars.w === `level${index + 1}`);
                        if (levelText) {
                            levelText.isVisible = false;
                        }
                        if (lastVisibleSpriteIndex === null) {
                            lastVisibleSpriteIndex = index - 1;
                        }
                    } else {
                        lastVisibleSpriteIndex = index;
                        
                        if (currentLevel > levelNumber) {
                            sprite.animationFrame = 1; // Passed
                        } else if (currentLevel === levelNumber) {
                            sprite.animationFrame = 2; // Current
                            targetSpriteUID = sprite.uid;
                        } else {
                            sprite.animationFrame = 0; // Not reached
                        }

                        const levelText = runtime.objects.spriteText.getAllInstances()
                            .find(text => text.instVars.w === `level${index + 1}`);
                        if (levelText) {
                            levelText.text = levelNumber.toString();
                        }
                    }
                });

                // Handle last visible sprite and its text
                if (lastVisibleSpriteIndex !== null) {
                    // Get the actual sprite instance that will be last visible
                    const lastVisibleSprite = levelSprites[lastVisibleSpriteIndex];
                    
                    const lastLevelText = runtime.objects.spriteText.getAllInstances()
                        .find(text => text.instVars.w === `level${lastVisibleSpriteIndex + 1}`);
                    if (lastLevelText) {
                        lastLevelText.isVisible = false;
                    }

                    for (let i = 0; i < lastVisibleSpriteIndex; i++) {
                        const levelText = runtime.objects.spriteText.getAllInstances()
                            .find(text => text.instVars.w === `level${i + 1}`);
                        if (levelText) {
                            levelText.isVisible = true;
                        }
                    }

                    // First remove any existing plane
                    runtime.objects.plane.getAllInstances().forEach(p => p.destroy());
                    
                    // Create new plane at the exact same position as the last visible sprite
                    if (lastVisibleSprite) {
                        runtime.objects.plane.createInstance("cui", lastVisibleSprite.x, lastVisibleSprite.y);
                    }
                }

                // Sprite13 UID'sini Construct 3 fonksiyonuna gönder
                if (targetSpriteUID !== null) {
                    runtime.callFunction("sprite13", targetSpriteUID);
                }
            } else {
                // Show nextlevels button if it's on frame 1
                if (nextLevelsButton && nextLevelsButton.animationFrame === 1) {
                    nextLevelsButton.isVisible = true;
                }

                // Original logic for first 6 levels
                const levelSprites = runtime.objects.Sprite13.getAllInstances()
                    .sort((a, b) => a.uid - b.uid);

                let targetSpriteUID = null;

                levelSprites.forEach((sprite, index) => {
                    const levelNumber = cityStartLevel + index;
                    
                    if (currentLevel > levelNumber) {
                        sprite.animationFrame = 1;
                    } else if (currentLevel === levelNumber) {
                        sprite.animationFrame = 2;
                        targetSpriteUID = sprite.uid;
                    } else {
                        sprite.animationFrame = 0;
                    }

                    const levelText = runtime.objects.spriteText.getAllInstances()
                        .find(text => text.instVars.w === `level${index + 1}`);
                    if (levelText) {
                        levelText.text = levelNumber.toString();
                        levelText.isVisible = true;
                    }

                    sprite.isVisible = true;
                });

                // Sprite13 UID'sini Construct 3 fonksiyonuna gönder
                if (targetSpriteUID !== null) {
                    runtime.callFunction("sprite13", targetSpriteUID);
                }
            }
        }
    }
}


function showNextLevels() {
    if (runtime.layout.name === "Lobby") {
        const currentLevel = parseInt(localStorage.getItem(`${gamePrefix}currentLevel`), 10) || 1;
        
        // Find current city
        const currentCity = Object.entries(CITY_DISTRIBUTIONS)
            .find(([_, range]) => 
                currentLevel >= range.start && currentLevel <= range.end
            );

        if (!currentCity) return;

        const cityStartLevel = currentCity[1].start;
        const cityEndLevel = currentCity[1].end;
        
        // Get all level sprites sorted by uid
        const levelSprites = runtime.objects.Sprite13.getAllInstances()
            .sort((a, b) => a.uid - b.uid);

        // Calculate start level for next set (add 6 to current first level)
        const nextStartLevel = cityStartLevel + 6;
        let lastVisibleSpriteIndex = null;
        
        // Process each sprite position
        levelSprites.forEach((sprite, index) => {
            const levelNumber = nextStartLevel + index;
            
            // If this level would exceed the city's end level
            if (levelNumber > cityEndLevel) {
                sprite.isVisible = false;
                
                // Find and hide corresponding level text
                const levelText = runtime.objects.spriteText.getAllInstances()
                    .find(text => text.instVars.w === `level${index + 1}`);
                if (levelText) {
                    levelText.isVisible = false;
                }

                // Remember the position of the first hidden sprite
                if (lastVisibleSpriteIndex === null) {
                    lastVisibleSpriteIndex = index - 1;
                }
            } else {
                sprite.isVisible = true;
                lastVisibleSpriteIndex = index;
                
                // Set sprite frame based on level status
                if (currentLevel > levelNumber) {
                    sprite.animationFrame = 1; // Passed
                } else if (currentLevel === levelNumber) {
                    sprite.animationFrame = 2; // Current
                } else {
                    sprite.animationFrame = 0; // Not reached
                }

                // Update level text (but don't set visibility yet)
                const levelText = runtime.objects.spriteText.getAllInstances()
                    .find(text => text.instVars.w === `level${index + 1}`);
                if (levelText) {
                    levelText.text = levelNumber.toString();
                }
            }
        });

        // Handle the last visible sprite and its text
        if (lastVisibleSpriteIndex !== null) {
            const lastVisibleSprite = levelSprites[lastVisibleSpriteIndex];
            
            // Hide the text for the last visible sprite
            const lastLevelText = runtime.objects.spriteText.getAllInstances()
                .find(text => text.instVars.w === `level${lastVisibleSpriteIndex + 1}`);
            if (lastLevelText) {
                lastLevelText.isVisible = false;
            }

            // Show all other texts up to the last visible sprite
            for (let i = 0; i < lastVisibleSpriteIndex; i++) {
                const levelText = runtime.objects.spriteText.getAllInstances()
                    .find(text => text.instVars.w === `level${i + 1}`);
                if (levelText) {
                    levelText.isVisible = true;
                }
            }

            // First remove any existing plane
            runtime.objects.plane.getAllInstances().forEach(p => p.destroy());
            // Create new plane
            runtime.objects.plane.createInstance("cui", lastVisibleSprite.x, lastVisibleSprite.y);
        }
    }
}
function checkGameCompletion() {
    console.log("Starting game completion check...");

    // Get all cards in hand (including deck count), making sure they're actually in hand and not just marked as hand
    const handCards = runtime.objects.SCards.getAllInstances()
        .filter(card => 
            card.instVars.hand && 
            card.animationName === 'back' &&
            !card.instVars.baseCard
        );
    console.log("Hand cards count:", handCards.length);
    console.log("Hand cards:", handCards.map(card => ({
        animation: card.animationName,
        isHand: card.instVars.hand,
        isBase: card.instVars.baseCard
    })));
    
    // Get deck count from text
    const deckText = runtime.objects.decktxt.getFirstInstance();
    const remainingInDeck = deckText ? parseInt(deckText.text.replace('+', '')) || 0 : 0;
    console.log("Remaining cards in deck:", remainingInDeck);
    
    // Get all cards in the game field (not in hand, not base card)
    const fieldCards = runtime.objects.SCards.getAllInstances()
        .filter(card => !card.instVars.hand && !card.instVars.baseCard);
    console.log("Field cards count:", fieldCards.length);
    console.log("Field cards:", fieldCards.map(card => ({
        animation: card.animationName,
        isHand: card.instVars.hand,
        isBase: card.instVars.baseCard
    })));

    // Total cards in hand/deck
    const totalHandDeckCards = handCards.length + remainingInDeck;
    console.log("Total cards in hand + deck:", totalHandDeckCards);

    // If there are no field cards, it's a win
    if (fieldCards.length === 0) {
        console.log("WIN: No cards in field - calling levelcompleted");
        runtime.callFunction("levelcompleted");
        return;
    }

    // If deck is empty (both counter and hand) and there are still field cards, it's a loss
    if (remainingInDeck === 0 && handCards.length === 0 && fieldCards.length > 0) {
        console.log("FAIL: Deck empty and field still has cards");
        runtime.callFunction("failgame");
        return;
    }

    // Check if there are playable moves available when hand is empty
    if (handCards.length === 0 && remainingInDeck === 0) {
        console.log("No cards in hand and deck, checking for possible moves...");
        
        // Get base card
        const baseCard = runtime.objects.SCards.getAllInstances()
            .find(c => c.instVars.baseCard);
            
        if (baseCard) {
            console.log("Base card found:", baseCard.animationName);
            
            const baseAnimation = baseCard.animationName;
            const valueMap = { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 };
            let hasPlayableMove = false;

            // If base is wild, check if there are any free cards
            if (baseAnimation === 'Wild') {
                console.log("Base card is Wild");
                const freeCards = fieldCards.filter(card => 
                    card.instVars.free && !card.instVars.lock
                );
                hasPlayableMove = freeCards.length > 0;
                console.log("Free cards available for Wild:", freeCards.length);
            } else {
                // Get base card value
                const baseMatch = baseAnimation.match(/^(\d+|[AJQK])/);
                if (baseMatch) {
                    const baseValue = baseMatch[1];
                    const baseNum = valueMap[baseValue] || parseInt(baseValue);
                    console.log("Base card value:", baseNum);

                    // Check all free cards for possible moves
                    hasPlayableMove = fieldCards.some(card => {
                        if (!card.instVars.free || card.instVars.lock) return false;
                        
                        const cardMatch = card.animationName.match(/^(\d+|[AJQK])/);
                        if (!cardMatch) return false;

                        const cardValue = cardMatch[1];
                        const cardNum = valueMap[cardValue] || parseInt(cardValue);
                        
                        return Math.abs(baseNum - cardNum) === 1 || 
                               (baseNum === 1 && cardNum === 13) || 
                               (baseNum === 13 && cardNum === 1);
                    });
                }
            }

            console.log("Has playable moves:", hasPlayableMove);
            // If no playable moves are available, game is lost
            if (!hasPlayableMove) {
                console.log("FAIL: No playable moves available");
                runtime.callFunction("failgame");
            }
        }
    }

    console.log("Game completion check finished");
}

function updateComboSprites(comboCount) {
    const comboSprites = runtime.objects.Sprite19.getAllInstances()
        .sort((a, b) => a.uid - b.uid);

    comboSprites.forEach((sprite, index) => {
        // Set frame to 1 if index is less than comboCount, otherwise 0
        sprite.animationFrame = index < comboCount ? 1 : 0;
    });
}
//GAMEMECHANICS//





//SYSTEMS//
function updateVariable(operation, key, value) {
    // Fetch the current value from localStorage
    let currentValue = parseInt(localStorage.getItem(`${gamePrefix}${key}`), 10) || 0;

    // Perform the operation
    if (operation === "add") {
        currentValue += value; // Add the value
    } else if (operation === "sub") {
        currentValue -= value; // Subtract the value
    } else if (operation === "set") {
        currentValue = value; // Set the value directly
    }

    // Ensure the value is not below 0
    if (currentValue < 0) {
        currentValue = 0;
    }

    // Special condition for "lives"
    if (key === "lives" && currentValue > 5) {
        currentValue = 5;
    }

    // Save the updated value back to localStorage
    localStorage.setItem(`${gamePrefix}${key}`, currentValue);

    // Update the global Construct 3 variable
    if (runtime && runtime.globalVars[key] !== undefined) {
        runtime.globalVars[key] = currentValue; // Set the global variable
    } else {
        console.warn(`Global variable "${key}" not found in Construct 3.`);
    }

    updateText(key); // Call the function to update UI text
}
function updateText(key) {
    // Fetch the current value of the key from localStorage
    const currentValue = localStorage.getItem(`${gamePrefix}${key}`) || 0;

    // Iterate through all "spriteText" objects
    const allSpriteTexts = runtime.objects.spriteText.getAllInstances();
    allSpriteTexts.forEach(spriteText => {
        // Check if the "w" instance variable matches the key
        if (spriteText.instVars.w === key) {
            // Update the text property of the spriteText object to display the current value
            spriteText.text = currentValue; // Metnin başına bir boşluk ekleyerek güncelle
        }
    });
}
function datainfo(key) {
    const fullKey = `${gamePrefix}${key}`; // Combine gamePrefix with key
    const value = localStorage.getItem(fullKey); // Retrieve the value from localStorage
    return value ? parseInt(value, 10) : 0; // Return the value as an integer, default to 0
}
function playRewardAnimations() {
    const rewards = JSON.parse(localStorage.getItem("rewardAnimations")) || [];

    if (rewards.length === 0) {
        return;
    }

    let delay = 0;
    rewards.forEach(reward => {
        setTimeout(() => {
            runtime.callFunction("playrewardanimations", reward.name, reward.quantity);
        }, delay);
        delay += 1000;
    });

    localStorage.setItem("rewardAnimations", JSON.stringify([]));

    runtime.globalVars.lastmy = 0;
}
function addToA(name, quantity, extraData = {}) {
    // Retrieve the current animation array from localStorage
    const existingRewards = JSON.parse(localStorage.getItem("rewardAnimations")) || [];

    // Create a new reward object with extra data
    const newReward = { name, quantity, ...extraData };

    // Add the new reward to the existing array
    const updatedRewards = [...existingRewards, newReward];

    // Save the updated array back to localStorage
    localStorage.setItem("rewardAnimations", JSON.stringify(updatedRewards));

    console.log(`Added to animation array:`, newReward);
}
function updateCurrentLevelText() {
   
if (runtime.layout.name === "Lobby") {
 const currentLevel = parseInt(localStorage.getItem(`${gamePrefix}currentLevel`), 10) || 1;

    // Find the spriteText instance with w = "startbutton"
    const allSpriteTexts = runtime.objects.spriteText.getAllInstances();
    const startButtonText = allSpriteTexts.find(spriteText => spriteText.instVars.w === "startbutton");

    if (startButtonText) {
        startButtonText.text = `Level ${currentLevel}`;
    } else {
        console.error("spriteText with w = 'startbutton' not found.");
    }

   
}
}
//SYSTEMS//




//COLLECTION//
function claimReward(collectionName) {
    // Check if collections exist in localStorage
    const savedCollections = localStorage.getItem(`${gamePrefix}collections`);
    if (!savedCollections) {
        console.error("No collections found in localStorage.");
        return;
    }

    // Parse collections from localStorage
    const collectionsArray = JSON.parse(savedCollections);

    // Find the collection by name
    const collection = collectionsArray.find(c => c.name === collectionName);
    if (!collection) {
        console.error(`Collection "${collectionName}" not found.`);
        return;
    }

    // Check if the collection is completed
    const totalCards = collection.cards.length;
    const collectedCards = collection.cards.filter(card => card.collected === 1).length;

    if (collectedCards < totalCards) {
        const remainingCards = totalCards - collectedCards;
        console.log(`You need ${remainingCards} more cards to claim the reward for "${collectionName}".`);
        return;
    }

    if (collection.completed === 1) {
        console.log(`The reward for "${collectionName}" has already been claimed.`);
        return;
    }

    // Mark the collection as completed
    collection.completed = 1;

    // Save the updated collections back to localStorage
    localStorage.setItem(`${gamePrefix}collections`, JSON.stringify(collectionsArray));
    console.log(`Reward claimed for "${collectionName}".`);

    // Parse reward (e.g., "gold100" => type: "gold", amount: 100)
    const rewardType = collection.reward.replace(/[0-9]/g, "").trim().toLowerCase(); // Extract "gold"
    const rewardAmount = parseInt(collection.reward.replace(/[^\d]/g, ""), 10); // Extract "100"

    // Add the reward to animations array
   

    // Call Construct 3 RewardScreen function
    runtime.callFunction("RewardScreen", rewardType, rewardAmount);
}
function dropCard() {
    const savedCollections = localStorage.getItem(`${gamePrefix}collections`);

    if (!savedCollections) {
        fetch("collection.json")
            .then(response => response.json())
            .then(data => {
                const collectionsArray = data.collections;
                localStorage.setItem(`${gamePrefix}collections`, JSON.stringify(collectionsArray));
                executeDropCard(collectionsArray);
            });
    } else {
        const collectionsArray = JSON.parse(savedCollections);
        executeDropCard(collectionsArray);
    }

    function executeDropCard(collectionsArray) {
        const randomCards = [];
        let globalVars = {
            card1frame: 0,
            card1v: 0,
            card1cname: "",
            card1cardname: "",
            card2frame: 0,
            card2v: 0,
            card2cname: "",
            card2cardname: "",
        };

        while (randomCards.length < 2) {
            const randomCollectionIndex = Math.floor(Math.random() * collectionsArray.length);
            const randomCollection = collectionsArray[randomCollectionIndex];
            const uncollectedCards = randomCollection.cards.filter(card => card.collected === 0);

            const isAlreadyCollected = uncollectedCards.length === 0;

            const selectedCard = isAlreadyCollected
                ? randomCollection.cards[Math.floor(Math.random() * randomCollection.cards.length)]
                : uncollectedCards[Math.floor(Math.random() * uncollectedCards.length)];

            const cardIndex = randomCollection.cards.indexOf(selectedCard) + 1; // Kartın koleksiyondaki sırası
            randomCards.push(selectedCard);

            if (randomCards.length === 1) {
                globalVars.card1frame = cardIndex;
                globalVars.card1v = isAlreadyCollected ? 1 : 0;
                globalVars.card1cname = randomCollection.name;
                globalVars.card1cardname = selectedCard.name;
            } else if (randomCards.length === 2) {
                globalVars.card2frame = cardIndex;
                globalVars.card2v = isAlreadyCollected ? 1 : 0;
                globalVars.card2cname = randomCollection.name;
                globalVars.card2cardname = selectedCard.name;
            }

            if (!isAlreadyCollected) {
                selectedCard.collected = 1;
            }
        }

        localStorage.setItem(`${gamePrefix}collections`, JSON.stringify(collectionsArray));

        runtime.globalVars.card1frame = globalVars.card1frame;
        runtime.globalVars.card1v = globalVars.card1v;
        runtime.globalVars.card1cname = globalVars.card1cname;
        runtime.globalVars.card1cardname = globalVars.card1cardname;
        runtime.globalVars.card2frame = globalVars.card2frame;
        runtime.globalVars.card2v = globalVars.card2v;
        runtime.globalVars.card2cname = globalVars.card2cname;
        runtime.globalVars.card2cardname = globalVars.card2cardname;
    }
}
//COLLECTION//




























const scriptsInEvents = {

	async Setup_Event65_Act11(runtime, localVars)
	{
		updateVariable("add", "gold", localVars.valuee);
		
		addToA("gold", 100);
	},

	async Setup_Event69_Act7(runtime, localVars)
	{
		playRewardAnimations();
	},

	async Setup_Event72_Act1(runtime, localVars)
	{
		// Check if localStorage is empty
		if (localStorage.length === 0) {
		    console.log("LocalStorage is empty. Initializing default values...");
		
		    // Call updateVariable functions for initial setup
		    updateVariable("set", "gold", 100);
		    updateVariable("set", "wheelticket", 1);
			updateVariable("set", "lives", 5);
			updateVariable("set", "diamond", 1);
		}
		
	},

	async Setup_Event72_Act3(runtime, localVars)
	{
		updateVariable("add", "gold", 0);
		updateVariable("add", "wheelticket", 0);
		updateVariable("add", "diamond", 0);
		updateVariable("add", "lives", 0);
	},

	async Setup_Event74_Act1(runtime, localVars)
	{
		updateVariable(localVars.addorsub, localVars.v, localVars.value);
	},

	async Setup_Event82_Act8(runtime, localVars)
	{
		playRewardAnimations();
	},

	async Setup_Event82_Act9(runtime, localVars)
	{
const savedCollections = localStorage.getItem(`${gamePrefix}collections`);

if (savedCollections) {
    const collectionsArray = JSON.parse(savedCollections);

    const claimableCollections = collectionsArray.filter(collection => {
        const totalCards = collection.cards.length;
        const collectedCards = collection.cards.filter(card => card.collected === 1).length;
        return collectedCards === totalCards && collection.completed === 0;
    });

    const howCollectionText = runtime.objects.spriteText.getAllInstances().find(obj => obj.instVars.w === "howcollection");
    const redCircle = runtime.objects.redcircle.getAllInstances().find(obj => obj.instVars.w === "howcollection");

    if (claimableCollections.length > 0) {
        if (howCollectionText) {
            howCollectionText.text = claimableCollections.length.toString();
        }
        if (redCircle) {
            redCircle.isVisible = true;
        }
    } else {
        if (howCollectionText) {
            howCollectionText.text = "0";
        }
        if (redCircle) {
            redCircle.isVisible = false;
        }
    }
} else {
    fetch("collection.json")
        .then(response => response.json())
        .then(data => {
            const collectionsArray = data.collections;

            const claimableCollections = collectionsArray.filter(collection => {
                const totalCards = collection.cards.length;
                const collectedCards = collection.cards.filter(card => card.collected === 1).length;
                return collectedCards === totalCards && collection.completed === 0;
            });

            const howCollectionText = runtime.objects.spriteText.getAllInstances().find(obj => obj.instVars.w === "howcollection");
            const redCircle = runtime.objects.redcircle.getAllInstances().find(obj => obj.instVars.w === "howcollection");

            if (claimableCollections.length > 0) {
                if (howCollectionText) {
                    howCollectionText.text = claimableCollections.length.toString();
                }
                if (redCircle) {
                    redCircle.isVisible = true;
                }
            } else {
                if (howCollectionText) {
                    howCollectionText.text = "0";
                }
                if (redCircle) {
                    redCircle.isVisible = false;
                }
            }
        })
        .catch(error => {});
}

	},

	async Setup_Event86_Act1(runtime, localVars)
	{
const savedCollections = localStorage.getItem(`${gamePrefix}collections`);

if (savedCollections) {
    const collectionsArray = JSON.parse(savedCollections);

    const claimableCollections = collectionsArray.filter(collection => {
        const totalCards = collection.cards.length;
        const collectedCards = collection.cards.filter(card => card.collected === 1).length;
        return collectedCards === totalCards && collection.completed === 0;
    });

    const howCollectionText = runtime.objects.spriteText.getAllInstances().find(obj => obj.instVars.w === "howcollection");
    const redCircle = runtime.objects.redcircle.getAllInstances().find(obj => obj.instVars.w === "howcollection");

    if (claimableCollections.length > 0) {
        if (howCollectionText) {
            howCollectionText.text = claimableCollections.length.toString();
        }
        if (redCircle) {
            redCircle.isVisible = true;
        }
    } else {
        if (howCollectionText) {
            howCollectionText.text = "0";
        }
        if (redCircle) {
            redCircle.isVisible = false;
        }
    }
} else {
    fetch("collection.json")
        .then(response => response.json())
        .then(data => {
            const collectionsArray = data.collections;

            const claimableCollections = collectionsArray.filter(collection => {
                const totalCards = collection.cards.length;
                const collectedCards = collection.cards.filter(card => card.collected === 1).length;
                return collectedCards === totalCards && collection.completed === 0;
            });

            const howCollectionText = runtime.objects.spriteText.getAllInstances().find(obj => obj.instVars.w === "howcollection");
            const redCircle = runtime.objects.redcircle.getAllInstances().find(obj => obj.instVars.w === "howcollection");

            if (claimableCollections.length > 0) {
                if (howCollectionText) {
                    howCollectionText.text = claimableCollections.length.toString();
                }
                if (redCircle) {
                    redCircle.isVisible = true;
                }
            } else {
                if (howCollectionText) {
                    howCollectionText.text = "0";
                }
                if (redCircle) {
                    redCircle.isVisible = false;
                }
            }
        })
        .catch(error => {});
}

	},

	async Start_Event23_Act2(runtime, localVars)
	{
		playRewardAnimations();
	},

	async Start_Event24_Act1(runtime, localVars)
	{
if (runtime.layout.name === "Lobby") {
    const areas = loadAreas();
    const activeArea = getActiveArea();

    areas.forEach(area => {
        const layer = runtime.layout.getLayer(area.name);
        if (layer) {
            layer.isVisible = area.name === activeArea;
        }
    });

    runtime.objects.parts.instances().forEach(instance => {
        const partName = instance.instVars.n;
        const areaName = instance.instVars.w;

        if (!partName || !areaName) {
            instance.isVisible = false;
            return;
        }

        if (areaName === activeArea) {
            const area = areas.find(a => a.name === activeArea);
            if (area && area.parts.hasOwnProperty(partName)) {
                const partData = area.parts[partName];
                const partStatus = typeof partData === "object" && partData !== null ? partData.status || 0 : partData;
                instance.isVisible = partStatus === 1;
            } else {
                instance.isVisible = false;
            }
        } else {
            instance.isVisible = false;
        }
    });

    const area = areas.find(a => a.name === activeArea);
    if (area) {
        const totalParts = Object.keys(area.parts).length;
        const openParts = Object.values(area.parts).filter(value =>
            typeof value === "object" && value !== null ? value.status === 1 : value === 1
        ).length;

        const areatextInstance = runtime.objects.areatext.getFirstInstance();
        if (areatextInstance) {
            areatextInstance.text = `${openParts}/${totalParts}`;
        }

        const activeAreaIndex = areas.indexOf(area);
        if (activeAreaIndex !== -1) {
            const displayAreaIndex = activeAreaIndex + 1;

            const allSpriteTexts = runtime.objects.spriteText.getAllInstances();
            const areaButtonText = allSpriteTexts.find(spr => spr.instVars.w === "startareabutton");

            if (areaButtonText) {
                areaButtonText.text = `Area  ${displayAreaIndex}`;
            }
        }

        // === Güncelleme: "howarea" ve "howpart" diamond kontrolüne göre ===
        const playerDiamonds = datainfo("diamond"); // Diamond değerini al
        let affordableParts = Object.values(area.parts)
            .filter(part =>
                typeof part === "object" && part !== null && part.status === 0 && playerDiamonds >= part.goldCost
            )
            .slice(0, 3); // En fazla 3 uygun parça al

        const howareaText = runtime.objects.spriteText.getAllInstances().find(spr => spr.instVars.w === "howarea");
        if (howareaText) {
            howareaText.text = `${affordableParts.length}`;
        }

       const howpartCircle = runtime.objects.redcircle.getAllInstances().find(obj => obj.instVars.w === "howpart");
const howPartText = runtime.objects.spriteText.getAllInstances().find(obj => obj.instVars.w === "howpart");

if (affordableParts.length > 0) {
    if (howpartCircle) {
        howpartCircle.isVisible = true;
    }
    if (howPartText) {
        howPartText.text = affordableParts.length.toString();
    }
} else {
    if (howpartCircle) {
        howpartCircle.isVisible = false;
    }
    if (howPartText) {
        howPartText.text = "";
    }
}
    }
}

	},

	async Start_Event26_Act1(runtime, localVars)
	{
		localStorage.clear(); // Tüm veriyi temizler
		console.log("Tüm localStorage verileri temizlendi.");
		
	},

	async Start_Event61_Act1(runtime, localVars)
	{
		updateCityText();
	},

	async Start_Event63_Act1(runtime, localVars)
	{
		showNextLevels();
	},

	async Game_Event1_Act7(runtime, localVars)
	{
		updateVariable("add","gold",0);
	},

	async Game_Event19_Act1(runtime, localVars)
	{
		updateVariable("add", "gold", 100)
		updateVariable("add", "currentLevel", 1)
	},

	async Game_Event22_Act1(runtime, localVars)
	{
		updateVariable("set", "currentLevel", 2)
	},

	async Game_Event26_Act1(runtime, localVars)
	{
		drawCard();
	},

	async Game_Event28_Act1(runtime, localVars)
	{
		undoMove();
	},

	async Game_Event30_Act1(runtime, localVars)
	{
		dartBooster();
	},

	async Game_Event31_Act1(runtime, localVars)
	{
		windmillBooster();
	},

	async Game_Event32_Act1(runtime, localVars)
	{
		wildBooster();
	},

	async Game_Event33_Act1(runtime, localVars)
	{
		deckBooster();
	},

	async Game_Event42_Act1(runtime, localVars)
	{
		isPlayableCard();
	},

	async Game_Event44_Act9(runtime, localVars)
	{
		checkAndRevealFreeCards();
	},

	async Game_Event45_Act4(runtime, localVars)
	{
const currentLevel = parseInt(localStorage.getItem(`${gamePrefix}currentLevel`), 10) || 1;
const lobbyCreate = runtime.objects.LobbyCreate.getFirstInstance();

// Find current city
const currentCity = Object.entries(CITY_DISTRIBUTIONS)
    .find(([_, range]) => currentLevel >= range.start && currentLevel <= range.end);

if (currentCity && lobbyCreate) {
    const cityName = currentCity[0];
    lobbyCreate.setAnimation(cityName);
}
	},

	async Game_Event45_Act5(runtime, localVars)
	{
		initGame();
	},

	async Abilities_Event5_Act1(runtime, localVars)
	{
		
		function renderAbilities() {
		    const txtBg = runtime.objects.abilitiestxtbg.getFirstInstance();
			  const txtBg2 = runtime.objects.choruspin.getFirstInstance();
		    if (!txtBg) return;
		
		    const centerX = txtBg.x;
		    const startY = txtBg2.y+300; // Başlangıç pozisyonu
		    const spacingY = 360; // Nesneler arasındaki boşluk
		
		    let currentY = startY;
		
		    const ninePatchChours = runtime.objects["9patchchours"].getFirstInstance();
		    if (ninePatchChours) {
		        ninePatchChours.instVars.listTotHeight = 0;
		    }
		
		    abilities.forEach(ability => {
		        const abilitiesBg = runtime.objects.abilitiesbg.createInstance("list", centerX, currentY, 1);
		
		        const abilitiesImg = runtime.objects.abilitiesimg.getAllInstances().pop();
		        if (abilitiesImg) {
		            abilitiesImg.setAnimation(ability.name);
		        }
		
		        const abilityNameText = runtime.objects.spriteText.getAllInstances().pop();
		        if (abilityNameText && abilityNameText.instVars.w === "abilitiesname") {
		            abilityNameText.text = ability.name;
		        }
		
		        const abilitiesDesc = runtime.objects.abilitiesdesc.getAllInstances().pop(); // Son abilitiesdesc nesnesini al
		        if (abilitiesDesc) {
		            abilitiesDesc.text = ability.description; // Açıklamayı yaz
		        }
		
		        const abilitiesBuyButton = runtime.objects.abilitiesbuy.getAllInstances().pop();
		        if (abilitiesBuyButton) {
		            abilitiesBuyButton.instVars.w = ability.name;
		        }
		
		        if (ninePatchChours) {
		            ninePatchChours.instVars.listTotHeight += (abilitiesBg.height / 1.2) + (spacingY / 2);
		        }
		
		        currentY += spacingY;
		    });
		}
		
		renderAbilities();
		
	},

	async Abilities_Event12_Act1(runtime, localVars)
	{
		buyAbility(runtime.objects.abilitiesbuy.getFirstPickedInstance().instVars.w);
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

