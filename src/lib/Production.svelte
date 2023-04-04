<script>
	import earn from '../assets/cards/earn.png';
	import ecosystem_calls from '../assets/cards/ecosystem_calls.png';
	import instagrants from '../assets/cards/instagrants.png';
	import alphasquad from '../assets/cards/alphasquad.png';
	import build from '../assets/cards/build.png';
	import founders_league from '../assets/cards/founders_league.png';
	import IllustrationCard from './common/IllustrationCard.svelte';
</script>

<div class="col-span-5 mt-44 flex flex-col justify-center text-center  productions-container">
	<div>
		<p class="superteam font-semibold text-xl leading-none text-white parallax transition-all duration-50">superteam</p>
		<p class="productions parallax transition-all duration-100">productions</p>
		<p class="center-text lg:hidden parallax transition-all duration-50">Changing the world,</p>
		<p class="center-text lg:hidden parallax transition-all duration-50">one line of code at a time</p>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-8 gap-0 lg:gap-[24px] mx-auto">
		<div
			class="mt-[35px] lg:mt-[0px] col-span-1 lg:col-span-2 lg:col-start-2 flex flex-col items-center"
		>
			<IllustrationCard text="Earn" imageUrl={earn} />
			<IllustrationCard text="Ecosystem Calls" imageUrl={ecosystem_calls} />
		</div>
		<div class="mt-[12px] col-span-1 lg:col-span-2 flex flex-col items-center lg:text-sm">
			<p class="center-text hidden lg:block parallax">Changing the world,</p>
			<p class="center-text mb-[43px] hidden lg:block parallax">one line of code at a time</p>

			<IllustrationCard text="Instagrants" imageUrl={instagrants} />
			<IllustrationCard text="Alpha Squad" imageUrl={alphasquad} />
		</div>
		<div class=" col-span-1 lg:col-span-2 flex flex-col items-center">
			<IllustrationCard text="Build" imageUrl={build} />
			<IllustrationCard text="Founder's League" imageUrl={founders_league} />
		</div>
	</div>
</div>

<style>
	.superteam {
		letter-spacing: -0.04em;
	}
	.productions {
		font-family: inherit;
		font-style: normal;
		font-weight: 700;
		font-size: 50px;
		line-height: 54px;
		letter-spacing: -0.04em;

		background: linear-gradient(173.91deg, rgba(255, 255, 255, 0) -102.4%, #ffffff 116.87%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
	.center-text {
		font-family: inherit;
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
</style>
