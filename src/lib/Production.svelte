<script>
	import earn from '../assets/cards/earn.png';
	import ecosystem_calls from '../assets/cards/ecosystem_calls.png';
	import instagrants from '../assets/cards/instagrants.png';
	import alphasquad from '../assets/cards/alphasquad.png';
	import build from '../assets/cards/build.png';
	import founders_league from '../assets/cards/founders_league.png';
</script>

<div class="col-span-5 mt-44 flex flex-col justify-center text-center">
	<div>
		<p class="superteam font-semibold text-xl leading-none text-white">superteam</p>
		<p class="productions">productions</p>
	</div>
	<div class="col-span-5 flex justify-center gap-10">
		<div class="mt-3">
			<img src={earn} alt="earn" class="mb-8" />
			<img src={ecosystem_calls} alt="ecosystem calls" />
		</div>
		<div>
			<div class="center-text mt-3">
				<p>Changing the world,</p>
				<p>one line of code at a time</p>
			</div>
			<div class="mt-11">
				<img src={instagrants} alt="instagrants" class="mb-8" />
				<img src={alphasquad} alt="alpha squad" />
			</div>
		</div>
		<div>
			<img src={build} alt="build" class="mb-8" />
			<img src={founders_league} alt="founders league" />
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
		line-height: 22px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
</style>
