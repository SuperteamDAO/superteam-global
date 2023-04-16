<script lang="ts">
	import '../styles/reset.css';
	import '../styles/fonts.css';
	import '../styles/global.css';
	import '../utils/gsap';

	import Header from "$lib/common/Header.svelte";
  import Footer from "$lib/common/Footer.svelte";

</script>

<svelte:head>
	<link rel="preconnect" href="https://abs.twimg.com/">
	<link rel="preconnect" href="https://api.twitter.com/">
	<link rel="preconnect" href="https://pbs.twimg.com/">
	<link rel="preconnect" href="https://t.co/">
	<link rel="preconnect" href="https://video.twimg.com/">
	<link rel="dns-prefetch" href="https://abs.twimg.com/">
	<link rel="dns-prefetch" href="https://api.twitter.com/">
	<link rel="dns-prefetch" href="https://pbs.twimg.com/">
	<link rel="dns-prefetch" href="https://t.co/">
	<link rel="dns-prefetch" href="https://video.twimg.com/">

	<link rel="preconnect" href="https://res.cloudinary.com/">
	<link rel="dns-prefetch" href="https://res.cloudinary.com/">
</svelte:head>

<!-- <Scene size={{ width: width, height: height }} /> -->

<Header class="mx-auto px-10 md:px-[72px]" />
<div class="relative h-full grid grid-cols-5 gap-5 px-10 md:px-[72px] mx-auto">
	<slot />
	<Footer />
</div>

<style>
	:global(.scrollbar-track) {
		background-color: transparent !important;
	}
</style>
