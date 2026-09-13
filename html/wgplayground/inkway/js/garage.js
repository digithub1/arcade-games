/**
 * INKWAY — Garage (Vehicle Customization)
 * =======================================
 * Vehicle selection and cosmetic customization.
 */

window.INKWAY = window.INKWAY || {};

INKWAY.Garage = (function () {
    'use strict';

    const { $, createElement } = INKWAY.Utils;

    // Vehicle icon colors (no emojis)
    const VEHICLE_COLORS = {
        classic: '#E86B3A',
        monster: '#5B8C3E',
        rocket: '#D94040',
        ball: '#4A90D9',
        hover: '#6A5ACD'
    };

    // Vehicle icon SVGs (simple, clean)
    const VEHICLE_SVGS = {
        classic: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><path d="M4 18h24M4 18a2 2 0 01-2-2v-3l3-5h18l3 5v3a2 2 0 01-2 2"/><circle cx="8" cy="20" r="3" fill="#FFF" stroke="#FFF"/><circle cx="24" cy="20" r="3" fill="#FFF" stroke="#FFF"/><line x1="2" y1="13" x2="30" y2="13"/></svg>`,
        monster: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><rect x="5" y="10" width="22" height="8" rx="2"/><circle cx="8" cy="22" r="5" fill="none" stroke="#FFF" stroke-width="2.5"/><circle cx="24" cy="22" r="5" fill="none" stroke="#FFF" stroke-width="2.5"/></svg>`,
        rocket: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><path d="M16 4 L24 16 L24 24 L8 24 L8 16 Z"/><circle cx="16" cy="18" r="3"/><path d="M10 24 L8 28 M22 24 L24 28"/></svg>`,
        ball: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#FFF" stroke-width="2"><circle cx="16" cy="16" r="12"/><path d="M8 8 Q16 16 24 8 M8 24 Q16 16 24 24"/></svg>`,
        hover: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><path d="M4 16h24l-2-6H6L4 16z"/><path d="M6 18h20" stroke-dasharray="3 2"/><path d="M8 20h16" stroke-dasharray="2 2" opacity="0.6"/></svg>`
    };

    function init() {
        _render();
    }

    function _render() {
        const container = $('#garage-content');
        if (!container) return;
        container.innerHTML = '';

        const vehicles = INKWAY_CONFIG.VEHICLES || [];
        for (const vehicle of vehicles) {
            const unlocked = INKWAY.Storage.isVehicleUnlocked(vehicle.id);
            const active = INKWAY.Storage.getActiveVehicle() === vehicle.id;

            const card = createElement('div',
                `vehicle-card ${active ? 'active' : ''} ${unlocked ? '' : 'locked'}`
            );

            const bgColor = VEHICLE_COLORS[vehicle.id] || '#888';
            const svg = VEHICLE_SVGS[vehicle.id] || '';

            card.innerHTML = `
                <div class="vehicle-icon" style="background: ${bgColor}">
                    ${svg}
                </div>
                <div class="vehicle-info">
                    <div class="vehicle-name">${vehicle.name}</div>
                    <div class="vehicle-trait">${unlocked ? vehicle.trait : _getUnlockText(vehicle.unlock)}</div>
                </div>
                ${active ? '<span style="color: var(--clr-primary); font-size: 24px; font-weight: bold;">&#10003;</span>' : ''}
            `;

            if (unlocked && !active) {
                card.addEventListener('click', () => {
                    INKWAY.Storage.setActiveVehicle(vehicle.id);
                    INKWAY.Vehicle.setType(vehicle.id);
                    _render();
                });
            }

            container.appendChild(card);
        }
    }

    function _getUnlockText(unlock) {
        const map = {
            'default': 'Available',
            'world_1_complete': 'Complete World 1 to unlock',
            'world_2_complete': 'Complete World 2 to unlock',
            'world_4_complete': 'Complete World 4 to unlock',
            'stars_30': 'Earn 30 stars to unlock'
        };
        return map[unlock] || 'Locked';
    }

    return { init };
})();
