const t=`
<template data-template="common-editor-edit-info">
	<div class="view-puzzle-editor-menus">
		<header>
			<h1>Edit info</h1>
			<button
				class="aspect-ratio-width kit-icon close-btn"
				data-action="close"
			></button>
		</header>
		<div class="space"></div>
		<label for="level-name" class="label">Level name</label>
		<input type="text" id="level-name" />
		<label for="level-author" class="label">Author</label>
		<input type="text" id="level-author" />
		<label for="level-description" class="label">Description</label>
		<textarea id="level-description"></textarea>
		<label for="level-difficulty" class="label">Difficulty</label>
		<select id="level-difficulty" data-action="vibrate-light">
			<option value="1" data-action="vibrate-light">Easy</option>
			<option value="2" data-action="vibrate-light">Medium</option>
			<option value="3" data-action="vibrate-light">Hard</option>
			<option value="4" data-action="vibrate-light">Extreme</option>
			<option value="5" data-action="vibrate-light">Insane</option>
		</select>
		<label for="level-list" class="label">List</label>
		<select id="level-list" data-action="vibrate-light">
			<option value="1" data-action="vibrate-light">Pending</option>
			<option value="2" data-action="vibrate-light">Additional</option>
			<option value="3" data-action="vibrate-light">Released</option>
			<option value="4" data-action="vibrate-light">Shapes</option>
			<option value="5" data-action="vibrate-light">5</option>
			<option value="6" data-action="vibrate-light">6</option>
			<option value="7" data-action="vibrate-light">7</option>
			<option value="8" data-action="vibrate-light">8</option>
			<option value="9" data-action="vibrate-light">9</option>
			<option value="10" data-action="vibrate-light">Graveyard</option>
		</select>
		<label for="level-sort" class="label">Sort</label>
		<input id="level-sort" type="number" />
		<label for="level-event" class="label">Level Completion Event</label>
		<select id="level-event" value="" data-action="vibrate-light">
			<option value="" data-action="vibrate-light">Exit</option>
			<option value="next" data-action="vibrate-light">
				Go to next level
			</option>
			<option value="next-silent" data-action="vibrate-light">
				Go to next level (no completion popup)
			</option>
		</select>
		<div class="buttons">
			<button class="button primary" data-action="save-level">
				Save
			</button>
			<button class="cancel" data-action="cancel-editing">Cancel</button>
		</div>
	</div>
</template>
`;export{t as default};
