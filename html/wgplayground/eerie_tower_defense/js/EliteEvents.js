(function initEliteEvents(global) {
    const EVENTS = [
        {
            id: 'moonwell',
            themes: ['neutral', 'frontier', 'eclipse'],
            titleKey: 'eliteEvent_moonwell_title',
            descKey: 'eliteEvent_moonwell_desc',
            choices: [
                { id: 'stabilize', kind: 'safe', labelKey: 'eliteChoice_stabilize_label', descKey: 'eliteChoice_stabilize_desc', effects: { healPercent: 0.18 } },
                { id: 'channel', kind: 'economy', labelKey: 'eliteChoice_channel_label', descKey: 'eliteChoice_channel_desc', effects: { addModifier: 'crystal_storm' } },
                { id: 'overload', kind: 'risk', labelKey: 'eliteChoice_overload_label', descKey: 'eliteChoice_overload_desc', effects: { immediateAttackSpeedMult: 0.08, addModifier: 'thin_defenses' } }
            ]
        },
        {
            id: 'armory',
            themes: ['neutral', 'frontier', 'greed'],
            titleKey: 'eliteEvent_armory_title',
            descKey: 'eliteEvent_armory_desc',
            choices: [
                { id: 'bolts', kind: 'safe', labelKey: 'eliteChoice_bolts_label', descKey: 'eliteChoice_bolts_desc', effects: { immediateDamageMult: 0.1 } },
                { id: 'contract', kind: 'risk', labelKey: 'eliteChoice_contract_label', descKey: 'eliteChoice_contract_desc', effects: { gold: 90, addModifier: 'siege_night' } },
                { id: 'salvage', kind: 'economy', labelKey: 'eliteChoice_salvage_label', descKey: 'eliteChoice_salvage_desc', effects: { addModifier: 'greedy_harvest' } }
            ]
        },
        {
            id: 'shrine',
            themes: ['neutral', 'frontier', 'attrition'],
            titleKey: 'eliteEvent_shrine_title',
            descKey: 'eliteEvent_shrine_desc',
            choices: [
                { id: 'ward', kind: 'safe', labelKey: 'eliteChoice_ward_label', descKey: 'eliteChoice_ward_desc', effects: { healPercent: 0.12, addModifier: 'frontier_watch' } },
                { id: 'tribute', kind: 'risk', labelKey: 'eliteChoice_tribute_label', descKey: 'eliteChoice_tribute_desc', effects: { crystals: 4, addModifier: 'merciless_bosses' } },
                { id: 'gamble', kind: 'economy', labelKey: 'eliteChoice_gamble_label', descKey: 'eliteChoice_gamble_desc', effects: { gold: 120, addModifier: 'moon_rush' } }
            ]
        },
        {
            id: 'watchfire',
            themes: ['frontier'],
            titleKey: 'eliteEvent_watchfire_title',
            descKey: 'eliteEvent_watchfire_desc',
            choices: [
                { id: 'reinforce', kind: 'safe', labelKey: 'eliteChoice_reinforce_label', descKey: 'eliteChoice_reinforce_desc', effects: { immediateMaxHealthMult: 0.12, immediateHealthRegenFlat: 0.08 } },
                { id: 'ration', kind: 'economy', labelKey: 'eliteChoice_ration_label', descKey: 'eliteChoice_ration_desc', effects: { gold: 80, addModifier: 'scavenger_routes' } },
                { id: 'advance', kind: 'risk', labelKey: 'eliteChoice_advance_label', descKey: 'eliteChoice_advance_desc', effects: { immediateDamageMult: 0.08, addModifier: 'hunter_mark' } }
            ]
        },
        {
            id: 'signal_fire',
            themes: ['frontier'],
            titleKey: 'eliteEvent_signal_fire_title',
            descKey: 'eliteEvent_signal_fire_desc',
            choices: [
                { id: 'beacon', kind: 'safe', labelKey: 'eliteChoice_beacon_label', descKey: 'eliteChoice_beacon_desc', effects: { immediateRangeFlat: 18, addModifier: 'fortified_core' } },
                { id: 'supply_line', kind: 'economy', labelKey: 'eliteChoice_supply_line_label', descKey: 'eliteChoice_supply_line_desc', effects: { gold: 70, crystals: 2 } },
                { id: 'flanking', kind: 'risk', labelKey: 'eliteChoice_flanking_label', descKey: 'eliteChoice_flanking_desc', effects: { immediateAttackSpeedMult: 0.06, addModifier: 'moon_rush' } }
            ]
        },
        {
            id: 'war_chest',
            themes: ['neutral', 'frontier', 'greed'],
            titleKey: 'eliteEvent_war_chest_title',
            descKey: 'eliteEvent_war_chest_desc',
            choices: [
                { id: 'secure_cache', kind: 'safe', labelKey: 'eliteChoice_secure_cache_label', descKey: 'eliteChoice_secure_cache_desc', effects: { healPercent: 0.1, immediateDefenseFlat: 0.03 } },
                { id: 'coin_share', kind: 'economy', labelKey: 'eliteChoice_coin_share_label', descKey: 'eliteChoice_coin_share_desc', effects: { gold: 130, crystals: 2 } },
                { id: 'break_seals', kind: 'risk', labelKey: 'eliteChoice_break_seals_label', descKey: 'eliteChoice_break_seals_desc', effects: { immediateDamageMult: 0.1, addModifier: 'hunter_mark' } }
            ]
        },
        {
            id: 'brood_nest',
            themes: ['swarm'],
            titleKey: 'eliteEvent_brood_nest_title',
            descKey: 'eliteEvent_brood_nest_desc',
            choices: [
                { id: 'burn_nest', kind: 'safe', labelKey: 'eliteChoice_burn_nest_label', descKey: 'eliteChoice_burn_nest_desc', effects: { immediateDamageMult: 0.08, immediateRangeFlat: 12 } },
                { id: 'harvest_eggs', kind: 'economy', labelKey: 'eliteChoice_harvest_eggs_label', descKey: 'eliteChoice_harvest_eggs_desc', effects: { gold: 110, addModifier: 'splitter_bloom' } },
                { id: 'draw_them_in', kind: 'risk', labelKey: 'eliteChoice_draw_them_in_label', descKey: 'eliteChoice_draw_them_in_desc', effects: { crystals: 4, addModifier: 'moon_rush' } }
            ]
        },
        {
            id: 'husk_market',
            themes: ['swarm'],
            titleKey: 'eliteEvent_husk_market_title',
            descKey: 'eliteEvent_husk_market_desc',
            choices: [
                { id: 'seal_gates', kind: 'safe', labelKey: 'eliteChoice_seal_gates_label', descKey: 'eliteChoice_seal_gates_desc', effects: { addModifier: 'grave_chill' } },
                { id: 'salvage_chitin', kind: 'economy', labelKey: 'eliteChoice_salvage_chitin_label', descKey: 'eliteChoice_salvage_chitin_desc', effects: { gold: 95, addModifier: 'iron_convoy' } },
                { id: 'frenzy_bait', kind: 'risk', labelKey: 'eliteChoice_frenzy_bait_label', descKey: 'eliteChoice_frenzy_bait_desc', effects: { immediateAttackSpeedMult: 0.1, addModifier: 'glass_cannon' } }
            ]
        },
        {
            id: 'field_hospital',
            themes: ['attrition'],
            titleKey: 'eliteEvent_field_hospital_title',
            descKey: 'eliteEvent_field_hospital_desc',
            choices: [
                { id: 'mend_walls', kind: 'safe', labelKey: 'eliteChoice_mend_walls_label', descKey: 'eliteChoice_mend_walls_desc', effects: { healPercent: 0.2, immediateDefenseFlat: 0.04 } },
                { id: 'cut_rations', kind: 'economy', labelKey: 'eliteChoice_cut_rations_label', descKey: 'eliteChoice_cut_rations_desc', effects: { gold: 100, addModifier: 'blood_tax' } },
                { id: 'stimulants', kind: 'risk', labelKey: 'eliteChoice_stimulants_label', descKey: 'eliteChoice_stimulants_desc', effects: { immediateAttackSpeedMult: 0.08, addModifier: 'healer_mist' } }
            ]
        },
        {
            id: 'ossuary_gate',
            themes: ['attrition'],
            titleKey: 'eliteEvent_ossuary_gate_title',
            descKey: 'eliteEvent_ossuary_gate_desc',
            choices: [
                { id: 'ward_bones', kind: 'safe', labelKey: 'eliteChoice_ward_bones_label', descKey: 'eliteChoice_ward_bones_desc', effects: { addModifier: 'fortified_core' } },
                { id: 'grave_tithe', kind: 'economy', labelKey: 'eliteChoice_grave_tithe_label', descKey: 'eliteChoice_grave_tithe_desc', effects: { crystals: 3, addModifier: 'grave_chill' } },
                { id: 'break_seal', kind: 'risk', labelKey: 'eliteChoice_break_seal_label', descKey: 'eliteChoice_break_seal_desc', effects: { immediateDamageMult: 0.12, addModifier: 'rotting_soil' } }
            ]
        },
        {
            id: 'toll_house',
            themes: ['greed'],
            titleKey: 'eliteEvent_toll_house_title',
            descKey: 'eliteEvent_toll_house_desc',
            choices: [
                { id: 'pay_guards', kind: 'safe', labelKey: 'eliteChoice_pay_guards_label', descKey: 'eliteChoice_pay_guards_desc', effects: { immediateDefenseFlat: 0.05, immediateMaxHealthMult: 0.08 } },
                { id: 'smuggle_cache', kind: 'economy', labelKey: 'eliteChoice_smuggle_cache_label', descKey: 'eliteChoice_smuggle_cache_desc', effects: { gold: 140, addModifier: 'gilded_debt' } },
                { id: 'rig_the_scales', kind: 'risk', labelKey: 'eliteChoice_rig_the_scales_label', descKey: 'eliteChoice_rig_the_scales_desc', effects: { crystals: 5, addModifier: 'blood_tax' } }
            ]
        },
        {
            id: 'black_caravan',
            themes: ['greed'],
            titleKey: 'eliteEvent_black_caravan_title',
            descKey: 'eliteEvent_black_caravan_desc',
            choices: [
                { id: 'escort', kind: 'safe', labelKey: 'eliteChoice_escort_label', descKey: 'eliteChoice_escort_desc', effects: { addModifier: 'iron_convoy' } },
                { id: 'buy_low', kind: 'economy', labelKey: 'eliteChoice_buy_low_label', descKey: 'eliteChoice_buy_low_desc', effects: { gold: 120, crystals: 2 } },
                { id: 'loot_train', kind: 'risk', labelKey: 'eliteChoice_loot_train_label', descKey: 'eliteChoice_loot_train_desc', effects: { immediateDamageMult: 0.08, addModifier: 'cursed_precision' } }
            ]
        },
        {
            id: 'eclipse_mirror',
            themes: ['eclipse'],
            titleKey: 'eliteEvent_eclipse_mirror_title',
            descKey: 'eliteEvent_eclipse_mirror_desc',
            choices: [
                { id: 'dim_reflection', kind: 'safe', labelKey: 'eliteChoice_dim_reflection_label', descKey: 'eliteChoice_dim_reflection_desc', effects: { healPercent: 0.15, addModifier: 'omen_lantern' } },
                { id: 'catch_starlight', kind: 'economy', labelKey: 'eliteChoice_catch_starlight_label', descKey: 'eliteChoice_catch_starlight_desc', effects: { crystals: 6, addModifier: 'crystal_storm' } },
                { id: 'shatter_glass', kind: 'risk', labelKey: 'eliteChoice_shatter_glass_label', descKey: 'eliteChoice_shatter_glass_desc', effects: { immediateAttackSpeedMult: 0.08, immediateDamageMult: 0.08, addModifier: 'hollow_victory' } }
            ]
        },
        {
            id: 'void_obelisk',
            themes: ['eclipse'],
            titleKey: 'eliteEvent_void_obelisk_title',
            descKey: 'eliteEvent_void_obelisk_desc',
            choices: [
                { id: 'anchor_mind', kind: 'safe', labelKey: 'eliteChoice_anchor_mind_label', descKey: 'eliteChoice_anchor_mind_desc', effects: { immediateRangeFlat: 22, immediateHealthRegenFlat: 0.12 } },
                { id: 'bottle_echoes', kind: 'economy', labelKey: 'eliteChoice_bottle_echoes_label', descKey: 'eliteChoice_bottle_echoes_desc', effects: { crystals: 5, gold: 70, addModifier: 'shatter_charge' } },
                { id: 'accept_omen', kind: 'risk', labelKey: 'eliteChoice_accept_omen_label', descKey: 'eliteChoice_accept_omen_desc', effects: { addModifier: 'merciless_bosses', immediateDamageMult: 0.12 } }
            ]
        },
        {
            id: 'ashen_bell',
            themes: ['attrition', 'eclipse'],
            titleKey: 'eliteEvent_ashen_bell_title',
            descKey: 'eliteEvent_ashen_bell_desc',
            choices: [
                { id: 'steady_toll', kind: 'safe', labelKey: 'eliteChoice_steady_toll_label', descKey: 'eliteChoice_steady_toll_desc', effects: { immediateHealthRegenFlat: 0.12, addModifier: 'fortified_core' } },
                { id: 'echo_trade', kind: 'economy', labelKey: 'eliteChoice_echo_trade_label', descKey: 'eliteChoice_echo_trade_desc', effects: { gold: 80, crystals: 4, addModifier: 'omen_lantern' } },
                { id: 'ring_alarm', kind: 'risk', labelKey: 'eliteChoice_ring_alarm_label', descKey: 'eliteChoice_ring_alarm_desc', effects: { immediateAttackSpeedMult: 0.08, addModifier: 'merciless_bosses' } }
            ]
        }
    ];

    const manager = {
        shownWaves: {},
        activeEvent: null,

        resetRun() {
            this.shownWaves = {};
            this.activeEvent = null;
        },

        shouldTrigger(wave) {
            const normalizedWave = Number.isFinite(wave) ? Math.max(1, Math.floor(wave)) : 0;
            if (normalizedWave <= 0 || normalizedWave % 5 !== 0) {
                return false;
            }
            return !this.shownWaves[normalizedWave];
        },

        pickEvent(stage) {
            const theme = typeof StageThemes !== 'undefined' ? StageThemes.getThemeId(stage) : 'frontier';
            const weighted = EVENTS.filter((event) => {
                const themes = Array.isArray(event.themes) ? event.themes : ['neutral'];
                return themes.includes('neutral') || themes.includes(theme);
            });
            const picked = weighted[Math.floor(Math.random() * weighted.length)];
            return picked || EVENTS[0];
        },

        createEventForWave(stage, wave) {
            const picked = this.pickEvent(stage);
            const eventChoices = Array.isArray(picked && picked.choices)
                ? picked.choices.map((choice) => ({ ...choice, effects: { ...(choice.effects || {}) } }))
                : [];

            if (wave % 10 === 0 && typeof RunModifiers !== 'undefined' && RunModifiers && typeof RunModifiers.getPactOffers === 'function') {
                const pactOffers = RunModifiers.getPactOffers({
                    stage,
                    wave,
                    source: 'elite',
                    limit: 1
                });
                pactOffers.forEach((offer) => eventChoices.push(offer));
            }

            this.shownWaves[wave] = true;
            this.activeEvent = {
                wave,
                stage,
                event: picked
            };
            if (this.activeEvent && this.activeEvent.event) {
                this.activeEvent.event = {
                    ...picked,
                    choices: eventChoices
                };
            }
            return this.activeEvent;
        },

        resolveChoice(game, choiceId) {
            if (!this.activeEvent || !this.activeEvent.event) {
                return null;
            }
            const choice = (this.activeEvent.event.choices || []).find((entry) => entry.id === choiceId);
            if (!choice) {
                return null;
            }
            if (typeof RunModifiers !== 'undefined') {
                RunModifiers.applyChoiceEffects(choice.effects, game);
                RunModifiers.rememberChoice(this.activeEvent.event.id, choice.id);
            }
            const resolved = {
                eventId: this.activeEvent.event.id,
                choiceId: choice.id,
                wave: this.activeEvent.wave
            };
            this.activeEvent = null;
            return resolved;
        }
    };

    global.EliteEvents = manager;
})(window);
