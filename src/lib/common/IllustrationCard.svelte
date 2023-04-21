<script>
	import clsx from 'clsx';

	export let imageUrl;
	export let text;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={clsx('image-with-text rounded-lg cursor-pointer', $$props.class)} on:click>
	<div class="image-with-text-content w-full h-full relative overflow-hidden rounded-lg">
		<img src={imageUrl} width={300} height={400} class="rounded-lg absolute z-10 object-cover" loading="lazy" alt="" />
		<p
			class="z-10 text-on-image absolute text-left font-bold text-white top-[32px] left-[32px] text-[20px] md:text-[28px]"
		>
			{text}
		</p>
	</div>
</div>

<style>
	.image-with-text {
		position: relative;
		z-index: 1;
		background: #202020;
		padding: 1px;
		transition: background 0.5s ease;
		transition: border 400ms;
	}

	.image-with-text-content {
		background: linear-gradient(177.68deg, #0e0e0e -18.67%, #000000 114.79%);
	}

	.image-with-text-content img {
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
	}

	.image-with-text::after {
		content: '';
		z-index: -1;
		@apply absolute rounded-lg;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: linear-gradient(144.34deg, #F7F3F3 -29.96%, rgba(63, 63, 63, 0.67) 131.56%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.image-with-text:hover::after {
		opacity: 1;
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
