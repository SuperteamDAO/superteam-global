<script>
	import Collab from '$lib/Collab.svelte';
	import Geographies from '$lib/Geographies.svelte';
	import Hero from '$lib/Hero.svelte';
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Media from '$lib/Media.svelte';
	import Partners from '$lib/Partners.svelte';
	import Production from '$lib/Production.svelte';
	import SuperteamIrl from '$lib/SuperteamIRL.svelte';
	import hero05x from '../assets/hero/hero_home0.5x.webp';
	import hero from '../assets/hero/hero_home.webp';
	import hero1_5x from '../assets/hero/hero_home1.5x.webp';
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
	<meta name="og:title" content="Welcome to Superteam" />
	<meta name="og:type" content="community" />
	<meta name="og:url" content="https://superteam-global.vercel.app/" />
	<meta name="application-name" content="superteam" />
	<meta name="og:email" content="hello@superteam.fun" />
	<meta name="og:image" content="https://superteam-global.vercel.app/og_pic.webp" />
	<meta name="twitter:image" content="https://superteam-global.vercel.app/og_pic.webp" />
	<meta name="twitter:title" content="Welcome to Superteam" />
</svelte:head>

<Hero
	line1="your portal to the"
	line2="new world of crypto"
	line3="superteam is a community of the best talent learning,"
	line4="earning and building in crypto"
	buttonVisible={true}
/>

<Geographies />

<Partners />

<Production />

<Media />

<SuperteamIrl />

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
