<script>
	import wormhole from '../assets/logos/wormhole.svg';
	import pyth from '../assets/logos/pyth.svg';
	import foundation from '../assets/logos/foundation.svg';
	import backpack from '../assets/logos/backpack.svg';
	import ftx from '../assets/logos/ftx.svg';
</script>

<div class="partners-container col-span-5 w-full flex flex-col items-center mt-24">
	<h2 class="partners-text text-center text-white mb-4 mr-[71px] ml-[71px]">partners</h2>
	<div class="logos-container flex flex-wrap justify-center items-center mt-6 gap-11">
		<img class="logo wormhole w-36 h-8" src={wormhole} alt="Wormhole" />
		<img class="logo pyth w-24 h-8" src={pyth} alt="Pyth" />
		<img class="logo foundation w-52 h-4" src={foundation} alt="Foundation" />
		<img class="logo backpack w-30 h-6" src={backpack} alt="Backpack" />
		<img class="logo ftx w-24 h-6" src={ftx} alt="FTX" />
	</div>
</div>

<style>
	.partners-text {
		font-style: 'Archivo_SemiExpanded';
		font-weight: 700;
		font-size: 24px;
		line-height: 26px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
</style>
