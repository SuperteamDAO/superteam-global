<script>
	import { onMount } from 'svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import Image from './Image.svelte';

	let nativeLoading = false;

	// Determine whether to bypass our intersecting check
	// onMount(() => {
	//   if ('loading' in HTMLImageElement.prototype) {
	//     nativeLoading = true
	//   }
	// })
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {...$$props} />
	{/if}
</IntersectionObserver>
