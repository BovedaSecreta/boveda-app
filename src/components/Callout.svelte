<script>
	import { OctagonAlert } from 'lucide-svelte';
</script>

<div
	class="bg-primary/70 backdrop-blur-xl grid mx-auto place-items-center px-4 w-full md:w-[600px] md:rounded-md shadow-lg text-accent"
>
	<div class="flex flex-col md:flex-row items-center gap-6 px-4 py-8">
		<OctagonAlert size={48} />
		<div class="text-center md:text-left">
			<h2 class="font-bold text-lg text-pretty">¡Atención!</h2>
			<p>Los entrenamientos se están realizando con normalidad.</p>
			<p class="text-sm text-pretty">
				Última actualización: <span
					class="underline decoration-wavy decoration-purple-500 font-bold">05 de ene., 2026</span
				>
			</p>
		</div>
	</div>
</div>
