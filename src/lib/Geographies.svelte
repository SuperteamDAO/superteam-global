<script>
	import CountryCard from './CountryCard.svelte';
	import NavButton from './common/NavButton.svelte';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	let carousel;

	function scrollLeft() {
		carousel.scrollBy(-carousel.clientWidth, 0);
	}

	function scrollRight() {
		carousel.scrollBy(carousel.clientWidth, 0);
	}
</script>

<div class="carousel-container col-span-5 flex items-center justify-between text-white">
	<NavButton direction="left" class="left" on:click={scrollLeft}><CaretLeft size={20} /></NavButton>
	<h2 class="chapters text-center">chapters</h2>
	<NavButton direction="right" class="right" on:click={scrollRight}
		><CaretRight size={20} /></NavButton
	>
</div>
<div class="country-cards-container col-span-5 mt-12 overflow-x-scroll">
	<section bind:this={carousel} class="country-cards flex gap-8">
		<CountryCard />
		<CountryCard />
		<CountryCard />
		<CountryCard />
		<CountryCard />
		<CountryCard />
		<CountryCard />
	</section>
</div>

<style lang="postcss">
	.carousel-container {
		width: 100%;
	}
	.country-cards-container {
		width: 100%;
		overflow-x: scroll;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer and Edge */
	}
	.country-cards-container::-webkit-scrollbar {
		display: none; /* Chrome, Safari, and Opera */
	}
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
