const t=`
<template data-template="blocks">
	<div class="view-block-puzzle">
		<div class="mini-game-container">
			<div class="info">
				<div class="info-content">
					<div class="level-container">
						<div class="level">
							<h4 class="level-title stroked-text">Level</h4>
							<div
								class="level-count stroked-text"
								id="goalLevel"
							>
								000
							</div>
						</div>
					</div>
					<div class="goal-container">
						<h4 class="goal-title">Target</h4>
						<div class="goal-color-container">
							<div class="block target-block">
								<span class="block-counter stroked-text"
									>x3</span
								>
							</div>
							<div class="block target-block">
								<span class="block-counter stroked-text"
									>x3</span
								>
							</div>
							<div class="block target-block">
								<span class="block-counter stroked-text"
									>x3</span
								>
							</div>
						</div>
					</div>
				</div>
				<button id="download-json">Save</button>
				<div
					class="settings-dropdown-container dev-settings-container"
				></div>
			</div>
			
			<div class="grid"></div>
			<div class="figure-board"></div>
			<div class="rotate-board">
				
				<div
					class="aspect-ratio-width rotate-img kit-icon rotate-silhouette"
				></div>
				<div
					class="aspect-ratio-width rotate-img kit-icon rotate-silhouette"
				></div>
				<div
					class="aspect-ratio-width rotate-img kit-icon rotate-silhouette"
				></div>
			</div>
			<div class="buffs"></div>
		</div>
	</div>
</template>


<template data-template="block-chanses">
	<div class="view-block-chances">
		<button
			class="aspect-ratio-width kit-icon close-btn"
			data-action="close"
		></button>
		<h2 class="title color-title" data-action="chances-open-colors">
			Select Color Chances
		</h2>
		<div class="color-chances">
			<span
				>Select the chance of different colors dropping in
				percentage</span
			>
			<div class="color-chances-container">
				<div class="color-container">
					<div class="block green"></div>
					<input
						type="number"
						class="color-chance"
						data-color="0"
						value="20"
						data-action="vibrate-light"
					/>
					<span class="color-persentage">20%</span>
				</div>
				<div class="color-container">
					<div class="block blue"></div>
					<input
						type="number"
						class="color-chance"
						data-color="1"
						value="20"
						data-action="vibrate-light"
					/>
					<span class="color-persentage">20%</span>
				</div>
				<div class="color-container">
					<div class="block red"></div>
					<input
						type="number"
						class="color-chance"
						data-color="2"
						value="20"
						data-action="vibrate-light"
					/>
					<span class="color-persentage">20%</span>
				</div>
				<div class="color-container">
					<div class="block yellow"></div>
					<input
						type="number"
						class="color-chance"
						data-color="3"
						value="20"
						data-action="vibrate-light"
					/>
					<span class="color-persentage">20%</span>
				</div>
				<div class="color-container">
					<div class="block orange"></div>
					<input
						type="number"
						class="color-chance"
						data-color="4"
						value="20"
						data-action="vibrate-light"
					/>
					<span class="color-persentage">20%</span>
				</div>
			</div>
		</div>
		<h2 class="title figure-title" data-action="chances-open-figures">
			Select Figure Chances
		</h2>
		
		<div class="figure-chances"></div>
		<h2 class="title board-title" data-action="chances-open-board">
			Select Starting Board
		</h2>
		<div class="board">
			<button
				class="add-figure start-game-button button game-button"
				data-action="add-board-figure"
			>
				Add Figure
			</button>
		</div>
		<h2 class="title goal-title" data-action="open-goal">Select Goal</h2>
		<div class="select-goal">
			<p class="goal-warning">Select only 4 colors</p>
			<div class="goal-container" data-order="0">
				<div class="goal-item">
					<span>color green</span>
				</div>
				<div class="goal-item">
					<span class="score">count</span>
					<input
						data-order="0"
						type="number"
						class="goal-count"
						value="10"
						data-action="vibrate-light"
					/>
				</div>
			</div>
			<div class="goal-container" data-order="1">
				<div class="goal-item">
					<span>color blue</span>
				</div>
				<div class="goal-item">
					<span class="score">count</span>
					<input
						data-order="1"
						type="number"
						class="goal-count"
						value="0"
						data-action="vibrate-light"
					/>
				</div>
			</div>
			<div class="goal-container">
				<div class="goal-item">
					<span class="score">color red</span>
				</div>
				<div class="goal-item">
					<span class="score">count</span>
					<input
						data-order="2"
						type="number"
						class="goal-count"
						value="0"
						data-action="vibrate-light"
					/>
				</div>
			</div>
			<div class="goal-container" data-order="3">
				<div class="goal-item">
					<span class="score">color yellow</span>
				</div>
				<div class="goal-item">
					<span class="score">count</span>
					<input
						data-order="3"
						type="number"
						class="goal-count"
						value="0"
						data-action="vibrate-light"
					/>
				</div>
			</div>
			<div class="goal-container" data-order="4">
				<div class="goal-item">
					<span class="score">color orange</span>
				</div>
				<div class="goal-item">
					<span class="score">count</span>
					<input
						data-order="4"
						type="number"
						class="goal-count"
						value="0"
						data-action="vibrate-light"
					/>
				</div>
			</div>
		</div>
		<button
			data-action="open-block-editor"
			class="button-open button-wrapper"
		>
			Set initial state of the board
		</button>
	</div>
</template>
`;export{t as default};
