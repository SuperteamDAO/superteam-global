<script>
	import Footer from '$lib/Footer.svelte';
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Partners from '$lib/Partners.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import CollabServices from '$lib/CollabServices.svelte';
</script>

<section class="hero col-span-5 sm:h-[466px] md:h-[588px] flex flex-col items-center">
	<HeroContainer
		line1="collaborate with the"
		line2="forefront of web3"
		line3="superteam is the forefront community for web3,"
		line4="powered by solana."
		buttonVisible={false}
	/>
</section>

<!-- <div class="pb-[200px]"></div> -->
<Partners />

<CollabServices />

<LoveRespect collab={true} />

<Footer />

<style lang="postcss">
</style>
