/**
 * Svelte action that teleports a node to document.body (or a given target),
 * escaping any ancestor with transform/filter/perspective that would otherwise
 * confine position:fixed children to its bounding box.
 *
 * @param {HTMLElement} node
 * @param {HTMLElement | string} [target]
 */
export function portal(node, target = 'body') {
	let targetEl = typeof target === 'string' ? document.querySelector(target) : target;
	targetEl.appendChild(node);

	return {
		update(newTarget) {
			targetEl = typeof newTarget === 'string' ? document.querySelector(newTarget) : newTarget;
			targetEl.appendChild(node);
		},
		destroy() {
			node.remove();
		}
	};
}
