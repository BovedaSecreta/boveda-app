<script>
	import Button from './Button.svelte';
</script>

<svelte:head>
	<link rel="preload" as="image" href="/logo-web.png" fetchpriority="high" />
	<link rel="preload" as="image" href="/hero-poster.webp" />
</svelte:head>

<header class="hero">
	<!--
		The poster is frame 0 of this exact clip, so the handoff to video is invisible.
		It carries the hero while the 9 MB source streams in, which used to be a black void.
	-->
	<video
		autoplay
		loop
		muted
		playsinline
		preload="auto"
		poster="/hero-poster.webp"
		aria-hidden="true"
		tabindex="-1"
		class="hero__media"
	>
		<source src="https://5lc-website-assets.pages.dev/boveda/bg_hero.mp4" type="video/mp4" />
	</video>

	<div class="hero__scrim" aria-hidden="true"></div>

	<!-- Ropes: the ring from the logotype, drawn at room scale. -->
	<div class="hero__frame" aria-hidden="true">
		<div class="hero__ropes">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div class="hero__content">
		<h1 class="sr-only">Bóveda Secreta</h1>

		<img
			src="/logo-web.png"
			alt="Logotipo de la Bóveda Secreta"
			width="600"
			height="185"
			fetchpriority="high"
			decoding="async"
			class="hero__logo"
		/>

		<p class="hero__lede">
			Centro de entrenamiento de lucha libre espectáculo, con foco en la preparación física y
			técnica para un desempeño profesional de la disciplina.
		</p>

		<div class="hero__actions">
			<Button
				variant="primary"
				size="lg"
				data-tally-open="wdbPAK"
				data-tally-overlay="1"
				data-tally-emoji-text="👋"
				data-tally-emoji-animation="wave">Me quiero inscribir</Button
			>
			<Button variant="ghost" size="lg" href="/#blocks">Más información</Button>
		</div>

		<div class="hero__social">
			<span class="hero__social-label">Redes sociales:</span>
			<a
				href="https://www.instagram.com/bovedasecreta/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram de Bóveda Secreta"
				class="hero__social-link"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
					><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
						d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
					/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
				>
			</a>
			<a
				href="https://www.youtube.com/@BovedaSecreta/featured"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="YouTube de Bóveda Secreta"
				class="hero__social-link"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
					><path
						d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
					/><path d="m10 15 5-3-5-3z" /></svg
				>
			</a>
		</div>
	</div>
</header>

<style>
	.hero {
		--ink: #08001b;
		--accent: var(--color-primary, #f5c518);
		--frame: clamp(14px, 2.2vw, 34px);
		--ease: cubic-bezier(0.16, 1, 0.3, 1);

		position: relative;
		isolation: isolate;
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 100svh;
		overflow: hidden;
		background-color: var(--ink);
	}

	/* ── Media ─────────────────────────────────────────────── */
	.hero__media {
		position: absolute;
		inset: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* Crushed to graphite so the bodies read as shapes, not as a muddy photo. */
		filter: grayscale(1) contrast(1.3) brightness(0.95);
		opacity: 0.9;
	}

	.hero__scrim {
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(
				to bottom,
				rgba(8, 0, 27, 0.82) 0%,
				rgba(8, 0, 27, 0.3) 16%,
				rgba(8, 0, 27, 0.1) 30%
			),
			linear-gradient(
				to top,
				var(--ink) 0%,
				rgba(8, 0, 27, 0.78) 26%,
				rgba(8, 0, 27, 0.35) 55%,
				rgba(8, 0, 27, 0) 85%
			),
			radial-gradient(
				130% 55% at 50% 58%,
				rgba(8, 0, 27, 0.72) 0%,
				rgba(8, 0, 27, 0.3) 60%,
				rgba(8, 0, 27, 0) 100%
			);
	}

	/* ── Ring ──────────────────────────────────────────────── */
	.hero__frame {
		position: absolute;
		inset: var(--frame);
		z-index: 2;
		pointer-events: none;
	}

	.hero__ropes {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		gap: 9px;
	}

	/* Spacing and weight tighten downward, the way ropes read in perspective. */
	.hero__ropes span {
		display: block;
		height: 1px;
		background: var(--accent);
		transform-origin: left center;
	}
	.hero__ropes span:nth-child(1) {
		opacity: 0.2;
	}
	.hero__ropes span:nth-child(2) {
		opacity: 0.38;
	}
	.hero__ropes span:nth-child(3) {
		height: 2px;
		opacity: 0.62;
	}

	/* ── Content ───────────────────────────────────────────── */
	.hero__content {
		position: relative;
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 1400px;
		margin-inline: auto;
		padding: 9rem 1.75rem 5.5rem;
		text-align: center;
	}

	/* Fixed across breakpoints; the vw term only guards very narrow screens. */
	.hero__logo {
		width: min(86vw, 200px);
		height: auto;
	}

	.hero__lede {
		max-width: 46ch;
		margin-top: 1.65rem;
		font-family: var(--font-display), 'Quicksand', sans-serif;
		font-size: clamp(1rem, 0.9rem + 0.55vw, 1.3rem);
		font-weight: 500;
		line-height: 1.35;
		letter-spacing: -0.005em;
		color: rgba(255, 255, 255, 0.85);
		text-wrap: pretty;
	}

	.hero__actions {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		width: 100%;
		max-width: 26rem;
		margin-top: 2.25rem;
	}

	.hero__social {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 2.75rem;
	}

	.hero__social-label {
		font-family: var(--font-display);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.6);
	}

	.hero__social-link {
		display: inline-flex;
		color: rgba(255, 255, 255, 0.65);
		transition:
			color 200ms var(--ease),
			transform 200ms var(--ease);
	}
	.hero__social-link:hover {
		color: var(--accent);
		transform: translateY(-2px);
	}
	.hero__social-link:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 4px;
		border-radius: 2px;
	}
	.hero__social-link svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	/* Browser surfaces belong to the design too. */
	.hero :global(::selection) {
		background: var(--accent);
		color: var(--ink);
	}

	/* ── Breakpoints ───────────────────────────────────────── */
	@media (min-width: 640px) {
		.hero__actions {
			flex-direction: row;
			width: auto;
			max-width: none;
			gap: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			align-items: flex-end;
		}
		.hero__content {
			align-items: flex-start;
			padding: 7rem 4rem 6.75rem;
			text-align: left;
		}
		.hero__scrim {
			background:
				linear-gradient(
					to bottom,
					rgba(8, 0, 27, 0.82) 0%,
					rgba(8, 0, 27, 0.25) 16%,
					rgba(8, 0, 27, 0) 34%
				),
				linear-gradient(
					to top,
					var(--ink) 2%,
					rgba(8, 0, 27, 0.88) 22%,
					rgba(8, 0, 27, 0.55) 42%,
					rgba(8, 0, 27, 0.2) 60%,
					rgba(8, 0, 27, 0) 78%
				),
				linear-gradient(
					100deg,
					rgba(8, 0, 27, 0.82) 0%,
					rgba(8, 0, 27, 0.4) 36%,
					rgba(8, 0, 27, 0.05) 70%,
					rgba(8, 0, 27, 0) 100%
				);
		}
	}

	/* ── Entrance ──────────────────────────────────────────── */
	/*
		Declared only under no-preference, so the resting state — and the
		reduced-motion state — is the fully visible one.
	*/
	@media (prefers-reduced-motion: no-preference) {
		.hero__logo {
			animation: heroWipe 780ms var(--ease) both;
		}
		.hero__lede {
			animation: heroRise 620ms var(--ease) 180ms both;
		}
		.hero__actions {
			animation: heroRise 620ms var(--ease) 300ms both;
		}
		.hero__social {
			animation: heroRise 620ms var(--ease) 420ms both;
		}
		.hero__ropes span {
			animation: heroRope 900ms var(--ease) 240ms both;
		}
		.hero__ropes span:nth-child(2) {
			animation-delay: 330ms;
		}
		.hero__ropes span:nth-child(3) {
			animation-delay: 420ms;
		}
	}

	@keyframes heroWipe {
		from {
			clip-path: inset(0 100% 0 0);
			transform: translate3d(-10px, 0, 0);
		}
		to {
			clip-path: inset(0 0 0 0);
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes heroRise {
		from {
			opacity: 0;
			transform: translate3d(0, 16px, 0);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	/* Transform only — the per-rope opacities have to survive the fill. */
	@keyframes heroRope {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
</style>
