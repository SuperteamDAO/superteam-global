<script>
	import Collab from '$lib/Collab.svelte';
	import Geographies from '$lib/Geographies.svelte';
	import Hero from '$lib/Hero.svelte';
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Partners from '$lib/Partners.svelte';
	import Production from '$lib/Production.svelte';
	import SuperteamIrl from '$lib/SuperteamIRL.svelte';
	import Testimonials from '$lib/Testimonials.svelte';
</script>

<Hero
	line1="your portal to the"
	line2="world of solana"
	line3="superteam is the forefront community for web3,"
	line4="powered by solana."
	buttonVisible={true}
/>

<Geographies />

<Partners />

<Production />

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
