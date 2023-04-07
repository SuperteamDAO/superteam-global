<script>
    import { T, useTexture, useFrame, useThrelte } from '@threlte/core'
    import { ScrollTrigger } from '../../utils/gsap';
    import { onMount } from 'svelte'
    import { tweened } from 'svelte/motion'
    import { page } from '$app/stores'
    import { useProgress } from '../../utils/hooks/useProgress';

    // export let size = { width: 0, height: 0 }
    const imageWidth = 12.8
    const imageHeight = 11
    const opacity = tweened(1, { duration: 500 })
    const { size } = useThrelte()
    $: aspect = $size.width / $size.height

    $: adaptedHeight = imageHeight * (aspect > imageWidth / imageHeight ? $size.width / imageWidth : $size.height / imageHeight)
    $: adaptedWidth = imageWidth * (aspect > imageWidth / imageHeight ? $size.width / imageWidth : $size.height / imageHeight)
    
    const layers = [
        {
            path: '/webgl/hero/Hero_L3.png',
            z: 1,
            show: true,
        },{
            path: '/webgl/hero/Hero_L2.png',
            z: 2,
            show: true,
        },{
            path: '/webgl/hero/Hero_L1.png',
            z: 3,
            show: true,
        }
    ]

    const textures = useTexture(layers.map(layer => layer.path))    
    
    onMount(() => {
        ScrollTrigger.create({
            trigger: '.hero',
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                if ($page.route.id === "/") {
                    opacity.set(1);
                }
            },
            onLeave: () => {
                // opacity.set(0);
            },
            onEnterBack: () => {
                if ($page.route.id === "/") {
                    opacity.set(1);
                }
            },
            onLeaveBack: () => {
                // opacity.set(0);
            },
        })
    })
</script>


<T.Group>
    {#each textures as texture, i}
        <T.Mesh position={[0, 0, layers[i].z]} scale={[adaptedWidth, adaptedHeight, 1]} receiveShadow castShadow>
            <T.PlaneGeometry args={[0.1, 0.1]} />
            <T.MeshStandardMaterial args={[{ map: texture, transparent: true }]} opacity={1} />
        </T.Mesh>
    {/each}
</T.Group>
