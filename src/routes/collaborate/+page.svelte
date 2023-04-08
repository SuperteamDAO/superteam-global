<script>
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Partners from '$lib/Partners.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import CollabServices from '$lib/CollabServices.svelte';
	import herobg from '../../assets/images/herobg.png';
</script>

<div class="col-span-5 h-fit">
	<img
		src={herobg}
		alt="herobg"
		class="hiddden md:visible absolute top-0 left-0 w-full object-cover -z-[1]"
	/>
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
</div>

<style lang="postcss">
</style>
