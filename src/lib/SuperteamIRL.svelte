<script>
	import buildstations from '../assets/cards/buildstations.jpg';
	import supermeets from '../assets/cards/super_meets.jpg';
	import university_program from '../assets/cards/university_program.jpg';
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

{#if modalOpen}
	<Modal {imgurl} {text} {top_content} {points} {btnText} on:close={closeModal} />
{/if}

<div
	class="superteam-irl mt-48 col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col justify-center items-center"
>
	<div class="text-center font-primary">
		<p
			class="section-heading font-bold font-secondary text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] text-white tracking-normal"
		>
			Superteam IRL
		</p>
	</div>
	<div
		class="col-span-5 flex flex-col gap-6 lg:grid lg:gap-x-8 lg:gap-y-0 mt-11 lg:mt-4 cards-container"
	>
		<IllustrationCard
			imageUrl={buildstations}
			text="BuildStations"
			class="col-start-1 col-end-2 lg:row-start-1 lg:row-end-3"
			on:click={() =>
				openModal(
					'our very own job listing and bounty platform to find every earning opportunity in solana',
					'ST earn',
					buildstations,
					['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
					'Visit ST Earn',
					thunder
				)}
		/>
		<IllustrationCard
			imageUrl={supermeets}
			text="Supermeets"
			class="col-start-2 col-end-3 lg:row-start-2 lg:row-end-4"
			on:click={() =>
				openModal(
					'our very own job listing and bounty platform to find every earning opportunity in solana',
					'ST earn',
					supermeets,
					['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
					'Visit ST Earn',
					thunder
				)}
		/>
		<IllustrationCard
			imageUrl={university_program}
			text="University Program"
			class="col-start-3 col-end-4 lg:row-start-1 lg:row-end-3"
			on:click={() =>
				openModal(
					'our very own job listing and bounty platform to find every earning opportunity in solana',
					'ST earn',
					university_program,
					['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
					'Visit ST Earn',
					thunder
				)}
		/>
	</div>
</div>

<style>
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
