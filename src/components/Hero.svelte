<script>
	import { onMount } from 'svelte';

	let videoReady = $state(false);
	let videoEl = $state(null);

	onMount(() => {
		// canplay may fire before Svelte hydrates and attaches the handler.
		// Check readyState immediately: >= 3 (HAVE_FUTURE_DATA) means it's ready.
		if (videoEl && videoEl.readyState >= 3) {
			videoReady = true;
		}
	});
</script>

<header
	class="relative bg-[#08001b] flex items-center justify-center h-screen overflow-hidden"
>
	<div class="relative z-20 p-5 md:w-8/12 lg:w-6/12 flex flex-col items-center text-pretty">
		<h1 class="sr-only">Bóveda Secreta</h1>
		<img src="/logo-web.png" alt="Logotipo de la Bóveda Secreta" class="hero-animate hero-delay-1" />
		<p class="text-white text-sm lg:text-lg p-4 text-center tracking-widest uppercase font-light max-w-4xl hero-animate hero-delay-2">
			Centro de entrenamiento de lucha libre espectáculo, con foco en la preparación física y técnica para un
			desempeño profesional de la disciplina.
		</p>
		<div class="flex gap-4 flex-col md:flex-row hero-animate hero-delay-3">
			<button
				data-tally-open="wdbPAK"
				data-tally-overlay="1"
				data-tally-emoji-text="👋"
				data-tally-emoji-animation="wave"
				class="btn mt-2 btn-primary hover:scale-105">Me quiero inscribir</button
			>
			<a href="/#blocks" class="btn mt-2 btn-primary btn-outline">Más información</a>
		</div>
		<div class="rounded-lg flex gap-4 px-4 py-2 mt-6 items-center hero-animate hero-delay-4">
			<span class="text-white">Redes sociales:</span>
			<a href="https://www.instagram.com/bovedasecreta/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Bóveda Secreta">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white w-8 h-8" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
			</a>
			<a href="https://www.youtube.com/@BovedaSecreta/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Bóveda Secreta">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white w-8 h-8" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
			</a>
		</div>
	</div>

	<video
		autoplay
		loop
		muted
		playsinline
		preload="auto"
		aria-hidden="true"
		tabindex="-1"
		bind:this={videoEl}
		oncanplay={() => (videoReady = true)}
		onplaying={() => (videoReady = true)}
		class="absolute z-10 w-auto min-w-full min-h-full max-w-none grayscale transition-opacity duration-1200 ease-in-out motion-reduce:transition-none"
		class:opacity-0={!videoReady}
		class:opacity-40={videoReady}
	>
		<source
			src="https://5lc-website-assets.pages.dev/boveda/bg_hero.mp4"
			type="video/mp4"
		/>
	</video>
</header>
