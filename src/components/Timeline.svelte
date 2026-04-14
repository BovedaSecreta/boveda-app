<script>
	import { Circle, Clock, MapPin, Timer, Tag } from 'lucide-svelte';

	const detailIcons = {
		Horario: Clock,
		Lugar: MapPin,
		'Duración aprox': Timer,
		Costo: Tag
	};

	const events = [
		{
			id: 'enero',
			date: 'Vie. 30 Enero',
			label: 'Examen Básico',
			completed: true,
			modal: {
				title: 'Examen Básico - Vie. 30 Enero',
				details: [
					{ label: 'Horario', value: '7pm' },
					{ label: 'Lugar', value: 'Bóveda Secreta' },
					{ label: 'Duración aprox', value: '2 a 3 horas' },
					{ label: 'Costo', value: 'Sin costo adicional' }
				],
				description: `Para rendir el examen es necesario contar con un plan activo y haber completado al menos 6 meses de entrenamiento continuo en Bóveda Secreta.\n\nEn cuanto a la vestimenta, se recomienda ropa cómoda, polera con mangas y llevar una muda de ropa. También se sugiere traer toalla personal y usar calzado deportivo adecuado, distinto al que se usa para llegar al recinto.\n\nEl examen evalúa las habilidades cognitivas, físicas y de comunicación desarrolladas durante los entrenamientos. La aprobación depende de que el alumno demuestre bases sólidas y esté preparado para recibir información de mayor nivel.`
			}
		},
		{
			id: 'feb_1',
			date: 'Sáb. 07 Febrero',
			label: 'Examen Intermedio',
			completed: true,
			modal: null
		},
		{
			id: 'feb_2',
			date: 'Vie. 13 Febrero',
			label: 'Crudo',
			completed: true,
			modal: {
				title: 'Crudo - Vie. 13 Febrero',
				details: [],
				matches: [
					{ fighter1: 'Diego Bravo', fighter2: 'Dani Picart', winner: 'fighter2' },
					{ fighter1: 'Glenn Lazzo', fighter2: 'Dan Gazzete', winner: 'fighter1' },
					{ fighter1: 'Indigo', fighter2: 'Cachi', winner: 'fighter2' },
					{ fighter1: 'Weber', fighter2: 'Sadrac', winner: 'fighter1' },
					{ fighter1: 'Destello', fighter2: 'Anderson Cage', winner: 'fighter2' }
				],
				description: null
			}
		},
		{
			id: 'abr_1',
			date: 'Sáb. 11 Abril',
			label: 'Examen básico/interm.',
			completed: true,
			modal: {
				title: 'Examen básico e intermedio - 11 Abril',
				details: [
					{ label: 'Horario', value: '10 AM' },
					{ label: 'Lugar', value: 'Bóveda Secreta' },
					{ label: 'Duración aprox', value: '3 a 4 horas' },
					{ label: 'Costo', value: 'Sin costo adicional' }
				],
				description: `Para rendir el examen es necesario contar con un plan activo y haber completado al menos 6 meses de entrenamiento continuo en Bóveda Secreta.\n\nEn cuanto a la vestimenta, se recomienda ropa cómoda, polera con mangas y llevar una muda de ropa. También se sugiere traer toalla personal y usar calzado deportivo adecuado, distinto al que se usa para llegar al recinto.\n\nEl examen evalúa las habilidades físicas y de comunicación desarrolladas durante los entrenamientos. La aprobación depende de que el alumno demuestre bases sólidas y esté preparado para recibir información de mayor nivel.`
			}
		},
		{
			id: 'jun_6',
			date: 'Sáb. 6 junio',
			label: 'Examen básico/interm.',
			completed: false,
			modal: {
				title: 'Examen básico e intermedio - 6 de junio',
				details: [
					{ label: 'Horario', value: '10 AM' },
					{ label: 'Lugar', value: 'Bóveda Secreta' },
					{ label: 'Duración aprox', value: '3 a 4 horas' },
					{ label: 'Costo', value: 'Sin costo adicional' }
				],
				description: `Para rendir el examen es necesario contar con un plan activo y haber completado al menos 6 meses de entrenamiento continuo en Bóveda Secreta.\n\nEn cuanto a la vestimenta, se recomienda ropa cómoda, polera con mangas y llevar una muda de ropa. También se sugiere traer toalla personal y usar calzado deportivo adecuado, distinto al que se usa para llegar al recinto.\n\nEl examen evalúa las habilidades físicas y de comunicación desarrolladas durante los entrenamientos. La aprobación depende de que el alumno demuestre bases sólidas y esté preparado para recibir información de mayor nivel.`
			}
		}
	];
</script>

<!-- Modals -->
{#each events.filter((e) => e.modal) as event}
	<dialog id={event.id} class="modal modal-bottom sm:modal-middle">
		<div class="modal-box p-0 overflow-y-auto max-h-[80vh]">
			<!-- Header -->
			<div class="bg-indigo-900 px-6 py-4">
				<h3 class="text-lg font-bold text-white">{event.modal.title}</h3>
			</div>

			<div class="px-6 py-4 space-y-4">
				<!-- Details -->
				{#if event.modal.details.length}
					<ul class="divide-y divide-base-200">
						{#each event.modal.details as detail}
							{@const Icon = detailIcons[detail.label]}
							<li class="flex items-center gap-3 py-2 text-sm">
								{#if Icon}
									<Icon class="h-4 w-4 text-indigo-900 shrink-0" />
								{/if}
								<span class="text-base-content/60 w-28 shrink-0">{detail.label}</span>
								<span class="font-medium">{detail.value}</span>
							</li>
						{/each}
					</ul>
				{/if}

				<!-- Matches -->
				{#if event.modal.matches}
					<ul class="space-y-2">
						{#each event.modal.matches as match}
							<li class="flex items-center justify-between gap-2 text-sm bg-base-200 rounded-lg px-4 py-2">
								<span class="font-medium text-right flex-1 flex items-center justify-end gap-1
									{match.winner === 'fighter1' ? '' : match.winner ? 'opacity-40 line-through' : ''}">
									{match.fighter1}
									{#if match.winner === 'fighter1'}
										<Circle class="h-4 w-4 text-red-500" />
									{/if}
								</span>
								<span class="text-xs font-bold text-indigo-400 shrink-0">VS</span>
								<div class="font-medium flex-1 flex items-center gap-1
									{match.winner === 'fighter2' ? '' : match.winner ? 'opacity-40 line-through' : ''}">
									{#if match.winner === 'fighter2'}
										<Circle class="h-4 w-4 text-red-500" />
									{/if}
									{match.fighter2}
								</div>
							</li>
						{/each}
					</ul>
				{/if}

				<!-- Description -->
				{#if event.modal.description}
					<div class="text-sm text-base-content/80 whitespace-pre-line leading-relaxed border-t border-base-200 pt-4">
						{event.modal.description}
					</div>
				{/if}
			</div>

			<div class="modal-action px-6 pb-4 mt-0">
				<form method="dialog">
					<button class="btn btn-sm btn-ghost">Cerrar</button>
				</form>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop"><button>cerrar</button></form>
	</dialog>
{/each}

<ul class="timeline timeline-vertical lg:timeline-horizontal mx-auto">
	{#each events as event}
		<li>
			<hr class={event.completed ? 'bg-indigo-800' : ''}/>
			<div class="timeline-start">{event.date}</div>
			<div class="timeline-middle">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5 {event.completed ? 'text-emerald-500' : ''}" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089z" clip-rule="evenodd"/></svg>
			</div>
			{#if event.modal}
				<button
					class="timeline-end timeline-box btn"
					onclick={() => document.getElementById(event.id).showModal()}
				><b>{event.label}</b></button>
			{:else}
				<div class="timeline-end timeline-box"><b>{event.label}</b></div>
			{/if}
			<hr class={event.completed ? 'bg-indigo-800' : ''} />
		</li>
	{/each}
</ul>
