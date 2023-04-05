<script>
	import earn from '../assets/cards/earn.png';
	import ecosystem_calls from '../assets/cards/ecosystem_calls.png';
	import instagrants from '../assets/cards/instagrants.png';
	import alphasquad from '../assets/cards/alphasquad.png';
	import build from '../assets/cards/build.png';
	import founders_league from '../assets/cards/founders_league.png';
	import IllustrationCard from './common/IllustrationCard.svelte';
	import instagrantsbg from '../assets/images/instagrantsbg.png';
	import Modal from './common/Modal.svelte';
	import thunder from '../assets/logos/thunder.svg';

	let modalOpen = false;
	let top_content;
	let text;
	let imgurl;
	let points;
	let btnText;
	let bullet;

	function openModal(content, _text, _imgurl, _points, _btnText, _bullet) {
		top_content = content;
		text = _text;
		imgurl = _imgurl;
		points = _points;
		btnText = _btnText;
		bullet = _bullet;
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
	}
</script>

<div class="productions-container col-span-5 mt-44 flex flex-col justify-center text-center">
	{#if modalOpen}
		<Modal {imgurl} {text} {top_content} {points} {btnText} on:close={closeModal} />
	{/if}

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
			<IllustrationCard
				text="Earn"
				imageUrl={earn}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						instagrantsbg,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				text="Ecosystem Calls"
				imageUrl={ecosystem_calls}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						instagrantsbg,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
		<div class="mt-[12px] col-span-1 lg:col-span-2 flex flex-col items-center lg:text-sm">
			<p class="center-text hidden lg:block parallax">Changing the world,</p>
			<p class="center-text mb-[43px] hidden lg:block parallax">one line of code at a time</p>

			<IllustrationCard
				text="Instagrants"
				imageUrl={instagrants}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						instagrantsbg,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				text="Alpha Squad"
				imageUrl={alphasquad}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						instagrantsbg,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
		<div class=" col-span-1 lg:col-span-2 flex flex-col items-center">
			<IllustrationCard
				text="Build"
				imageUrl={build}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						instagrantsbg,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				text="Founder's League"
				imageUrl={founders_league}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						instagrantsbg,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
	</div>
</div>

<style>
	.superteam {
		font-family: 'Archivo_SemiExpanded';
		letter-spacing: -0.04em;
		line-height: 22px;
	}
	.productions {
		font-family: 'Archivo_SemiExpanded';
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
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
</style>
