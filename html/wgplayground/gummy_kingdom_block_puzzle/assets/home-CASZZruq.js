const t=`
<template data-template="home">
	<div class="view-home viewport-units-fallback" data-unit-fallback="dvh">
		<div
			class="desktop-grid viewport-units-fallback"
			data-unit-fallback="dvh"
		>
			
		</div>

		<div class="background"></div>

		<div class="content">
			<div class="tabs">
				<div
					class="tab bank hidden viewport-units-fallback"
					data-unit-fallback="dvh"
				>
					<div class="catalog-list-wrapper"></div>

					<button class="banner" data-action="open-bonuses">
						<h2
							class="banner-title stroked-text"
							data-tr="home.bank.getDailyBonus"
							data-stroked-text
						>
							Daily bonuses
						</h2>
						<div class="banner-cover aspect-ratio-width"></div>
					</button>
				</div>

				<div
					class="tab shop hidden viewport-units-fallback"
					data-unit-fallback="dvh"
				>
					<ul class="catalog-list"></ul>
				</div>

				<div
					class="tab main active viewport-units-fallback"
					data-unit-fallback="dvh"
				>
					<header class="header-main">
						<div class="resources">
							<div class="resource-badge coins">
								<span class="resource-content">
									<span
										class="need-to-fit"
										data-fit-by="font-size"
										data-resource="coins"
									></span>
								</span>
								<span
									class="aspect-ratio-width resource-icon kit-icon coins"
								></span>
							</div>
							<div class="resource-badge fuel">
								<span class="resource-content">
									<span
										class="need-to-fit"
										data-fit-by="font-size"
									></span>
								</span>
								
								<span
									class="aspect-ratio-width resource-icon kit-icon"
								>
									<span
										class="stroked-text icon-text"
										data-resource="fuel"
									></span>
								</span>
							</div>
							<div class="resource-badge stars">
								<span class="resource-content">
									<span
										class="need-to-fit"
										data-fit-by="font-size"
										data-resource="stars"
									></span>
								</span>
								<span
									class="aspect-ratio-width resource-icon kit-icon stars"
								></span>
							</div>
							<div class="resource-badge gold red-line-dev">
								<span class="resource-content">
									<span
										class="need-to-fit"
										data-fit-by="font-size"
										data-resource="gold"
									></span>
								</span>
								<span
									class="aspect-ratio-width resource-icon kit-icon gold"
								></span>
							</div>

							<div class="meta-progress-badge hidden">
								<div class="progress-bar">
									<div class="progress-bar-wrapper">
										<div class="stroked-text">
											<span class="progress-number"></span
											>/<span
												class="progress-whole"
											></span>
										</div>
									</div>
								</div>
								<span
									class="aspect-ratio-width badge-icon kit-icon chest-2"
								></span>
							</div>
						</div>

						<div class="side-buttons">
							<button
								class="aspect-ratio-width settings-button kit-icon settings-btn dev-settings-container"
								data-action="open-settings"
							></button>

							<button
								class="tooltip-button aspect-ratio-width"
								data-action="show-all-tooltips"
							>
								<div
									class="tooltip-text stroked-text"
									data-tr="tooltips.button-name"
								></div>
								<div class="tooltip-icon">
									<span
										class="stroked-text need-to-fit"
										data-fit-by="font-size"
										>?</span
									>
								</div>
							</button>
						</div>
					</header>

					

					<div class="buttons-container">
						<button
							class="meta-button kit-button framed size-l neutral"
							data-action="open-meta"
						>
							<div class="button-inner-wrapper">
								<div class="avatar">
									<div class="avatar-wrapper"></div>
								</div>
								<div class="button-text-wrapper">
									<span
										id="meta-button"
										class="button-text stroked-text need-to-fit"
										data-fit-by="font-size"
									>
									</span>
								</div>
								<div class="progress-bar">
									<div class="progress-bar-wrapper">
										<div class="stroked-text">
											<span class="progress-number"></span
											>/<span
												class="progress-whole"
											></span>
										</div>
									</div>
								</div>
							</div>
						</button>

						<button
							class="select-level kit-button framed size-l neutral"
							data-action="select-level"
						>
							<div class="button-inner-wrapper">
								<div
									id="select-level-button"
									class="button-text stroked-text need-to-fit"
									data-fit-by="font-size"
									data-tr="home.level-select"
								>
									Text
								</div>
							</div>
						</button>

						<button
							class="play-button kit-button framed size-l success"
							data-action="start-level"
						>
							<div class="button-inner-wrapper">
								<div
									id="start-game-button"
									class="button-text stroked-text need-to-fit"
									data-fit-by="font-size"
								>
									Text
								</div>
							</div>
						</button>
					</div>

					<article class="meta hidden" data-action="next-slide">
						<div class="bonus aspect-ratio-width hidden"></div>
						<div class="bar hidden aspect-ratio-width"></div>

						<button
							class="meta-skip-button"
							data-action="skip-stories"
						>
							<span
								class="meta-skip-text"
								data-tr="meta.skip"
							></span>
						</button>

						<section class="dialog hidden">
							<div class="dialog-content">
								<h1 class="title"></h1>
								<p class="text"></p>
							</div>
							<div class="avatar">
								<div class="avatar-icon"></div>
							</div>
						</section>
						<p
							class="footnote hidden"
							data-tr="common.modal.tapToContinue"
						></p>

						<button
							class="action-badge hidden"
							data-action="complete-meta-action"
						>
							<div class="action-badge-wrapper">
								<span
									class="aspect-ratio-width kit-icon stars"
								></span>
								<span class="action-badge-text"></span>
							</div>
							<div class="icon-wrapper">
								<div class="aspect-ratio-width icon"></div>
							</div>
						</button>
					</article>

					<button class="return-button hidden aspect-ratio-width">
						<div
							class="kit-button framed size-m neutral"
							data-action="return-from-meta"
						>
							<div class="button-inner-wrapper">
								<div
									class="aspect-ratio-width kit-icon return"
								></div>
							</div>
						</div>
					</button>
				</div>

				<div
					class="tab rating hidden viewport-units-fallback"
					data-unit-fallback="dvh"
				>
					<article class="banner">
						<h2
							class="banner-title stroked-text"
							data-tr="home.rating.clanBattles"
						>
							Clan battles
						</h2>
						<div class="banner-cover aspect-ratio-width"></div>
						<p
							class="banner-subtitle stroked-text"
							data-tr="home.rating.clanBattles.soon"
						>
							Soon!
						</p>
					</article>

					<ul class="rating-list"></ul>

					<p class="admin-info">
						<span data-tr="home.rating.server">Server</span>: 9125
					</p>
				</div>

				<div
					class="tab collections hidden viewport-units-fallback"
					data-unit-fallback="dvh"
				>
					<ul class="collections-list empty"></ul>
				</div>
			</div>
		</div>

		<nav class="navigation">
			<div class="navigation-wrapper view-wrapper">
				<button class="button" data-action="pointerdown:open-bank">
					<span
						class="text need-to-fit"
						data-fit-by="font-size"
						data-tr="home.navigation.bank"
						>Bank</span
					>
					<div
						class="aspect-ratio-width nav-icon kit-icon bank"
					></div>
				</button>
				<button class="button" data-action="pointerdown:open-shop">
					<span
						class="text need-to-fit"
						data-fit-by="font-size"
						data-tr="home.navigation.shop"
						>Shop</span
					>
					<div
						class="aspect-ratio-width nav-icon kit-icon shop"
					></div>
				</button>
				<button
					class="button active"
					data-action="pointerdown:open-main"
				>
					<span
						class="text need-to-fit"
						data-fit-by="font-size"
						data-tr="home.navigation.main"
						>Main</span
					>
					<div
						class="aspect-ratio-width nav-icon kit-icon main"
					></div>
				</button>
				<button class="button" data-action="pointerdown:open-rating">
					<span
						class="text need-to-fit"
						data-fit-by="font-size"
						data-tr="home.navigation.rating"
						>Rating</span
					>
					<div
						class="aspect-ratio-width nav-icon kit-icon rating"
					></div>
				</button>
				<button
					class="button"
					data-action="pointerdown:open-collections"
				>
					<span
						class="text need-to-fit"
						data-fit-by="font-size"
						data-tr="home.navigation.collection"
						>Settings</span
					>
					<div
						class="aspect-ratio-width nav-icon kit-icon settings"
					></div>
				</button>
			</div>
		</nav>
	</div>
</template>
`;export{t as default};
