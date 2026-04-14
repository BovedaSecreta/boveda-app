<script>
	let { horarios } = $props();
</script>

<div id="horarios" class="mx-auto w-full md:w-4/12 scroll-mt-32">
	<h2 class="text-3xl font-bold mb-8">⏰ Horarios</h2>
	<div class="overflow-x-auto bg-white rounded-xl p-4 shadow-xl divide-y text-center">
		{#each horarios as { bloque, profesor, horarios: slots }}
			<div class="py-4 px-8">
				<header>
					<h3 class="text-lg font-bold mb-1">{bloque}</h3>
					<p class="mb-4">Instructor/a: {profesor}</p>
				</header>
				{#each slots as { dia, hora }}
					<p>{dia} - {hora}</p>
				{/each}
			</div>
		{/each}
	</div>

	<p class="mt-4 uppercase tracking-widest text-gray-500 text-center">(max 12 alumnos por clase)</p>
</div>
