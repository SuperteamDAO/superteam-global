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
		const minPosition = 0;
		const scrollAmount = carousel.clientWidth / 2;
		currentPosition = Math.max(currentPosition - scrollAmount, minPosition);
		carousel.scrollTo({ left: currentPosition, behavior: 'smooth' });
	}

	function scrollRight() {
		const maxPosition = carousel.scrollWidth - carousel.clientWidth;
		const scrollAmount = carousel.clientWidth / 2;
		currentPosition = Math.min(currentPosition + scrollAmount, maxPosition);
		carousel.scrollTo({ left: currentPosition, behavior: 'smooth' });
	}
</script>

<div
	class="carousel-main relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible flex flex-col col-span-5"
>
	<div
		class="carousel-container flex items-center justify-between text-white mr-[71px] ml-[71px] mb-4"
	>
		<div class="nav-buttons w-full md:flex">
			<NavButton direction="left" class="left hidden md:flex" on:click={scrollLeft}
				><CaretLeft size={20} /></NavButton
			>
			<h2 class="chapters text-center flex-1">chapters</h2>
			<NavButton direction="right" class="right hidden md:flex" on:click={scrollRight}
				><CaretRight size={20} /></NavButton
			>
		</div>
	</div>
	<div
		bind:this={carousel}
		class="country-cards-container w-full col-span-5 overflow-x-scroll overflow-y-visible scrollbar-hidden pb-0"
	>
		<div class="country-cards w-full flex gap-8 min-[1630px]:justify-center py-12">
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
			<CountryCard />
		</div>
	</div>
	<div class="nav-buttons text-white md:hidden flex justify-center gap-11 mt-4">
		<NavButton direction="left" class="left" on:click={scrollLeft}
			><CaretLeft size={20} /></NavButton
		>
		<NavButton direction="right" class="right" on:click={scrollRight}
			><CaretRight size={20} /></NavButton
		>
	</div>
</div>

<style lang="postcss">
	.chapters {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 26px;
		text-align: center;
		color: #ffffff;
	}
</style>
