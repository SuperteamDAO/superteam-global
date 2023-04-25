<script>
	import ProjectsGrid from '$lib/Projects/ProjectsGrid.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import build_lg from '../../assets/images/build-lg.webp';
	import build_sm from '../../assets/images/build-sm.webp';
	import build_xl from '../../assets/images/build-xl.webp';
	import ImageLoader from '$lib/ImageLoader.svelte';

	export let data;
</script>

<svelte:head>
	<title>Projects</title>
	<meta
		name="description"
		content="Explore projects Superteam Members around the world have built and launched!"
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
	class="absolute top-0 left-0 w-full object-cover"
/>

<section class="relative col-span-5 flex flex-col items-center pb-[300px]">
	<HeroContainer
		line1="Industry leading"
		line2="Projects"
		line3="superteam is the forefront community for web3,"
		line4="powered by solana."
		buttonVisible={false}
	/>
	<ProjectsGrid projects={data.projects} />
</section>

<style>
	.overlay {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.98%, #000000 89.97%);
	}
</style>
