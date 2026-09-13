// Получение элементов DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Глобальные переменные для работы с SDK
let gp = null; // Переменная для хранения ссылки на GamePush SDK
const languages = ['ru', 'en', 'tr']; // Поддерживаемые языки

// Глобальные переменные
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;

// Глобальные переменные
let ysdk = null; // Яндекс Игры SDK
let gameActive = false;
let gamePaused = false; // Флаг для отслеживания состояния паузы
let gameLoop;
let player;
let enemies = [];
let projectiles = [];
let effects = [];
let powerUps = []; // Новый массив для энергетических бонусов
let score = 0;
let powerLevel = 0;
let maxPower = 3; // Увеличено максимальное количество выстрелов до 3
let powerIncreaseRate = 0.5;
let lastFrameTime = 0;
let enemySpawnInterval = 1000; // миллисекунды
let lastEnemySpawnTime = 0;
let powerUpSpawnInterval = 1000; // Уменьшено до 1000мс для более частого появления
let lastPowerUpSpawnTime = 0;
let difficulty = 1;
let isFiring = false; // Флаг, указывающий, что происходит выстрел
let shotInterval = 600; // Интервал между выстрелами в мс
let gameTime = 0; // Время игры в секундах
let lastDifficultyIncrease = 0; // Время последнего увеличения сложности
let enemyProjectiles = []; // Массив для снарядов врагов
let lastEnemyShooterSpawnTime = 0; // Время последнего появления стреляющего врага
let enemyShooterSpawnInterval = 5000; // Интервал появления стреляющих врагов (5 секунд)
let enemyShootInterval = 2000; // Интервал стрельбы врагов (2 секунды)
let backgroundStars = []; // Звезды на фоне
let comboCount = 0; // Счетчик комбо
let comboTimer = 0; // Таймер для комбо
let comboMultiplier = 1;
let shields = 0; // Количество щитов
let manuallyPaused = false; // Флаг для отслеживания ручной паузы (для правильной обработки событий SDK)

// Текущий язык игры
let currentLanguage = 'ru';

// Локализованные строки
const localization = {
    ru: {
        'title': 'Неоновое Уклонение',
        'startGame': 'НАЧАТЬ ИГРУ',
        'gameOver': 'ИГРА ОКОНЧЕНА',
        'score': 'Счет: {0}',
        'finalScore': 'Ваш счет: {0}',
        'playAgain': 'ИГРАТЬ СНОВА',
        'instructions': 'Управляйте мышкой, уворачивайтесь от красных квадратов\nСобирайте зеленые кружки для накопления энергии и автоматических выстрелов',
        'pause': 'ПАУЗА',
        'resume': 'ПРОДОЛЖИТЬ',
        'restartFromPause': 'НАЧАТЬ ЗАНОВО',
        'exit': 'ВЫХОД',
        'exitConfirm': 'Вы уверены, что хотите выйти?',
        'yes': 'ДА',
        'no': 'НЕТ',
        'combo': 'КОМБО: {0}x',
        'multiplier': 'Множитель: {0}x',
        'shields': 'Щиты: {0}',
        'shieldObtained': 'ПОЛУЧЕН ЩИТ!',
        'megaShot': 'МЕГА-ВЫСТРЕЛ!',
        'difficultyIncreased': 'СЛОЖНОСТЬ УВЕЛИЧЕНА!',
        'shots': 'Выстрелы: {0}/{1}',
        'watchAd': 'СМОТРЕТЬ РЕКЛАМУ',
        'skipAd': 'ПРОПУСТИТЬ',
        'adTitle': 'БОНУСНАЯ ВОЗМОЖНОСТЬ',
        'adDescription': 'Посмотрите рекламу, чтобы получить мощный взрыв, уничтожающий всех врагов!',
        'adBonusTitle': 'БОНУСНЫЙ ВЗРЫВ',
        'adBonusDescription': 'Посмотрите короткую рекламу для получения мощного взрыва, который уничтожает всех врагов и даёт дополнительные бонусы!',
        'adBonusBenefit1': 'Уничтожает всех врагов в большом радиусе',
        'adBonusBenefit2': 'Даёт дополнительный щит и заряды',
        'adBonusBenefit3': 'Бонус +500 очков',
        'watchAdButton': 'СМОТРЕТЬ РЕКЛАМУ',
        'cancelButton': 'ОТМЕНА',
        'bonusActivated': 'БОНУС АКТИВИРОВАН! +500 ОЧКОВ',
        'watchAdForBonus': 'РЕКЛАМА ЗА БОНУС',
        'inviteFriends': 'Пригласить друзей',
        'shareGame': 'Поделиться игрой',
        'shareTitle': 'Неоновое Уклонение',
        'shareText': 'Играй в Неоновое Уклонение! Уворачивайся от врагов и набирай очки!',
        'enemiesDestroyedPoints': '+{0} ОЧКОВ ЗА ВРАГОВ',
        'scoreSubmitted': 'Счет успешно отправлен в таблицу лидеров',
        'scoreSubmitError': 'Ошибка отправки счета в таблицу лидеров',
        'gameInitializing': 'Инициализация игры...',
        'canvasInitialized': 'Canvas инициализирован',
        'canvasSizeSet': 'Размеры канваса установлены: {0} x {1}',
        'gameInitComplete': 'Инициализация игры завершена',
        'hideAdsUndefined': 'Функция hideAds не определена',
        'hidingBanners': 'Скрываем все рекламные баннеры',
        'bannersHidden': 'Баннеры скрыты с помощью CSS',
        'sdkUnavailable': 'GamePush SDK недоступен для скрытия баннеров через API'
    },
    en: {
        'title': 'Neon Dodge',
        'startGame': 'START GAME',
        'gameOver': 'GAME OVER',
        'score': 'Score: {0}',
        'finalScore': 'Your score: {0}',
        'playAgain': 'PLAY AGAIN',
        'instructions': 'Control with mouse, dodge red squares\nCollect green circles to charge energy for automatic shots',
        'pause': 'PAUSE',
        'resume': 'RESUME',
        'restartFromPause': 'RESTART GAME',
        'exit': 'EXIT',
        'exitConfirm': 'Are you sure you want to exit?',
        'yes': 'YES',
        'no': 'NO',
        'combo': 'COMBO: {0}x',
        'multiplier': 'Multiplier: {0}x',
        'shields': 'Shields: {0}',
        'shieldObtained': 'SHIELD OBTAINED!',
        'megaShot': 'MEGA SHOT!',
        'difficultyIncreased': 'DIFFICULTY INCREASED!',
        'shots': 'Shots: {0}/{1}',
        'watchAd': 'WATCH AD',
        'skipAd': 'SKIP',
        'adTitle': 'BONUS OPPORTUNITY',
        'adDescription': 'Watch an ad to get a powerful explosion that destroys all enemies!',
        'adBonusTitle': 'BONUS EXPLOSION',
        'adBonusDescription': 'Watch a short ad to get a powerful explosion that destroys all enemies and gives additional bonuses!',
        'adBonusBenefit1': 'Destroys all enemies in a large radius',
        'adBonusBenefit2': 'Gives an additional shield and charges',
        'adBonusBenefit3': 'Bonus +500 points',
        'watchAdButton': 'WATCH AD',
        'cancelButton': 'CANCEL',
        'bonusActivated': 'BONUS ACTIVATED! +500 POINTS',
        'watchAdForBonus': 'AD FOR BONUS',
        'inviteFriends': 'Invite Friends',
        'shareGame': 'Share Game',
        'shareTitle': 'Neon Dodge',
        'shareText': 'Play Neon Dodge! Dodge enemies and score points!',
        'enemiesDestroyedPoints': '+{0} POINTS FOR ENEMIES',
        'scoreSubmitted': 'Score successfully submitted to leaderboard',
        'scoreSubmitError': 'Error submitting score to leaderboard',
        'gameInitializing': 'Initializing game...',
        'canvasInitialized': 'Canvas initialized',
        'canvasSizeSet': 'Canvas size set: {0} x {1}',
        'gameInitComplete': 'Game initialization complete',
        'hideAdsUndefined': 'hideAds function is undefined',
        'hidingBanners': 'Hiding all ad banners',
        'bannersHidden': 'Banners hidden using CSS',
        'sdkUnavailable': 'GamePush SDK unavailable for hiding banners via API'
    },
    tr: {
        'title': 'Neon Kaçış',
        'startGame': 'OYUNA BAŞLA',
        'gameOver': 'OYUN BİTTİ',
        'score': 'Puan: {0}',
        'finalScore': 'Puanınız: {0}',
        'playAgain': 'TEKRAR OYNA',
        'instructions': 'Fare ile kontrol edin, kırmızı karelerden kaçının\nOtomatik atışlar için enerji toplamak için yeşil daireleri toplayın',
        'pause': 'DURAKLAT',
        'resume': 'DEVAM ET',
        'restartFromPause': 'YENİDEN BAŞLAT',
        'exit': 'ÇIKIŞ',
        'exitConfirm': 'Çıkmak istediğinizden emin misiniz?',
        'yes': 'EVET',
        'no': 'HAYIR',
        'combo': 'KOMBO: {0}x',
        'multiplier': 'Çarpan: {0}x',
        'shields': 'Kalkanlar: {0}',
        'shieldObtained': 'KALKAN ALINDI!',
        'megaShot': 'MEGA ATIŞ!',
        'difficultyIncreased': 'ZORLUK ARTIRILDI!',
        'shots': 'Atışlar: {0}/{1}',
        'watchAd': 'REKLAM İZLE',
        'skipAd': 'ATLA',
        'adTitle': 'BONUS FIRSAT',
        'adDescription': 'Tüm düşmanları yok eden güçlü bir patlama elde etmek için bir reklam izleyin!',
        'adBonusTitle': 'BONUS PATLAMA',
        'adBonusDescription': 'Tüm düşmanları yok eden ve ek bonuslar veren güçlü bir patlama elde etmek için kısa bir reklam izleyin!',
        'adBonusBenefit1': 'Geniş bir yarıçaptaki tüm düşmanları yok eder',
        'adBonusBenefit2': 'Ek kalkan ve şarj verir',
        'adBonusBenefit3': 'Bonus +500 puan',
        'watchAdButton': 'REKLAM İZLE',
        'cancelButton': 'İPTAL',
        'bonusActivated': 'BONUS ETKİNLEŞTİRİLDİ! +500 PUAN',
        'watchAdForBonus': 'REKLAM BONUS',
        'inviteFriends': 'Arkadaşlarınızı davet et',
        'shareGame': 'Oyunu paylaş',
        'shareTitle': 'Neon Kaçış',
        'shareText': 'Neon Kaçış\'ı oyna! Düşmanlardan kaç ve puan kazan!',
        'enemiesDestroyedPoints': '+{0} DÜŞMAN PUANI',
        'scoreSubmitted': 'Puan başarıyla liderlik tablosuna gönderildi',
        'scoreSubmitError': 'Puan gönderilirken hata oluştu',
        'gameInitializing': 'Oyun başlatılıyor...',
        'canvasInitialized': 'Canvas başlatıldı',
        'canvasSizeSet': 'Canvas boyutu ayarlandı: {0} x {1}',
        'gameInitComplete': 'Oyun başlatma tamamlandı',
        'hideAdsUndefined': 'hideAds fonksiyonu tanımlı değil',
        'hidingBanners': 'Tüm reklam bannerları gizleniyor',
        'bannersHidden': 'Bannerlar CSS kullanılarak gizlendi',
        'sdkUnavailable': 'GamePush SDK banner gizleme için kullanılamıyor'
    }
};

// Функция для получения локализованного текста
function getText(key, ...args) {
    try {
        let text = localization[currentLanguage][key] || key;
        
        // Замена плейсхолдеров {0}, {1}, ... на аргументы
        if (args.length > 0) {
            args.forEach((arg, index) => {
                text = text.replace(new RegExp(`\\{${index}\\}`, 'g'), arg);
            });
        }
        
        return text;
    } catch (error) {
        console.error('Ошибка при получении локализованного текста:', error);
        return key;
    }
}

// Определение языка пользователя
function detectUserLanguage() {
    try {
        // Пытаемся получить язык из localStorage
        const savedLanguage = localStorage.getItem('gameLanguage');
        if (savedLanguage && localization[savedLanguage]) {
            return savedLanguage;
        }
        
        // Пытаемся получить язык из браузера
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            const shortLang = browserLang.split('-')[0];
            if (localization[shortLang]) {
                return shortLang;
            }
        }
        
        // Если не удалось определить язык, возвращаем русский по умолчанию
        return 'ru';
    } catch (error) {
        console.error('Ошибка при определении языка пользователя:', error);
        return 'ru';
    }
}

// Установка языка
function setLanguage(lang) {
    if (!localization[lang]) {
        console.error('Язык не поддерживается:', lang);
        return;
    }
    
    // Сохраняем выбранный язык
    currentLanguage = lang;
    
    try {
        // Сохраняем выбор в localStorage
        localStorage.setItem('gameLanguage', lang);
    } catch (error) {
        console.warn('Невозможно сохранить настройки языка в localStorage:', error);
    }
    
    console.log('Язык установлен:', lang);
    
    // Обновляем все тексты на текущем языке
    updateAllTexts();
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Перерисовываем кнопку рекламы, чтобы обновить её текст
    const oldRewardedBtn = document.getElementById('rewardedAdButton');
    if (oldRewardedBtn) {
        // Удаляем старую кнопку рекламы
        oldRewardedBtn.remove();
        
        // Создаем новую кнопку с обновленным текстом
        createRewardedButton();
    }
    
    return true;
}

// Обновление всех текстов в игре
function updateAllTexts() {
    try {
        // Обновляем тексты на стартовом экране
        const startScreenTitle = document.querySelector('#gameTitle');
        if (startScreenTitle) startScreenTitle.textContent = getText('title');
        
        const startScreenInstructions = document.querySelector('#gameInstructions');
        if (startScreenInstructions) startScreenInstructions.textContent = getText('instructions');
        
        const startButton = document.querySelector('#startButton');
        if (startButton) startButton.textContent = getText('startGame');
        
        // Обновляем тексты на экране окончания игры
        const gameOverTitle = document.querySelector('#gameOverScreen h1');
        if (gameOverTitle) gameOverTitle.textContent = getText('gameOver');
        
        // Обновляем текст "Ваш счет:" (без значения)
        const finalScoreTextElement = document.querySelector('#finalScoreText');
        if (finalScoreTextElement) {
            finalScoreTextElement.textContent = getText('finalScore', '').replace('{0}', '');
        }
        
        const restartButton = document.querySelector('#restartButton');
        if (restartButton) restartButton.textContent = getText('playAgain');
        
        // Обновляем тексты на экране паузы, если он существует
        const pauseScreen = document.getElementById('pauseScreen');
        if (pauseScreen) {
            const pauseTitle = pauseScreen.querySelector('h1');
            if (pauseTitle) pauseTitle.textContent = getText('pause');
            
            const resumeButton = document.getElementById('resumeButton');
            if (resumeButton) resumeButton.textContent = getText('resume');
            
            const restartFromPauseButton = document.getElementById('restartFromPauseButton');
            if (restartFromPauseButton) restartFromPauseButton.textContent = getText('restartFromPause');
            
            const exitButton = document.getElementById('exitButton');
            if (exitButton) exitButton.textContent = getText('exit');
        }
        
        // Обновляем элемент с текстом "Score:"
        const scoreTextElement = document.querySelector('#scoreText');
        if (scoreTextElement) {
            scoreTextElement.textContent = getText('score', '').replace('{0}', '');
        }
        
        // Обновляем другие элементы интерфейса, только если игра активна
        if (gameActive) {
            // Проверяем, существуют ли элементы перед обновлением
            const powerBar = document.getElementById('powerBar');
            if (powerBar) updatePowerBar();
            
            // Обновляем отображение щитов, если оно уже создано
            const shieldDisplay = document.getElementById('shieldDisplay');
            if (shieldDisplay) updateShieldDisplay();
        }
    } catch (error) {
        console.error('Ошибка при обновлении текстов:', error);
    }
}

// Инициализация игры
window.onload = function() {
    try {
        console.log('Инициализация игры...');
        
        // Получение контекста canvas (если не был инициализирован ранее)
        if (!ctx) {
            canvas = document.getElementById('gameCanvas');
            ctx = canvas.getContext('2d');
            console.log('Canvas инициализирован');
        }
        
        // Запоминаем размеры канваса
        canvasWidth = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;
        console.log('Размеры канваса установлены:', canvasWidth, 'x', canvasHeight);
        
        // Скрываем рекламу сразу при загрузке (безопасный вызов)
        if (typeof hideAds === 'function') {
            hideAds();
        } else {
            console.warn('Функция hideAds не определена');
        }
        
        // Настройка обработчиков событий
        setupEventListeners();
        
        // Загрузка звуковых файлов
        loadSounds();
        
        // Создаем кнопку управления звуком
        createSoundToggle();
    
    // Создаем экран паузы, если его еще нет
    createPauseScreen();
    
    // Инициализируем звездный фон для отображения на стартовом экране
    initStarBackground();
        
        // Инициализация языка
        currentLanguage = detectUserLanguage();
        setLanguage(currentLanguage);
    
    // Запускаем анимацию звездного фона на стартовом экране
    animateStartScreen();
        
        console.log('Инициализация игры завершена');
    } catch (error) {
        console.error('Ошибка при инициализации игры:', error);
    }
};

// Функция, вызываемая после инициализации SDK
function onGamePushInitialized() {
    console.log('Game Push SDK инициализирован');
    
    try {
        // Получаем глобальную переменную GamePush
        gp = window.GamePush;
        
        if (!gp) {
            console.error('GamePush SDK не найден после инициализации');
            // Попробуем альтернативное имя
            gp = window.gp;
            
            if (!gp) {
                console.error('GamePush SDK недоступен! Игра продолжится без интеграции SDK.');
                return;
            }
        }
        
        console.log('GamePush SDK успешно получен:', typeof gp);
        
        // Проверяем доступность рекламного модуля
        if (gp.ads) {
            console.log('Рекламный модуль GamePush доступен');
            
            // Выводим информацию о доступности разных типов рекламы
            console.log('AdBlock включен:', gp.ads.isAdblockEnabled);
            console.log('Sticky баннер доступен:', gp.ads.isStickyAvailable);
            console.log('Fullscreen реклама доступна:', gp.ads.isFullscreenAvailable);
            console.log('Rewarded реклама доступна:', gp.ads.isRewardedAvailable);
            
            // Скрываем Sticky баннер, если он есть
            if (typeof gp.ads.closeSticky === 'function') {
                gp.ads.closeSticky();
                console.log('Sticky баннер скрыт');
            }
        } else {
            console.warn('Рекламный модуль GamePush недоступен');
        }
        
        // Получаем язык из SDK и устанавливаем язык игры
        if (gp.language) {
            console.log('Язык пользователя из GamePush:', gp.language);
            
            // Проверяем поддерживаемые языки
            if (Array.isArray(languages) && languages.includes(gp.language)) {
                currentLanguage = gp.language;
            } else {
                // Если язык не поддерживается или массив languages не определен, используем английский
                console.log('Язык не поддерживается или массив languages не определен, используем английский');
                currentLanguage = 'en';
            }
            
            console.log('Установлен язык игры:', currentLanguage);
            
            // Обновляем тексты в интерфейсе
            try {
                updateUILanguage();
            } catch (e) {
                console.error('Ошибка при обновлении языка интерфейса:', e);
            }
        }
        
        // Выводим доступные методы и свойства GamePush в консоль для отладки
        console.log('GamePush свойства:', Object.keys(gp));
        if (gp.ads) console.log('GamePush ads свойства:', Object.keys(gp.ads));
        if (gp.player) console.log('GamePush player свойства:', Object.keys(gp.player));
        
        // Настройка обработчиков событий SDK
        setupSdkEventListeners();
        
        // Загружаем настройки звука из облака
        loadSoundSettings();
        
        // Создаем кнопку для просмотра рекламы с вознаграждением
        createRewardedButton();
        
        // Создаем социальные кнопки
        createSocialButtons();
        
    } catch (error) {
        console.error('Ошибка при инициализации GamePush SDK:', error);
    }
}

// Функция для загрузки настроек звука из облака
function loadSoundSettings() {
    if (!gp || !gp.player) {
        console.warn('GamePush Player недоступен, невозможно загрузить настройки звука');
        return;
    }
    
    try {
        // Получаем сохраненное значение
        const isSoundOff = gp.player.get('sound-off');
        console.log('Загружена настройка звука из облака:', isSoundOff ? 'Звук выключен' : 'Звук включен');
        
        // Если настройка не найдена, используем звук по умолчанию (включен)
        if (isSoundOff === undefined) {
            return;
        }
        
        // Применяем сохраненную настройку через вспомогательную функцию
        syncSoundSettings(isSoundOff);
    } catch (error) {
        console.error('Ошибка при загрузке настроек звука:', error);
    }
}

// Настройка обработчиков событий SDK
function setupSdkEventListeners() {
    if (typeof gp === 'undefined' || gp === null) {
        console.error('GamePush SDK недоступен для настройки обработчиков событий');
        return;
    }
    
    console.log('Настройка обработчиков событий GamePush SDK');
    
    // Выводим информацию о состоянии рекламы, если доступны соответствующие свойства
    if (gp.ads) {
        console.log('Информация о рекламе в GamePush:');
        if (typeof gp.ads.isAdblockEnabled !== 'undefined') {
            console.log('AdBlock активен:', gp.ads.isAdblockEnabled);
        }
        if (typeof gp.ads.isFullscreenAvailable !== 'undefined') {
            console.log('Реклама fullscreen доступна:', gp.ads.isFullscreenAvailable);
        }
        if (typeof gp.ads.isRewardedAvailable !== 'undefined') {
            console.log('Реклама rewarded доступна:', gp.ads.isRewardedAvailable);
        }
        if (typeof gp.ads.isStickyAvailable !== 'undefined') {
            console.log('Реклама sticky доступна:', gp.ads.isStickyAvailable);
        }
        
        // Настраиваем обработчики событий рекламы в соответствии с документацией
        try {
            // Базовые события рекламы
            gp.ads.on('start', () => {
                console.log('Началось отображение любой рекламы');
                pauseGame(false);
                pauseMusic();
            });
            
            gp.ads.on('close', (success) => {
                console.log('Реклама закрыта, успешно:', success);
                if (gameActive && !manuallyPaused) {
                    resumeGame();
                }
                if (gameActive && !gamePaused && soundEnabled) {
                    playMusic();
                }
            });
            
            // Полноэкранная реклама
            gp.ads.on('fullscreen:start', () => {
                console.log('Началось отображение полноэкранной рекламы');
                pauseGame(false);
                pauseMusic();
            });
            
            gp.ads.on('fullscreen:close', (success) => {
                console.log('Полноэкранная реклама закрыта, успешно:', success);
                if (gameActive && !manuallyPaused) {
                    resumeGame();
                }
                if (gameActive && !gamePaused && soundEnabled) {
                    playMusic();
                }
            });
            
            // Наградная реклама
            gp.ads.on('rewarded:start', () => {
                console.log('Началось отображение наградной рекламы');
                pauseGame(false);
                pauseMusic();
            });
            
            gp.ads.on('rewarded:close', (success) => {
                console.log('Наградная реклама закрыта, успешно:', success);
                // Не возобновляем игру автоматически после наградной рекламы,
                // поскольку это будет сделано после выдачи награды или в другом месте
                if (!success) {
                    console.log('Реклама не была просмотрена полностью, награда не выдается');
                    showMessage(getText('adNotCompleted'), "#ff0000");
                    
                    // Если награда не получена, возобновляем игру и музыку
                    if (gameActive && !manuallyPaused) {
                        resumeGame();
                    }
                    if (gameActive && !gamePaused && soundEnabled) {
                        playMusic();
                    }
                }
            });
            
            gp.ads.on('rewarded:reward', () => {
                console.log('Получена награда за просмотр рекламы');
                // Выдаем награду
                activateAdBonus();
            });
            
            // Sticky баннер
            gp.ads.on('sticky:start', () => {
                console.log('Sticky баннер открыт');
            });
            
            gp.ads.on('sticky:render', () => {
                console.log('Sticky баннер показан на экране');
            });
            
            gp.ads.on('sticky:refresh', () => {
                console.log('Sticky баннер обновлен');
            });
            
            gp.ads.on('sticky:close', () => {
                console.log('Sticky баннер закрыт');
            });
            
            console.log('Обработчики событий рекламы настроены успешно');
        } catch (error) {
            console.error('Ошибка при настройке обработчиков событий рекламы:', error);
        }
    } else {
        console.warn('Модуль рекламы GamePush недоступен, пропускаем настройку обработчиков событий рекламы');
    }
    
    // Обработчик приостановки игры (когда игра теряет фокус)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
        if (gameActive && !gamePaused) {
            pauseGame(false); // Системная пауза (не ручная)
            }
            pauseMusic();
        } else if (gameActive && !manuallyPaused) {
            resumeGame();
        }
    });
    
    // Подписка на событие возврата (для мобильных устройств)
    window.addEventListener('popstate', (e) => {
        if (gameActive) {
            pauseGame(true);
            showExitConfirmation();
            e.preventDefault();
        }
    });
}

// Создание экрана паузы
function createPauseScreen() {
    const pauseScreen = document.createElement('div');
    pauseScreen.id = 'pauseScreen';
    pauseScreen.className = 'screen hidden';
    
    pauseScreen.innerHTML = `
        <h1>${getText('pause')}</h1>
        <button id="resumeButton">${getText('resume')}</button>
        <button id="restartFromPauseButton">${getText('restartFromPause')}</button>
        <button id="exitButton">${getText('exit')}</button>
    `;
    
    document.querySelector('.game-container').appendChild(pauseScreen);
    
    // Добавляем обработчики событий для кнопок
    document.getElementById('resumeButton').addEventListener('click', resumeGame);
    document.getElementById('restartFromPauseButton').addEventListener('click', () => {
        resumeGame();
        startGame();
    });
    document.getElementById('exitButton').addEventListener('click', confirmExit);
}

// Создание кнопки паузы
function createPauseButton() {
    // Проверяем, существует ли уже кнопка паузы
    if (document.getElementById('pauseButton')) return;
    
    // Создаем кнопку паузы
    const pauseButton = document.createElement('button');
    pauseButton.id = 'pauseButton';
    pauseButton.className = 'game-button';
    pauseButton.innerHTML = '⏸️';
    pauseButton.title = 'Пауза';
    
    // Стилизуем кнопку
    pauseButton.style.position = 'fixed';
    pauseButton.style.top = '10px';
    pauseButton.style.left = '10px';
    pauseButton.style.width = '40px';
    pauseButton.style.height = '40px';
    pauseButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    pauseButton.style.border = '2px solid #ff00ff';
    pauseButton.style.borderRadius = '50%';
    pauseButton.style.color = '#ff00ff';
    pauseButton.style.fontSize = '20px';
    pauseButton.style.display = 'flex';
    pauseButton.style.justifyContent = 'center';
    pauseButton.style.alignItems = 'center';
    pauseButton.style.cursor = 'pointer';
    pauseButton.style.zIndex = '100';
    pauseButton.style.boxShadow = '0 0 10px #ff00ff';
    
    // Добавляем обработчик нажатия
    pauseButton.addEventListener('click', () => {
        if (gameActive && !gamePaused) {
            pauseGame(true); // Ручная пауза
        } else if (gameActive && gamePaused && window.manuallyPaused) {
                resumeGame();
        }
    });
    
    // Добавляем кнопку на страницу
    document.body.appendChild(pauseButton);
}

// Создание кнопки управления звуком
function createSoundToggle() {
    // Проверка, существует ли уже кнопка
    if (document.getElementById('soundToggle')) return;
    
    const soundToggle = document.createElement('button');
    soundToggle.id = 'soundToggle';
    soundToggle.innerHTML = '🔊'; // Иконка звука
    
    // Устанавливаем начальное состояние
    if (!soundEnabled) {
        soundToggle.classList.add('muted');
        soundToggle.innerHTML = '🔇'; // Иконка выключенного звука
    }
    
    soundToggle.addEventListener('click', () => {
        // Получаем текущее состояние (мут или не мут)
        const currentlyMuted = soundToggle.classList.contains('muted');
        
        // Инвертируем состояние с помощью вспомогательной функции
        syncSoundSettings(!currentlyMuted);
        
        // Сохраняем настройки в облако
        if (gp && gp.player) {
            gp.player.set('sound-off', !soundEnabled);
            gp.player.sync()
                .then(() => console.log('Настройки звука сохранены:', soundEnabled ? 'Звук включен' : 'Звук выключен'))
                .catch(error => console.error('Ошибка при сохранении настроек звука:', error));
        }
    });
    
    document.querySelector('.game-container').appendChild(soundToggle);
}

// Создание кнопки для просмотра рекламы с вознаграждением
function createRewardedButton() {
    console.log('Создание кнопки для просмотра рекламы');
    
    // Удаляем старую кнопку, если она существует
    const existingButton = document.getElementById('rewardedAdButton');
    if (existingButton) {
        existingButton.remove();
    }
    
    // Проверяем доступен ли GamePush SDK
    if (typeof gp === 'undefined' || gp === null || !gp.ads) {
        console.warn('GamePush SDK или модуль рекламы недоступен, не создаем кнопку рекламы');
        // Создаем кнопку в любом случае, чтобы не нарушать игровой процесс
        console.log('Создаем кнопку рекламы без проверки SDK');
    }
    
    // Получаем текст для кнопки на текущем языке
    const buttonText = getText('watchAdForBonus');
    console.log('Текст кнопки рекламы:', buttonText);
    
    // Создаем кнопку
    const rewardedBtn = document.createElement('div');
    rewardedBtn.id = 'rewardedAdButton';
    rewardedBtn.className = 'rewarded-button';
    rewardedBtn.innerHTML = `
        <div class="rewarded-icon">💰</div>
        <div class="rewarded-text">${buttonText}</div>
    `;
    
    // Стили кнопки для отображения в правом нижнем углу
    rewardedBtn.style.position = 'fixed';
    rewardedBtn.style.bottom = '20px';
    rewardedBtn.style.right = '20px';
    rewardedBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    rewardedBtn.style.color = '#ffd700';
    rewardedBtn.style.padding = '10px 15px';
    rewardedBtn.style.borderRadius = '5px';
    rewardedBtn.style.cursor = 'pointer';
    rewardedBtn.style.display = 'flex';
    rewardedBtn.style.alignItems = 'center';
    rewardedBtn.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.7)';
    rewardedBtn.style.border = '2px solid #ffd700';
    rewardedBtn.style.zIndex = '1000';
    rewardedBtn.style.fontSize = '16px';
    rewardedBtn.style.fontWeight = 'bold';
    rewardedBtn.style.transition = 'all 0.3s ease';
    
    // Добавляем эффект наведения
    rewardedBtn.onmouseover = function() {
        this.style.backgroundColor = 'rgba(30, 30, 30, 0.9)';
        this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.9)';
        this.style.transform = 'scale(1.05)';
    };
    
    rewardedBtn.onmouseout = function() {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.7)';
        this.style.transform = 'scale(1)';
    };
    
    // Стили для иконки
    const iconElement = rewardedBtn.querySelector('.rewarded-icon');
    iconElement.style.marginRight = '10px';
    iconElement.style.fontSize = '20px';
    
    // Добавляем кнопку на страницу
    document.querySelector('.game-container').appendChild(rewardedBtn);
    
    // Обработчик клика
    rewardedBtn.addEventListener('click', () => {
        if (gameActive && !gamePaused) {
            // Показываем диалог с рекламой
            showAdDialog();
        }
    });
    
    console.log('Кнопка рекламы создана с текстом на языке:', currentLanguage);
}

// Функция паузы игры
function pauseGame(isManual = false) {
    if (!gameActive || gamePaused) return;
    
    console.log('Игра поставлена на паузу, isManual =', isManual);
    
    // Устанавливаем флаг ручной паузы
    window.manuallyPaused = isManual;
    
    // Ставим игру на паузу
    gamePaused = true;
    
    // Останавливаем музыку
    pauseMusic();
    
    // Создаем экран паузы, если его еще нет и это ручная пауза
    if (isManual && !document.getElementById('pauseScreen')) {
        const pauseScreen = document.createElement('div');
        pauseScreen.id = 'pauseScreen';
        pauseScreen.className = 'screen';
        pauseScreen.style.position = 'fixed';
        pauseScreen.style.top = '0';
        pauseScreen.style.left = '0';
        pauseScreen.style.width = '100%';
        pauseScreen.style.height = '100%';
        pauseScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        pauseScreen.style.display = 'flex';
        pauseScreen.style.flexDirection = 'column';
        pauseScreen.style.justifyContent = 'center';
        pauseScreen.style.alignItems = 'center';
        pauseScreen.style.zIndex = '1000';
        
        pauseScreen.innerHTML = `
            <h1 style="color: #ff00ff; text-shadow: 0 0 10px #ff00ff;">ПАУЗА</h1>
            <button id="resumeButton" style="
                background-color: #ff00ff;
                color: white;
                border: none;
                padding: 10px 20px;
                margin-top: 20px;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 0 10px #ff00ff;
            ">ПРОДОЛЖИТЬ</button>
        `;
        
        document.body.appendChild(pauseScreen);
        
        // Добавляем обработчик для кнопки возобновления
        document.getElementById('resumeButton').addEventListener('click', resumeGame);
    } else if (isManual && document.getElementById('pauseScreen')) {
        document.getElementById('pauseScreen').style.display = 'flex';
    }
    
    // Если это системная пауза (например, от SDK), не показываем экран паузы
    if (!isManual) {
        console.log('Системная пауза, экран паузы не отображается');
    }
}

// Функция возобновления игры
function resumeGame() {
    if (!gameActive || !gamePaused) return;
    
    console.log('Возобновление игры');
    
    // Сбрасываем флаг ручной паузы
    window.manuallyPaused = false;
    
    // Снимаем игру с паузы
    gamePaused = false;
    
    // Скрываем экран паузы, если он есть
    const pauseScreen = document.getElementById('pauseScreen');
    if (pauseScreen) {
        pauseScreen.style.display = 'none';
    }
    
    // Возобновляем музыку, если она включена
    if (soundEnabled) {
        playMusic();
    }
    
    // Запускаем игровой цикл
    lastFrameTime = performance.now();
    gameLoop = requestAnimationFrame(update);
    
    console.log('Игра возобновлена');
}

// Функция показа диалога подтверждения выхода
function showExitConfirmation() {
    // Ставим игру на паузу
    pauseGame(true);
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'exit-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '2000';
    
    // Создаем содержимое модального окна
    modal.innerHTML = `
        <div class="exit-content" style="
            background-color: rgba(0, 0, 0, 0.9);
            border: 2px solid #ff00ff;
            box-shadow: 0 0 20px #ff00ff;
            color: #fff;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
        ">
            <h2 style="
                color: #ff00ff;
                margin-top: 0;
                text-shadow: 0 0 10px #ff00ff;
            ">Выйти из игры?</h2>
            
            <p style="
                font-size: 18px;
                margin: 20px 0;
            ">Вы уверены, что хотите выйти из игры?</p>
            
            <div style="
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 30px;
            ">
                <button id="confirmExitBtn" style="
                    background-color: #ff00ff;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                ">Да, выйти</button>
                
                <button id="cancelExitBtn" style="
                    background-color: rgba(255, 255, 255, 0.2);
                    color: #fff;
                    border: 1px solid #fff;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                ">Отмена</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Обработчики кнопок
    document.getElementById('confirmExitBtn').addEventListener('click', () => {
        modal.remove();
        confirmExit();
    });
    
    document.getElementById('cancelExitBtn').addEventListener('click', () => {
        modal.remove();
        resumeGame();
    });
}

// Функция подтверждения выхода
function confirmExit() {
    // Останавливаем игру
    gameActive = false;
    
    // Отправляем событие выхода в SDK
    if (ysdk && ysdk.EVENTS && ysdk.EVENTS.EXIT) {
        console.log('Отправляем событие EXIT');
        ysdk.dispatchEvent(ysdk.EVENTS.EXIT);
    } else {
        console.log('SDK не доступен или не поддерживает событие EXIT');
        // Если SDK недоступен, просто перенаправляем на главную страницу
        window.location.href = '/';
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Предотвращение контекстного меню
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());
    
    // Кнопки интерфейса
    document.getElementById('startButton').addEventListener('click', () => {
        // Показываем межстраничную рекламу перед началом игры
        showInterstitialAd(() => startGame());
    });
    document.getElementById('restartButton').addEventListener('click', () => {
        // Показываем межстраничную рекламу перед рестартом
        showInterstitialAd(() => startGame());
    });
    
    // Обработчики для кнопок выбора языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
            }
        });
    });
    
    // Отслеживание движения мыши
    document.addEventListener('mousemove', handleMouseMove);
    
    // Обработка изменения размера окна
    window.addEventListener('resize', resizeCanvas);
    
    // Обработка потери фокуса вкладкой (переключение вкладок)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Пауза при переключении на другую вкладку
            if (gameActive && !gamePaused) {
                pauseGame(false);
            }
            // Дополнительно ставим музыку на паузу, даже если игра еще не началась
            pauseMusic();
        } else if (gameActive && !manuallyPaused) {
            // Возобновляем игру при возвращении, если она не в ручной паузе
            resumeGame();
        }
    });
}

// Изменение размера холста
function resizeCanvas() {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    // Если игра активна, обновляем позицию игрока
    if (player) {
        player.x = Math.min(player.x, canvasWidth - player.radius);
        player.y = Math.min(player.y, canvasHeight - player.radius);
    }
    
    // Пересоздаем звездный фон при изменении размера
    initStarBackground();
}

// Обработка движения мыши
function handleMouseMove(e) {
    if (!gameActive || !player) return;
    
    player.x = e.clientX;
    player.y = e.clientY;
    
    // Ограничение игрока границами экрана
    player.x = Math.max(player.radius, Math.min(player.x, canvasWidth - player.radius));
    player.y = Math.max(player.radius, Math.min(player.y, canvasHeight - player.radius));
}

// Функция для показа межстраничной рекламы
function showInterstitialAd(callback) {
    // Ставим музыку на паузу перед показом рекламы
    pauseMusic();
    
    if (typeof gp === 'undefined' || gp === null || !gp.ads) {
        console.log('GamePush SDK или модуль рекламы недоступен, пропускаем показ рекламы');
        // Если SDK не доступен, просто вызываем callback
        if (callback) callback();
        // Возобновляем музыку, если игра активна и не на паузе
        if (gameActive && !gamePaused && soundEnabled) {
            playMusic();
        }
        return;
    }
    
    try {
        // Проверяем доступность полноэкранной рекламы
        if (typeof gp.ads.isFullscreenAvailable !== 'undefined' && !gp.ads.isFullscreenAvailable) {
            console.log('Полноэкранная реклама недоступна');
                    if (callback) callback();
            if (gameActive && !gamePaused && soundEnabled) {
                playMusic();
            }
            return;
        }
        
        console.log('Показываем полноэкранную рекламу через GamePush SDK');
        
        // Сохраняем callback для вызова после закрытия рекламы
        let callbackCalled = false;
        const safeCallback = () => {
            if (!callbackCalled) {
                callbackCalled = true;
                    if (callback) callback();
                }
        };
        
        // Согласно документации GamePush, showFullscreen возвращает промис
        gp.ads.showFullscreen()
            .then(success => {
                console.log('Полноэкранная реклама закрыта, успех:', success);
                // Callback будет вызван после того, как обработчики событий выполнят свою работу
                setTimeout(safeCallback, 100);
            })
            .catch(error => {
                console.error('Ошибка при показе полноэкранной рекламы:', error);
                // В случае ошибки вызываем callback и восстанавливаем музыку
                safeCallback();
                if (gameActive && !gamePaused && soundEnabled) {
                    playMusic();
                }
            });
        
        // Обработка остальных действий будет выполнена через обработчики событий, 
        // установленные в setupSdkEventListeners (fullscreen:start, fullscreen:close)
        
    } catch (e) {
        console.error('Ошибка при показе рекламы через GamePush SDK:', e);
        // Возобновляем музыку, если игра активна и не на паузе
        if (gameActive && !gamePaused && soundEnabled) {
            playMusic();
        }
        // В случае исключения все равно вызываем callback
        if (callback) callback();
    }
}

// Начало игры
function startGame() {
    console.log('Начало игры');
    
    // Скрываем рекламные баннеры при начале игры
    hideAds();
    
    // Скрываем стартовый экран
    const startScreen = document.getElementById('startScreen');
    if (startScreen) startScreen.classList.add('hidden');
    
    // Скрываем экран окончания игры
    const gameOverScreen = document.getElementById('gameOverScreen');
    if (gameOverScreen) gameOverScreen.classList.add('hidden');
    
    // Показываем HUD
    const hud = document.getElementById('hud');
    if (hud) hud.classList.remove('hidden');
    
    // Инициализируем игровые переменные
    gameActive = true;
    gamePaused = false;
    window.manuallyPaused = false;
    score = 0;
    powerLevel = 0;
    difficulty = 1;
    comboCount = 0;
    comboTimer = 0;
    comboMultiplier = 1;
    shields = 0;
    
    // Обновляем отображение счета
    const scoreElement = document.getElementById('score');
    if (scoreElement) scoreElement.textContent = score;
    
    // Обновляем полосу энергии
    updatePowerBar();
    
    // Создаем игрока
    player = {
        x: canvasWidth / 2,
        y: canvasHeight / 2,
        radius: 15,
        color: '#0088ff',
        glowColor: '#00eeff'
    };
    
    // Очищаем массивы объектов
    enemies = [];
    projectiles = [];
    effects = [];
    powerUps = [];
    enemyProjectiles = [];
    
    // Удаляем существующие кнопки паузы и бонуса
    const existingPauseButton = document.getElementById('pauseButton');
    if (existingPauseButton) {
        existingPauseButton.remove();
    }
    
    const existingRewardedButton = document.getElementById('rewardedButton');
    if (existingRewardedButton) {
        existingRewardedButton.remove();
    }
    
    // Создаем кнопку паузы
    createPauseButton();
    
    // Создаем кнопку для просмотра рекламы с вознаграждением
    createRewardedButton();
    
    // Запускаем музыку
    if (soundEnabled) {
        playMusic();
    }
    
    // Отправляем событие о начале игровой сессии
    if (ysdk) {
        try {
            // События gameplay_session не существует, просто логируем начало игры
            console.log('Начало игровой сессии');
            
            // Сообщаем SDK о начале геймплея
            if (ysdk.features && ysdk.features.GameplayAPI) {
                ysdk.features.GameplayAPI.start();
            }
        } catch (e) {
            console.error('Ошибка при отправке события начала игры:', e);
        }
    }
    
    // Запускаем игровой цикл
    lastFrameTime = performance.now();
    lastEnemySpawnTime = performance.now();
    lastPowerUpSpawnTime = performance.now();
    lastEnemyShooterSpawnTime = performance.now();
    lastDifficultyIncrease = 0;
    gameLoop = requestAnimationFrame(update);
    
    console.log('Игра запущена');
}

// Конец игры
function gameOver() {
    console.log('Завершение игры');
    
    // Останавливаем игру
    gameActive = false;
    gamePaused = false;
    
    // Останавливаем игровой цикл
    cancelAnimationFrame(gameLoop);
    
    // Останавливаем музыку
    stopMusic();
    
    // Показываем экран окончания игры
    const gameOverScreen = document.getElementById('gameOverScreen');
    const finalScoreElement = document.getElementById('finalScore');
    const hudElement = document.getElementById('hud');
    
    if (gameOverScreen) {
        gameOverScreen.classList.remove('hidden');
    }
    
    if (finalScoreElement) {
        finalScoreElement.textContent = score;
    }
    
    if (hudElement) {
        hudElement.classList.add('hidden');
    }
    
    // Скрываем кнопку паузы
    const pauseButton = document.getElementById('pauseButton');
    if (pauseButton) {
        pauseButton.style.display = 'none';
    }
    
    // Скрываем кнопку бонуса
    const rewardedButton = document.getElementById('rewardedButton');
    if (rewardedButton) {
        rewardedButton.style.display = 'none';
    }
    
    // Сообщаем SDK о завершении геймплея
    if (ysdk && ysdk.features && ysdk.features.GameplayAPI) {
        ysdk.features.GameplayAPI.stop();
    }
    
    // Сохраняем рекорд
    saveHighScore(score);
    
    // Отправляем счет в таблицу лидеров
    submitScoreToLeaderboard(score);
    
    // Показываем рекламу после завершения игры
    showInterstitialAd();
    
    console.log('Игра завершена');
}

// Создание нового врага
function spawnEnemy() {
    const size = Math.random() * 20 + 20; // От 20 до 40
    let x, y;
    
    // Определяем, с какой стороны появится враг
    const side = Math.floor(Math.random() * 4);
    switch(side) {
        case 0: // Сверху
            x = Math.random() * canvasWidth;
            y = -size;
            break;
        case 1: // Справа
            x = canvasWidth + size;
            y = Math.random() * canvasHeight;
            break;
        case 2: // Снизу
            x = Math.random() * canvasWidth;
            y = canvasHeight + size;
            break;
        case 3: // Слева
            x = -size;
            y = Math.random() * canvasHeight;
            break;
    }
    
    // Расчет скорости врага
    const speed = 1 + Math.random() * 2 * difficulty;
    
    // Направление к игроку
    const angle = Math.atan2(player.y - y, player.x - x);
    const velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
    };
    
    // Создание врага
    const enemy = {
        x: x,
        y: y,
        size: size,
        velocity: velocity,
        color: '#ff0000',
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        isShooter: false
    };
    
    enemies.push(enemy);
}

// Создание нового стреляющего врага
function spawnShooterEnemy() {
    const size = Math.random() * 20 + 30; // Стреляющие враги немного больше
    let x, y;
    
    // Определяем, с какой стороны появится враг
    const side = Math.floor(Math.random() * 4);
    switch(side) {
        case 0: // Сверху
            x = Math.random() * canvasWidth;
            y = -size;
            break;
        case 1: // Справа
            x = canvasWidth + size;
            y = Math.random() * canvasHeight;
            break;
        case 2: // Снизу
            x = Math.random() * canvasWidth;
            y = canvasHeight + size;
            break;
        case 3: // Слева
            x = -size;
            y = Math.random() * canvasHeight;
            break;
    }
    
    // Расчет скорости врага (стреляющие враги немного медленнее)
    const speed = 0.8 + Math.random() * 1.5 * difficulty;
    
    // Направление к игроку
    const angle = Math.atan2(player.y - y, player.x - x);
    const velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
    };
    
    // Создание стреляющего врага
    const enemy = {
        x: x,
        y: y,
        size: size,
        velocity: velocity,
        color: '#ff6600', // Оранжевый цвет для стреляющих врагов
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        isShooter: true,
        lastShootTime: 0
    };
    
    enemies.push(enemy);
}

// Функция для стрельбы врагов
function enemyShoot(enemy) {
    if (!gameActive || !player) return;
    
    // Направление к игроку
    const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
    const velocity = {
        x: Math.cos(angle) * 5, // Скорость снаряда врага
        y: Math.sin(angle) * 5
    };
    
    // Создание снаряда
    const projectile = {
        x: enemy.x,
        y: enemy.y,
        radius: 4,
        velocity: velocity,
        color: '#ff6600', // Оранжевый цвет для снарядов врагов
        power: 1
    };
    
    enemyProjectiles.push(projectile);
    
    // Добавление эффекта выстрела
    addEffect('explosion', enemy.x, enemy.y, 15, '#ff6600');
}

// Создание нового энергетического бонуса
function spawnPowerUp() {
    // Размер бонуса увеличен
    const radius = 15;
    
    // Случайная позиция в пределах видимой области
    const x = radius + Math.random() * (canvasWidth - 2 * radius);
    const y = radius + Math.random() * (canvasHeight - 2 * radius);
    
    // Создание бонуса
    const powerUp = {
        x: x,
        y: y,
        radius: radius,
        color: '#00ff00', // Зеленый цвет
        rotation: 0,
        rotationSpeed: 0.05,
        pulseAmount: 0, // Для эффекта пульсации
        pulseDirection: 1
    };
    
    powerUps.push(powerUp);
}

// Функция создания специального бонуса
function spawnSpecialPowerUp() {
    // Размер бонуса
    const radius = 18;
    
    // Случайная позиция в пределах видимой области
    const x = radius + Math.random() * (canvasWidth - 2 * radius);
    const y = radius + Math.random() * (canvasHeight - 2 * radius);
    
    // Тип бонуса - случайный выбор
    const type = Math.random() < 0.5 ? 'shield' : 'mega';
    
    // Цвет в зависимости от типа
    const color = type === 'shield' ? '#0088ff' : '#ff00ff';
    
    // Создание бонуса
    const powerUp = {
        x: x,
        y: y,
        radius: radius,
        color: color,
        rotation: 0,
        rotationSpeed: 0.05,
        pulseAmount: 0,
        pulseDirection: 1,
        specialType: type
    };
    
    powerUps.push(powerUp);
}

// Функция для обработки специального бонуса
function processSpecialPowerUp(powerUp) {
    if (powerUp.specialType === 'shield') {
        // Даем щит
        shields++;
        
        // Визуальный эффект
        addEffect('explosion', powerUp.x, powerUp.y, 40, powerUp.color);
        
        // Показываем сообщение
        showMessage(getText('shieldObtained'), "#0088ff");
        
        // Обновляем отображение щитов
        updateShieldDisplay();
    } 
    else if (powerUp.specialType === 'mega') {
        // Воспроизводим звук мега-выстрела
        playSound('megaShoot');
        
        // Супер-выстрел - создаем выстрелы во всех направлениях
        for (let i = 0; i < 16; i++) {
            const angle = (i / 16) * Math.PI * 2;
            const velocity = {
                x: Math.cos(angle) * 10,
                y: Math.sin(angle) * 10
            };
            
            const projectile = {
                x: player.x,
                y: player.y,
                radius: 8, // Больше обычных снарядов
                velocity: velocity,
                color: '#ff00ff',
                power: 2 // Увеличенная мощность
            };
            
            projectiles.push(projectile);
        }
        
        // Визуальный эффект
        addEffect('explosion', powerUp.x, powerUp.y, 40, powerUp.color);
        
        // Показываем сообщение
        showMessage(getText('megaShot'), "#ff00ff");
    }
}

// Функция для отображения временных сообщений
function showMessage(text, color) {
    let messageElement = document.getElementById('gameMessage');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'gameMessage';
        messageElement.className = 'game-message';
        
        // Проверяем наличие элемента hud перед обращением к нему
        const hud = document.getElementById('hud');
        if (hud) {
            hud.appendChild(messageElement);
        } else {
            // Если hud не найден, добавляем к body
            document.body.appendChild(messageElement);
        }
    }
    
    // Устанавливаем сообщение
    messageElement.textContent = text;
    messageElement.style.color = color;
    messageElement.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
    
    // Анимация появления
    messageElement.style.animation = 'none';
    void messageElement.offsetWidth; // Перезапускаем анимацию
    messageElement.style.animation = 'messageAnimation 2s ease-out forwards';
}

// Обновление отображения щитов
function updateShieldDisplay() {
    // Проверяем, существует ли canvas и ctx
    if (!canvas || !ctx) return;
    
    let shieldDisplay = document.getElementById('shieldDisplay');
    const hud = document.getElementById('hud');
    
    // Если нет HUD, выходим
    if (!hud) return;
    
    if (!shieldDisplay) {
        shieldDisplay = document.createElement('div');
        shieldDisplay.id = 'shieldDisplay';
        shieldDisplay.className = 'shield-display';
        hud.appendChild(shieldDisplay);
    }
    
    if (shields > 0) {
        shieldDisplay.textContent = getText('shields', shields);
        shieldDisplay.style.display = 'block';
    } else {
        shieldDisplay.style.display = 'none';
    }
}

// Выстрел
function fireProjectile() {
    // Проверка, что игра активна и игрок существует
    if (!gameActive || !player) return;
    
    // Проверка наличия энергии
    if (powerLevel <= 0) return;
    
    try {
        // Воспроизведение звука выстрела
        playSound('shoot');
        
        // Сброс уровня энергии (теперь тратим один накопленный выстрел)
        powerLevel--;
        updatePowerBar();
        
        // Создание списка целей (все враги)
        const targets = [...enemies];
        
        // Копирование текущей позиции игрока для выстрела
        const playerX = player.x;
        const playerY = player.y;
        
        // Если нет врагов, выстрел идет прямо вверх
        if (targets.length === 0) {
            const projectile = {
                x: playerX,
                y: playerY,
                radius: 5,
                velocity: { x: 0, y: -10 },
                color: '#ff00ff',
                power: 1
            };
            projectiles.push(projectile);
        } else {
            // Для каждого врага создаем снаряд, который летит к нему
            targets.forEach(target => {
                if (!target) return; // Проверка на существование цели
                
                const angle = Math.atan2(target.y - playerY, target.x - playerX);
                const velocity = {
                    x: Math.cos(angle) * 10,
                    y: Math.sin(angle) * 10
                };
                
                const projectile = {
                    x: playerX,
                    y: playerY,
                    radius: 5,
                    velocity: velocity,
                    color: '#ff00ff',
                    power: 1
                };
                
                projectiles.push(projectile);
            });
        }
        
        // Добавление эффекта выстрела
        addEffect('explosion', playerX, playerY, 30, '#ff00ff');
    } catch (error) {
        console.error('Ошибка при выстреле:', error);
    }
}

// Обновление индикатора энергии
function updatePowerBar() {
    // Проверяем, существует ли canvas и ctx
    if (!canvas || !ctx) return;
    
    // Получаем элементы
    const powerMeter = document.getElementById('powerMeter');
    const powerBar = document.getElementById('powerBar');
    
    // Проверяем, существуют ли элементы
    if (!powerMeter || !powerBar) return;
    
    // Обновляем ширину полосы энергии
    const percentage = (powerLevel / maxPower) * 100;
    powerBar.style.width = `${percentage}%`;
    
    // Обновляем текст для отображения количества накопленных выстрелов с использованием локализации
    const powerText = getText('shots', powerLevel, maxPower);
    
    // Проверяем, существует ли элемент или создаем его
    let powerTextElement = document.getElementById('powerText');
    if (!powerTextElement) {
        powerTextElement = document.createElement('div');
        powerTextElement.id = 'powerText';
        powerTextElement.className = 'power-text';
        powerMeter.after(powerTextElement);
    }
    
    powerTextElement.textContent = powerText;
}

// Добавление визуальных эффектов
function addEffect(type, x, y, size, color) {
    const effect = {
        x: x,
        y: y,
        type: type,
        size: size,
        maxSize: size,
        color: color,
        alpha: 1,
        lifespan: type === 'wave' ? 40 : 20, // "волна" живет дольше
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1
    };
    
    effects.push(effect);
}

// Проверка столкновений
function checkCollisions() {
    // Проверяем, что игрок существует
    if (!player || !gameActive) return;
    
    try {
        // Столкновение игрока с врагами
        for (let i = 0; i < enemies.length; i++) {
            const enemy = enemies[i];
            if (!enemy) continue; // Пропускаем, если объект не существует
            
            const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
            
            if (distance < player.radius + enemy.size / 2) {
                // Проверяем наличие щита
                if (shields > 0) {
                    // Используем щит вместо проигрыша
                    shields--;
                    updateShieldDisplay();
                    
                    // Удаляем врага
                    enemies.splice(i, 1);
                    
                    // Воспроизводим звук взрыва
                    playSound('crash');
                    
                    // Визуальный эффект блокирования
                    addEffect('explosion', player.x, player.y, 60, '#0088ff');
                    
                    // Сброс комбо
                    comboCount = 0;
                    comboMultiplier = 1;
                    
                    continue;
                } else {
                    // Столкновение с игроком - конец игры
                    addEffect('explosion', player.x, player.y, 100, '#ffffff');
                    gameOver();
                    return;
                }
            }
        }
        
        // Столкновение игрока с снарядами врагов
        for (let i = enemyProjectiles.length - 1; i >= 0; i--) {
            if (i >= enemyProjectiles.length) continue;
            
            const projectile = enemyProjectiles[i];
            if (!projectile) continue;
            
            const distance = Math.hypot(player.x - projectile.x, player.y - projectile.y);
            
            if (distance < player.radius + projectile.radius) {
                // Проверяем наличие щита
                if (shields > 0) {
                    // Используем щит вместо проигрыша
                    shields--;
                    updateShieldDisplay();
                    
                    // Воспроизводим звук взрыва
                    playSound('crash');
                    
                    // Удаляем снаряд
                    enemyProjectiles.splice(i, 1);
                    
                    // Визуальный эффект блокирования
                    addEffect('explosion', player.x, player.y, 60, '#0088ff');
                    
                    continue;
                } else {
                    // Столкновение с игроком - конец игры
                    addEffect('explosion', player.x, player.y, 100, '#ffffff');
                    gameOver();
                    return;
                }
            }
        }
        
        // Столкновение игрока с энергетическими бонусами
        for (let i = powerUps.length - 1; i >= 0; i--) {
            if (i >= powerUps.length) continue; // Дополнительная проверка индекса
            
            const powerUp = powerUps[i];
            if (!powerUp) continue; // Пропускаем, если объект не существует
            
            const distance = Math.hypot(player.x - powerUp.x, player.y - powerUp.y);
            
            if (distance < player.radius + powerUp.radius) {
                // Проверяем, является ли это другим специальным бонусом
                if (powerUp.specialType) {
                    processSpecialPowerUp(powerUp);
                } else {
                    // Обработка обычного бонуса
                    // Увеличение энергии
                    powerLevel = Math.min(powerLevel + 1, maxPower);
                    updatePowerBar();
                    
                    // Визуальный эффект
                    addEffect('explosion', powerUp.x, powerUp.y, 20, '#00ff00');
                }
                
                // Удаляем бонус в любом случае
                powerUps.splice(i, 1);
            }
        }
        
        // Столкновение снарядов с врагами
        projectileLoop:
        for (let i = projectiles.length - 1; i >= 0; i--) {
            if (i >= projectiles.length) continue; // Дополнительная проверка индекса
            
            const projectile = projectiles[i];
            if (!projectile) continue; // Пропускаем, если объект не существует
            
            for (let j = enemies.length - 1; j >= 0; j--) {
                if (j >= enemies.length) continue; // Дополнительная проверка индекса
                
                const enemy = enemies[j];
                if (!enemy) continue; // Пропускаем, если объект не существует
                
                const distance = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
                
                if (distance < projectile.radius + enemy.size / 2) {
                    // Столкновение снаряда с врагом
                    addEffect('explosion', enemy.x, enemy.y, enemy.size, enemy.color);
                    
                    // Воспроизводим звук взрыва
                    playSound('crash');
                    
                    // Удаление врага и снаряда
                    enemies.splice(j, 1);
                    projectiles.splice(i, 1);
                    
                    // Увеличение счета (стреляющие враги дают больше очков)
                    // Учет комбо-множителя
                    const baseScore = enemy.isShooter ? 20 : 10;
                    const earnedScore = baseScore * comboMultiplier;
                    score += earnedScore;
                    document.getElementById('score').textContent = score;
                    
                    // Увеличиваем комбо
                    increaseCombo();
                    
                    // Эффект начисления очков
                    showScoreEffect(enemy.x, enemy.y, earnedScore);
                    
                    // Добавляем эффект взрыва
                    addEffect('explosion', enemy.x, enemy.y, 50, '#ffd700');
                    
                    continue projectileLoop; // Переходим к следующему снаряду
                }
            }
        }
    } catch (error) {
        console.error('Ошибка при проверке столкновений:', error);
    }
}

// Функция для отображения эффекта начисления очков
function showScoreEffect(x, y, points) {
    // Создаем элемент для отображения очков
    const scoreElement = document.createElement('div');
    scoreElement.className = 'floating-score';
    scoreElement.textContent = `+${points}`;
    
    // Устанавливаем позицию
    scoreElement.style.left = `${x}px`;
    scoreElement.style.top = `${y}px`;
    
    // Добавляем цвет в зависимости от размера комбо
    if (comboMultiplier >= 4) {
        scoreElement.style.color = '#ff00ff';
        scoreElement.style.fontSize = '24px';
    } else if (comboMultiplier >= 3) {
        scoreElement.style.color = '#ff77ff';
        scoreElement.style.fontSize = '22px';
    } else if (comboMultiplier >= 2) {
        scoreElement.style.color = '#ffaa00';
        scoreElement.style.fontSize = '20px';
    }
    
    // Добавляем элемент на страницу
    document.body.appendChild(scoreElement);
    
    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        if (scoreElement.parentNode) {
            scoreElement.parentNode.removeChild(scoreElement);
        }
    }, 1000);
}

// Обновление игры
function update(timestamp) {
    if (!gameActive) return;
    if (gamePaused) return; // Не обновляем игру в режиме паузы
    
    try {
        // Расчет времени прошедшего с последнего кадра
        const deltaTime = timestamp - lastFrameTime;
        lastFrameTime = timestamp;
        
        // Обновление времени игры (в секундах)
        gameTime += deltaTime / 1000;
        
        // Увеличение сложности каждые 30 секунд
        if (gameTime - lastDifficultyIncrease >= 30) {
            increaseDifficulty();
        }
        
        // Очистка экрана
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // Отрисовка звёздного фона
        drawStarBackground(deltaTime);
        
        // Обновление комбо-системы
        updateCombo(deltaTime);
        
        // Создание новых врагов
        if (timestamp - lastEnemySpawnTime > enemySpawnInterval / difficulty) {
            spawnEnemy();
            lastEnemySpawnTime = timestamp;
        }
        
        // Создание стреляющих врагов
        if (gameTime > 30 && timestamp - lastEnemyShooterSpawnTime > enemyShooterSpawnInterval / difficulty) {
            spawnShooterEnemy();
            lastEnemyShooterSpawnTime = timestamp;
        }
        
        // Создание новых энергетических бонусов
        if (timestamp - lastPowerUpSpawnTime > powerUpSpawnInterval) {
            // С 20% шансом создаем специальный бонус вместо обычного энергетического
            if (Math.random() < 0.2) {
                spawnSpecialPowerUp();
            } else {
                spawnPowerUp();
            }
            lastPowerUpSpawnTime = timestamp;
        }
        
        // Отрисовка и обновление врагов
        for (let index = 0; index < enemies.length; index++) {
            const enemy = enemies[index];
            if (!enemy) continue;
            
            // Обновление позиции
            enemy.x += enemy.velocity.x;
            enemy.y += enemy.velocity.y;
            enemy.rotation += enemy.rotationSpeed;
            
            // Стреляющие враги
            if (enemy.isShooter && gameActive) {
                // Проверяем, пора ли стрелять
                if (!enemy.lastShootTime || timestamp - enemy.lastShootTime > enemyShootInterval / difficulty) {
                    enemyShoot(enemy);
                    enemy.lastShootTime = timestamp;
                }
            }
            
            // Удаление врагов за пределами экрана (с запасом)
            if (
                enemy.x + enemy.size * 2 < 0 ||
                enemy.x - enemy.size * 2 > canvasWidth ||
                enemy.y + enemy.size * 2 < 0 ||
                enemy.y - enemy.size * 2 > canvasHeight
            ) {
                enemies.splice(index, 1);
                index--;
                continue;
            }
            
            // Отрисовка врага (квадрат с вращением)
            ctx.save();
            ctx.translate(enemy.x, enemy.y);
            ctx.rotate(enemy.rotation);
            
            // Неоновое свечение
            ctx.shadowBlur = 15;
            ctx.shadowColor = enemy.color;
            
            // Основной квадрат
            ctx.fillStyle = enemy.color;
            ctx.fillRect(-enemy.size / 2, -enemy.size / 2, enemy.size, enemy.size);
            
            // Граница
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(-enemy.size / 2, -enemy.size / 2, enemy.size, enemy.size);
            
            // Для стреляющих врагов добавляем отличительный знак
            if (enemy.isShooter) {
                ctx.beginPath();
                ctx.arc(0, 0, enemy.size / 4, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
            }
            
            ctx.restore();
        }
        
        // Отрисовка и обновление энергетических бонусов
        for (let index = 0; index < powerUps.length; index++) {
            const powerUp = powerUps[index];
            if (!powerUp) continue;
            
            // Обновление анимации
            powerUp.rotation += powerUp.rotationSpeed;
            powerUp.pulseAmount += 0.05 * powerUp.pulseDirection;
            
            if (powerUp.pulseAmount >= 1) {
                powerUp.pulseDirection = -1;
            } else if (powerUp.pulseAmount <= 0) {
                powerUp.pulseDirection = 1;
            }
            
            // Отрисовка бонуса
            ctx.save();
            ctx.translate(powerUp.x, powerUp.y);
            ctx.rotate(powerUp.rotation);
            
            // Неоновое свечение
            ctx.shadowBlur = 15;
            ctx.shadowColor = powerUp.color;
            
            // Основной круг
            ctx.beginPath();
            const pulsatingRadius = Math.max(0.1, powerUp.radius * (1 + powerUp.pulseAmount * 0.2));
            ctx.arc(0, 0, pulsatingRadius, 0, Math.PI * 2);
            ctx.fillStyle = powerUp.color;
            ctx.fill();
            
            // Внутренние детали в зависимости от типа бонуса
            if (powerUp.specialType === 'shield') {
                // Щит - рисуем шестиугольник внутри
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI * 2 / 6) * i;
                    const radius = pulsatingRadius * 0.7;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
            } 
            else if (powerUp.specialType === 'mega') {
                // Мега-выстрел - рисуем звезду внутри
                ctx.beginPath();
                for (let i = 0; i < 10; i++) {
                    const angle = (Math.PI * 2 / 10) * i;
                    const radius = i % 2 === 0 ? pulsatingRadius * 0.7 : pulsatingRadius * 0.4;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            else {
                // Обычный энергетический бонус - крестик
                ctx.beginPath();
                ctx.moveTo(-pulsatingRadius * 0.6, 0);
                ctx.lineTo(pulsatingRadius * 0.6, 0);
                ctx.moveTo(0, -pulsatingRadius * 0.6);
                ctx.lineTo(0, pulsatingRadius * 0.6);
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            
            ctx.restore();
        }
        
        // Отрисовка и обновление снарядов
        for (let index = 0; index < projectiles.length; index++) {
            const projectile = projectiles[index];
            if (!projectile) continue;
            
            // Проверка наличия свойства velocity
            if (!projectile.velocity) {
                console.error('Снаряд без свойства velocity:', projectile);
                projectiles.splice(index, 1);
                index--;
                continue;
            }
            
            // Обновление позиции
            projectile.x += projectile.velocity.x;
            projectile.y += projectile.velocity.y;
            
            // Удаление снарядов за пределами экрана
            if (
                projectile.x + projectile.radius < 0 ||
                projectile.x - projectile.radius > canvasWidth ||
                projectile.y + projectile.radius < 0 ||
                projectile.y - projectile.radius > canvasHeight
            ) {
                projectiles.splice(index, 1);
                index--;
                continue;
            }
            
            // Отрисовка снаряда
            ctx.beginPath();
            ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
            
            // Неоновое свечение
            ctx.shadowBlur = 10;
            ctx.shadowColor = projectile.color;
            
            ctx.fillStyle = projectile.color;
            ctx.fill();
            
            // След от снаряда
            addEffect('trail', projectile.x, projectile.y, projectile.radius * 0.8, projectile.color);
        }
        
        // Отрисовка и обновление снарядов врагов
        for (let index = 0; index < enemyProjectiles.length; index++) {
            const projectile = enemyProjectiles[index];
            if (!projectile) continue;
            
            // Проверка наличия свойства velocity
            if (!projectile.velocity) {
                console.error('Снаряд врага без свойства velocity:', projectile);
                enemyProjectiles.splice(index, 1);
                index--;
                continue;
            }
            
            // Обновление позиции
            projectile.x += projectile.velocity.x;
            projectile.y += projectile.velocity.y;
            
            // Удаление снарядов за пределами экрана
            if (
                projectile.x + projectile.radius < 0 ||
                projectile.x - projectile.radius > canvasWidth ||
                projectile.y + projectile.radius < 0 ||
                projectile.y - projectile.radius > canvasHeight
            ) {
                enemyProjectiles.splice(index, 1);
                index--;
                continue;
            }
            
            // Отрисовка снаряда
            ctx.beginPath();
            ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
            
            // Неоновое свечение
            ctx.shadowBlur = 10;
            ctx.shadowColor = projectile.color;
            
            ctx.fillStyle = projectile.color;
            ctx.fill();
            
            // След от снаряда
            addEffect('trail', projectile.x, projectile.y, projectile.radius * 0.8, projectile.color);
        }
        
        // Обновление и отрисовка эффектов
        for (let i = effects.length - 1; i >= 0; i--) {
            if (i >= effects.length) continue;
            
            const effect = effects[i];
            if (!effect) continue;
            
            // Уменьшение прозрачности и времени жизни
            effect.alpha -= 1 / effect.lifespan;
            effect.lifespan--;
            
            // Обновление вращения для некоторых эффектов
            if (effect.rotationSpeed) {
                effect.rotation += effect.rotationSpeed;
            }
            
            // Удаление эффектов с истекшим временем жизни
            if (effect.lifespan <= 0) {
                effects.splice(i, 1);
                continue;
            }
            
            // Отрисовка эффектов в зависимости от типа
            ctx.globalAlpha = effect.alpha;
            
            if (effect.type === 'explosion') {
                // Защита от отрицательного размера эффекта
                const currentSize = Math.max(0.1, effect.size * (1 - effect.alpha));
                
                ctx.beginPath();
                ctx.arc(effect.x, effect.y, currentSize, 0, Math.PI * 2);
                ctx.fillStyle = effect.color;
                ctx.fill();
                
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
            } else if (effect.type === 'trail') {
                // Защита от отрицательного размера эффекта
                const trailSize = Math.max(0.1, effect.size * effect.alpha);
                
                ctx.beginPath();
                ctx.arc(effect.x, effect.y, trailSize, 0, Math.PI * 2);
                ctx.fillStyle = effect.color;
                ctx.fill();
            } else if (effect.type === 'wave') {
                // Эффект расширяющейся волны
                const waveSize = effect.size * (1 - effect.alpha) * 3;
                const waveWidth = 5 * effect.alpha;
                
                ctx.beginPath();
                ctx.arc(effect.x, effect.y, waveSize, 0, Math.PI * 2);
                ctx.strokeStyle = effect.color;
                ctx.lineWidth = waveWidth;
                ctx.stroke();
                
                // Добавляем свечение
                ctx.shadowBlur = 15;
                ctx.shadowColor = effect.color;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
            
            ctx.globalAlpha = 1;
        }
        
        // Отрисовка игрока - ВАЖНО: сначала отрисовываем игрока, потом проверяем столкновения
        if (player) {
            // Неоновое свечение
            ctx.shadowBlur = 20;
            ctx.shadowColor = player.glowColor;
            
            // Отрисовка игрока (круг)
            ctx.beginPath();
            ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
            ctx.fillStyle = player.color;
            ctx.fill();
            
            // Свечение внутри
            const gradient = ctx.createRadialGradient(
                player.x, player.y, 0,
                player.x, player.y, player.radius
            );
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, player.color);
            
            ctx.beginPath();
            ctx.arc(player.x, player.y, player.radius * 0.7, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Отрисовка щита, если он есть
            if (shields > 0) {
                // Пульсирующий эффект для щита
                const shieldPulse = 1 + Math.sin(gameTime * 5) * 0.1;
                const shieldRadius = player.radius * 1.5 * shieldPulse;
                
                ctx.beginPath();
                ctx.arc(player.x, player.y, shieldRadius, 0, Math.PI * 2);
                ctx.strokeStyle = '#0088ff';
                ctx.lineWidth = 3;
                ctx.stroke();
                
                // Добавляем свечение
                ctx.shadowColor = '#0088ff';
                ctx.shadowBlur = 15;
                ctx.stroke();
            }
            
            // Сброс тени
            ctx.shadowBlur = 0;
        }
        
        // Проверка столкновений
        checkCollisions();
        
        // Автоматический выстрел с интервалами
        if (powerLevel > 0 && gameActive && !isFiring) {
            isFiring = true;
            
            // Выстрел с небольшой задержкой
            setTimeout(() => {
                try {
                    if (gameActive && player) {
                        fireProjectile();
                }
                } catch (error) {
                    console.error('Ошибка во время интервала выстрела:', error);
                } finally {
                    // Гарантированно разрешаем следующий выстрел через заданный интервал,
                    // даже если произошла ошибка
                    setTimeout(() => {
                        isFiring = false;
                    }, shotInterval);
                }
            }, 100);
        }
    } catch (error) {
        console.error('Ошибка в игровом цикле:', error);
    }
    
    // Следующий кадр
    gameLoop = requestAnimationFrame(update);
}

// Функция инициализации звёздного фона
function initStarBackground() {
    backgroundStars = [];
    
    // Создаем разное количество звезд в зависимости от размера экрана
    const numStars = Math.floor((canvasWidth * canvasHeight) / 3000);
    
    for (let i = 0; i < numStars; i++) {
        backgroundStars.push({
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            radius: Math.random() * 1.5 + 0.5,
            color: getRandomStarColor(),
            twinkleSpeed: Math.random() * 0.05 + 0.01,
            twinkleAmount: 0,
            twinkleDirection: Math.random() > 0.5 ? 1 : -1,
            velocity: Math.random() * 0.2 + 0.1 // Скорость движения звезды
        });
    }
}

// Функция для получения случайного цвета звезды
function getRandomStarColor() {
    const colors = [
        '#ffffff', // белый
        '#ffffaa', // желтоватый
        '#aaaaff', // голубоватый
        '#ffaaff'  // розоватый
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Функция отрисовки звёздного фона
function drawStarBackground(deltaTime) {
    for (let i = 0; i < backgroundStars.length; i++) {
        const star = backgroundStars[i];
        
        // Движение звезды
        star.y += star.velocity * deltaTime / 16;
        
        // Возвращаем звезду наверх если она ушла за границу
        if (star.y > canvasHeight) {
            star.y = 0;
            star.x = Math.random() * canvasWidth;
        }
        
        // Эффект мерцания
        star.twinkleAmount += star.twinkleSpeed * star.twinkleDirection;
        if (star.twinkleAmount > 1) {
            star.twinkleAmount = 1;
            star.twinkleDirection = -1;
        } else if (star.twinkleAmount < 0) {
            star.twinkleAmount = 0;
            star.twinkleDirection = 1;
        }
        
        const alpha = 0.5 + star.twinkleAmount * 0.5;
        
        // Отрисовка звезды
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// Функция для обновления и отображения комбо
function updateCombo(deltaTime) {
    if (comboCount > 0) {
        comboTimer -= deltaTime / 1000;
        
        if (comboTimer <= 0) {
            // Сброс комбо
            comboCount = 0;
            comboMultiplier = 1;
            
            // Скрываем элемент комбо
            let comboElement = document.getElementById('comboDisplay');
            if (comboElement) {
                comboElement.style.opacity = "0";
            }
        } else {
            // Обновление отображения комбо
            let comboElement = document.getElementById('comboDisplay');
            if (!comboElement) {
                comboElement = document.createElement('div');
                comboElement.id = 'comboDisplay';
                comboElement.className = 'combo-display';
                document.getElementById('hud').appendChild(comboElement);
            }
            
            comboElement.innerHTML = `${getText('combo', comboCount)}<br>${getText('multiplier', comboMultiplier)}`;
            comboElement.style.opacity = "1";
            
            // Эффект пульсации при высоком комбо
            if (comboCount >= 5) {
                const pulseScale = 1 + Math.sin(gameTime * 10) * 0.1;
                comboElement.style.transform = `scale(${pulseScale})`;
                comboElement.style.textShadow = `0 0 15px #ff00ff, 0 0 25px #ff00ff`;
            }
        }
    }
}

// Функция для увеличения комбо
function increaseCombo() {
    comboCount++;
    comboTimer = 3; // 3 секунды на продолжение комбо
    
    // Установка множителя в зависимости от размера комбо
    if (comboCount >= 15) {
        comboMultiplier = 4;
    } else if (comboCount >= 10) {
        comboMultiplier = 3;
    } else if (comboCount >= 5) {
        comboMultiplier = 2;
    } else {
        comboMultiplier = 1;
    }
    
    // Визуальный эффект при увеличении комбо
    if (comboCount % 5 === 0) {
        // Добавляем эффект "волны"
        for (let i = 0; i < 360; i += 30) {
            const angle = i * Math.PI / 180;
            const dist = 50;
            addEffect('wave', 
                player.x + Math.cos(angle) * dist, 
                player.y + Math.sin(angle) * dist, 
                40, '#ff00ff');
        }
    }
}

// Анимация стартового экрана с звездным фоном
function animateStartScreen() {
    if (gameActive) return;
    
    // Очищаем экран
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Отрисовка звёздного фона
    drawStarBackground(16); // Используем фиксированный deltaTime для плавности
    
    // Продолжаем анимацию только если игра еще не начата
    if (!gameActive) {
        requestAnimationFrame(animateStartScreen);
    }
}

// Функция создания рекламной монетки
function spawnAdCoin() {
    const radius = 20;
    
    // Случайная позиция в пределах видимой области
    const x = radius + Math.random() * (canvasWidth - 2 * radius);
    const y = radius + Math.random() * (canvasHeight - 2 * radius);
    
    // Создание монетки
    const adCoin = {
        x: x,
        y: y,
        radius: radius,
        color: '#ffd700', // Золотой цвет
        rotation: 0,
        rotationSpeed: 0.03,
        pulseAmount: 0,
        pulseDirection: 1,
        specialType: 'adCoin'
    };
    
    powerUps.push(adCoin);
}

// Функция для показа диалога с рекламой
function showAdDialog() {
    try {
        console.log('Вызвана функция showAdDialog');
        
        // Проверяем доступность GamePush SDK перед показом диалога
        if (typeof gp === 'undefined' || gp === null || !gp.ads) {
            console.error('GamePush SDK или модуль рекламы не инициализирован');
            showMessage(getText('adUnavailable'), "#ff0000");
            // Активируем бонус без рекламы
            activateAdBonus();
            return;
        }
        
        // Проверяем доступность наградной рекламы
        if (typeof gp.ads.isRewardedAvailable !== 'undefined' && !gp.ads.isRewardedAvailable) {
            console.log('Наградная реклама недоступна');
            showMessage(getText('adUnavailable'), "#ff0000");
            // Активируем бонус без рекламы
            activateAdBonus();
            return;
        }
        
        console.log('GamePush SDK доступен, показываем диалог с рекламой');
        
        // Ставим игру на паузу
        pauseGame(false);
        
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'ad-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '2000';
        
        // Создаем содержимое модального окна
    modal.innerHTML = `
            <div class="ad-content" style="
                background-color: rgba(0, 0, 0, 0.9);
                border: 3px solid #ffd700;
                box-shadow: 0 0 30px #ffd700;
                color: #fff;
                padding: 25px;
                border-radius: 15px;
                text-align: center;
                max-width: 400px;
                position: relative;
            ">
                <div style="
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #ffd700;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    box-shadow: 0 0 15px #ffd700;
                ">💥</div>
                
                <h2 style="
                    color: #ffd700;
                    margin-top: 5px;
                    text-shadow: 0 0 10px #ffd700;
                    font-size: 24px;
                    letter-spacing: 1px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
                ">${getText('adBonusTitle')}</h2>
                
                <p style="
                    font-size: 16px;
                    margin: 15px 0;
                    line-height: 1.4;
                ">${getText('adBonusDescription')}</p>
                
                <ul style="
                    text-align: left;
                    margin: 15px 0;
                    padding-left: 10px;
                    list-style-type: none;
                ">
                    <li style="
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                    ">
                        <span style="color: #ffd700; margin-right: 8px; font-size: 16px;">✓</span>
                        <span>${getText('adBonusBenefit1')}</span>
                    </li>
                    <li style="
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                    ">
                        <span style="color: #ffd700; margin-right: 8px; font-size: 16px;">✓</span>
                        <span>${getText('adBonusBenefit2')}</span>
                    </li>
                    <li style="
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                    ">
                        <span style="color: #ffd700; margin-right: 8px; font-size: 16px;">✓</span>
                        <span>${getText('adBonusBenefit3')}</span>
                    </li>
                </ul>
                
                <div class="ad-buttons" style="
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 20px;
                ">
                    <button id="watchAdBtn" style="
                        background-color: #ffd700;
                        color: #000;
                        border: none;
                        padding: 10px 15px;
                        border-radius: 5px;
                        font-weight: bold;
                        font-size: 14px;
                        cursor: pointer;
                        box-shadow: 0 0 10px #ffd700;
                    ">${getText('watchAdButton')}</button>
                    
                    <button id="skipAdBtn" style="
                        background-color: rgba(255, 255, 255, 0.2);
                        color: #fff;
                        border: 1px solid #fff;
                        padding: 10px 15px;
                        border-radius: 5px;
                        font-weight: bold;
                        font-size: 14px;
                        cursor: pointer;
                    ">${getText('cancelButton')}</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Обработчики кнопок
    document.getElementById('watchAdBtn').addEventListener('click', () => {
            console.log('Кнопка просмотра рекламы нажата');
        modal.remove();
            
            // Показываем рекламу с вознаграждением через GamePush SDK
            pauseMusic();
            
            // Реклама будет обрабатываться через события, которые мы настроили в setupSdkEventListeners
            if (typeof gp !== 'undefined' && gp !== null && gp.ads) {
                console.log('Вызываем showRewardedVideo для показа наградной рекламы');
                
                // Используем showRewardedVideo вместо showRewarded согласно документации GamePush
                try {
                    gp.ads.showRewardedVideo()
                        .then(success => {
                            console.log('Показ наградной рекламы завершен, успех:', success);
                            // Награда будет выдана через обработчик события rewarded:reward
                            if (!success) {
                                console.log('Реклама не была просмотрена до конца, награда не выдается');
                                showMessage(getText('adNotCompleted'), "#ff0000");
                                
                                // Возобновляем игру, если она была на паузе
                                if (gameActive && !manuallyPaused) {
                                    resumeGame();
                                }
                                // Возобновляем музыку
                                if (gameActive && !gamePaused && soundEnabled) {
                                    playMusic();
                                }
                            }
                        })
                        .catch(error => {
                            console.error('Ошибка при показе наградной рекламы:', error);
                            showMessage(getText('adUnavailable'), "#ff0000");
                            
                            // Возобновляем игру, если она была на паузе
                            if (gameActive && !manuallyPaused) {
                                resumeGame();
                            }
                            // Возобновляем музыку
                            if (gameActive && !gamePaused && soundEnabled) {
                                playMusic();
                            }
                        });
                } catch (e) {
                    console.error('Исключение при вызове showRewardedVideo:', e);
                    showMessage(getText('adUnavailable'), "#ff0000");
                    
                    // Возобновляем игру, если она была на паузе
                    if (gameActive && !manuallyPaused) {
                        resumeGame();
                    }
                    // Возобновляем музыку
                    if (gameActive && !gamePaused && soundEnabled) {
                        playMusic();
                    }
                }
            } else {
                console.error('Не удалось показать рекламу - SDK недоступен');
                showMessage(getText('adUnavailable'), "#ff0000");
                
                // Восстанавливаем музыку
                if (gameActive && !gamePaused && soundEnabled) {
                    playMusic();
                }
                
                // Возобновляем игру
                resumeGame();
        }
    });
    
    document.getElementById('skipAdBtn').addEventListener('click', () => {
            console.log('Кнопка отмены нажата');
        modal.remove();
            
            // Возобновляем игру
        resumeGame();
    });
        
    } catch (error) {
        console.error('Ошибка при показе диалога с рекламой:', error);
        
        // В случае ошибки отображаем сообщение и возобновляем игру
        showMessage(getText('adUnavailable'), "#ff0000");
        resumeGame();
    }
}

// Функция активации бонуса после просмотра рекламы
function activateAdBonus() {
    console.log('Вызвана функция activateAdBonus');
    
    // Если игра не активна, не активируем бонус
    if (!gameActive) {
        console.log('Игра не активна, бонус не активирован');
        return;
    }
    
    // Возобновляем игру, если она была на паузе
    if (gamePaused) {
        resumeGame();
    }
    
    // Добавляем щит
    shields += 1;
    updateShieldDisplay();
    
            // Добавляем очки
    score += 500;
    document.getElementById('score').textContent = score;
    
    // Показываем сообщение о бонусе
    showMessage(getText('bonusActivated'), "#ffd700");
    
    // Добавляем заряды для выстрелов
    powerLevel = maxPower;
    updatePowerBar();
    
    // Создаем эффект взрыва вокруг игрока
    addEffect('explosion', player.x, player.y, 200, '#ffd700');
    
    // Уничтожаем всех врагов в радиусе
    const explosionRadius = 300; // Большой радиус для уничтожения врагов
    
    // Задержка для визуального эффекта
    setTimeout(() => {
        console.log('Срабатывает основной взрыв в activateAdBonus');
        
        // Уничтожаем врагов в радиусе
        const enemiesDestroyed = enemies.filter(enemy => {
            const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
            return distance < explosionRadius;
        }).length;
        
        // Добавляем очки за уничтоженных врагов
        if (enemiesDestroyed > 0) {
            score += enemiesDestroyed * 10;
            document.getElementById('score').textContent = score;
            showMessage(getText('enemiesDestroyedPoints', enemiesDestroyed * 10), "#ffd700");
        }
        
        // Удаляем врагов и создаем эффекты взрыва
        enemies = enemies.filter(enemy => {
            const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
            if (distance < explosionRadius) {
                // Создаем эффект взрыва на месте врага
                addEffect('explosion', enemy.x, enemy.y, enemy.size * 2, '#ff0000');
                return false; // Удаляем врага
            }
            return true; // Оставляем врага
        });
        
        // Удаляем вражеские снаряды в радиусе
        enemyProjectiles = enemyProjectiles.filter(projectile => {
            const distance = Math.hypot(player.x - projectile.x, player.y - projectile.y);
            if (distance < explosionRadius) {
                // Создаем эффект взрыва на месте снаряда
                addEffect('explosion', projectile.x, projectile.y, 20, '#ff0000');
                return false; // Удаляем снаряд
            }
            return true; // Оставляем снаряд
        });
    }, 300);
}

// Загрузка звуков
function loadSounds() {
    try {
        // Звук выстрела
        sounds.shoot = new Audio('./assets/sounds/shoot.MP3');
        sounds.shoot.volume = sounds.volume;
        
        // Звук мега-выстрела
        sounds.megaShoot = new Audio('./assets/sounds/mega-shot.MP3');
        sounds.megaShoot.volume = sounds.volume;
        
        // Звук взрыва противников
        sounds.crash = new Audio('./assets/sounds/crash.MP3');
        sounds.crash.volume = sounds.volume;
        
        // Фоновая музыка
        sounds.music = new Audio('./assets/sounds/neon_music.MP3');
        sounds.music.volume = sounds.musicVolume;
        sounds.music.loop = true; // Зацикливаем музыку
        
        console.log('Звуки загружены успешно');
    } catch (error) {
        console.error('Ошибка при загрузке звуков:', error);
        soundEnabled = false;
    }
}

// Функция для воспроизведения звука
function playSound(soundName) {
    if (!soundEnabled || !sounds[soundName]) return;
    
    try {
        // Клонируем звук для возможности многократного воспроизведения
        const soundClone = sounds[soundName].cloneNode();
        soundClone.volume = sounds.volume;
        soundClone.play();
    } catch (error) {
        console.error('Ошибка при воспроизведении звука:', error);
    }
}

// Функция для запуска фоновой музыки
function playMusic() {
    if (!soundEnabled || !sounds.music) return;
    
    try {
        // Проверяем, не воспроизводится ли уже музыка
        if (sounds.music.paused) {
            const playPromise = sounds.music.play();
            
            // Современные браузеры возвращают Promise
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Ошибка при воспроизведении музыки:', error);
                    
                    // Если ошибка связана с отсутствием взаимодействия пользователя, это нормально - музыка запустится позже
                    if (error.name === 'NotAllowedError') {
                        console.log('Музыка будет воспроизведена после взаимодействия пользователя с игрой');
                    }
                });
            }
        }
    } catch (error) {
        console.error('Ошибка при запуске музыки:', error);
    }
}

// Функция для паузы фоновой музыки
function pauseMusic() {
    if (!sounds.music) return;
    
    try {
        if (!sounds.music.paused) {
            sounds.music.pause();
        }
    } catch (error) {
        console.error('Ошибка при постановке музыки на паузу:', error);
    }
}

// Функция для остановки фоновой музыки
function stopMusic() {
    if (!sounds.music) return;
    
    try {
        sounds.music.pause();
        sounds.music.currentTime = 0;
    } catch (error) {
        console.error('Ошибка при остановке музыки:', error);
    }
} 

// Функция для сохранения рекорда
function saveHighScore(score) {
    if (ysdk && ysdk.player) {
        try {
            // Получаем текущий рекорд
            const currentBestScore = localStorage.getItem('highScore') || 0;
            
            // Если текущий счет больше рекорда, обновляем
            if (score > currentBestScore) {
                localStorage.setItem('highScore', score);
                
                // Если доступен SDK, сохраняем также в облаке
                if (ysdk.player) {
                    ysdk.player.setData({
                        highScore: score
                    }).then(() => {
                        console.log('Рекорд успешно сохранен в облаке');
                    }).catch(err => {
                        console.error('Ошибка сохранения рекорда в облаке:', err);
                    });
                }
            }
        } catch (e) {
            console.error('Ошибка при сохранении рекорда:', e);
        }
    } else {
        // Если SDK недоступен, сохраняем только локально
        const currentBestScore = localStorage.getItem('highScore') || 0;
        if (score > currentBestScore) {
            localStorage.setItem('highScore', score);
        }
    }
}

// Функция для отправки счета в таблицу лидеров
function submitScoreToLeaderboard(score) {
    if (ysdk && ysdk.getLeaderboards) {
        ysdk.getLeaderboards()
            .then(lb => {
                lb.setLeaderboardScore('highscores', score);
                console.log('Счет успешно отправлен в таблицу лидеров');
            })
            .catch(err => {
                console.error('Ошибка отправки счета в таблицу лидеров:', err);
            });
    }
}

// Аудио объекты
let soundEnabled = true; // Флаг включения/выключения звуков
let sounds = {
    shoot: null, // Звук выстрела
    megaShoot: null, // Звук мега-выстрела
    crash: null, // Звук взрыва противников
    music: null, // Фоновая музыка
    volume: 0.3,  // Громкость звуков по умолчанию (30%)
    musicVolume: 0.2 // Громкость музыки (20%)
};

// Функция увеличения сложности
function increaseDifficulty() {
    difficulty += 0.2;
    lastDifficultyIncrease = gameTime;
    console.log('Сложность увеличена до:', difficulty.toFixed(1));
    
    // Эффект увеличения сложности
    addEffect('explosion', canvasWidth / 2, canvasHeight / 2, 200, '#ff0000');
    
    // Уведомление игрока с использованием локализации
    showMessage(getText('difficultyIncreased'), "#ff0000");
}

// Функция для скрытия рекламных баннеров
function hideAds() {
    console.log('Скрываем все рекламные баннеры');
    
    try {
        // Создаем элемент стиля для скрытия баннеров
        const adBlockerStyle = document.createElement('style');
        adBlockerStyle.id = 'ad-blocker-style';
        adBlockerStyle.innerHTML = `
            .gp-banner, .gp_incontent, div[class*="banner"], div[id*="banner"],
            iframe[src*="ads"], iframe[src*="banner"], .sticky-banner, .ad-container {
                display: none !important;
                position: absolute !important;
                left: -9999px !important;
                top: -9999px !important;
                visibility: hidden !important;
                opacity: 0 !important;
                width: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
            }
        `;
        
        // Добавляем стиль в head
        document.head.appendChild(adBlockerStyle);
        
        // Пытаемся найти и скрыть все баннеры через API GamePush, если доступно
        if (typeof gp !== 'undefined' && gp !== null && gp.ads && typeof gp.ads.hideBanner === 'function') {
            console.log('Вызываем hideBanner API GamePush');
            gp.ads.hideBanner();
        } else {
            console.log('GamePush SDK недоступен для скрытия баннеров через API');
        }
        
        console.log('Баннеры скрыты с помощью CSS');
    } catch (error) {
        console.error('Ошибка при скрытии баннеров:', error);
    }
}

// Функция для обновления языка интерфейса
function updateUILanguage() {
    console.log('Обновление языка интерфейса на:', currentLanguage);
    
    try {
        // Обновляем тексты на стартовом экране
        document.querySelector('#gameTitle').textContent = getText('title');
        document.querySelector('#gameInstructions').textContent = getText('instructions');
        document.querySelector('#startButton').textContent = getText('startGame');
        
        // Обновляем тексты на экране окончания игры
        document.querySelector('#gameOverScreen h1').textContent = getText('gameOver');
        
        // Обновляем текст "Ваш счет:" (без значения)
        const finalScoreTextElement = document.querySelector('#finalScoreText');
        if (finalScoreTextElement) {
            finalScoreTextElement.textContent = getText('finalScore', '').replace('{0}', '');
        }
        
        document.querySelector('#restartButton').textContent = getText('playAgain');
        
        // Обновляем тексты HUD
        const scoreTextElement = document.querySelector('#scoreText');
        if (scoreTextElement) {
            scoreTextElement.textContent = getText('score', '').replace('{0}', '');
        }
        
        // Обновляем экран паузы если он существует
        const pauseScreen = document.getElementById('pauseScreen');
        if (pauseScreen) {
            const pauseTitle = pauseScreen.querySelector('h1');
            if (pauseTitle) pauseTitle.textContent = getText('pause');
            
            const resumeButton = document.getElementById('resumeButton');
            if (resumeButton) resumeButton.textContent = getText('resume');
            
            const restartFromPauseButton = document.getElementById('restartFromPauseButton');
            if (restartFromPauseButton) restartFromPauseButton.textContent = getText('restartFromPause');
            
            const exitButton = document.getElementById('exitButton');
            if (exitButton) exitButton.textContent = getText('exit');
        }
        
        // Обновляем кнопку рекламы, удаляя старую и создавая новую
        const oldRewardedBtn = document.getElementById('rewardedAdButton');
        if (oldRewardedBtn) {
            // Удаляем старую кнопку
            oldRewardedBtn.remove();
            
            // Создаем новую кнопку с текущим языком
            createRewardedButton();
        }
        
        // Отладка состояния кнопок
        debugButtons();
        
    } catch (error) {
        console.error('Ошибка при обновлении текстов интерфейса:', error);
    }
}

// Функция для отладки состояния кнопок
function debugButtons() {
    try {
        console.log('Отладка кнопок:');
        
        // Проверяем кнопку START GAME
        const startButton = document.getElementById('startButton');
        if (startButton) {
            console.log('Кнопка START GAME: текст =', startButton.textContent, 
                         ', ожидаемый текст =', getText('startGame'),
                         ', обработчик события =', (startButton.onclick !== null || startButton._clickListeners > 0) ? 'да' : 'нет');
            
            // Переприкрепляем обработчик события
            startButton.onclick = function() {
                console.log('Кнопка START GAME нажата');
                startGame();
            };
        } else {
            console.log('Кнопка START GAME не найдена');
        }
        
        // Проверяем кнопку RESTART
        const restartButton = document.getElementById('restartButton');
        if (restartButton) {
            console.log('Кнопка RESTART: текст =', restartButton.textContent, 
                         ', ожидаемый текст =', getText('playAgain'),
                         ', обработчик события =', (restartButton.onclick !== null || restartButton._clickListeners > 0) ? 'да' : 'нет');
            
            // Переприкрепляем обработчик события
            restartButton.onclick = function() {
                console.log('Кнопка RESTART нажата');
                startGame();
            };
        } else {
            console.log('Кнопка RESTART не найдена');
        }
        
    } catch (error) {
        console.error('Ошибка при отладке кнопок:', error);
    }
}

// Функция для проверки доступности социальных функций
function checkSocialFeatures() {
    if (!gp || !gp.social) {
        console.warn('Социальные функции GamePush недоступны');
        return {
            canInvite: false,
            canShare: false
        };
    }

    return {
        canInvite: typeof gp.social.inviteFriends === 'function',
        canShare: typeof gp.social.share === 'function'
    };
}

// Функция для приглашения друзей
function inviteFriends() {
    if (!gp || !gp.social) {
        console.warn('Функция приглашения друзей недоступна');
        return;
    }

    try {
        gp.social.inviteFriends()
            .then(success => {
                console.log('Приглашение друзей:', success ? 'успешно' : 'не удалось');
            })
            .catch(error => {
                console.error('Ошибка при приглашении друзей:', error);
            });
    } catch (error) {
        console.error('Ошибка при вызове функции приглашения друзей:', error);
    }
}

// Функция для шеринга игры
function shareGame() {
    if (!gp || !gp.social) {
        console.warn('Функция шеринга недоступна');
        return;
    }

    try {
        const shareOptions = {
            title: getText('shareTitle'),
            text: getText('shareText'),
            url: window.location.href
        };

        gp.social.share(shareOptions)
            .then(success => {
                console.log('Шеринг:', success ? 'успешно' : 'не удался');
            })
            .catch(error => {
                console.error('Ошибка при шеринге:', error);
            });
    } catch (error) {
        console.error('Ошибка при вызове функции шеринга:', error);
    }
}

// Функция для создания кнопок социальных действий
function createSocialButtons() {
    const socialFeatures = checkSocialFeatures();
    
    // Создаем контейнер для социальных кнопок
    const socialContainer = document.createElement('div');
    socialContainer.id = 'socialButtons';
    socialContainer.style.position = 'fixed';
    socialContainer.style.bottom = '20px';
    socialContainer.style.right = '20px';
    socialContainer.style.zIndex = '1000';
    socialContainer.style.display = 'flex';
    socialContainer.style.gap = '10px';
    
    // Кнопка приглашения друзей
    if (socialFeatures.canInvite) {
        const inviteButton = document.createElement('button');
        inviteButton.className = 'social-button';
        inviteButton.innerHTML = '👥 ' + getText('inviteFriends');
        inviteButton.onclick = inviteFriends;
        socialContainer.appendChild(inviteButton);
    }
    
    // Кнопка шеринга
    if (socialFeatures.canShare) {
        const shareButton = document.createElement('button');
        shareButton.className = 'social-button';
        shareButton.innerHTML = '📤 ' + getText('shareGame');
        shareButton.onclick = shareGame;
        socialContainer.appendChild(shareButton);
    }
    
    // Добавляем контейнер на страницу только если есть доступные функции
    if (socialContainer.children.length > 0) {
        document.body.appendChild(socialContainer);
    }
}

// Вспомогательная функция для синхронизации звуковых настроек
function syncSoundSettings(isMuted) {
    // Обновляем внутреннюю переменную
    soundEnabled = !isMuted;
    
    // Обновляем внешний вид кнопки
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        if (isMuted) {
            soundToggle.classList.add('muted');
            soundToggle.innerHTML = '🔇';
            pauseMusic();
            stopMusic();
        } else {
            soundToggle.classList.remove('muted');
            soundToggle.innerHTML = '🔊';
            if (gameActive && !gamePaused) {
                playMusic();
            }
        }
    }
    
    console.log('Настройки звука синхронизированы:', isMuted ? 'Звук выключен' : 'Звук включен');
}
