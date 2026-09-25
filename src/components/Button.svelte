<script>
	/**
	 * Site button. Renders an <a> when `href` is given, a <button> otherwise.
	 *
	 * variant — primary: yellow fill, for conversion actions on dark surfaces
	 *           ghost:   outlined light, for secondary actions on dark surfaces
	 *           subtle:  outlined dark, for controls sitting on light cards
	 * size    — sm | md | lg
	 *
	 * Anything else (data-tally-*, onclick, aria-expanded, type, target…) passes
	 * straight through, and `class` composes with the variant styles.
	 */
	let {
		variant = 'primary',
		size = 'md',
		href = undefined,
		class: className = '',
		children,
		...rest
	} = $props();
</script>

{#if href}
	<a {href} class="btn-b btn-b--{variant} btn-b--{size} {className}" {...rest}>
		{@render children()}
	</a>
{:else}
	<button class="btn-b btn-b--{variant} btn-b--{size} {className}" {...rest}>
		{@render children()}
	</button>
{/if}

<style>
	/*
		In @layer components so Tailwind utilities passed through `class`
		(lg:hidden, w-full, …) still override these — unlayered CSS would win
		over @layer utilities and silently break them.
	*/
	@layer components {
		.btn-b {
			--ink: var(--color-ink, #08001b);
			--accent: var(--color-primary, #f5c518);
			--ease: cubic-bezier(0.16, 1, 0.3, 1);

			display: inline-flex;
			align-items: center;
			justify-content: center;
			border: 1px solid transparent;
			border-radius: 3px;
			font-family: var(--font-display);
			font-style: normal;
			font-weight: 800;
			font-stretch: 86%;
			line-height: 1;
			letter-spacing: 0.045em;
			text-transform: uppercase;
			text-decoration: none;
			cursor: pointer;
			transition:
				transform 220ms var(--ease),
				background-color 220ms var(--ease),
				border-color 220ms var(--ease),
				box-shadow 220ms var(--ease),
				color 220ms var(--ease);
		}

		/* ── Sizes ─────────────────────────────────────────────── */
		/* Vertical padding is set so every size clears a 44px touch target. */
		.btn-b--sm {
			padding: 0.95rem 1.25rem;
			font-size: 0.8rem;
		}
		.btn-b--md {
			padding: 1.1rem 1.65rem;
			font-size: 0.92rem;
		}
		.btn-b--lg {
			padding: 1.15rem 2.1rem;
			font-size: clamp(0.9rem, 0.82rem + 0.35vw, 1.06rem);
		}

		/* ── Variants ──────────────────────────────────────────── */
		.btn-b--primary {
			background: var(--accent);
			color: var(--ink);
			box-shadow:
				0 12px 26px -12px rgba(0, 0, 0, 0.9),
				0 3px 8px -4px rgba(0, 0, 0, 0.6);
		}
		.btn-b--primary:hover {
			transform: translateY(-3px);
			box-shadow:
				0 22px 40px -14px rgba(0, 0, 0, 0.95),
				0 6px 14px -6px rgba(0, 0, 0, 0.65);
		}
		.btn-b--primary:focus-visible {
			outline: 2px solid #fff;
			outline-offset: 3px;
		}

		.btn-b--ghost {
			background: rgba(255, 255, 255, 0.05);
			border-color: rgba(255, 255, 255, 0.35);
			color: #fff;
		}
		.btn-b--ghost:hover {
			transform: translateY(-3px);
			background: rgba(255, 255, 255, 0.12);
			border-color: #fff;
		}
		.btn-b--ghost:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 3px;
		}

		.btn-b--subtle {
			background: #fff;
			border-color: rgba(8, 0, 27, 0.18);
			color: var(--ink);
		}
		.btn-b--subtle:hover {
			transform: translateY(-2px);
			background: rgba(8, 0, 27, 0.04);
			border-color: rgba(8, 0, 27, 0.45);
			box-shadow: 0 8px 18px -10px rgba(8, 0, 27, 0.5);
		}
		.btn-b--subtle:focus-visible {
			outline: 2px solid var(--ink);
			outline-offset: 3px;
		}

		/* ── Shared states ─────────────────────────────────────── */
		.btn-b:active {
			transform: translateY(-1px);
		}

		.btn-b:disabled,
		.btn-b[aria-disabled='true'] {
			cursor: not-allowed;
			transform: none;
			box-shadow: none;
			opacity: 0.45;
		}

		@media (prefers-reduced-motion: reduce) {
			.btn-b:hover,
			.btn-b:active {
				transform: none;
			}
		}
	}
</style>
