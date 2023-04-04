<script lang="ts">
    import { OrbitControls, PerspectiveCamera, Canvas, useTexture, AmbientLight, T } from '@threlte/core'
	import { onMount } from 'svelte';
	import { texturesConfig } from '../../constants/webgl';
	
    export let size = { width: 0, height: 0 }

    const textures = useTexture(Object.values(texturesConfig).map((texture) => texture.path))

    onMount(() => {

    })

</script>

<div
    class="fixed top-0 left-0 z-0"
    style="height: {size.height}px; width: {size.width}px;"
>
    <Canvas {size} >
        <PerspectiveCamera
            fov={50}
            position={{ z: 5 }}
        >
            <OrbitControls />
            <AmbientLight color={0xd7681c} intensity={0.3} />
        </PerspectiveCamera>
        {#each Object.values(texturesConfig) as texture, i}
            <T.Mesh position={[0, 0, texture.z]}>
                <T.PlaneGeometry args={[7 * 16 / 9, 7 * 9 / 16]} />
                <T.MeshBasicMaterial map={textures[i]} transparent={true} />
            </T.Mesh>
        {/each}
    </Canvas>
</div>

<style lang="postcss">
    :global(canvas) {
        @apply w-full h-full;
        background-color: rgb(4, 5, 7);
    }
</style>