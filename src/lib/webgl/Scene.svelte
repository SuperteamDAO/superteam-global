<script lang="ts">
    import { Canvas } from '@threlte/core'
	import type Scrollbar from 'smooth-scrollbar';
	import { onMount, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

    export let size = { width: 0, height: 0 }

    // const scrollbar = getContext<Writable<Scrollbar | null>>('smoothScroll');

    // let wrapper: HTMLElement | null = null;

    // $: y = 0;


    // $: {
    //     if ($scrollbar) {
    //         $scrollbar.addListener(({ offset }) => {
    //             if (wrapper) {
    //                 y = offset.y
    //             }
    //         })
    //     }
    // }


</script>

<div
    class="fixed top-0 left-0 z-0"
    style="height: {size.height}px; width: {size.width}px;"
>
    <Canvas {size} >
    
    </Canvas>
</div>

<style lang="postcss">
    :global(canvas) {
        @apply w-full h-full;
	    background: rgb(4, 5, 7);
    }
</style>