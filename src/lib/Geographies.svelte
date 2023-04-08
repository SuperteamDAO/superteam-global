<script>
	import { onMount } from 'svelte';
	import CountryCard from './CountryCard.svelte';
	import NavButton from './common/NavButton.svelte';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';
	/**
	 * @type {HTMLElement}
	 */
	let carousel;
	
</script>

<svelte:window />

<div
	class="carousel-main relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible flex flex-col col-span-5"
>
	<!-- <button class="text-white">Left</button> -->
	<div bind:this={carousel} class="carousel-wrapper h-fit w-full flex items-center px-6 py-8 gap-6 overflow-x-scroll overflow-y-visible scrollbar-hidden">
		<div class="left-offset"></div>
		<CountryCard />
		<CountryCard />
		<CountryCard />
		<CountryCard />
		<CountryCard />
	</div>
	<!-- <button class="text-white">Right</button> -->
</div>

<style lang="postcss">
	.left-offset {
		@apply min-w-[calc((100vw-1176px)/2)];
	}

	@media (min-width: 1800px) {
		.left-offset {
			@apply min-w-0;
		}

		.carousel-wrapper {
			@apply justify-center;
		}
	}
</style>
