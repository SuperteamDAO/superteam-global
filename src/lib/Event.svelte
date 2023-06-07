<script>
	import clsx from "clsx";
    import { getContext } from "svelte";
    import { format } from "date-fns"
    export let { event, index, reverse = false, ...rest } = $$props;

    const translateX = getContext("translateX");
    const totalWidth = getContext("totalWidth");
    const offset = 400 * index + 24 * index;

    let value = $translateX;

    $: {
        value = $translateX + offset;

        if (value < -1 * totalWidth / 2) {
            value += totalWidth;
        } else if (value > totalWidth / 2) {
            value -= totalWidth;
        }
    }

    $: styles = `transform: translate3d(${(value * (reverse ? -1 : 1)).toFixed(2)}px, 0, 0);`;

</script>

<div 
    {...rest}
    class={clsx(
        "min-w-[400px] h-[300px] max-w-[400px] p-6 rounded-xl bg-slate-800 flex flex-col justify-between items-stretch",
        $$props.class
    )}
    style={styles}
>
    <div class="flex flex-col">
        <p class="text-white font-secondary text-[26px] font-bold">
            {event.fields.Title}
        </p>
    </div>
    <div class="font-secondary flex justify-between text-white text-base">
        <div class="w-fit py-2 px-3 text-center font-bold bg-black rounded-full">
            {format(new Date(event.fields.Date), "dd.M.yyyy")}
        </div>
        <div class="w-fit py-2 px-3 text-center font-bold bg-black rounded-full">
            {event.fields.Geo[0]}
        </div>
    </div>
</div>