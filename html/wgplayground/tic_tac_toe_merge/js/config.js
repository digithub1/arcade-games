/**
 * Environment-based configuration for TicTacToe Merge.
 * Detects environment and provides appropriate WebSocket URL.
 */

(function(window) {
    'use strict';

    const Config = {
        // Environment detection
        getEnvironment: function() {
            const hostname = window.location.hostname;

            if (hostname === 'localhost' || hostname === '127.0.0.1') {
                return 'development';
            } else {
                return 'production'; // Default for unknown hosts
            }
        },

        // WebSocket URL configuration
        getWebSocketUrl: function() {
            const env = this.getEnvironment();

            if (env === 'production') {
                // Production: secure WebSocket to ws.gameous.ru
                return 'wss://ws.gameous.ru';
            } else {
                // Development: local WebSocket server
                return 'ws://localhost:8887';
            }
        },

        // GamePush configuration (same for all environments)
        gamePush: {
            projectId: 26225,
            publicToken: 'vAfpBdBTt3HC9EvVF5xngKDMpIERjhBF',
            leaderboardId: 28636
        },

        // Logging configuration
        enableDebugLogging: function() {
            return this.getEnvironment() === 'development';
        }
    };

    // Expose globally
    window.TicTacToeConfig = Config;

    // Log environment on startup
    console.log('[Config] Environment:', Config.getEnvironment());
    console.log('[Config] WebSocket URL:', Config.getWebSocketUrl());

})(window);
