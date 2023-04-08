<script lang="ts">
	import { spring, tweened } from "svelte/motion";
	import { writable } from "svelte/store";
    import { clamp, round, adjust } from "../utils/math";

    let request: number;
    let thisCard: undefined | HTMLDivElement = undefined;
    let isActive = false;

    const springInteractSettings = { stiffness: 0.1, damping: 0.5, duration: 100 };
    const springPopoverSettings = { stiffness: 0.1, damping: 0.5, duration: 100 };

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
            x: -1 * round(center.x / 3.5),
            y: round(center.y / 2),
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
	    `;
    }

</script>

<div 
    style={dynamicStyles}
    class="card country-card"
    bind:this={thisCard}
    on:mouseenter={enter}
    on:mousemove={move}
    on:mouseleave={leave}
    on:blur={leave}
>
    <div class="card_rotator">
        <div class="shine"></div>
        <div class="glare"></div>
        <div class="card-content">
            <slot />
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

        @apply w-[300px] h-[400px] rounded-xl relative z-10;
    }
    
    .card_rotator {
        @apply w-fit h-fit relative rounded-xl;
        transform-style: preserve-3d;
        transform: perspective(var(--perspective)) rotateY(var(--rotateX)) rotateX(var(--rotateY)) scale3d(var(--scale),var(--scale),var(--scale));
    }

    .card-content {
        @apply w-[300px] h-[400px] flex flex-row items-center justify-center rounded-lg;
        background-image: url('../assets/cards/india.png');
    }

    .card-content:hover {
        /* background-image: linear-gradient(
            181.01deg, 
            #0E0E0E 6.89%, 
            #D70000 32.57%, 
            #FFB701 58.8%); */
    }

    .shine, .glare {
        @apply absolute w-full h-full rounded-lg;
        will-change: transform, opacity, background-image, background-size,
            background-position, background-blend-mode, filter;
    }
    .shine {
        mask-image: url('../assets/cards/invert.jpg');
        background-image:
            radial-gradient(circle at var(--mouseX) var(--mouseY), #fff 5%, #000 50%, #fff 80% ), 
            linear-gradient( -45deg, #000 15%, #fff, #000 85%),
            url('../assets/cards/grain.webp'),
            url('../assets/cards/monochrome.jpg');
        background-blend-mode: soft-light, difference;
        background-size: 120% 120%, 200% 200%, cover, cover;
        background-position: center center, calc( (100% * var(--mouse-from-left))) calc( (100% * var(--mouse-from-top))) , center center;
        filter: brightness(0.6) contrast(1.5) saturate(1);
        mix-blend-mode: color-dodge;
        opacity: calc( (1.5 * var(--opacity)) - var(--mouse-from-center));
    }

    .glare {
        opacity: var(--opacity);
        background-image: radial-gradient(
        farthest-corner circle at var(--mouseX) var(--mouseY),
        hsla(0, 0%, 100%, 0.8) 10%,
        hsla(0, 0%, 100%, 0.5) 20%,
        hsla(0, 0%, 0%, 0.75) 90%
        );
        filter: brightness(.7) contrast(1.5);
        mix-blend-mode: overlay;
    }

    .glare::after {
        content: "";
        opacity: var(--opacity);
        background-image: radial-gradient( 
        farthest-corner circle at var(--mouseX) var(--mouseY), 
        hsl(0, 0%, 100%) 10%, 
        hsla(0, 0%, 100%, 0.5) 20%, 
        hsla(0, 0%, 0%, 0.5) 120% 
        );
        filter: brightness(1) contrast(1.5);
    }
</style>

<!-- url('../assets/cards/monochrome.jpg') -->