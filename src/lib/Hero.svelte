<script>
	import HeroContainer from './common/HeroContainer.svelte';
	export let line1 = '';
	export let line2 = '';
	export let line3 = '';
	export let line4 = '';
	export let buttonVisible = true;
</script>

<section class="hero col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-center">
	<HeroContainer {line1} {line2} {line3} {line4} {buttonVisible} />
</section>

<style lang="postcss">
</style>
