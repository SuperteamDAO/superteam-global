<script lang="ts">
  import "../styles/reset.css";
  import "../styles/fonts.css";
  import "../styles/global.css";

	import { onMount, setContext } from 'svelte';
	import Header from "$lib/common/Header.svelte";
	import Scene from "$lib/webgl/Scene.svelte";
	import { writable } from "svelte/store";

  let height = 0;
  let width = 0;

  const mouse = writable({ x: 0, y: 0 });
  setContext('mouse', $mouse);

  const mouseMove = (e: MouseEvent) => {
    mouse.set({ x: e.clientX, y: e.clientY });
  }
  
  let parallaxElements = document.querySelectorAll('.parallax');

  const parallax = (position:{ x: number; y: number }) => {
    // const { x, y } = position;
    // const moveX = x * -0.3 / 15;
    // const moveY = y * -0.3 / 15;

    // parallaxElements?.forEach((el) => {
    //   el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    // })
  }

  mouse.subscribe((position) => {
    parallax(position);
  })

  onMount(() => {
    parallaxElements = document.querySelectorAll('.parallax');
  })

</script>
<svelte:head>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
</svelte:head>

<svelte:window
  bind:innerHeight={height}
  bind:innerWidth={width}
  on:mousemove={mouseMove}
/>

<Scene size={{ width, height }} />

<!-- <div class="relative h-full grid grid-cols-5 gap-5 px-10 md:px-[72px] mx-auto max-w-[1440px]">
  <Header />
  <slot />
</div> -->

<style>
  :global(.scrollbar-track) {
    background-color: transparent !important;
  }
</style>