<script>
    import clsx from "clsx";
	import Event from "./Event.svelte";
	import { tweened } from "../utils/pauseableTween";
	import { onMount, setContext } from "svelte";
  import PrimaryButton from './common/PrimaryButton.svelte';

    export let events;

    const eventsLength = events.length;
    const totalWidth = eventsLength * 400 + (eventsLength) * 24;

    const translateX = tweened(0, {
        duration: 0,
    });

    $: {
        if ($translateX >= totalWidth) {
            translateX.set(-totalWidth, { duration: 0 });
            translateX.set(0, { duration: eventsLength * 6000 });
        } else if ($translateX <= -totalWidth) {
            translateX.set(0, { duration: 0 });
            translateX.set(-totalWidth, { duration: eventsLength * 6000 });
        }
    }

    setContext("translateX", translateX);
    setContext("totalWidth", totalWidth);

    onMount(() => {
        translateX.set(-totalWidth, {
            duration: eventsLength * 6000,
        });
    })

</script>

<div
	class={clsx(
		'respect-container h-fit md:h-fit mt-[224px] col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible'
	)}
>
    <div class="love-header">
        <p class="text-[24px] text-center md:text-[32px] lg:leading-[35px] leading-[26px] section-heading">
            Superteam IRL
        </p>
    </div>

    <div class="flex w-full flex-col gap-6 mt-20">
        <div class="w-full grid grid-cols-1 scrollbar-hidden">
            <div class="h-[300px] relative">
                {#each events as event, index}
                    <Event event={event} index={index} class="absolute top-0 left-0" />
                {/each}
            </div>
        </div>
        <div class="w-full grid greid-cols-1">
            <div class="h-[300px] relative">
                {#each events as event, index}
                    <Event event={event} index={index} reverse={true} class="absolute top-0 left-0" />
                {/each}
            </div>
        </div>
        <div class="w-full flex align-middle justify-center mt-16">
          <PrimaryButton class="bg-white" href="https://lu.ma/superteam">See upcoming events</PrimaryButton>
        </div>

    </div>

  </div>

<style>
    .respect-container {
		justify-content: center;
		z-index: 4;
	}

</style>