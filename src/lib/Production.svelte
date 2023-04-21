<script>
	import earn from '../assets/cards/Earn_new.png';
	import ecosystem_calls from '../assets/cards/ecosystem_calls_new.png';
	import instagrants from '../assets/cards/Instagrants_new.png';
	import alphasquad from '../assets/cards/alphasquad_new.png';
	import build from '../assets/cards/Build_new.png';
	import founders_league from '../assets/cards/founders_league_new.png';
	import IllustrationCard from './common/IllustrationCard.svelte';
	import Modal from './common/Modal.svelte';
	import thunder from '../assets/logos/thunder.svg';
	import Star from './common/Star.svelte';
	import leftlight from '../assets/images/left-light.svg';
	import rightlight from '../assets/images/right-light.svg';
	import toplight from '../assets/images/top-light.svg';
	import bottomlight from '../assets/images/bottom-light.svg';
	import midlight from '../assets/images/mid-light.svg';

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

<div
	class="productions-container relative col-span-5 mt-44 flex flex-col justify-center text-center"
>
	{#if modalOpen}
		<Modal {imgurl} {text} {top_content} {points} {btnText} on:close={closeModal} />
	{/if}
	<div class="star-container absolute h-[85px] w-[285px] md:w-[350px] self-center top-0">
		<Star class="absolute mt-[8%] ml-[90%] md:mt-[6.5%] lg:mt-[8%]" />
		<Star class="absolute mt-[17%] ml-0 md:mt-[15.5%] lg:mt-[17%]" />
		<Star class="absolute mt-[22%] ml-[5%] md:mt-[20.5%] lg:mt-[22%]" blur={true} />
		<Star class="absolute mt-[0%] ml-[85%] md:-mt-[1.5%] lg:mt-[0%]" blur={true} />
		<Star class="absolute mt-[4%] ml-[82%] md:mt-[2.5%] lg:mt-[4%]" blur={true} />
		<Star class="absolute mt-[2%] ml-[98%] md:mt-[0.5%] lg:mt-[2%]" blur={true} />
	</div>

	<div
		class="absolute h-full bg-images left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col lg:flex-row"
	>
		<div class="block lg:hidden">
			<img
				src={toplight}
				alt=""
				loading="lazy"
				class="absolute -mt-[600px] justify-items-start w-full h-full"
			/>
			<img
				src={bottomlight}
				alt=""
				loading="lazy"
				class="absolute z-10 justify-items-end w-full right-0 h-full mt-[500px]"
			/>
		</div>

		<div class="hidden lg:block">
			<img
				src={leftlight}
				alt=""
				loading="lazy"
				class="leftlight absolute -mt-[62px] justify-items-start lg:w-2/3 lg:h-full lg:left-0"
			/>
			<img
				src={midlight}
				alt=""
				loading="lazy"
				class="midlight absolute justify-items-center top-0 lg:w-[900px] left-[21%] min-[2000px]:left-[32%] w-[900px] h-fit lg:-mt-[192px]"
			/>
			<img
				src={rightlight}
				alt=""
				loading="lazy"
				class="rightlight absolute z-10 justify-items-end w-full lg:w-3/4 lg:right-0 lg:h-full -mt-[222px]"
			/>
		</div>
	</div>

	<div class="prod-head">
		<p class="font-secondary font-semibold text-xl leading-[22px] text-white relative">
			superteam
		</p>

		<div
			class="section-heading relative text-[40px] md:text-[50px] lg:leading-[54px] leading-[44px]"
		>
			productions
		</div>
	</div>
	<div class="flex justify-center items-center mt-[68px] lg:mt-0 all-cards-wrapper">
		<div class="flex flex-col max-w-[240px] sm:max-w-full gap-8 md:grid md:gap-0 cards-container">
			<IllustrationCard
				text="Earn"
				imageUrl={earn}
				class="md:col-start-1 md:row-start-2 md:row-end-4 lg:row-start-1 lg:row-end-3 min-h-[300px] min-w-[240px]"
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
				class="md:col-start-2 md:row-start-1 md:row-end-3 lg:col-start-1 lg:row-start-4 lg:row-end-7 min-h-[300px] min-w-[240px]"
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
				class="md:col-start-1 md:row-start-5 md:row-end-7 lg:col-start-2 lg:row-start-2 lg:row-end-5 min-h-[300px] min-w-[240px]"
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
				class="md:col-start-2 md:row-start-4 md:row-end-6 lg:col-start-2 lg:row-start-6 lg:row-end-[-1] min-h-[300px] min-w-[240px]"
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
				class="md:col-start-1 md:row-start-[8] md:row-end-[10] lg:col-start-3 lg:row-start-1 lg:row-end-3 min-h-[300px] min-w-[240px]"
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
				class="md:col-start-2 md:row-start-7 md:row-end-[9] lg:col-start-3 lg:row-start-4 lg:row-end-7 min-h-[300px] min-w-[240px]"
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
	.center-text {
		@apply font-primary;
		font-style: normal;
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

	.midlight {
		z-index: -999;
	}

	.leftlight {
		z-index: -999;
	}
	.rightlight {
		z-index: -999;
	}
	img {
		pointer-events: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
</style>
