<script>
	import Footer from '$lib/Footer.svelte';
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Partners from '$lib/Partners.svelte';
	import Hero from '$lib/Hero.svelte';
	import CollabServices from '$lib/CollabServices.svelte';
</script>

<Hero
	line1="collaborate with the"
	line2="forefront of web3"
	line3="superteam is the forefront community for web3,"
	line4="powered by solana."
	buttonVisible={false}
/>

<!-- <div class="pb-[200px]"></div> -->
<Partners />

<CollabServices />

<LoveRespect collab={true} />

<Footer />

<style lang="postcss">
</style>
