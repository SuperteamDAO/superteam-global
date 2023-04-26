<script>
	import NamedLogo from './NamedLogo.svelte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';
	import clsx from 'clsx';
	import MenuButtons from './MenuButtons.svelte';
	import { clickOutside } from '../../utils/clickOutside';
	import { X } from 'phosphor-svelte';
	import { navigating } from '$app/stores'

	const pos = tweened(-100, { duration: 1800, easing: expoOut });
	const menuPos = tweened(-192, { duration: 500, easing: expoOut });

	const openMenu = () => {
		menuPos.set(-32);
	};

	const closeMenu = () => {
		menuPos.set(-192);
	};

	const toggleMenu = () => {
		if ($menuPos === -32) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	const handleClickOutside = () => {
		if ($menuPos === -32) {
			closeMenu();
		}
	};

	$: {
		if ($navigating && $menuPos === -32) {
			closeMenu();
		}
	}

	onMount(() => {
		pos.set(0);
	});
</script>

<header
	class={clsx('w-full relative z-10 col-span-5 flex items-center justify-between mt-8', $$props.class)}
	style="transform: translateY({$pos}px);"
>
	<a href="/" aria-label="superteam">
		<NamedLogo />
	</a>
	<div class="hidden md:inline">
		<MenuButtons />
	</div>
	<div 
		class="flex md:hidden fixed h-[160px] pt-8 dropdown z-50 top-0 left-0 w-full"
		style="transform: translateY({$menuPos}px);"
		use:clickOutside on:click_outside={handleClickOutside}
	>
		<div class="flex-1 flex flex-col items-center">
			<MenuButtons />
			<button on:click={toggleMenu} class="mt-8 text-white px-8">
				<X size={24} />
			</button>
		</div>
	</div>
	<button on:click={toggleMenu} class="inline md:hidden" aria-label="Menu button">
		<svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.320312 1.00781H24.3825" stroke="white" stroke-width="2.00518"/>
			<path d="M0.320312 11.0337H24.3825" stroke="white" stroke-width="2.00518"/>
		</svg>	
	</button>
</header>

<style>
	.dropdown {
		background: rgba(29, 29, 31, 0.6);
		@apply backdrop-blur-sm;
	}
</style>