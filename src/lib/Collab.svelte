<script>
	import collabpic from '../assets/images/collabpic2.png';
	import collabsm from '../assets/images/collab-sm2.png';
	import PrimaryButton from './common/PrimaryButton.svelte';
	import ImageLoader from './ImageLoader.svelte';
</script>

<div
	class="collab-container col-span-5 flex flex-col justify-center align-middle relative left-1/2 right-1/2 -translate-x-1/2 w-screen -mt-[70px] md:-mt-[250px] -mb-[50px] md:-mb-[20px] lg:-mb-[30px] z-1 bg-black h-fit md:rounded-[64px] md:h-fit"
>
	<div class="overlay absolute w-full h-full hidden md:block" />
	<ImageLoader
		src={collabsm}
		srcset={`${collabsm} 640w, ${collabpic} 1024w`}
		sizes="(max-width: 640px) 100vw, 1024px"
		loading="lazy"
		alt=""
		class="lg:h-fit h-[690px] md:rounded-[64px] object-cover"
	/>

	<div
		class="history-stuff w-full flex flex-col md:justify-center items-center h-[669px] md:h-full"
	>
		<p class="history mt-[145px] md:mt-[80px] text-[24px] w-[189px] md:text-[32px] md:w-[245px]">
			be a part of history
		</p>
		<div class="button mt-[50px]">
			<PrimaryButton class="bg-white" target="_blank" ref="noopener noreferrer" href="mailto:support@superteam.fun?subject=Working%20with%20Superteam&body=Hello,%20I%20wanted%20to%20explore%20the%20possibility%20of%20us%20working%20together.">Collab with us</PrimaryButton>
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
			49.05% 88.04% at 50% 84.89%,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.37) 100%
		);
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
