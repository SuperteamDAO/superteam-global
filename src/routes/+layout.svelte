<script lang="ts">
	import '../styles/reset.css';
	import '../styles/fonts.css';
	import '../styles/global.css';
	import '../utils/gsap';

	import { gsap } from 'gsap';
	import { setContext } from 'svelte';
	import Header from '$lib/common/Header.svelte';
	import Footer from '$lib/common/Footer.svelte';
	import Scene from '$lib/webgl/Scene.svelte';
	import { writable } from 'svelte/store';
	import { navigating } from '$app/stores';

	const tl = gsap.timeline();
	const mouse = writable({ x: 0, y: 0 });
	$: width = 0;
	$: height = 0;

	setContext('mouse', $mouse);
	setContext('tl', tl);

	const mouseMove = (e: MouseEvent) => {
		mouse.set({ x: e.clientX, y: e.clientY });
	};
</script>

<!-- <svelte:head>
  <meta name="viewport" content="minimum-scale=1"/>
</svelte:head> -->

<svelte:window bind:innerHeight={height} bind:innerWidth={width} on:mousemove={mouseMove} />

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
