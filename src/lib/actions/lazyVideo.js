/**
 * Svelte action that defers video loading until the element is near the viewport.
 * Use on <video> elements with <source data-src="..."> instead of src.
 * The video won't start loading until it's within rootMargin of the viewport.
 *
 * @param {HTMLVideoElement} node
 * @param {{ rootMargin?: string }} options
 */
export function lazyVideo(node, { rootMargin = '200px' } = {}) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const source = node.querySelector('source[data-src]');
					if (source) {
						source.src = source.dataset.src;
						node.load();
					}
					observer.unobserve(node);
				}
			});
		},
		{ rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
