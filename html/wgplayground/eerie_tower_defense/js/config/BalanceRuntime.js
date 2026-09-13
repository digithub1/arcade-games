




(function initBalanceRuntime(global) {
    const OVERRIDE_KEY = 'td_balance_override';
    const DEV_FLAG_KEY = 'td_balance_dev';

    function isObject(value) {
        return value && typeof value === 'object' && !Array.isArray(value);
    }

    function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function deepMerge(base, patch) {
        if (!isObject(base) || !isObject(patch)) {
            return patch;
        }

        const out = { ...base };
        Object.keys(patch).forEach((key) => {
            if (isObject(base[key]) && isObject(patch[key])) {
                out[key] = deepMerge(base[key], patch[key]);
            } else {
                out[key] = patch[key];
            }
        });

        return out;
    }

    function deepGet(obj, path) {
        if (!obj || !path) return undefined;
        const parts = String(path).split('.');
        let cur = obj;
        for (let i = 0; i < parts.length; i++) {
            if (cur == null) return undefined;
            cur = cur[parts[i]];
        }
        return cur;
    }

    function getLocalStorage() {
        try {
            return global.localStorage;
        } catch (_) {
            return null;
        }
    }

    function isDevMode() {
        const ls = getLocalStorage();
        const fromLs = ls ? ls.getItem(DEV_FLAG_KEY) === '1' : false;
        const fromQuery = typeof location !== 'undefined' && /(^|[?&])dev=1(&|$)/.test(location.search || '');
        return fromLs || fromQuery;
    }

    function readOverride() {
        const ls = getLocalStorage();
        if (!ls) return null;
        const raw = ls.getItem(OVERRIDE_KEY);
        if (!raw) return null;

        try {
            const parsed = JSON.parse(raw);
            return isObject(parsed) ? parsed : null;
        } catch (error) {
            console.warn('BalanceRuntime: invalid override JSON, ignored', error);
            return null;
        }
    }

    const base = global.BalanceConfig || {};
    const override = isDevMode() ? (readOverride() || {}) : {};
    const resolved = deepMerge(deepClone(base), override);

    global.BalanceRuntime = {
        get(path, fallbackValue) {
            const value = deepGet(resolved, path);
            return value === undefined ? fallbackValue : value;
        },

        getAll() {
            return deepClone(resolved);
        },

        isDevMode,

        setDevMode(enabled) {
            const ls = getLocalStorage();
            if (!ls) return;
            ls.setItem(DEV_FLAG_KEY, enabled ? '1' : '0');
        },

        setLocalOverride(overrideObject) {
            const ls = getLocalStorage();
            if (!ls) return;
            if (!isObject(overrideObject)) {
                throw new Error('BalanceRuntime.setLocalOverride expects an object');
            }
            ls.setItem(OVERRIDE_KEY, JSON.stringify(overrideObject));
        },

        clearLocalOverride() {
            const ls = getLocalStorage();
            if (!ls) return;
            ls.removeItem(OVERRIDE_KEY);
        }
    };
})(window);
