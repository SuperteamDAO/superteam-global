<script>
	import wormhole from '../assets/logos/wormhole.svg';
	import foundation from '../assets/logos/foundation.svg';
	import backpack from '../assets/logos/backpack.svg';
	import circle from '../assets/logos/circle.svg';
	import jupiter from '../assets/logos/jupiter.svg'
</script>

<div class="partners-container col-span-5 w-full flex flex-col items-center mt-[224px]">
	<h2
		class="partners-text section-heading font-secondary text-center font-bold text-white mb-10 mr-[71px] ml-[71px] text-[24px] md:text-[32px] lg:leading-[26px] leading-[22px]"
	>
		Grant Partners
	</h2>
	<div class="flex flex-col items-center w-full">

		<div class="grid grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-4xl mx-auto px-8">
		  <a href="https://solana.org/" class="flex justify-center">
			<img class="h-8" src={foundation} alt="Foundation" loading="lazy" />
		  </a>
		  <a href="https://wormhole.com/" class="flex justify-center">
			<img class="h-8" src={wormhole} alt="Wormhole" loading="lazy" />
		  </a>
		  <a href="https://www.jup.ag/" class="flex justify-center">
			<img class="h-8" src={jupiter} alt="Jupiter" loading="lazy" />
		  </a>
		  <a href="https://www.circle.com/" class="flex justify-center">
			<img class="h-8" src={circle} alt="Circle" loading="lazy" />
		  </a>
		</div>
	   </div>
</div>

<style>
	.partners-text {
		text-align: center;

		color: #ffffff;
	}
</style>
