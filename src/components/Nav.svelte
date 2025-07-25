<script>
	import { onDestroy, onMount } from 'svelte';
	import MobileNavMenu from './MobileNav.svelte';

	let mobileNavMenu;

	let isScrolled = false;

	// Function to handle scroll event
	const handleScroll = () => {
		isScrolled = window.scrollY > 60;
	};

	// Add scroll event listener on mount
	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
	});

	// Remove scroll event listener on destroy
	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<div
	id="navbar"
	class={`w-full py-2 top-0 px-4 z-40 pt-2 fixed ${
		isScrolled ? 'backdrop-blur-md bg-[#08001b]/80' : ''
	} transition-blur`}
>
	<div class="flex w-full justify-between items-center container mx-auto">
		<a href="/">
			<img src="/favicon.png" class="w-12" width="112" height="63" alt="Isotipo Bóveda Secreta" />
		</a>
		<button
			id="drawer-button"
			on:click={() => mobileNavMenu.openSheet()}
			aria-label="Open menu"
			class="btn btn-primary drawer-button lg:hidden">Menu</button
		>
		<div class="flex-none hidden lg:flex">
			<nav class="menu menu-horizontal px-1 gap-2">
				<a
					class="btn btn-link font-ibm font-black text-xl italic normal-case"
					href="/#blocks">¿A que bloque me inscribo?</a
				>
				<a
					class="btn btn-link font-ibm font-black text-xl italic normal-case"
					href="/#profesores">Instructor/a</a
				>
				<a
					class="btn btn-link font-ibm font-black text-xl italic normal-case"
					href="/#horarios">Horarios</a
				>
				<a
					class="btn btn-link font-ibm font-black text-xl italic normal-case"
					href="/#precios">Precios</a
				>
				<a
					class="btn btn-link font-ibm font-black text-xl italic normal-case"
					href="/#faq">FAQ</a
				>

				<button
					class="btn text-terciary font-ibm font-black text-xl italic normal-case"
					data-tally-open="wdbPAK"
					data-tally-overlay="1"
					data-tally-emoji-text="👋"
					data-tally-emoji-animation="wave">Incripción</button
				>
			</nav>
		</div>
	</div>
</div>
<!-- Drawer Menu -->
<MobileNavMenu bind:this={mobileNavMenu} />

<style>
	.transition-blur {
		transition:
			backdrop-filter 0.3s ease,
			background-color 0.3s ease;
	}

	@keyframes slideDown {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	#navbar {
		animation: slideDown 0.5s ease-in-out forwards;
	}
</style>
