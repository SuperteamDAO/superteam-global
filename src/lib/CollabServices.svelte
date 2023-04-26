<script>
	import bounties from '../assets/images/bounties_new.png';
	import grants from '../assets/images/grant_new.png';
	import fellowships from '../assets/images/fellowships_new.png';
	import hackathon from '../assets/images/hackathon_new.png';
	import market from '../assets/images/market_new.png';
	import bootcamps from '../assets/images/bootcamps_new.png';
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
		<p class="section-heading center-text lg:mb-0 mb-[68px]">Services</p>
	</div>
	<div class="flex justify-center items-center">
		<div class="flex flex-col max-w-[240px] sm:max-w-full gap-8 md:grid md:gap-0 cards-container">
			<IllustrationCard
				text="Bounties"
				imageUrl={bounties}
				class="md:col-start-1 md:row-start-2 md:row-end-4 lg:row-start-1 lg:row-end-3 min-h-[300px] min-w-[240px]"
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						bounties,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="md:col-start-2 md:row-start-1 md:row-end-3 lg:col-start-1 lg:row-start-4 lg:row-end-7 min-h-[300px] min-w-[240px]"
				text="Bootcamps"
				imageUrl={bootcamps}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						bootcamps,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="md:col-start-1 md:row-start-5 md:row-end-7 lg:col-start-2 lg:row-start-2 lg:row-end-5 min-h-[300px] min-w-[240px]"
				text="Fellowships"
				imageUrl={fellowships}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						fellowships,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="md:col-start-2 md:row-start-4 md:row-end-6 lg:col-start-2 lg:row-start-6 lg:row-end-[-1] min-h-[300px] min-w-[240px]"
				text="Grant Programs"
				imageUrl={grants}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						grants,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="md:col-start-1 md:row-start-[8] md:row-end-[10] lg:col-start-3 lg:row-start-1 lg:row-end-3 min-h-[300px] min-w-[240px]"
				text="Hackathon Sponsorships"
				imageUrl={hackathon}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						hackathon,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
			<IllustrationCard
				class="md:col-start-2 md:row-start-7 md:row-end-[9] lg:col-start-3 lg:row-start-4 lg:row-end-7 min-h-[300px] min-w-[240px]"
				text="Go-to-Market"
				imageUrl={market}
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						market,
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

	@media (min-width: 768px) {
		.cards-container {
			grid-template-columns: repeat(2, 240px);
			grid-template-rows: repeat(
				3,
				calc(5 * var(--row-factor)) calc(32.5 * var(--row-factor)) calc(5 * var(--row-factor))
			);
		}
	}

	@media (min-width: 1024px) {
		.cards-container {
			grid-template-columns: repeat(3, 320px);
			grid-template-rows:
				calc(8 * var(--row-factor)) calc(42 * var(--row-factor)) calc(4 * var(--row-factor))
				calc(4 * var(--row-factor))
				calc(4 * var(--row-factor)) calc(42 * var(--row-factor)) calc(8 * var(--row-factor));
		}
	}
</style>
