<script>
    import clsx from "clsx";
	import Event from "./Event.svelte";
    export let events;

    console.log(events);
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
            <div class="h-[300px] flex flex-row gap-6">
                {#each events as event}
                    <Event event={event} />
                {/each}
            </div>
        </div>
        <div class="w-full grid greid-cols-1">
            <div class="h-[300px] flex flex-row gap-6">
                {#each events as event}
                    <Event event={event} />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .respect-container {
		justify-content: center;
		z-index: 4;
	}

</style>