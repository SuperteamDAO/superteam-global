<script>
	import CountryCard from "$lib/CountryCard.svelte";
	import Geographies from "$lib/Geographies.svelte";
	import Hero from "$lib/Hero.svelte";
	import Testimonials from "$lib/Testimonials.svelte";

</script>


<Hero />
<!-- <Geographies />
 -->
  <!-- <CountryCard>
    <div class="shine"></div>
    <div class="glare"></div>
    <div class="card-content">
        Card
    </div>
  </CountryCard> -->
  <!-- <Testimonials /> -->
  
<style lang="postcss">
  /* .card-content {
    @apply w-[300px] h-[400px] flex flex-row items-center justify-center rounded-lg overflow-hidden;
    background-image: url('../assets/cards/india.png');
  } */

  /* .shine, .glare {
    @apply absolute w-full h-full rounded-lg;
  }
  .shine {
    mask-image: url('../assets/cards/invert.jpg');
    background-image: 
        radial-gradient(circle at var(--mouseX) var(--mouseY), #fff 5%, #000 50%, #fff 80% ), 
        linear-gradient( -45deg, #000 15%, #fff, #000 85%),
        url('../assets/cards/monochrome.jpg');
    background-blend-mode: soft-light, difference;
    background-size: 120% 120%, 200% 200%, cover;
    background-position: center center, calc( (100% * var(--mouse-from-left))) calc( (100% * var(--mouse-from-top))) , center center;
    filter: brightness(0.6) contrast(1.5) saturate(1);
    mix-blend-mode: color-dodge;
    opacity: calc( (1.5 * var(--opacity)) - var(--mouse-from-center));
  }

  .glare {
    opacity: var(--opacity);
    background-image: radial-gradient(
      farthest-corner circle at var(--mouseX) var(--mouseY),
      hsla(0, 0%, 100%, 0.8) 10%,
      hsla(0, 0%, 100%, 0.5) 20%,
      hsla(0, 0%, 0%, 0.75) 90%
    );
    filter: brightness(.7) contrast(1.5);
  }

  .glare::after {
    content: "";
    opacity: var(--opacity);
    background-image: radial-gradient( 
      farthest-corner circle at var(--mouseX) var(--mouseY), 
      hsl(0, 0%, 100%) 10%, 
      hsla(0, 0%, 100%, 0.5) 20%, 
      hsla(0, 0%, 0%, 0.5) 120% 
    );
    filter: brightness(1) contrast(1.5);
    clip-path: inset( 9.85% 8% 52.85% 8% );
  }

  :global(html) {
    background-color: theme(colors.gray.100);
  } */
</style>