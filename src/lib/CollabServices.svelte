<script>
	import earn from '../assets/cards/earn.jpg';
	import ecosystem_calls from '../assets/cards/ecosystem_calls.jpg';
	import instagrants from '../assets/cards/instagrants.jpg';
	import alphasquad from '../assets/cards/alphasquad.jpg';
	import build from '../assets/cards/build.jpg';
	import founders_league from '../assets/cards/founders_league.jpg';
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
		<p class="center-text md:mb-0 mb-[68px]">Services</p>
	</div>
	<div class="flex justify-center items-center">
		<div class="flex flex-col gap-8 lg:grid lg:gap-0 cards-container">
			<IllustrationCard
				text="Bounties"
				imageUrl={earn}
				class="col-start-1 row-start-1 row-end-2 "
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
				class="col-start-1 row-start-4 row-end-5"
				text="Bootcamps"
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
			<IllustrationCard
				class="col-start-2 row-start-2 row-end-4"
				text="Grant Programs"
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
				class="col-start-2 row-start-6"
				text="Fellowships"
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
			<IllustrationCard
				class="col-start-3 row-start-1 row-end-2"
				text="Hackathon Sponsorships"
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
				class="col-start-3 row-start-4 row-end-6"
				text="Go-to-Market"
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
	.center-text {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 35px;
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
