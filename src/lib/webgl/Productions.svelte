<script>
    import { T, HierarchicalObject } from '@threlte/core'
    import { ScrollTrigger } from '../../utils/gsap';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
    import { expoOut } from 'svelte/easing';
    import * as THREE from 'three';

    const sl1Intensity = tweened(0, { duration: 500, easing: expoOut });
    let target = new THREE.Object3D();

    onMount(() => {
        ScrollTrigger.create({
            trigger: '.productions-container',
            // markers: true,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                sl1Intensity.set(1);
            },
            onLeave: () => {
                sl1Intensity.set(0);
            },
            onEnterBack: () => {
                sl1Intensity.set(1);
            },
            onLeaveBack: () => {
                sl1Intensity.set(0);
            },
        });
    });
    
</script>

<T.Group>
    <T.SpotLight
            intensity={$sl1Intensity}
            args={[0x8866FF, 0, 200, Math.PI, 1, 0.01]} 
            position={[-20, 10, 100]}
            rotation={[0, Math.PI * 0.25, 0]}
            castShadow 
    />
    <T.SpotLight
            intensity={$sl1Intensity}
            args={[0x8866FF, 0, 200, Math.PI, 1, 0.01]} 
            position={[26, 32, 50]}
            castShadow
            target={target}
    />
    <!-- <HierarchicalObject
        object={target}
    /> -->
    <!-- <T.PointLight
            intensity={$sl1Intensity / 3}
            args={[0xFFE8AC, 0, 150, Math.PI * 0.5, 1, 0.01]} 
            position={[40, 40, 50]}
            rotation={[0, Math.PI * 3, 0]}
            castShadowConnec
    /> -->
</T.Group>
