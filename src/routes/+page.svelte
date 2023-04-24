<script>
	import Collab from '$lib/Collab.svelte';
	import Geographies from '$lib/Geographies.svelte';
	import Hero from '$lib/Hero.svelte';
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Media from '$lib/Media.svelte';
	import Partners from '$lib/Partners.svelte';
	import Production from '$lib/Production.svelte';
	import SuperteamIrl from '$lib/SuperteamIRL.svelte';
</script>

<svelte:head>
	<title>Welcome to Superteam</title>
	<meta name="description" content="">
	<meta name='og:title' content='Welcome to Superteam'>
	<meta name='og:type' content='community'>
	<meta name='og:url' content='https://superteam.fun'>
	<meta name='application-name' content='superteam'>
	<meta name='og:email' content='hello@superteam.fun'>
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
