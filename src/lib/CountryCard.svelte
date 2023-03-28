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
        --perspective: 1000px;
        --rotateX: 0deg;
        --rotateY: 0deg;
        --scale: 1;
        --backgroundX: 50%;
        --backgroundY: 50%;
        --opacity: 0;
        --mouse-from-left: 0.5;
        --mouse-from-top: 0.5;
        --mouse-from-center: 0;
        --mouseX: 50%;
        --mouseY: 50%;

        @apply w-fit bg-neutral-800 rounded-xl relative;
        transform-style: preserve-3d;
        transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale3d(var(--scale),var(--scale),var(--scale));
    }
</style>