<script>
	import earn from '../assets/cards/earn.jpg';
	import ecosystem_calls from '../assets/cards/ecosystem_calls.jpg';
	import instagrants from '../assets/cards/instagrants.jpg';
	import alphasquad from '../assets/cards/alphasquad.jpg';
	import build from '../assets/cards/build.jpg';
	import founders_league from '../assets/cards/founders_league.jpg';
	import IllustrationCard from './common/IllustrationCard.svelte';
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
		<p class="font-secondary font-semibold text-xl leading-[22px] tracking-[-0.04em] text-white">
			superteam
		</p>
		<p class="productions text-[40px] md:text-[50px] lg:leading-[54px] leading-[44px]">
			productions
		</p>
		<p class="center-text text-[14px] md:text-[16px] lg:leading-[22px] leading-[19px] font-[700]">
			Changing the world,<br /> one line of code at a time
		</p>
	</div>
	<div class="flex justify-center items-center mt-[68px] lg:mt-0">
		<div class="flex flex-col gap-8 lg:grid lg:gap-0 cards-container">
			<IllustrationCard
				text="Earn"
				imageUrl={earn}
				class="col-start-1 row-start-1 row-end-3"
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'Earn',
						earn,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="col-start-1 row-start-4 row-end-7"
				text="Ecosystem Calls"
				imageUrl={ecosystem_calls}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'Ecosystem Calls',
						ecosystem_calls,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="col-start-2 row-start-2 row-end-5"
				text="Instagrants"
				imageUrl={instagrants}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'Instagrants',
						instagrants,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="col-start-2 row-start-6 row-end-[-1]"
				text="Alpha Squad"
				imageUrl={alphasquad}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'Alpha Squad',
						alphasquad,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="col-start-3 row-start-1 row-end-3"
				text="Build"
				imageUrl={build}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'Build',
						build,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="col-start-3 row-start-4 row-end-7"
				text="Founder's League"
				imageUrl={founders_league}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						"Founder's League",
						founders_league,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
	</div>
</div>

<style>
	@keyframes shine {
		0%, 10% {
			background-position: center, -500px;
		}
		100% {
			background-position: center, 500px;
		}
	}
	.productions {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		letter-spacing: -0.04em;

		background: 
			linear-gradient(173.91deg, rgba(255, 255, 255, 0) -102.4%, #ffffff 116.87%),
			linear-gradient(-40deg, transparent 0%, transparent 40%, #fff 50%, transparent 60%, transparent 100%);
		background-size: cover, 500px;
		background-position: center, -1000px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: shine 5s infinite;
	}

	/* .shine {
		background: #222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat;
		-webkit-background-size: 150px;
		color: $text-color;
		-webkit-background-clip: text;
		-webkit-animation-name: shine;
		-webkit-animation-duration: $duration;
		-webkit-animation-iteration-count: infinite;
		text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
	} */

	.center-text {
		font-family: 'Satoshi-Variable';
		font-style: normal;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	.cards-container {
		--row-factor: 8px;
		column-gap: 32px;
	}

	@media (min-width: 1024px) {
		.cards-container {
			grid-template-columns: repeat(3, 320px);
			grid-template-rows:
				calc(7 * var(--row-factor)) calc(43 * var(--row-factor)) calc(4 * var(--row-factor))
				calc(3 * var(--row-factor))
				calc(4 * var(--row-factor)) calc(43 * var(--row-factor)) calc(7 * var(--row-factor));
		}
	}
</style>
