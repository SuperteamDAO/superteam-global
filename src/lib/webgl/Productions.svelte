<script>
    import { T } from '@threlte/core'
    import { ScrollTrigger } from '../../utils/gsap';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
    import { expoOut } from 'svelte/easing';
	import { PointLight } from 'three';

    const sl1Intensity = tweened(0, { duration: 500, easing: expoOut });

    onMount(() => {
        ScrollTrigger.create({
            trigger: '.productions-container',
            // markers: true,
            onEnter: () => {
                sl1Intensity.set(4);
            },
            onLeave: () => {
                sl1Intensity.set(0);
            },
            onEnterBack: () => {
                sl1Intensity.set(4);
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
            args={[0x2E1488, 0, 200, Math.PI, 1, 0.01]} 
            position={[-20, 10, 100]}
            rotation={[0, Math.PI * 0.25, 0]}
            castShadow 
    />
    <T.SpotLight
            intensity={$sl1Intensity / 4}
            args={[0xFFE8AC, 0, 150, Math.PI * 0.2, 1, 0.01]} 
            position={[40, 40, 50]}
            rotation={[0, Math.PI * 2, 0]}
            castShadow
    />
    <!-- <T.PointLight
            intensity={$sl1Intensity / 3}
            args={[0xFFE8AC, 0, 150, Math.PI * 0.5, 1, 0.01]} 
            position={[40, 40, 50]}
            rotation={[0, Math.PI * 3, 0]}
            castShadow
    /> -->
</T.Group>
