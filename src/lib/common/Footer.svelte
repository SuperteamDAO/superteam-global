<script>
	import superteam_footer from '../../assets/logos/superteam_footer.svg';
	import AnimatedLogo from './AnimatedLogo.svelte';
</script>

<div
	class="footer-container relative left-1/2 right-1/2 -translate-x-1/2 w-screen md:w-[calc(100vw-144px)] h-fit lg:h-[477px] col-span-5 rounded-t-[48px] z-10"
>
	<div
		class="main-container h-fit mt-[53px] lg:mt-[56px] flex lg:flex-row flex-col justify-between"
	>
		<div class="overlay-logo absolute ml-[50px] mt-[19px] lg:ml-[72px] lg:mt-[17px]">
			<AnimatedLogo />
		</div>
		<div class="footer-logo ml-[40px] lg:ml-[45px]">
			<div>
				<img src={superteam_footer} alt="" class="w-3/4 md:w-1/2 lg:w-full" />
			</div>
			<div class=" absolute -mt-[80px] md:-mt-[140px] lg:ml-[27px] lg:mt-0">
				<p class="overlay-text">superteam</p>
			</div>
		</div>
		<div
			class="footer-texts mt-[64px] lg:mt-0 lg:ml-0 ml-[40px] lg:mr-[72px] text-white lg:text-right flex md:flex-row flex-col"
		>
			<div class="text-col-1 flex flex-col items-start md:items-end gap-4">
				<a href="https://earn.superteam.fun" target="_blank" class="footer-text">Superteam Earn</a>
				<a href="https://docs.google.com/presentation/d/1m78Nu7YKdkckN5bu-pNsw3gdczEdMU_R/edit#slide=id.p1" target="_blank" class="footer-text">Brand Guidelines</a>
				<!-- <p class="footer-text mt-4">Earn</p>
				<p class="footer-text mt-4">Ecosystem Calls</p>
				<p class="footer-text mt-4">Alpha Squad</p>
				<p class="footer-text mt-4">Founder's League</p> -->
			</div>
		</div>
	</div>
</div>

<style>
	.footer-container {
		background-color: #121212;
	}
	.footer-text {
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		/* identical to box height */

		color: #ffffff;
	}
	.overlay-text {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 35px;
		/* identical to box height */

		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	.powered-text {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 15px;
		text-align: left;
		color: #ffffff;
		letter-spacing: 0.02em;
	}
</style>
