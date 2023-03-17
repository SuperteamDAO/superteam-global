<script lang="ts">
	import { tilt } from "../utils/tilt";


    let thisCard: undefined | HTMLDivElement = undefined;

</script>

<div 
    class="card"
    bind:this={thisCard}
    use:tilt
>
            <slot />
</div>

<style lang="postcss">
    .card {
        @apply w-fit bg-neutral-800 rounded-xl;
        transform-style: preserve-3d;
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1);
    }
</style>