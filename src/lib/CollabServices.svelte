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
			content="Put out work in the form of small tasks and projects for the community to get involved."
			btnText="Let's talk"
			btnLink="https://t.me/pratikdholani"
		/>
		<Accordion
			image={grants}
			heading="Instagrants"
			subheading="fast grants to incentivize builders"
			content="Fund community projects with small grants to incentivize them tinkering with your project. Get them playing with your codebase and integrating your primitives, and they might just make your ecosystem moonshot dApp."
			btnText="Let's talk"
			btnLink="https://twitter.com/messages/compose?recipient_id=824384532312842240&text=Hey%2C%20I%20was%20exploring%20starting%20a%20grants%20program%20with%20the%20Superteam%20community!"
		/>
		<Accordion
			image={bootcamps}
			heading="Bootcamps"
			subheading="micro events and hackathons to get started"
			content="Organize talks, working groups, and office hours to help community devs get started with your APIs and SDKs."
			btnText="Let's talk"
			btnLink="https://twitter.com/messages/compose?recipient_id=824384532312842240&text=Hey%2C%20I%20was%20exploring%20starting%20a%20bootcamp%20for%20the%20Superteam%20community!%20Can%20you%20help%20me%20out%3F"
		/>
		<Accordion
			image={fellowships}
			heading="Fellowships"
			subheading="structured programs for in-depth engagement"
			content="Work with the community to train highest-intent devs to become experts. 6-8 weeks of learning, building and earning with your team."
			btnText="Let's talk"
			btnLink="https://twitter.com/messages/compose?recipient_id=824384532312842240&text=Hey%2C%20I%20wanted%20to%20put%20up%20a%20fellowship%20for%20Superteam%20community%20devs.%20Let's%20talk%3F"
		/>
		<Accordion
			image={grants}
			heading="Meetups"
			subheading="seed hyperlocal communities in every city"
			content="Enable contributors around the world to engage with their local universities and other contributors. Create an ecosystem of robust mico-communities."
			btnText="Let's talk"
			btnLink="https://twitter.com/messages/compose?recipient_id=824384532312842240&text=Hello%2C%20I%20wanted%20to%20help%20seed%20local%20contributor%20communities%20for%20my%20project.%20Let's%20talk%3F"
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
