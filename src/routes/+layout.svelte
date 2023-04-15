<script lang="ts">
  import "../styles/reset.css";
  import "../styles/fonts.css";
  import "../styles/global.css";
  import "../utils/gsap";

	import Header from "$lib/common/Header.svelte";
  import Footer from "$lib/common/Footer.svelte";

</script>

<!-- <Scene size={{ width: width, height: height }} /> -->

<Header class="mx-auto px-10 md:px-[72px]" />
<div
  class="relative h-full grid grid-cols-5 gap-5 px-10 md:px-[72px] mx-auto"
>
	<slot />
  <Footer />
</div>


<style>
	:global(.scrollbar-track) {
		background-color: transparent !important;
	}
</style>
