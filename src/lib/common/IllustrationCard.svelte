<script>
	import clsx from 'clsx';

	export let imageUrl;
	export let text;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={clsx('image-with-text relative rounded-lg cursor-pointer p-[1px] bg-white', $$props.class)}
	on:click
>
	<img src={imageUrl} class="rounded-lg" alt="" />
	<p
		class="text-on-image absolute text-left font-bold text-white top-[32px] left-[32px] text-[20px] md:text-[28px]"
	>
		{text}
	</p>
</div>

<style>
	.image-with-text {
		background: linear-gradient(180deg, #1d1d1d 0%, rgba(22, 22, 22, 0) 100%);
	}
	.text-on-image {
		line-height: 31px;
		width: calc(120px + 1.5vw);
		margin-right: 10%;
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		line-height: 31px;
		letter-spacing: -0.04em;
		color: #ffffff;
	}
</style>
