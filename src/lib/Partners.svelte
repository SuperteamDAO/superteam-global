<script>
	import wormhole from '../assets/logos/wormhole.svg';
	import pyth from '../assets/logos/pyth.svg';
	import foundation from '../assets/logos/foundation.svg';
	import backpack from '../assets/logos/backpack.svg';
	import ftx from '../assets/logos/ftx.svg';
</script>

<div class="partners-container col-span-5 w-full flex flex-col items-center">
	<h2 class="partners-text text-center text-white text-xl font-semibold mb-4">partners</h2>
	<div class="logos-container flex mt-6 justify-center space-x-4 gap-6">
		<img class="logo wormhole" src={wormhole} width={'182px'} alt="Wormhole" />
		<img class="logo pyth" src={pyth} alt="Pyth" />
		<img class="logo foundation" src={foundation} alt="Foundation" />
		<img class="logo backpack" src={backpack} alt="Backpack" />
		<img class="logo ftx" src={ftx} alt="FTX" />
	</div>
</div>

<style>
	.partners-text {
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 26px;
		text-align: center;
		letter-spacing: -0.04em;
	}
	.partners-container {
		margin-top: 108px;
	}
	.wormhole {
		height: 32px;
		width: 182px;
	}
	.pyth {
		height: 32px;
		width: 94px;
	}
	.foundation {
		width: 209px;
		height: 18px;
		justify-content: center;
	}
	.backpack {
		width: 120px;
		height: 23px;
	}
	.ftx {
		width: 94px;
		height: 23px;
	}
	.logos-container {
		justify-content: center;
		align-items: center;
	}
</style>
