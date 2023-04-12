<script>
	import HeroContainer from './common/HeroContainer.svelte';
	export let line1 = '';
	export let line2 = '';
	export let line3 = '';
	export let line4 = '';
	export let buttonVisible = true;
</script>

<section class="hero relative col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-center">
	<HeroContainer {line1} {line2} {line3} {line4} {buttonVisible} />
	<div class="hero-bg absolute top-0 left-0 w-full h-full"></div>
</section>

<style lang="postcss">
	.hero-bg {
		width: 100%;
		height: calc(100% + 48px);
		width: calc(100% + 40px + 40px);
		transform: translateY(-48px) translateX(-40px);
		background-image: url('../assets/hero/Hero_L3.png');
		background-size: cover;
		z-index: 1;
	}

	.hero-bg::after {
		content: '';
		@apply absolute top-0 left-0 w-full h-full;
		background-image: url('../assets/hero/Hero_L2.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		z-index: 5;
	}

	.hero-bg::before {
		content: '';
		@apply absolute top-0 left-0 w-full h-full;
		background-image: url('../assets/hero/Hero_L1.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		z-index: 10;
	}

	@media (min-width: 768px) {
		.hero-bg {
			height: calc(100% + 72px);
			width: calc(100% + 72px + 72px);
			transform: translateY(-72px) translateX(-72px);
		}
	}
</style>
