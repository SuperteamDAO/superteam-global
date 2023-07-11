<script>
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import { format } from 'date-fns';
	import ImageLoader from './ImageLoader.svelte';
	export let { event, index, reverse = false, ...rest } = $$props;

	const translateX = getContext('translateX');
	const totalWidth = getContext('totalWidth');
	const offset = 400 * index + 24 * index;

	let value = $translateX;

	$: {
		value = $translateX + offset;

		if (value < (-1 * totalWidth) / 2) {
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
		'min-w-[400px] h-[300px] max-w-[400px] event-card rounded-xl bg-neutral-900 flex flex-col justify-between items-stretch rel overflow-hidden',
		$$props.class
	)}
	style={styles}
>
	<div class="flex flex-col justify-between items-stretch h-full relative">
		<div class="flex flex-col mx-6 mt-6 z-10">
			<p class="text-white font-secondary text-[26px] font-bold">
				{event.fields.Title}
			</p>
		</div>
		<div class="font-secondary flex justify-between text-white text-base mb-6 mx-6 z-10">
			<div class="w-fit py-2 px-3 text-center font-bold bg-black rounded-full">
				{format(new Date(event.fields.Date), 'dd.M.yyyy')}
			</div>
			<div class="w-fit py-2 px-3 text-center font-bold bg-black rounded-full">
				{event.fields.Flag} {event.fields.Geo[0]}
			</div>
		</div>
		{#if event.fields?.Pictures?.[0]?.url}
			<div class="absolute w-full h-full z-0 image-wrapper">
				<ImageLoader src={event.fields.Pictures[0].url} class="w-full h-full object-cover" />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.image-wrapper::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 5;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) -55.5%, #000000 100%);
		opacity: 1;
		transition: opacity 0.3s ease-out;
	}

	.event-card:hover .image-wrapper::before {
		opacity: 0.5;
	}
</style>
