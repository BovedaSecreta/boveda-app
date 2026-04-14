<script>
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
	import { coaches, horarios, blocks, faq } from '../lib/const.js';
	import { intersect } from '../lib/actions/intersect.js';
	import Whatsapp from '../components/Whatsapp.svelte';
	import Nav from '../components/Nav.svelte';
	import Timeline from '../components/Timeline.svelte';

	const activeCoaches = coaches.filter((coach) => coach.status);

	const faqJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: item.answer }
		}))
	});
</script>

<svelte:head>
	<title>Bóveda Secreta - Entrenamientos de Lucha Libre</title>
	<meta
		name="description"
		content="Centro de entrenamiento de lucha libre, con foco en la preparación física y técnica para un desempeño profesional de la disciplina."
	/>
	<meta property="og:title" content="Bóveda Secreta - Entrenamientos de Lucha Libre" />
	<meta property="og:description" content="Centro de entrenamiento de lucha libre en Chile, con foco en la preparación física y técnica para un desempeño profesional de la disciplina." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logo-web.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Bóveda Secreta - Entrenamientos de Lucha Libre" />
	<meta name="twitter:description" content="Centro de entrenamiento de lucha libre en Chile." />
	{@html '<script type="application/ld+json">' + faqJsonLd + '<\/script>'}
</svelte:head>

<div class="bg-base-200">
	<Nav />
	<section id="main-content" class="relative">
		<Hero />
		<!-- <div
			class="absolute md:w-8/12 lg:w-6/12 -bottom-20 md:-bottom-16 right-[50%] translate-x-[50%] w-full z-20"
		>
			<Callout />
		</div> -->
	</section>
	<section use:intersect class="container mx-auto p-4 mt-32 flex content-center flex-col">
		<h2 class="text-3xl font-bold mb-8 text-center">Fechas especiales 2026</h2>
		<Timeline />
	</section>
	<div id="blocks" use:intersect class="container mx-auto my-6 mt-10 md:mt-28 scroll-mt-32">
		<h2 class="text-3xl font-bold mb-8 text-center">¿A que bloque me inscribo? 🧐</h2>
		<div class="mx-4 flex flex-col lg:flex-row justify-between gap-4">
			{#each blocks as block, i}
				<Bloque info={block} />
			{/each}
		</div>
		<div id="profesores" use:intersect class="my-20 scroll-mt-32">
			<h2 class="text-3xl font-bold mx-4 mb-4 mt-10">🤼‍♀️ Instructor/a</h2>
			<div class="flex gap-10 mt-8 mx-4 flex-col lg:flex-row">
				{#each activeCoaches as coach, i}
					<Profe {coach} />
				{/each}
			</div>
		</div>
		<div use:intersect={{ delay: 100 }} class="flex flex-col gap-10 px-4 md:flex-row mt-10 md:mx-auto justify-center">
			<Horarios {horarios} />
			<Valores />
		</div>
	</div>
	<div use:intersect>
		<Faq />
		<Maps />
		<Footer />
	</div>
</div>
<Whatsapp />