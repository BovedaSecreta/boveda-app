<script>
  import { lazyVideo } from '../lib/actions/lazyVideo.js';

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
    <h2 class="card-title">{title}</h2>
    <div class="text-gray-700">
      {#if isExpanded}
        <span>{@html content}</span>
      {:else}
        <span>{plainContent.slice(0, truncateAt)}{shouldTruncate ? '...' : ''}</span>
      {/if}
    </div>

    {#if shouldTruncate}
      <button
        onclick={() => (isExpanded = !isExpanded)}
        class="w-full mt-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <span class="flex items-center justify-center">
          {isExpanded ? 'Mostrar menos' : 'Leer más'}
        </span>
      </button>
    {/if}
  </div>
</article>
