<script>
	import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from 'svelte/easing';

    let slices = tweened(0, { duration: 1800, easing: cubicOut, delay: 300 });
    let slices2 = tweened(21, { duration: 1800, easing: cubicOut, delay: 300 });
    let slices3 = tweened(0, { duration: 1800, easing: cubicOut, delay: 300 });

    onMount(() => {
        slices.set(20);
        slices2.set(0);
        slices3.set(32);
    });
</script>

<svg width="42" height="32" viewBox="0 0 42 32" fill="white" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="clip0">
        <polygon points="-1 -1, {$slices} 0, {$slices} 16, 0 16" />
        <polygon points="{$slices2} 15, 20 15, 15 32, {$slices2} 32" />
        <polygon points="20 0, 42 0, 42 {$slices3}, 20 {$slices3}" />
    </clipPath>
    <path 
        d="M32.6944 4.90892H41.4468V8.28973C41.4468 12.8741 37.742 16.5795 33.1571 16.5795H32.6938L32.6944 4.90892ZM20.2372 0H32.6944V31.9071H31.2127C22.1822 31.9071 20.3765 25.6088 20.3765 20.0055L20.2372 0ZM0 7.22433C0 12.9205 4.07522 15.0043 8.61369 15.6993H0V32H8.28973C16.6252 32 17.5978 28.2952 17.5978 24.7757C17.5978 20.4688 14.6338 17.459 10.0495 16.3007H17.5978V0H9.30807C0.972554 0 0 3.70477 0 7.22433Z" fill="white"
        clip-path="url(#clip0)"
    />
</svg>
