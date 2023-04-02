<script lang="ts">
	import '../styles/reset.css';
	import '../styles/fonts.css';
	import '../styles/global.css';

	// import { gsap } from 'gsap';
	// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	// import Scrollbar from 'smooth-scrollbar';

	import { onMount, setContext } from 'svelte';
	import Header from '$lib/common/Header.svelte';
	import Scene from '$lib/webgl/Scene.svelte';
	import { writable } from 'svelte/store';

	let height = 0;
	let width = 0;

	// const smoothScroll = writable<null | Scrollbar>(null);
	// setContext('smoothScroll', smoothScroll);

	onMount(() => {
		// gsap.registerPlugin(ScrollTrigger)
		// const scroller = document.body;
		// $smoothScroll = Scrollbar.init(scroller, { damping: 0.01, delegateTo: document, alwaysShowTracks: false });
		// ScrollTrigger.scrollerProxy(scroller, {
		//   scrollTop(value) {
		//     if (arguments.length) {
		//       if (typeof value === 'number' && $smoothScroll !==  null) {
		//         $smoothScroll.scrollTop = value;
		//       }
		//     }
		//     if ($smoothScroll !== null) {
		//       return $smoothScroll.scrollTop
		//     }
		//   }
		// });
		// $smoothScroll.addListener(ScrollTrigger.update);
		// ScrollTrigger.defaults({
		// 	scroller: scroller,
		// 	pinType: 'transform'
		// });
	});
</script>

<svelte:head>
	<script src="https://unpkg.com/@phosphor-icons/web"></script>
</svelte:head>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<Scene size={{ width, height }} />

<div class="relative h-full grid grid-cols-5 gap-5 px-10 md:px-[72px] mx-auto max-w-[1440px]">
	<Header />
	<slot />
</div>

<style>
	:global(.scrollbar-track) {
		background-color: transparent !important;
	}
</style>
