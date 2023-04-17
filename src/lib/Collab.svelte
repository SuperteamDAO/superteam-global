<script>
	import collabpic from '../assets/images/collabpic.png';
	import blackhole2 from '../assets/images/blackhole2.png';
	import PrimaryButton from './common/PrimaryButton.svelte';
</script>

<div
	class="collab-container col-span-5 flex flex-col justify-center align-middle relative left-1/2 right-1/2 -translate-x-1/2 w-screen -mt-[100px] md:-mt-[150px] -mb-[200px] md:-mb-[20px] lg:-mb-[30px] z-1 bg-black h-fit md:h-fit"
>
	<div class="overlay absolute w-full h-full hidden md:block" />
	<!-- uncomment the following line to add the updated image: -->
	<img src={collabpic} alt="" class="lg:h-fit h-[807px] md:rounded-[64px] hidden md:block" />

	<!-- placeholder below, remove the following line after updating the image : -->
	<!-- <div class="h-[807px] md:rounded-[64px] hidden md:block" /> -->

	<div class="overlay-sm absolute w-full h-full block md:hidden" />
	<!-- uncomment the following line to add the updated image: -->
	<!-- <img src={collabpic} alt="" class="w-full h-[700px] md:rounded-[64px] block md:hidden" /> -->

	<!-- placeholder below, remove the following line after updating the image : -->
	<div class="w-full h-[669px] md:rounded-[64px] block md:hidden" />

	<div
		class="history-stuff w-full flex flex-col md:justify-center items-center h-[669px] md:h-full"
	>
		<p class="history mt-[80px] text-[24px] w-[189px] md:text-[32px] md:w-[245px]">
			be a part of history
		</p>
		<div class="button mt-[50px]">
			<PrimaryButton href="/collaborate">Collab with us</PrimaryButton>
		</div>
	</div>
</div>

<style>
	.history {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		line-height: 39px;
		text-align: center;
		letter-spacing: -0.04em;
		color: #ffffff;
		height: 78px;
	}
	.collab-container {
		z-index: 1;
	}
	.history-stuff {
		position: absolute;
	}
	.overlay {
		border-radius: 64px;
		background: radial-gradient(
					29.56% 40.33% at 47.94% 24.3%,
					rgba(0, 0, 0, 0.2) 0%,
					rgba(0, 0, 0, 0) 100%
				)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
			radial-gradient(23.82% 42.75% at 49.03% 54.97%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.87) 100%)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	}

	.overlay-sm {
		background: radial-gradient(
					29.56% 40.33% at 47.94% 24.3%,
					rgba(0, 0, 0, 0.2) 0%,
					rgba(0, 0, 0, 0) 100%
				)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
			radial-gradient(23.82% 42.75% at 49.03% 54.97%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.87) 100%)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	}
</style>
