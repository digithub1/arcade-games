const t=`
<template data-template="fruitmerge">
	<div class="view-fruit-merge">
		<div class="game-container">
			<div class="game-header">
				<div class="info">
					<div class="info-content">
						<div class="level-container">
							<div class="level">
								<h4
									class="level-title stroked-text"
									data-stroked-text="Level"
									data-tr="fruitmerge.level"
								>
									Level
								</h4>
								<div
									class="level-count stroked-text"
									id="goalLevel"
									data-stroked-text="000"
								>
									000
								</div>
							</div>
						</div>
						<div class="goal-container">
							<h4 class="goal-title" data-tr="fruitmerge.target">
								Target
							</h4>
							<div class="goal-color-container">
								<div class="block target-block">
									<span
										class="block-counter stroked-text"
										data-stroked-text="x3"
										>x3</span
									>
								</div>
								<div class="block target-block">
									<span
										class="block-counter stroked-text"
										data-stroked-text="x3"
										>x3</span
									>
								</div>
								<div class="block target-block">
									<span
										class="block-counter stroked-text"
										data-stroked-text="x3"
										>x3</span
									>
								</div>
							</div>
						</div>
					</div>
					<div
						class="settings-dropdown-container dev-settings-container"
					></div>
				</div>
				<div class="tools">
					<button
						class="progress question-mark"
						data-action="show-progress"
					>
						?
					</button>
					<div class="next-el-container">
						<span class="score-title" data-tr="fruitmerge.next"
							>След
						</span>
						<span
							class="next-el aspect-ratio-width"
							style="
								background-repeat: no-repeat;
								background-image: url(&quot;https://games.wgamedev.ru/fruitmerge/default/fruit-merge/assets/balls-ss-Ddow_E-m.png&quot;);
								background-position: 20% 0%;
								background-size: 600% 500%;
							"
						></span>
					</div>
				</div>
			</div>
			<div class="game-canvas" id="game-container"></div>
			<div class="buffs">
				<button
					class="aspect-ratio-width buff"
					data-action="buff-deleteRow"
				>
					<div
						class="aspect-ratio-width buff-icon kit-icon deleteRow"
					></div>
					<div class="buff-counter"></div>
				</button>
				<button
					class="aspect-ratio-width buff"
					data-action="buff-hammer"
				>
					<div
						class="aspect-ratio-width buff-icon kit-icon hammer"
					></div>
					<div class="buff-counter"></div>
				</button>
				<button
					class="aspect-ratio-width buff"
					data-action="buff-shuffle"
				>
					<div
						class="aspect-ratio-width buff-icon kit-icon shuffle"
					></div>
					<div class="buff-counter"></div>
				</button>

				<button
					class="aspect-ratio-width buff"
					data-action="buff-upgradeFigure"
				>
					<div
						class="aspect-ratio-width buff-icon kit-icon upgradeFigure"
					></div>
					<div class="buff-counter"></div>
				</button>
			</div>
		</div>
	</div>
</template>


<template data-template="fruitmerge-chances">
	<div class="view-fruitmerge-chances">
		<button
			class="aspect-ratio-width kit-icon close-btn"
			data-action="close"
		></button>
		<h2 class="title figure-title">Select Figure Chances</h2>
		<button data-action="save-level">SAVE</button>
		<div class="figure-chances">
			<div class="figure-container">
				<div class="figure-image"></div>
				<div class="figure-info">
					<div class="figure-goal-container">
						Goal Count
						<input
							type="number"
							name=""
							id=""
							class="figure-goal-count"
						/>
					</div>
					<div class="figure-chance-container">
						<div class="figure-chance-count-container">
							Chance
							<input type="number" class="figure-chance-count" />
						</div>
						<div class="figure-real-chance">
							Real chance:
							<span class="figure-real-chance-count">0</span>%
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
`;export{t as default};
