const t=`
<template data-template="common-editor-view-level">
	<div class="view-puzzle-editor-menus">
		<header>
			<h1>Edit level</h1>
			<button
				class="aspect-ratio-width kit-icon close-btn"
				data-action="close"
			></button>
		</header>
		<div class="levels"></div>

		<template id="level-template">
			<div class="level-full">
				<h2 class="label" data-text="level-name">
					Level name goes here i think
				</h2>
				<hr />
				<div class="info-piece">
					<div class="label">Author</div>
					<div class="data" data-text="level-author">Maksim 8</div>
				</div>
				<div class="info-piece">
					<div class="label">Description</div>
					<div class="data" data-text="level-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Delectus quam pariatur explicabo in ipsam officia
						quasi quibusdam omnis exercitationem deleniti sed quos
						repellat itaque ratione vel, accusamus voluptates
						architecto fugit?
					</div>
				</div>
				<div class="info-piece">
					<div class="label">Difficulty</div>
					<div class="data" data-text="level-difficulty">5</div>
				</div>
				<div class="buttons">
					<button
						class="button primary"
						data-action="edit-info"
						style="display: none"
					>
						Edit info
					</button>
				</div>
				<div class="tile-stats"></div>
				<hr />
				<div class="buttons">
					<button
						class="button primary"
						data-action="edit-level"
						style="display: none"
					>
						Design level
					</button>
				</div>
				<div class="buttons">
					<button class="button secondary" data-action="play-level">
						⚡ Play
					</button>
				</div>
				<form class="rating" data-action="submit:rate-level">
					<h3>Rate the level</h3>
					<p>Fun</p>
					<div class="checkboxes">
						<label class="checkbox">
							<p>1</p>
							<input
								type="radio"
								required
								name="rating"
								value="1"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>2</p>
							<input
								type="radio"
								required
								name="rating"
								value="2"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>3</p>
							<input
								type="radio"
								required
								name="rating"
								value="3"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>4</p>
							<input
								type="radio"
								required
								name="rating"
								value="4"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>5</p>
							<input
								type="radio"
								required
								name="rating"
								value="5"
								data-action="vibrate-light"
							/>
						</label>
					</div>
					<hr />
					<p>Difficulty</p>
					<div class="checkboxes">
						<label class="checkbox">
							<p>1</p>
							<input
								type="radio"
								required
								name="difficulty"
								value="1"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>2</p>
							<input
								type="radio"
								required
								name="difficulty"
								value="2"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>3</p>
							<input
								type="radio"
								required
								name="difficulty"
								value="3"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>4</p>
							<input
								type="radio"
								required
								name="difficulty"
								value="4"
								data-action="vibrate-light"
							/>
						</label>
						<label class="checkbox">
							<p>5</p>
							<input
								type="radio"
								required
								name="difficulty"
								value="5"
								data-action="vibrate-light"
							/>
						</label>
					</div>
					<div>
						<button
							type="submit"
							data-action="vibrate-light"
							class="button primary"
						>
							Rate
						</button>
					</div>
				</form>
				<div class="send" style="display: none">
					<hr />
					<p>
						Send to the community <br />
						(You can't edit the level afterwards)
					</p>
					<div class="buttons">
						<button class="button black" data-action="send-level">
							Send
						</button>
					</div>
				</div>
				<div class="admin-info" style="display: none">
					<hr />
					<div class="info-piece">
						<div class="label">Rating</div>
						<div class="data">
							<span data-text="rating">0</span>/5 (<span
								data-text="votes"
								>0</span
							>
							votes)
						</div>
					</div>
					<div class="info-piece">
						<div class="label">Difficulty</div>
						<div class="data">
							<span data-text="rated-difficulty">0</span>/5
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
`;export{t as default};
