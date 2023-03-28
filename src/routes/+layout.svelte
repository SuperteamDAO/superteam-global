<script>
  import "../styles/reset.css";
  import "../styles/fonts.css";
  import "../styles/global.css";

  import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Scrollbar from 'smooth-scrollbar';
	
	import { onMount } from 'svelte';
  import { readable } from "svelte/store";
	import Header from "$lib/common/Header.svelte";


  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)
    const scroller = document.body;

    const smoothScroll = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: false });

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          if (typeof value === 'number') {
            smoothScroll.scrollTop = value;
          }
        }
        return smoothScroll.scrollTop
      }  
    });

    smoothScroll.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ 
			scroller: scroller,
			pinType: 'transform'
		});
  })
</script>
<svelte:head>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
</svelte:head>

<div class="h-full grid grid-cols-5 gap-5 px-10 md:px-[72px] mx-auto max-w-[1440px]">
  <Header />
  <slot />
</div>

<style>
  :global(.scrollbar-track) {
    background-color: transparent;
  }
</style>