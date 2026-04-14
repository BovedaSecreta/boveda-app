<script>
	import { onMount } from 'svelte';
	import { faq } from '../lib/const.js';

	let isFirst = $state(true);

	onMount(() => {
		const radios = document.querySelectorAll('input[type="radio"][name="my-accordion-4"]');
		if (radios.length > 0) {
			radios[0].checked = true;
		}
	});
</script>

<section id="faq" class="w-full text-white py-10 pattern scroll-mt-20">
	<div class="container mx-auto pb-10">
		<h2 class="text-3xl font-bold text-center">🧐 Preguntas Frecuentes</h2>
	</div>
	<div class="max-w-2xl mx-auto">
		{#each faq as item, index}
			<div class="join join-vertical w-full">
				<div class="collapse collapse-arrow join-item">
					<input
						type="radio"
						name="my-accordion-4"
						class="peer"
						checked={index === 0 ? isFirst : false}
						onchange={() => (isFirst = false)}
					/>
					<div
						class="collapse-title text-xl font-medium peer-checked:bg-base-200 peer-checked:text-neutral bg-[#08001b]"
					>
						{item.question}
					</div>
					<div class="collapse-content peer-checked:bg-base-200 peer-checked:text-neutral">
						<p>{@html item.answer}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>



<style>
    .pattern{
      background: linear-gradient(45deg, #08001b 25%, transparent 25%), linear-gradient(315deg, #08001b 25%, transparent 25%) ,linear-gradient(45deg, transparent 24%,#221343 25%, #221343 30%, transparent 31%, transparent 39%,#221343 40%, #221343 45%, transparent 45%),linear-gradient(315deg, transparent 24%,#221343 25%, #221343 30%, transparent 31%, transparent 39%,#221343 40%, #221343 45%, transparent 45%);
          background-size: 2em 2em;
          background-color: #08001b;
          opacity: 1
    }
  </style>
