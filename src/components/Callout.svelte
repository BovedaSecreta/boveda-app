<script>
	import { OctagonAlert } from 'lucide-svelte';
</script>

<div
	class="bg-error/70 backdrop-blur-xl grid mx-auto place-items-center px-4 w-full md:w-[600px] md:rounded-md shadow-lg text-accent"
>
	<div class="flex flex-col md:flex-row items-center gap-2 px-4 py-8">
		<OctagonAlert size={64} />
		<div class="text-center md:text-left">
			<h2 class="font-bold text-lg uppercase text-pretty">
				Por el momento no hay nuevas inscripciones.
			</h2>
			<p class="text-lg text-pretty">Última actualización: 19 de noviembre, 2025</p>
		</div>
	</div>
</div>
