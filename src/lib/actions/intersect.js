/**
 * Svelte action that adds a `reveal--visible` class when the element enters the viewport.
 * Pair with the `.reveal` / `.reveal--visible` CSS in app.css.
 *
 * @param {HTMLElement} node
 * @param {{ threshold?: number, delay?: number }} options
 */
export function intersect(node, { threshold = 0.12, delay = 0 } = {}) {
	node.classList.add('reveal');
	if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('reveal--visible');
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
