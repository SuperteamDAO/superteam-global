<script>
	import wormhole from '../assets/logos/wormhole.svg';
	import foundation from '../assets/logos/foundation.svg';
	import backpack from '../assets/logos/backpack.svg';
	import ftx from '../assets/logos/ftx.svg';
</script>

<div class="partners-container col-span-5 w-full flex flex-col items-center mt-24">
	<h2
		class="partners-text section-heading font-secondary text-center font-bold text-white mb-4 mr-[71px] ml-[71px] text-[24px] md:text-[32px] lg:leading-[26px] leading-[22px]"
	>
		Partners
	</h2>
	<div class="logos-container flex flex-wrap justify-center items-center mt-6 gap-11 w-full">
		<a href="https://wormhole.com/" target="_blank">
			<img class="logo wormhole h-8 w-auto" src={wormhole} alt="Wormhole" loading="lazy" />
		</a>
		<a href="https://solana.org/" target="_blank">
			<img class="logo foundation h-6 w-auto" src={foundation} alt="Foundation" loading="lazy" />
		</a>
		<a href="https://www.backpack.app/" target="_blank">
			<img class="logo backpack h-8 w-auto" src={backpack} alt="Backpack" loading="lazy" />
		</a>
		<img class="logo ftx h-8 w-auto opacity-30" src={ftx} alt="FTX" loading="lazy" />
	</div>
</div>

<style>
	.partners-text {
		text-align: center;

		color: #ffffff;
	}
</style>
