<script lang="ts">
    import { Canvas, useTexture, T } from '@threlte/core'
	import { onMount, setContext } from 'svelte';
	import { texturesConfig } from '../../constants/webgl';
	import Base from './Base.svelte';
    import Productions from './Productions.svelte';
	
    export let size = { width: 0, height: 0 }

    setContext('screenDimensions', size);

    const textures = useTexture(Object.values(texturesConfig).map((texture) => texture.path))

    onMount(() => {

    })

</script>

<div
    class="fixed top-0 left-0 z-0 pointer-events-none"
    style="height: {size.height}px; width: {size.width}px;"
>
    <Canvas {size} >
        <Base {size} />
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
    }
</style>