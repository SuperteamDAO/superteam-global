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

<div class="carousel-main w-full flex flex-col col-span-5 md:-mx-[112px]">
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
		class="country-cards-container py-12 w-full col-span-5 overflow-x-scroll overflow-y-visible scrollbar-hidden"
	>
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
	.carousel-main {
		width: calc(100vw - 10px);
	}

	@media (max-width: 767px) {
		.carousel-main {
			width: calc(100vw - 10px);
			margin-left: -40px;
		}
	}

	@media (max-width: 639px) {
		.carousel-main {
			width: calc(100vw - 10px);
			margin-left: -40px;
		}
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
