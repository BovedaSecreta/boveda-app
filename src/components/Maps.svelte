<script>
	import Button from './Button.svelte';
</script>

<div class="bg-neutral py-10 px-4 pattern">
	<div class="flex gap-10 flex-col md:flex-row container md:mx-auto">
		<div class="card w-full md:w-4/12 text-base-100">
			<h2 class="text-3xl font-extrabold mb-4 mt-10">📍 Ubicación</h2>
			<p>
				La Bóveda Secreta se encuentra en el 3er piso de la Galería “Nueva Copacabana” ubicada en
				calle San Antonio #705, Santiago Centro. Las estaciones de Metro más cercanas a ella son <span
					class="underline underline-offset-2 decoration-wavy decoration-primary"
					>Plaza de Armas</span
				>,
				<span class="underline underline-offset-2 decoration-wavy decoration-primary"
					>Bellas Artes</span
				>
				y
				<span class="underline underline-offset-2 decoration-wavy decoration-primary"
					>Puente Cal y Canto</span
				>.
			</p>

			<Button
				href="https://tally.so#tally-open=wdbPAK&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
				class="w-full md:w-fit mt-6">Me quiero inscribir</Button
			>
		</div>
		<div class="w-full md:w-8/12 rounded-lg overflow-hidden shadow-xl">
			<iframe
				title="Ubicación de la Bóveda Secreta"
				class="w-full aspect-auto h-96"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5454447078005!2d-70.65091948384904!3d-33.43509328077845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a32be553d9%3A0x8502bf8c22ca1dca!2sSan%20Antonio%20705%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1668735943592!5m2!1sen!2scl"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</div>

<style>
	.pattern {
		background:
			linear-gradient(45deg, #08001b 25%, transparent 25%),
			linear-gradient(315deg, #08001b 25%, transparent 25%),
			linear-gradient(
				45deg,
				transparent 24%,
				#221343 25%,
				#221343 30%,
				transparent 31%,
				transparent 39%,
				#221343 40%,
				#221343 45%,
				transparent 45%
			),
			linear-gradient(
				315deg,
				transparent 24%,
				#221343 25%,
				#221343 30%,
				transparent 31%,
				transparent 39%,
				#221343 40%,
				#221343 45%,
				transparent 45%
			);
		background-size: 2em 2em;
		background-color: #08001b;
		opacity: 1;
	}
</style>
