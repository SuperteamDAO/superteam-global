<script>
  import "../styles/reset.css";
  import "../styles/fonts.css";
  import "../styles/global.css";
</script>
<svelte:head>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
</svelte:head>  
<div class="h-full grid grid-cols-5 px-10 md:px-[72px] mx-auto max-w-[1440px]">
  <slot />
</div>