<script>
    import { onMount } from 'svelte'
  
    let loaded = false
    let thisImage
  
    onMount(() => {
      thisImage.onload = () => {
        loaded = true
      }
    }) 
  
  </script>
  
  <style>
    img {
      opacity: 0;
      transition: opacity 200ms ease-out;
    }
    img.loaded {
      opacity: 1;
    }
  </style>
  
  <img {...$$props} class:loaded bind:this={thisImage} />