<script>
	import CountryCard from './CountryCard.svelte';
	import india from '../assets/chapters/india.jpg';
	import germany from '../assets/chapters/germany.jpg';
	import turkey from '../assets/chapters/turkey.jpg';
	import vietnam from '../assets/chapters/vietnam.jpg';
	import mexico from '../assets/chapters/mexico.jpg';

	/**
	 * @type {HTMLElement}
	 */
	let carousel;

	// india, germany, turkey, vietnam and mexico
	const countries = [
		{
			key: 'india',
			name: 'India',
			path: india,
		},
		{
			key: 'germany',
			name: 'Germany',
			path: germany,
		},
		{
			key: 'turkey',
			name: 'Turkey',
			path: turkey,
		},
		{
			key: 'vietnam',
			name: 'Vietnam',
			path: vietnam,
		},
		{
			key: 'mexico',
			name: 'Mexico',
			path: mexico,
		},
	]
	
</script>

<svelte:window />

<div
	class="carousel-main relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible flex flex-col col-span-5"
>
	<!-- <button class="text-white">Left</button> -->
	<div bind:this={carousel} class="carousel-wrapper h-fit w-full flex items-center px-6 py-8 gap-6 overflow-x-scroll overflow-y-visible scrollbar-hidden">
		<div class="left-offset"></div>
		{#each countries as country}
			<CountryCard 
				imgPath={country.path} 
				name={country.name}
			/>
		{/each}
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
