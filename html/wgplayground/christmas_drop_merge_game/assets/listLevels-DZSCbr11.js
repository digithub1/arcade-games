const t=`
<template data-template="common-editor-list-levels">
	<div class="view-puzzle-editor-menus">
		<header>
			<h1>Community Levels</h1>
			<button
				class="aspect-ratio-width kit-icon close-btn"
				data-action="close"
			></button>
		</header>
		<div class="filters">
			<button
				data-action="set-filter"
				data-filter="drafts"
				class="active"
			>
				My drafts
			</button>
			<button data-action="set-filter" data-filter="published">
				My published
			</button>
			<button data-action="set-filter" data-filter="pending">
				Pending
			</button>
			<button data-action="set-filter" data-filter="additional">
				Additional
			</button>
			<button data-action="set-filter" data-filter="released">
				Released
			</button>
			<button data-action="set-filter" data-filter="shapes">
				Shapes
			</button>
			<button data-action="set-filter" data-filter="5">5</button>
			<button data-action="set-filter" data-filter="6">6</button>
			<button data-action="set-filter" data-filter="7">7</button>
			<button data-action="set-filter" data-filter="8">8</button>
			<button data-action="set-filter" data-filter="9">9</button>
			<button data-action="set-filter" data-filter="graveyard">
				Graveyard
			</button>
		</div>
		<p class="filter-description"></p>
		<div>
			<button class="button black" data-action="new-level">
				New level
			</button>
		</div>
		<div class="levels"></div>

		<template id="puzzle-editor-list-level-template">
			<div class="level-short" data-action="open-level">
				<h2 data-text="level-name">Level name goes here i think</h2>
				<div class="level-details">
					<div class="tile-stats"></div>
					<div class="description" data-text="level-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Delectus quam pariatur explicabo in ipsam officia
						quasi quibusdam omnis exercitationem deleniti sed quos
						repellat itaque ratione vel, accusamus voluptates
						architecto fugit?
					</div>
					<div class="info-piece">
						<div class="icon small user"></div>
						<div class="data" data-text="level-author">
							Maksim 8
						</div>
					</div>
					<hr />
					<div class="level-stats">
						<div class="info-piece">
							<div class="icon rating"></div>
							<div class="data" data-text="level-rating">0</div>
						</div>
						<div class="info-piece">
							<div class="icon difficulty"></div>
							<div class="data">
								<span data-text="level-rated-difficulty">0</span
								>/<span data-text="level-stated-difficulty"
									>0</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
`;export{t as default};
