<script lang="ts">
    import { Canvas } from '@threlte/core'
    import { useProgress } from '../../utils/hooks/useProgress';
    import { onMount, setContext } from 'svelte';
	import Base from './Base.svelte';
    import Productions from './Productions.svelte';
	import Hero from './Hero.svelte';
	
    export let size = { width: 0, height: 0 }

    setContext('screenDimensions', size);

</script>

<div
    class="fixed top-[50%] left-[50%] z-0 pointer-events-none translate-x-[-50%] translate-y-[-50%]"
    style="height: {size.height}px; width: {size.width}px;"
>
    <Canvas {size} >
        <Base />
        <Hero  />
        <Productions />
            <!-- {#each Object.values(texturesConfig) as texture, i}
            <T.Mesh position={[0, 0, texture.z]}>
                <T.PlaneGeometry args={[7 * 16 / 9, 7 * 9 / 16]} />
                <T.MeshBasicMaterial map={textures[i]} transparent={true} />
            </T.Mesh>
        {/each} -->
    </Canvas>
</div>

<style lang="postcss">
    :global(canvas) {
        @apply w-full h-full;
        @apply pointer-events-none;
        background-color: rgb(4, 5, 7);
    }
</style>