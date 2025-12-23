<script>
	// NAVBAR MOBILE
	import { fade, fly, slide } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let isOpen = false;
	let startY;
	let currentY;
	const sheetHeight = spring(100, { stiffness: 0.1, damping: 0.7 });

	let navItems = [
		{
			name: 'Bloques',
			link: '/#blocks',
			icon: `
         <svg class="h-10 w-10" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="M188 281h37v38h-37zM281 469h38c10 0 19 10 19 19v75c0 10-9 18-19 18h-38c-10 0-18-10-18-18v-75c0-11 8-19 18-19zM881 469h38c10 0 19 10 19 19v75c0 10-9 18-19 18h-38c-10 0-18-10-18-18v-75c0-11 8-19 18-19zM281 244h38c10 0 19 10 19 19v75c0 10-9 18-19 18h-38c-10 0-18-10-18-18v-75c0-11 8-19 18-19zM375 281h450v38H375zM975 281h38v38h-38zM1050 169h38v487h-38zM975 506h38v38h-38zM881 244h38c10 0 19 10 19 19v75c0 10-9 18-19 18h-38c-10 0-18-10-18-18v-75c0-11 8-19 18-19zM375 506h450v38H375zM188 506h37v38h-37zM113 1031h975V769H113zm843-75h57V806h37v188h-94zm-75 0h38v38h-38zM356 806h488v188H356zm-206 0h94v38h-56v56h-38zM75 694h1050v37H75z" fill="#08001a"/><path d="M394 844h412v112H394zM113 169h37v487h-37z" fill="#08001a"/></svg>
        `
		},
		{
			name: 'Instructor/a',
			link: '/#profesores',
			icon: `
          <svg class="h-10 w-10" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="M290 417v-44h-21a62 62 0 0 0 0 124h21v-30l-53-35 23-35zM198 360c19-18 44-28 71-28h22c5-34 22-64 46-87l26-91c12-43 35-81 65-112h-52c-47 0-92 23-119 62l-70 100a118 118 0 0 0-5 129zM869 518V361l-30-26-13-9 2 26v37l-97-58c-89-54-192-82-297-82-57 0-103 46-103 103v166c0 102 84 186 186 186h166c102 0 186-84 186-186zM724 394c23 0 42 27 42 62 0 34-19 62-42 62s-41-28-41-62c0-35 18-62 41-62zM476 518c-23 0-42-28-42-62 0-35 19-62 42-62s41 27 41 62c0 34-18 62-41 62zm124 124c-46 0-83-37-83-83h166c0 46-37 83-83 83z" fill="#08001a"/><path d="M389 215c14-5 30-8 45-8 113 0 223 31 319 89l31 18c-11-82-55-158-124-207l-10-7 24-34 10 8c66 47 112 116 132 192l47 36c58 42 99 101 119 169A301 301 0 0 0 733 1H623C521 1 431 68 403 166zM600 787c27 0 50-18 58-42H542c8 24 31 42 58 42zM385 745c-30 0-59 11-81 30l-105 90-13-19c-5-8-12-15-19-21l-84-70v-51a41 41 0 0 0-83 0c0 36 12 71 33 99l115 154a93 93 0 0 0 139 10l44-44c2-41 15-80 39-114l45-64zM745 1076h41v83h-41z" fill="#08001a"/><path d="M734 745h-33a104 104 0 0 1-202 0h-33l-63 88a165 165 0 0 0-13 170l16 32h49v-36l145-48 145 48v36h49l16-32a166 166 0 0 0-13-170zM414 1076h41v83h-41zM1159 663c-23 0-42 18-42 41v51l-84 70c-7 6-14 13-19 21l-13 19-105-90c-22-19-51-30-81-30h-30l45 64c24 34 37 73 39 114l44 44c17 17 40 27 65 27 29 0 56-14 74-37l115-154c21-28 33-63 33-99 0-23-19-41-41-41z" fill="#08001a"/><path d="M497 1029v136l103 34 103-34v-136l-103-34zm144 68a41 41 0 1 1-82 0 41 41 0 0 1 82 0z" fill="#08001a"/></svg>
        `
		},
		{
			name: 'Horarios',
			link: '/#horarios',
			icon: `
          <svg class="h-10 w-10" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="M474 358v-28c-36-6-64-37-64-76 0-43 35-78 78-78 39 0 70 28 76 64h28c-6-52-51-91-104-91-57 0-104 47-104 104 0 55 41 99 90 105zM877 358v-28c-36-6-63-37-63-76 0-43 34-78 78-78 38 0 69 28 75 64h28c-6-52-51-91-103-91-58 0-105 47-105 104-1 54 39 99 90 105zM827 970H299c7 45 45 81 93 81h593c52 0 95-42 95-95V521L908 916a89 89 0 0 1-81 54z" fill="#08001a"/><path d="m883 905 189-435H292L124 856c-9 19-6 40 4 58 11 17 32 28 52 28h646c26 0 48-14 57-37zM985 269H842c6 20 26 36 48 36 4 0 8 1 10 3 2 3 5 6 5 10v54c0 7-6 13-13 13-68 0-124-51-130-117H440c6 20 26 36 48 36 4 0 8 1 10 3 2 3 5 6 5 10v55c0 7-6 13-13 13-65 0-119-48-130-110a93 93 0 0 0-61 86v81h781v-81c0-50-43-92-95-92z" fill="#08001a"/></svg>
        `
		},
		{
			name: 'Precios',
			link: '/#precios',
			icon: `
          <svg class="h-10 w-10" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="M938 263h37v862h-37zM844 356H356a56 56 0 0 0-56 57v337a56 56 0 0 0 56 56h488a56 56 0 0 0 56-56V413a56 56 0 0 0-56-57zM450 769h-94a19 19 0 0 1-19-19v-94h38v75h75zm225-263h-37v-37h37zm56-93h38v37h-38zm132 337a19 19 0 0 1-19 19h-94v-38h75v-75h37zM300 919h600v56H300zM881 75H319a94 94 0 0 0-94 94v56h750v-56a94 94 0 0 0-94-94zm-356 75H319a19 19 0 0 0-19 19v19h-38v-19a56 56 0 0 1 57-56h206zm75 0h-37v-37h37zm338 38h-38v-19a19 19 0 0 0-19-19h-94v-38h94a56 56 0 0 1 56 57zM225 263h38v862h-38z" fill="#08001a"/></svg>
        `
		},
		{
			name: 'FAQ',
			link: '/#faq',
			icon: `
         <svg class="h-10 w-10" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="M263 581H104l-7 38h165zM300 431H132l-7 38h175zM463 206H150v113h285zm-238 75h-37v-37h37zm94 0h-38v-37h38zm94 0h-38v-37h38zM938 619h165l-7-38H937zM900 469h175l-7-38H900z" fill="#08001a"/><path d="M859 713h262l-11-57H919a19 19 0 0 1-19-19v-75a19 19 0 0 1 19-18h170l-7-38H881a19 19 0 0 1-19-19v-75a19 19 0 0 1 19-18h179l-7-38H774zM1050 319V206H737l28 113zm-75-75h38v37h-38zm-94 0h38v37h-38zm-93 0h37v37h-37zM621 515l-21-42-21 42c-2 5-7 8-12 9l-43 11 33 33c5 5 7 11 5 18l-9 34 38-19c5-3 12-3 17 0l39 20-9-35c-2-7 0-13 5-18l33-33-43-11c-5-1-10-4-12-9z" fill="#08001a"/><path d="M821 715 698 206H502L379 715a131 131 0 0 1 109 129v169h225V844a131 131 0 0 1 108-129zM525 244h131a19 19 0 0 1 19 15l18 93-36 8-16-79H525zm201 294-49 49 16 65a19 19 0 0 1-27 21l-66-35-66 35a19 19 0 0 1-27-21l16-65-49-49a19 19 0 0 1 9-31l67-17 33-67a20 20 0 0 1 34 0l33 67 67 17a19 19 0 0 1 9 31z" fill="#08001a"/><path d="M356 750H114l336 244V844a94 94 0 0 0-94-94zM750 844v150l336-244H844a94 94 0 0 0-94 94zM426 356H147l-7 38h179a19 19 0 0 1 19 19v75a19 19 0 0 1-19 18H118l-7 38h170a19 19 0 0 1 19 19v75a19 19 0 0 1-19 18H90l-11 57h262z" fill="#08001a"/></svg>
        `
		}
	];

	function toggleSubItems(index) {
		navItems = navItems.map((item, i) => {
			if (i === index && item.subItems) {
				item.isOpen = !item.isOpen;
			}
			return item;
		});
	}

	function handleTouchStart(event) {
		startY = event.touches[0].clientY;
		currentY = startY;
	}

	function handleTouchMove(event) {
		currentY = event.touches[0].clientY;
		const deltaY = currentY - startY;
		if (deltaY > 0) {
			event.preventDefault();
			const newHeight = Math.max(0, 100 - (deltaY / window.innerHeight) * 100);
			sheetHeight.set(newHeight);
		}
	}

	function handleTouchEnd() {
		const deltaY = currentY - startY;
		if (deltaY > window.innerHeight * 0.2) {
			closeSheet();
		} else {
			sheetHeight.set(100, { hard: false });
		}
	}

	export function openSheet() {
		isOpen = true;
		sheetHeight.set(100, { hard: true });
		document.body.style.overflow = 'hidden';
	}

	function closeSheet() {
		sheetHeight.set(0, { hard: false }).then(() => {
			isOpen = false;
			document.body.style.overflow = '';
		});
	}

	async function handleNavigation(href) {
		if (isOpen) {
			await closeSheet();
		}
		goto(href);
	}

	onMount(() => {
		sheetHeight.set(100);
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

{#if isOpen}
	<nav
		class="fixed inset-x-0 bottom-0 z-50 pattern"
		style="height: {$sheetHeight}dvh;"
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
		transition:fly={{ y: 200, duration: 300 }}
	>
		<div class="cursor-grab active:cursor-grabbing">
			<div class="grid p-2">
				<svg
					class="h-6 w-6 text-neutral justify-self-center"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16"
					/>
				</svg>
				<button
					on:click={closeSheet}
					class="p-2 absolute right-2 text-neutral focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-label="Close menu"
				>
					<svg class="h-10 w-10'" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="flex flex-col h-full overflow-y-auto">
			<div class="grow">
				<div class="flex flex-col space-y-2 p-4 pl-4 h-full">
					<ul class="h-full">
						{#each navItems as item, index}
							<li class="my-6">
								<a
									class="font-ibm text-neutral font-bold text-3xl mask flex gap-2 items-center"
									href={item.link}
									on:click|preventDefault={() => {
										if (item.subItems) {
											toggleSubItems(index);
										} else {
											handleNavigation(item.link);
										}
									}}
								>
									{@html item.icon}
									{item.name}
								</a>
								{#if item.subItems}
									<ul class="sub-items" class:item-is-open={item.isOpen}>
										{#each item.subItems as subItem}
											<li class="my-6 flex gap-2 items-center">
												{@html subItem.icon}
												<a
													class="font-ibm text-white text-3xl mask"
													href={subItem.link}
													on:click|preventDefault={() => handleNavigation(subItem.link)}
												>
													{subItem.name}
												</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
						<li class=" mask flex gap-2 items-center">
							<button
								class="flex gap-2 items-center"
								on:click={() => closeSheet()}
								data-tally-open="wdbPAK"
								data-tally-emoji-text="👋"
								data-tally-emoji-animation="wave"
							>
								<svg class="h-10 w-10" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"
									><path
										d="M466 143c5 20-25 28-31 8l-18-68c-5-20 25-28 30-8zm213 9c-6 20-36 12-31-8l18-69c6-20 36-11 31 8zm180 113c-15 15-37-7-23-22l50-50c15-14 37 8 23 22zM493 370l41-51-40-30c-34-26-74 25-39 52zm-61 75-35-27c-33-24 1-77 39-52l37 28zm-61 75 41-50-34-27c-35-26-74 27-40 53l33 24zm336 223L563 925c-13 15-27 25-42 32-41 19-56 5-66 18l-123 148L83 927l148-184c3-3 4-8 4-12-14-83 11-167 69-227 9 15 32 29 47 41l-28 35c-13 16 11 36 24 20l101-124c41-54 94-114 137-169 18-24 46-13 56 5 22 35-43 60-16 80 16 13 27-10 39-25 17-24 45-14 57 4 21 36-43 60-17 80 16 13 28-10 39-25 13-17 32-17 47-6 31 24 5 50-9 68-13 17 12 36 25 19 14-19 25-40 50-33 22 7 40 32 22 55l-41 52-101-75-9-3H610c-83-10-95 118-11 125l87 21c0 33 7 65 22 94zm410 156L946 766c-7-5-79-122-85-128L721 535l-114-1c-33-3-59 49-2 63l101 25c8 2 13 9 12 17-5 63 25 124 79 158 17 11 0 37-17 26-22-13-40-31-55-51L596 933c49 47 119 91 184 91 4 0 7 1 10 4l139 108zM277 242c15 15-7 37-22 23l-50-50c-15-15 8-37 22-23z"
										fill="#08001a"
										fill-rule="evenodd"
									/></svg
								>
								<span class="font-bold text-neutral text-3xl">Incripción</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
{/if}

<style>
	.sub-items {
		overflow: hidden;
		padding-left: 1rem;
		max-height: 0;
		transition: max-height 0.3s ease-out;
	}
	.sub-items.item-is-open {
		max-height: 500px;
	}

	.pattern {
		background: linear-gradient(45deg, #ffffff 25%, transparent 25%),
			linear-gradient(315deg, #ffffff 25%, transparent 25%),
			linear-gradient(
				45deg,
				transparent 24%,
				#f9f9f9 25%,
				#f9f9f9 30%,
				transparent 31%,
				transparent 39%,
				#f9f9f9 40%,
				#f9f9f9 45%,
				transparent 45%
			),
			linear-gradient(
				315deg,
				transparent 24%,
				#f9f9f9 25%,
				#f9f9f9 30%,
				transparent 31%,
				transparent 39%,
				#f9f9f9 40%,
				#f9f9f9 45%,
				transparent 45%
			);
		background-size: 2em 2em;
		background-color: #ffffff;
		opacity: 1;
	}
</style>
