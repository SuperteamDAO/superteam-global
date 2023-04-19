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
			countryGradient:
				'linear-gradient(135deg, #FF9A37 0%, rgba(255, 255, 255, 0.8) 48.96%, #369A2C 100%)',
			invert: false
		},
		{
			key: 'germany',
			name: 'Germany',
			path: germany,
			countryGradient: 'linear-gradient(151.47deg, #D70000 0%, #FFFFFF 50.7%, #FFB701 98.53%)',
			invert: true
		},
		{
			key: 'turkey',
			name: 'Turkey',
			path: turkey,
			countryGradient: 'linear-gradient(151.47deg, #DA1212 0%, #FFFFFF 50.7%, #D70000 98.53%)',
			invert: false
		},
		{
			key: 'vietnam',
			name: 'Vietnam',
			path: vietnam,
			countryGradient: 'linear-gradient(151.47deg, #FFB701 0%, #FFFFFF 50.7%, #D70000 98.53%)',
			invert: true
		},
		{
			key: 'mexico',
			name: 'Mexico',
			path: mexico,
			countryGradient: 'linear-gradient(161.18deg, #00B17B -3.45%, #FFFFFF 47.74%, #FF4D60 96.31%)',
			invert: true
		}
	];
</script>

<svelte:window />

<div
	class="carousel-main relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible flex flex-col col-span-5"
>
	<div
		bind:this={carousel}
		class="carousel-wrapper h-fit w-full pl-[40px] md:pl-[72px] flex items-center px-6 py-8 gap-6 overflow-x-scroll overflow-y-visible scrollbar-hidden"
	>
		<!-- <div class="left-offset" /> -->
		{#each countries as country}
			<CountryCard
				imgPath={country.path}
				name={country.name}
				countryGradient={country.countryGradient}
				invert={true}
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
