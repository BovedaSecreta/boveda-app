<script>
	import { Youtube, Instagram } from 'lucide-svelte';
</script>

<header
	class="relative bg-[#08001b] flex items-center justify-center h-screen overflow-hidden"
>
	<div class="relative z-20 p-5 md:w-8/12 lg:w-6/12 flex flex-col items-center text-pretty">
		<img src="/logo-web.png" alt="Logotipo de la Bóveda Secreta" />
		<p class="text-white text-sm lg:text-lg p-4 text-center tracking-widest uppercase font-light max-w-4xl ">
			Centro de entrenamiento de lucha libre espectáculo, con foco en la preparación física y técnica para un
			desempeño profesional de la disciplina.
		</p>
		<div class="flex gap-4 flex-col md:flex-row">
		<button
			data-tally-open="wdbPAK"
			data-tally-overlay="1"
			data-tally-emoji-text="👋"
			data-tally-emoji-animation="wave"
			class="btn mt-2 btn-primary hover:scale-105">Me quiero inscribir</button
		>
		<a href="/#blocks"
			class="btn mt-2 btn-primary btn-outline">Más información</a
		>
	</div>
	<div class=" rounded-lg flex gap-4 px-4 py-2 mt-6 items-center">
		<span class="text-white">Redes sociales: </span>
		<a href="https://www.instagram.com/bovedasecreta/" target="_blank" rel="noopener noreferrer">
			<Instagram class="text-white w-8 h-8" />
		</a>
		<a href="https://www.youtube.com/@BovedaSecreta/featured" target="_blank" rel="noopener noreferrer">
			<Youtube class="text-white w-8 h-8" />
	</a>
	</div>
	</div>

	<video
		id="vid"
		autoplay
		loop
		muted
		playsinline
		poster="https://res.cloudinary.com/dtj5xnlou/image/upload/v1669293222/background3.jpg"
		class="absolute z-10 opacity-40 w-auto min-w-full min-h-full max-w-none grayscale"
	>
		<source
			src="https://5lc-website-assets.pages.dev/boveda/bg_hero.mp4"
			type="video/mp4"
		/>
		Tu navegador no soporta video
	</video>
</header>