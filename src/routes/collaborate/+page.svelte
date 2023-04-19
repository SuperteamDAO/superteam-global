<script>
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Partners from '$lib/Partners.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import CollabServices from '$lib/CollabServices.svelte';
</script>

<div class="col-span-5 h-fit">
	<section class="hero relative col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-centerr">
		<HeroContainer
			line1="collaborate with the"
			line2="forefront of web3"
			line3="superteam is the forefront community for web3,"
			line4="powered by solana."
			buttonVisible={false}
		/>
		<div class="hero-bg absolute top-0 left-0 w-full h-[calc(100vh)] overflow-hidden" />
	</section>

	<!-- <div class="pb-[200px]"></div> -->
	<Partners />

	<CollabServices />

	<LoveRespect collab={true} />
</div>

<style lang="postcss">
	.hero-bg {
		background-image: url('../../assets/collaborate/collaborate.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: translateY(-48px) translateX(-40px);
		width: calc(100% + 40px + 40px);
	}

	@media (min-width: 768px) {
		.hero-bg {
			height: calc(100% + 72px);
			width: calc(100% + 72px + 72px);
			transform: translateY(-72px) translateX(-72px);
		}
	}
</style>
