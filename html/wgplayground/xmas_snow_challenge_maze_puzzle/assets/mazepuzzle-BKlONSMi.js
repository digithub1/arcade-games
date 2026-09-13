const t=`<template data-template="mazepuzzle">
	<div class="view-maze-puzzle">
		<div class="maze-container">
			<div
				class="settings-dropdown-container dev-settings-container"
			></div>
			<div id="game-container"></div>
			<div class="buffs">
				<button class="aspect-ratio-width buff" data-action="buff-clue">
					<div
						class="aspect-ratio-width buff-icon kit-icon clue"
					></div>
					<div class="buff-counter"></div>
				</button>
				<button class="aspect-ratio-width buff" data-action="buff-wand">
					<div
						class="aspect-ratio-width buff-icon kit-icon wand"
					></div>
					<div class="buff-counter"></div>
				</button>
			</div>
			<div class="dpad-container"></div>
		</div>
	</div>
</template>


<template data-template="maze-puzzle-editor">
	<div class="view-maze-puzzle-editor">
		<div class="mini-game-container">
			<div class="info">
				<button
					class="aspect-ratio-width button-save"
					data-action="save-level"
				>
					<div class="aspect-ratio-width kit-icon save"></div>
				</button>
				<div
					class="settings-dropdown-container dev-settings-container"
				></div>
			</div>
			<div class="grid"></div>
			<div class="bottom-menu">
				<div class="toolbar">
					<div class="tools">
						<button
							class="place active"
							data-action="tool-place"
						></button>
						<button
							class="remove"
							data-action="tool-remove"
						></button>
					</div>
				</div>
				<div class="palette">
					<button class="card" data-type="car">
						<div class="icon car"></div>
					</button>
					<button class="card" data-type="exit">
						<div class="icon exit"></div>
					</button>
					<button class="card" data-type="rotate bottom-right">
						<div class="icon rotate bottom-right"></div>
					</button>
					<button class="card" data-type="rotate bottom-left">
						<div class="icon rotate bottom-left"></div>
					</button>
					<button class="card" data-type="rotate top-right">
						<div class="icon rotate icon top-right"></div>
					</button>
					<button class="card" data-type="rotate top-left">
						<div class="icon rotate icon top-left"></div>
					</button>
					<button class="card" data-type="portal">
						<div class="icon portal"></div>
					</button>
					<button class="card" data-type="portal-dir up">
						<div class="icon portal-dir up"></div>
					</button>
					<button class="card" data-type="portal-dir down">
						<div class="icon portal-dir down"></div>
					</button>
					<button class="card" data-type="portal-dir right">
						<div class="icon portal-dir right"></div>
					</button>
					<button class="card" data-type="portal-dir left">
						<div class="icon portal-dir left"></div>
					</button>
					<button class="card" data-type="wall1">
						<div class="icon wall wall1 active"></div>
					</button>
					<button class="card" data-type="wall2">
						<div class="icon wall wall2 active"></div>
					</button>
					<button class="card" data-type="wall3">
						<div class="icon wall wall3 active"></div>
					</button>
					<button class="card" data-type="wall4">
						<div class="icon wall wall4 active"></div>
					</button>
					<button class="card" data-type="wall5">
						<div class="icon wall wall5 active"></div>
					</button>
					<button class="card" data-type="wall6">
						<div class="icon wall wall6 active"></div>
					</button>
					<button class="card" data-type="wall7">
						<div class="icon wall wall7 active"></div>
					</button>
					<button class="card" data-type="wall8">
						<div class="icon wall wall8 active"></div>
					</button>
					<button class="card" data-type="wall9">
						<div class="icon wall wall9 active"></div>
					</button>
					<button class="card" data-type="wall10">
						<div class="icon wall wall10 active"></div>
					</button>
					<button class="card" data-type="wall11">
						<div class="icon wall wall11 active"></div>
					</button>
					<button class="card" data-type="wall12">
						<div class="icon wall wall12 active"></div>
					</button>
					<button class="card" data-type="wall13">
						<div class="icon wall wall13 active"></div>
					</button>
					<button class="card" data-type="wall14">
						<div class="icon wall wall14 active"></div>
					</button>
					<button class="card" data-type="wall15">
						<div class="icon wall wall15 active"></div>
					</button>
					<button class="card" data-type="wall16">
						<div class="icon wall wall16 active"></div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
`;export{t as default};
