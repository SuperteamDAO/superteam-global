<script>
	import wormhole from '../assets/logos/wormhole.svg';
	import foundation from '../assets/logos/foundation.svg';
	import backpack from '../assets/logos/backpack.svg';
	import circle from '../assets/logos/circle.svg';
	import jupiter from '../assets/logos/jupiter.svg'
</script>

<div class="partners-container col-span-5 w-full flex flex-col items-center mt-[224px]">
	<h2
		class="partners-text section-heading font-secondary text-center font-bold text-white mb-4 mr-[71px] ml-[71px] text-[24px] md:text-[32px] lg:leading-[26px] leading-[22px]"
	>
		Grant Partners
	</h2>
	<div class="logos-container flex flex-wrap justify-center items-center mt-6 gap-11 w-full">
		<a href="https://wormhole.com/" target="_blank">
			<img class="logo wormhole h-8 w-auto" src={wormhole} alt="Wormhole" loading="lazy" />
		</a>
		<a href="https://solana.org/" target="_blank">
			<img class="logo foundation h-6 w-auto" src={foundation} alt="Foundation" loading="lazy" />
		</a>
		<a href="https://www.jup.ag/" target="_blank">
			<img class="logo jupiter h-8 w-auto" src={jupiter} alt="Jupiter" loading="lazy" />
		</a>

		<a href="https://www.circle.com/" target="_blank">
			<img class="logo backpack h-8 w-auto" src={circle} alt="Circle" loading="lazy" />
		</a>

	</div>
</div>

<style>
	.partners-text {
		text-align: center;

		color: #ffffff;
	}
</style>
