<script>
	import buildstations2 from '../assets/cards/buildstations2.png';
	import supermeets from '../assets/cards/supermeets.png';
	import uniprogram from '../assets/cards/uniprogram.png';
	import IllustrationCard from './common/IllustrationCard.svelte';
	import instagrantsbg from '../assets/images/instagrantsbg.png';
	import Modal from './common/Modal.svelte';
	import thunder from '../assets/logos/thunder.svg';
	import founders_league from '../assets/cards/founders_league.jpg';

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
	<div class="text-center">
		<p class="font-semibold text-3xl leading-none text-white tracking-tighter">Superteam IRL</p>
	</div>
	<div class="col-span-5 grid grid-cols-1 lg:grid lg:grid-cols-8 gap-[24px] mt-11 lg:mt-4">
		<div />
		<div class="col-span-1 lg:col-span-2 lg:col-start-2">
			<IllustrationCard
				imageUrl={founders_league}
				text="BuildStations"
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						founders_league,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
		<div class="md:mt-14 col-span-1 lg:col-span-2">
			<IllustrationCard
				imageUrl={founders_league}
				text="Supermeets"
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						founders_league,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
		<div class="col-span-1 lg:col-span-2">
			<IllustrationCard
				imageUrl={founders_league}
				text="University Program"
				on:click={() =>
					openModal(
						'our very own job listing and bounty platform to find every earning opportunity in solana',
						'ST earn',
						founders_league,
						['$100,000 in wealth created', '5000 jobs listed across 50+ fields', '2400 jobs given'],
						'Visit ST Earn',
						thunder
					)}
			/>
		</div>
		<div />
	</div>
</div>

<style>
	.text-center {
		font-family: 'Satoshi-Variable';
	}
</style>
