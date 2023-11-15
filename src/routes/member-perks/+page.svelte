<script>
	import PerksGrid from '$lib/Perks/PerksGrid.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import build_lg from '../../assets/images/project-bg-lg.webp';
	import build_sm from '../../assets/images/project-bg-sm.webp';
	import build_xl from '../../assets/images/project-bg-xl.webp';
	import ImageLoader from '$lib/ImageLoader.svelte';
	import stars_bg from '../../assets/images/stars-bg.webp';
	export let data;
</script>

<svelte:head>
	<title>Member Perks</title>
	<meta
		name="description"
		content="Explore perks Superteam Members around the world are eligible to claim!"
	/>
	<meta name="og:title" content="Projects" />
	<meta name="og:type" content="community" />
	<meta name="og:url" content="https://superteam.fun" />
	<meta name="application-name" content="superteam" />
	<meta name="og:email" content="hello@superteam.fun" />
	<meta name="twitter:title" content="Projects" />
</svelte:head>

<!-- <img src={build_lg} class="absolute top-0 left-0 w-full object-cover" loading="eager" alt="" /> -->

<ImageLoader
	src={build_lg}
	srcset={`${build_sm} 640w, ${build_lg} 1440w, ${build_xl} 2560w`}
	sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px"
	loading="eager"
	alt=""
	class="absolute top-0 left-0 w-full object-cover -mt-[72px]"
/>

<section class="relative col-span-5 flex flex-col items-center pb-[300px]">
	<img src={stars_bg} alt="" class="stars-bg" />
	<HeroContainer
		line1="Exclusive Perks"
		line2="for Members"
		line3="being a superteam member comes with many perks,"
		line4="check them out below."
		buttonVisible={false}
	/>
	<p
		class="section-heading center-text text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] lg:mb-0 mb-[48px] mt-[128px]"
	>
		Live Now
	</p>
	<PerksGrid perks={data.perks.livePerks} />
  <p
		class="section-heading center-text text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] lg:mb-0 mb-[48px] mt-[128px]"
	>
		Completed
	</p>
	<PerksGrid perks={data.perks.completedPerks} />
	<p
		class="section-heading center-text text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] lg:mb-0 mb-[48px] mt-[128px]"
	>
		Coming Soon
	</p>
	<PerksGrid perks={data.perks.comingSoonPerks} />
</section>

<style>
	.overlay {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.98%, #000000 89.97%);
	}
	.stars-bg {
		position: absolute;
		width: calc(50% * (100vw / 1440px));
		height: calc(12.5% * (100vw / 1440px));
		top: calc(2.25% * (100vw / 1440px));
	}

	@media screen and (max-width: 850px) {
		.stars-bg {
			visibility: hidden;
		}
	}

	@media (min-width: 851px) and (max-width: 1024px) {
		.stars-bg {
			width: 60%;
			height: 10.5%;
			top: 2%;
		}
	}

	@media (min-width: 1025px) and (max-width: 1439px) {
		.stars-bg {
			width: 60%;
			height: 12.5%;
			top: 5%;
		}
	}

	@media (min-width: 1025px) and (max-width: 1440px) {
		.stars-bg {
			width: 50%;
			height: 12.5%;
			top: 2.25%;
		}
	}
	@media (min-width: 1441px) {
		.stars-bg {
			width: 40%;
			height: 10.5%;
			top: 2.25%;
		}
	}
</style>
