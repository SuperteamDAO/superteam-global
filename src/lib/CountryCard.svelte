<script lang="ts">
	import { tweened } from "svelte/motion";
	import { writable } from "svelte/store";
    import { clamp, round, adjust } from "../utils/math";
	import ImageLoader from "./ImageLoader.svelte";

    export let imgPath: string;
    export let name: string;
    export let countryGradient: string;
    export let invert: boolean;

    let request: number;
    let thisCard: undefined | HTMLDivElement = undefined;
    let isActive = false;

    const springInteractSettings = { stiffness: 0.1, damping: 0.5, duration: 100 };
    const mouse = writable({ x: 0, y: 0 });

    let springRotate = tweened({ x: 0, y: 0 }, springInteractSettings);
    let springGlare = tweened({ x: 50, y: 50, o: 0 }, springInteractSettings);
    let springBackground = tweened({ x: 50, y: 50 }, springInteractSettings);
    
    const update = () => {
        if (!thisCard) return;
        const rect = thisCard.getBoundingClientRect();
        const absolute = {
            x: $mouse.x - rect.left,
            y: $mouse.y - rect.top
        }
        const percent = {
            x: clamp(round(100 / rect.width) * absolute.x),
            y: clamp(round(100 / rect.height) * absolute.y),
        }
        const center = {
            x: percent.x - 50,
            y: percent.y - 50,
        }

        springBackground.set({  
            x: adjust(percent.x, 0, 100, 37, 63),
            y: adjust(percent.y, 0, 100, 33, 67),
        })

        springRotate.set({
            x: -1 * round(center.x / 5),
            y: round(center.y / 4),
        })

        springGlare.set({
            x: round(percent.x),
            y: round(percent.y),
            o: 1,
        })

    }

    const enter = (e: MouseEvent | TouchEvent) => {
        isActive = true;
        move(e);
    }
    
    const move = (e: MouseEvent | TouchEvent) => {
        if (!isActive) return;

        if (e instanceof MouseEvent) {
            mouse.set({ x: e.clientX, y: e.clientY });
        } else if (e instanceof TouchEvent) {
            mouse.set({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        }

        cancelAnimationFrame(request);
		request = requestAnimationFrame(update);
    }

    const leave = (e: FocusEvent) => {
        isActive = false;

        setTimeout(function () {
            springRotate.set({ x: 0, y: 0 });
            springGlare.set({ x: 50, y: 50, o: 0 });
            springBackground.set({ x: 50, y: 50 });
        }, 200);
    }

    let dynamicStyles = "";

    $: {
        let rotateX = $springRotate.x;
        let rotateY = $springRotate.y;

        dynamicStyles = `
            --mouseX: ${$springGlare.x}%;
            --mouseY: ${$springGlare.y}%;
            --mouse-from-center: ${ 
            clamp( Math.sqrt( 
                ($springGlare.y - 50) * ($springGlare.y - 50) + 
                ($springGlare.x - 50) * ($springGlare.x - 50) 
            ) / 50, 0, 1) };
            --mouse-from-top: ${$springGlare.y / 100};
            --mouse-from-left: ${$springGlare.x / 100};
            --card-opacity: ${$springGlare.o};
            --rotateX: ${rotateX}deg;
            --rotateY: ${rotateY}deg;
            --backgroundX: ${$springBackground.x}%;
            --backgroundY: ${$springBackground.y}%;
            --opacity: ${isActive ? 1 : 0};
            --country-gradient: ${countryGradient};
	    `;
    }

</script>

<div 
    style={dynamicStyles}
    class="card country-card w-[300px] h-[400px]"
    bind:this={thisCard}
    on:mouseenter={enter}
    on:mousemove={move}
    on:mouseleave={leave}
    on:blur={leave}
>
    <div class="card_rotator">
        <div class="shine" class:invert-shine={invert} ></div>
        <div class="glare"></div>
        <div class="card-content">
            <ImageLoader src={imgPath} alt={name} class="brightness-50 grayscale" loading="lazy" />
            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end pb-10">
                <p class="text-white font-secondary font-semibold text-[24px] country-name">
                    {name}
                </p>
            </div>
        </div> 
    </div>
</div>

<style lang="postcss">
    .card {
        --clip: inset( 9.85% 8% 52.85% 8% );
        --perspective: 1000px;
        --mouseX: 50%;
        --mouseY: 50%;
        --opacity: 0;
        --rotateX: 0deg;
        --rotateY: 0deg;
        --backgroundX: var(--mouseX);
        --backgroundY: var(--mousey);
        --mouse-from-center: 0;    
        --mouse-from-top: var(--mouse-from-center);
        --mouse-from-left: var(--mouse-from-center);
        --scale: 1;

        @apply rounded-xl relative;
    }
    
    .card_rotator {
        @apply w-[300px] h-[400px] relative rounded-xl;
        transform-style: preserve-3d;
        transform: perspective(var(--perspective)) rotateY(var(--rotateX)) rotateX(var(--rotateY)) scale3d(var(--scale),var(--scale),var(--scale));
    }

    .card-content {
        @apply w-full h-full top-0 left-0 flex flex-row items-center justify-center rounded-lg overflow-hidden z-0;
    }

    .shine, .glare {
        @apply absolute w-full h-full rounded-lg z-10;
        will-change: transform, opacity, background-image, background-size,
            background-position, background-blend-mode, filter;
    }
    .shine {
        mask-image: url('../assets/cards/invert.jpg');
        background-image:
            radial-gradient(circle at var(--mouseX) var(--mouseY), #fff 5%, #000 50%, #fff 80% ),
            var(--country-gradient),
            url('../assets/cards/grain.webp'),
            url('../assets/cards/monochrome.jpg');
        background-blend-mode: soft-light, darken, difference, difference;
        background-size: 120% 120%, 150% 150%, cover, cover;
        background-position: center center, calc((50% * var(--mouse-from-left))) calc((100% * var(--mouse-from-top))) , center center, center center;
        filter: brightness(0.6) contrast(1.5) saturate(1.5);
        mix-blend-mode: color-dodge;
        opacity: calc(var(--opacity));
        transition: all 0.2s ease-out;
    }

    .invert-shine {
        mask-image: url('../assets/cards/monochrome.jpg');
        background-image:
            radial-gradient(circle at var(--mouseX) var(--mouseY), #fff 5%, #000 50%, #fff 80% ),
            var(--country-gradient),
            url('../assets/cards/grain.webp'),
            url('../assets/cards/invert.jpg');
    }

    .glare {
        opacity: var(--opacity);
        background-image: radial-gradient(
        farthest-corner circle at var(--mouseX) var(--mouseY),
        hsla(0, 0%, 100%, 0.8) 10%,
        hsla(0, 0%, 100%, 0.5) 20%,
        hsla(0, 0%, 0%, 0.75) 90%
        );
        filter: brightness(0.1) contrast(1.5) saturate(1.5);
        mix-blend-mode: color-dodge;
        transition: all 0.2s ease-out;
    }

    .country-name {
        transform-style: preserve-3d;
        transform: translateZ(100px);
    }

</style>

<!-- url('../assets/cards/monochrome.jpg') -->