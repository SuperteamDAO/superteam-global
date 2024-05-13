<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import Collab from '$lib/Collab.svelte';
	import Geographies from '$lib/Geographies.svelte';
	import Hero from '$lib/Hero.svelte';
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Media from '$lib/Media.svelte';
	import Partners from '$lib/Partners.svelte';
	import Production from '$lib/Production.svelte';
	import hero05x from '../assets/hero/hero_home0.5x.webp';
	import hero from '../assets/hero/hero_home.webp';
	import hero1_5x from '../assets/hero/hero_home1.5x.webp';
	import PrimaryButton from '$lib/common/PrimaryButton.svelte';
	import Events from '$lib/Events.svelte';

	export let data;

	onMount(() => {
		const tl = gsap.timeline()

		tl.fromTo(
			'.twitter-button',
			{ y: 0, opacity: 0 },
			{
				opacity: 1,
				duration: 1.8,
				ease: 'power4.out'
			},
		);
	})

</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href={hero05x}
		imagesrcset={`${hero05x} 640w, ${hero} 1440w, ${hero1_5x} 2560w`}
		imagesizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px"
	/>
	<title>Welcome to Superteam</title>
	<meta name="description" content="" />
</svelte:head>

<Hero
	line1="Join the Talent Layer"
	line2="of Solana"
	line3="superteam is a community of the best talent learning,"
	line4="earning and building in crypto"
	buttonVisible={false}
>
	<div class="mt-8 twitter-button opacity-0">
		<PrimaryButton target="_blank" rel="noopener noreferrer" class="text-center text-white bg-[#1DA1F2]" href="https://twitter.com/SuperteamDAO">
			Twitter
		</PrimaryButton>
	</div>
</Hero>

<Geographies />

<Partners />

<Production />

<Media />

<!-- <SuperteamIrl /> -->

<LoveRespect />

<Collab />

<!-- <CountryCard>
    <div class="shine"></div>
    <div class="glare"></div>
    <div class="card-content">
        Card
    </div>
  </CountryCard> -->
<!-- <Testimonials /> -->

<style lang="postcss">
</style>
