<script>
	import { onMount } from 'svelte';

	let { coach, truncateAt = 150 } = $props();

	let isExpanded = $state(false);
	let isMobileDevice = $state(false);

	function stripHtml(html) {
		return html.replace(/<[^>]*>/g, '');
	}

	const plainDescription = stripHtml(coach.description);
	const shouldTruncate = $derived(plainDescription.length > truncateAt);
	const displayContent = $derived(
		isExpanded ? coach.description : plainDescription.slice(0, truncateAt)
	);

	function handleResize() {
		isMobileDevice = window.innerWidth <= 768;
		isExpanded = !isMobileDevice;
	}

	onMount(() => {
		isMobileDevice = window.innerWidth <= 768;
		isExpanded = !isMobileDevice;
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="flex flex-col lg:w-1/3 items-stretch bg-white border rounded-2xl shadow-xl relative">
	<figure class="w-full">
		<img
			class="object-cover w-full rounded-tl-lg rounded-tr-lg transition-all"
			src={coach.img}
			alt={coach.name}
			loading="lazy"
		/>
	</figure>
	<div class="absolute top-4 left-4 flex flex-col gap-1">
		{#if coach.igLink}
			<a href={coach.igLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram de {coach.name}">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 stroke-primary" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
			</a>
		{/if}
		{#if coach.profile}
			<a href={coach.profile} target="_blank" rel="noopener noreferrer" aria-label="Perfil de {coach.name} en 5 Luchas">
				<img src="/profile-icon.svg" alt="" aria-hidden="true" class="w-10 h-10">
			</a>
		{/if}
	</div>

	<div class="flex flex-col p-4 w-full">
		<div class="h-full">
			<h5 class="mb-2 text-2xl font-bold tracking-tight">{coach.name}</h5>

			{#if isExpanded}
				<span>{@html coach.description}</span>
			{:else}
				<span>{displayContent}{shouldTruncate ? '...' : ''}</span>
			{/if}

				<button
					onclick={() => (isExpanded = !isExpanded)}
					class="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral transition-colors duration-200"
					aria-expanded={isExpanded}
				>
					<span class="flex items-center justify-center">
						{isExpanded ? 'Mostrar menos' : 'Leer más'}
					</span>
				</button>
		</div>
	</div>
</div>
