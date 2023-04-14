<script>
	import clsx from 'clsx';

	export let imageUrl;
	export let text;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={clsx('image-with-text relative rounded-lg cursor-pointer p-[1px]', $$props.class)}
	on:click
>
	<img src={imageUrl} class="rounded-lg" loading="lazy" alt="" />
	<p
		class="text-on-image absolute text-left font-bold text-white top-[32px] left-[32px] text-[20px] md:text-[28px]"
	>
		{text}
	</p>
</div>

<style>
	.image-with-text {
		background: linear-gradient(144.34deg, rgba(247, 243, 243, 0) -29.96%, rgba(63, 63, 63, 0) 131.56%);
		transition: background 0.5s ease;
	}
	.image-with-text:hover {
		background: linear-gradient(144.34deg, rgba(247, 243, 243, 1) -29.96%, rgba(63, 63, 63, 0.67) 131.56%);
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
