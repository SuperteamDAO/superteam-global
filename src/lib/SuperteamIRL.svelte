<script>
	import buildstations from '../assets/cards/buildstations.png';
	import supermeets from '../assets/cards/supermeets.png';
	import uniprogram from '../assets/cards/uniprogram.png';
</script>

<div class="irl-container mt-48 col-span-5">
	<div class="irl-header">
		<p class="irl">Superteam IRL</p>
	</div>
	<div class="irl-pix col-span-5 justify-center gap-10 mt-4">
		<img src={buildstations} alt="" />
		<img src={supermeets} alt="" class="mt-14" />
		<img src={uniprogram} alt="" />
	</div>
</div>

<style>
	.irl-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.irl-pix {
		display: flex;
		flex-direction: row;
	}
	.irl {
		font-family: inherit;
		font-style: normal;
		font-weight: 500;
		font-size: 36px;
		line-height: 49px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
</style>
