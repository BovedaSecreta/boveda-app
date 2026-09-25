<script>
	import { lazyVideo } from '../lib/actions/lazyVideo.js';
	import Button from './Button.svelte';

	let { info, truncateAt = 150 } = $props();

	let { title, content, video } = info;

	let isExpanded = $state(false);

	function stripHtml(html) {
		return html.replace(/<[^>]*>/g, '');
	}

	const plainContent = stripHtml(content);
	const shouldTruncate = $derived(plainContent.length > truncateAt);
</script>

<article class="card bg-base-100 shadow-xl flex-1 sub-items h-max">
	<video
		use:lazyVideo
		autoplay
		loop
		muted
		playsinline
		preload="none"
		aria-hidden="true"
		tabindex="-1"
		class="rounded-t-lg"
	>
		<source data-src={video} type="video/mp4" />
	</video>
	<div class="card-body p-4">
		<h2 class="card-title font-extrabold">{title}</h2>
		<div class="text-gray-700">
			{#if isExpanded}
				<span>{@html content}</span>
			{:else}
				<span>{plainContent.slice(0, truncateAt)}{shouldTruncate ? '...' : ''}</span>
			{/if}
		</div>

		{#if shouldTruncate}
			<Button
				variant="subtle"
				size="sm"
				class="w-full mt-2"
				onclick={() => (isExpanded = !isExpanded)}
				aria-expanded={isExpanded}
			>
				{isExpanded ? 'Mostrar menos' : 'Leer más'}
			</Button>
		{/if}
	</div>
</article>
