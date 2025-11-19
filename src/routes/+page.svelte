<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Hero from '../components/Hero.svelte';
	import Horarios from '../components/Horarios.svelte';
	import Valores from '../components/Valores.svelte';
	import Profe from '../components/Profe.svelte';
	import Maps from '../components/Maps.svelte';
	import Footer from '../components/Footer.svelte';
	import Callout from '../components/Callout.svelte';
	import Bloque from '../components/Bloque.svelte';
	import Faq from '../components/Faq.svelte';
	import { coaches, horarios, blocks } from '../lib/const.js';
	import Whatsapp from '../components/Whatsapp.svelte';
	import Nav from '../components/Nav.svelte';

	const activeCoaches = coaches.filter((coach) => coach.status);

	let show = false;

	onMount(() => {
		show = true;
	});
</script>

<svelte:head>
	<title>Bóveda Secreta - Entrenamientos de Lucha Libre</title>
	<meta
		name="description"
		content="Centro de entrenamiento de lucha libre, con foco en la preparación física y técnica para un desempeño profesional de la disciplina."
	/>
</svelte:head>

<div class="bg-base-200" transition:fade>
	<Nav />
	<section class="relative">
		<Hero />
		<div
			class="absolute md:w-8/12 lg:w-6/12 -bottom-20 md:-bottom-16 right-[50%] translate-x-[50%] w-full z-20"
		>
			<Callout />
		</div>
	</section>
	<div id="blocks" class="container mx-auto my-6 mt-48 md:mt-28 scroll-mt-32">
		<h2 class="text-3xl font-bold mb-8 text-center">¿A que bloque me inscribo? 🧐</h2>
		<div class="mx-4 flex flex-col lg:flex-row justify-between gap-4">
			{#each blocks as block, i}
				<Bloque info={block} />
			{/each}
		</div>
		<div id="profesores" class="my-20 scroll-mt-32">
			<h2 class="text-3xl font-bold mx-4 mb-4 mt-10">🤼‍♀️ Instructor/a</h2>
			<div class="flex gap-10 mt-8 mx-4 flex-col lg:flex-row">
				{#each activeCoaches as coach, i}
					<Profe {coach} />
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-10 px-4 md:flex-row mt-10 md:mx-auto justify-center">
			<Horarios {horarios} />
			<Valores />
		</div>
	</div>
	<div>
		<Faq />
		<Maps />
		<Footer />
	</div>
</div>
<Whatsapp />