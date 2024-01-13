<script>
	import bounties from '../assets/images/bounties_new.png';
	import grants from '../assets/images/grant_new.png';
	import fellowships from '../assets/images/fellowships_new.png';
	import market from '../assets/images/market_new.png';
	import bootcamps from '../assets/images/bootcamps_new.png';
	import Accordion from './common/Accordion.svelte';
</script>

<div class="productions-container col-span-5 mt-44 flex flex-col justify-center text-center">
	<div>
		<p
			class="section-heading center-text text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] lg:mb-0 mb-[48px]"
		>
			Work with Community Experts
		</p>
	</div>
	<div class="flex flex-col gap-[12px] mt-[0px] lg:mt-[53px] max-w-[976px] mx-auto">
		<Accordion
			image={bounties}
			heading="Bounties"
			subheading="projects for the community"
			content="Sponsor or participate in small tasks and projects in the Solana ecosystem."
			btnText="Learn more"
			btnLink="https://earn.superteam.fun"
		/>
		<Accordion
			image={grants}
			heading="Instagrants"
			subheading="fast grants to incentivize builders"
			content="Fund or apply for small grants to get started any projects — code, content or community for the Solana ecosystem. You might just make the next moonshot!"
			btnText="Learn more"
			btnLink="https://earn.superteam.fun/grants/"
		/>
		<Accordion
			image={bootcamps}
			heading="Bootcamps"
			subheading="micro events and hackathons to get started"
			content="Organize talks, working groups, and office hours to help community devs get started with your APIs and SDKs."
			btnText="Learn more"
			btnLink="https://in.superteam.fun/instagrants/superteam-education-fund"
		/>
		<Accordion
			image={fellowships}
			heading="Fellowship"
			subheading="structured programs for in-depth engagement"
			content="Work with the community to train highest-intent devs to become experts. 6-8 weeks of learning, building and earning with your team."
			btnText="Learn more"
			btnLink="https://in.superteam.fun/instagrants/superteam-education-fund"
		/>
		<Accordion
			image={grants}
			heading="Meetups"
			subheading="seed hyperlocal communities in every city"
			content="Organize events to bring contributors in your city and local universities to meet each other and earn together!"
			btnText="Learn more"
			btnLink="https://app.getriver.io/superteam"
		/>
		<Accordion
			image={market}
			heading="Go To Market"
			subheading="unlock new markets with our communities"
			content="Work with contributors to create larger programs with a combination of all of the above to open whole new markets and create a new ecosystem from scratch."
			btnText="Let's talk"
			btnLink="https://twitter.com/messages/compose?recipient_id=1571226984&text=Hey%20Kash%2C%20we%20wanted%20to%20work%20with%20the%20Superteam%20community%2C%20and%20enable%20members%20to%20get%20involved%20more%20with%20my%20Solana%20project.%20Can%20we%20talk%20sometime%3F"
		/>
	</div>
</div>

<style>
	.center-text {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
</style>
