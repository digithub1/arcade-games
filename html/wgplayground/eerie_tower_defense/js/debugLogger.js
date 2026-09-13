





(function initDebugLogger(global) {
    const STORAGE_KEY = 'td_debug_logs';
    const CONSOLE_MODE_KEY = 'td_console_mode';

    const nativeConsole = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console)
    };

    const noisyPatterns = [
        /\[gamepush dev\]/i,
        /player_not_found/i,
        /scheduler_not_found/i,
        /uniques\s+error:register/i,
        /leaderboard\s+error:fetch/i
    ];

    function readEnabled() {
        try {
            return localStorage.getItem(STORAGE_KEY) === '1';
        } catch (_) {
            return false;
        }
    }

    function readConsoleMode() {
        try {
            const value = localStorage.getItem(CONSOLE_MODE_KEY);
            if (value === 'verbose' || value === 'clean' || value === 'silent') {
                return value;
            }
        } catch (_) {
            
        }
        return 'clean';
    }

    function stringifyArg(arg) {
        if (typeof arg === 'string') {
            return arg;
        }

        try {
            return JSON.stringify(arg);
        } catch (_) {
            return String(arg);
        }
    }

    function hasNoisyPattern(args) {
        const text = args.map((arg) => stringifyArg(arg)).join(' ');
        return noisyPatterns.some((pattern) => pattern.test(text));
    }

    function shouldOutput(methodName, args, state) {
        if (methodName === 'error') {
            return true;
        }

        if (state.enabled || state.consoleMode === 'verbose') {
            return true;
        }

        if (state.consoleMode === 'silent') {
            return false;
        }

        if (methodName === 'warn') {
            return !hasNoisyPattern(args);
        }

        return false;
    }

    function emit(methodName, args, state, force = false) {
        if (force || shouldOutput(methodName, args, state)) {
            nativeConsole[methodName](...args);
        }
    }

    const DebugLogger = {
        enabled: readEnabled(),
        consoleMode: readConsoleMode(),

        setEnabled(value) {
            this.enabled = Boolean(value);
            try {
                localStorage.setItem(STORAGE_KEY, this.enabled ? '1' : '0');
            } catch (_) {
                
            }
        },

        


        setConsoleMode(mode) {
            const normalized = (mode || '').toLowerCase();
            if (normalized !== 'verbose' && normalized !== 'clean' && normalized !== 'silent') {
                return false;
            }

            this.consoleMode = normalized;
            try {
                localStorage.setItem(CONSOLE_MODE_KEY, normalized);
            } catch (_) {
                
            }

            nativeConsole.info('[DebugLogger] console mode:', normalized);
            return true;
        },

        log(...args) {
            emit('log', args, this, this.enabled);
        },

        warn(...args) {
            emit('warn', args, this, this.enabled);
        },

        error(...args) {
            emit('error', args, this, true);
        }
    };

    console.log = function patchedConsoleLog(...args) {
        emit('log', args, DebugLogger);
    };

    console.info = function patchedConsoleInfo(...args) {
        emit('info', args, DebugLogger);
    };

    console.warn = function patchedConsoleWarn(...args) {
        emit('warn', args, DebugLogger);
    };

    console.error = function patchedConsoleError(...args) {
        emit('error', args, DebugLogger, true);
    };

    global.DebugLogger = DebugLogger;
})(window);
