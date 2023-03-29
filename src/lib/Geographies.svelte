<script>
	import CountryCard from './CountryCard.svelte';
	import NavButton from './common/NavButton.svelte';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	/**
	 * @type {HTMLElement}
	 */
	let carousel;
	let currentPosition = 0;

	function scrollLeft() {
		currentPosition -= carousel.clientWidth / 2;
		carousel.scrollTo({ left: currentPosition, behavior: 'smooth' });
	}

	function scrollRight() {
		currentPosition += carousel.clientWidth / 2;
		carousel.scrollTo({ left: currentPosition, behavior: 'smooth' });
	}
</script>

<section class="w-full flex flex-col col-span-5">
	<div class="carousel-container flex items-center justify-between text-white">
		<NavButton direction="left" class="left" on:click={scrollLeft}><CaretLeft size={20} /></NavButton>
		<h2 class="chapters text-center">chapters</h2>
		<NavButton direction="right" class="right" on:click={scrollRight}><CaretRight size={20} /></NavButton>
	</div>
	<div bind:this={carousel} class="country-cards-container py-12 w-full col-span-5 overflow-x-scroll overflow-y-visible scrollbar-hidden">
		<div class="country-cards w-full flex gap-8">
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
		</div>
	</div>
</section>

<style lang="postcss">
	.chapters {
		font-family: inherit;
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 26px;
		text-align: center;

		color: #ffffff;
	}
</style>
