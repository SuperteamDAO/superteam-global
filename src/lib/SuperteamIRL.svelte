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
	class="mt-48 col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col justify-center items-center"
>
	<div class="text-center font-primary">
		<p
			class="section-heading font-bold font-secondary text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] text-white tracking-tighter"
		>
			Superteam IRL
		</p>
	</div>
	<div class="col-span-5 grid grid-cols-1 lg:grid lg:grid-cols-8 gap-[24px] mt-11 lg:mt-4">
		<div />
		<div class="col-span-1 lg:col-span-2 lg:col-start-2">
			<IllustrationCard
				imageUrl={buildstations}
				text="BuildStations"
				class="max-w-[300px] max-h-[400px]"
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
		</div>
		<div class="md:mt-14 col-span-1 lg:col-span-2">
			<IllustrationCard
				imageUrl={supermeets}
				text="Supermeets"
				class="max-w-[300px] max-h-[400px]"
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
		</div>
		<div class="col-span-1 lg:col-span-2">
			<IllustrationCard
				imageUrl={university_program}
				text="University Program"
				class="max-w-[300px] max-h-[400px]"
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
		<div />
	</div>
</div>
