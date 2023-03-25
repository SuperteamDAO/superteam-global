<script>
	import CountryCard from "$lib/CountryCard.svelte";
	import Testimonials from "$lib/Testimonials.svelte";

</script>

<div class="p-4 col-span-5 w-full">
  <Testimonials />
</div>
  
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>