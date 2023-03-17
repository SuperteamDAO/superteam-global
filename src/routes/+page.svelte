<script>
	import CountryCard from "$lib/CountryCard.svelte";

</script>

<div class="p-4">
  <CountryCard>
    <button class="w-[310px] h-[400px] flex items-center justify-center border border-solid border-neutral-300 rounded-xl">
      Card
    </button>
  </CountryCard>
</div>
  
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>