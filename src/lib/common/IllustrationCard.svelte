<script>
	/**
	 * @type {any}
	 */
	export let imageUrl;
	/**
	 * @type {any}
	 */
	export let text;
</script>

<div class="image-with-text relative mb-8 rounded-lg">
	<img src={imageUrl} alt="" />
	<p class="text-on-image font-bold text-white" style="top: 32px; left: 32px;">
		{text}
	</p>
</div>

<style>
	.image-with-text {
		background: linear-gradient(180deg, #1d1d1d 0%, rgba(22, 22, 22, 0) 100%);
	}
	.text-on-image {
		position: absolute;

		text-align: left;
		line-height: 31px;
		font-size: calc(1rem + 0.5vw);
		width: calc(120px + 1.5vw);
		margin-right: 10%;
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		font-size: 28.9199px;
		line-height: 31px;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	@media screen and (max-width: 1023px) {
		.text-on-image {
			font-size: calc(1.2rem + 1vw);
		}
	}
</style>
