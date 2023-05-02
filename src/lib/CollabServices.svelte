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
	import Accordion from './common/Accordion.svelte';
</script>

<div class="productions-container col-span-5 mt-44 flex flex-col justify-center text-center">
	<div>
		<p class="section-heading center-text lg:mb-0 mb-[68px]">Services</p>
	</div>
	<div class="flex flex-col gap-[12px] mt-[53px]">
		<Accordion
			image={bounties}
			heading="Bounties"
			subheading="bounties for builders"
			content1="our very own job listing and bounty platform to find every earning opportunity in solana."
			content2="something something about bounties."
			btnText="Let's talk"
		/>
		<Accordion
			image={fellowships}
			heading="Fellowships"
			subheading="fellowships for builders"
			content1="our very own job listing and bounty platform to find every earning opportunity in solana."
			content2="something something about bounties."
			btnText="Let's talk"
		/>
		<Accordion
			image={bootcamps}
			heading="Bootcamps"
			subheading="educating the next wave of builders"
			content1="our very own job listing and bounty platform to find every earning opportunity in solana."
			content2="something something about bounties."
			btnText="Let's talk"
		/>
		<Accordion
			image={grants}
			heading="Grant Programs"
			subheading="grants for achievers"
			content1="our very own job listing and bounty platform to find every earning opportunity in solana."
			content2="something something about bounties."
			btnText="Let's talk"
		/>
		<Accordion
			image={market}
			heading="Go To Market"
			subheading="battle tested strategising"
			content1="our very own job listing and bounty platform to find every earning opportunity in solana."
			content2="something something about bounties."
			btnText="Let's talk"
		/>
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
</style>
