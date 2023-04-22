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
		class="relative gap-6 col-span-5 flex flex-col md:gap-0 md:grid lg:gap-x-8 lg:gap-y-0 mt-11 lg:mt-4 cards-container"
	>
		<IllustrationCard
			imageUrl={buildstations}
			text="BuildStations"
			class="md:z-[1] col-start-1 lg:col-end-2 md:col-end-3 md:row-start-2 md:row-end-5 lg:row-start-1 lg:row-end-3"
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
			class="md:z-[2] md:col-start-2 md:col-end-5 lg:col-start-2 lg:col-end-3 md:row-start-3 md:row-end-6 lg:row-start-2 lg:row-end-5"
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
			class="md:z-[1] md:row-start-1 md:row-end-4 md:col-start-4 md:col-end-6 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3"
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
	}

	@media (min-width: 768px) {
		.cards-container {
			grid-template-columns:
				calc(21 * var(--row-factor)) calc(9 * var(--row-factor))
				calc(3.5 * var(--row-factor)) calc(17.5 * var(--row-factor))
				calc(12.5 * var(--row-factor));
			grid-template-rows:
				calc(4 * var(--row-factor)) calc(32.5 * var(--row-factor))
				var(--row-factor) calc(4 * var(--row-factor))
				calc(32.5 * var(--row-factor));
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
