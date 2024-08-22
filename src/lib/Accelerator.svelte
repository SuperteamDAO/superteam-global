<script>
	import PartnerCard from '../lib/Partners/PartnerCard.svelte';
	import virtalIcon from '../assets/fast-tracks/virtualicon.svg';
	import hybridIcon from '../assets/fast-tracks/hybridicon.svg';

	import OrangeDao from '../assets/fast-tracks/orangedao.svg';
	import AllianceDao from '../assets/fast-tracks/alliance.svg';
	import OutlierVentures from '../assets/fast-tracks/outlier.svg';
	import Colosseum from '../assets/fast-tracks/colosseum.svg';
	import SolanaIncubator from '../assets/fast-tracks/solanaincubator.svg';
	import SpringX from '../assets/fast-tracks/spring.svg';
	import Bfg from '../assets/fast-tracks/bfg.svg';

	const partners1 = [
		{
			imageUrl: OrangeDao,
			name: 'OrangeDAO',
			description: 'Orange DAO is building the digital nation of founders helping each other.',
			iconUrl: virtalIcon,
			url: 'https://www.orangedao.xyz/',
			perks: 'Special Sign up sheet + expedited reviews for Orange DAO Fellowships.',
			duration: '12 weeks',
			funding: '$100k',
			type: 'Virtual'
		},
		{
			imageUrl: AllianceDao,
			name: 'Alliance DAO',
			description: 'Alliance is the leading crypto accelerator & founder community.',
			iconUrl: hybridIcon,
			url: 'https://www.alliance.xyz/',
			perks:
				'Personalized support from the team + feedback on application drafts, strategic advice for startup narrative, guidance on application strategy & interview preparation.',
			duration: '4 in NY office + 8 remote',
			funding: '$350k',
			type: 'Hybrid'
		},
		{
			imageUrl: OutlierVentures,
			name: 'Outlier Ventures',
			description:
				'A leading web3 accelerator, with 300+ portfolio companies & supporting founders 360°.',
			iconUrl: virtalIcon,
			url: 'https://www.outlierventures.io/base-camp/',
			perks:
				'When applying comment "Superteam" in the referral section at the end of your application to get direct exposure to the Outlier investment team and receive an expedient review on your submission.',
			duration: '12 weeks',
			funding: 'upto $200k',
			type: 'Virtual'
		}
	];
	const partners2 = [
		{
			imageUrl: Colosseum,
			name: 'Colosseum',
			description:
				"An organization running Solana's hackathons, accelerating select winners, and investing in their breakout startups.",
			iconUrl: hybridIcon,
			url: 'https://www.colosseum.org/',
			perks:
				'Get invited to a special Zoom call, get competition strategies & project submission tips. Chance to get fast tracked into Colosseum if recommended by a Superteam Lead!',
			duration: '6 week hackathon + 6 week accelerator',
			funding: '$250k',
			type: 'Virtual'
		},
		{
			imageUrl: SolanaIncubator,
			name: 'Solana Incubator',
			description:
				'The Solana Incubator is an in-person 3 month program where founders can build their companies alongside Solana Labs.',
			iconUrl: hybridIcon,
			url: 'https://incubator.solanalabs.com/',
			perks:
				'Get invited to a special Zoom call to learn more about the application process and ways to maximize your chances of acceptance. Also, chance to get referred in by a Superteam lead!',
			duration: '3 months',
			funding: '-',
			type: 'In-Person'
		},
		{
			imageUrl: SpringX,
			name: 'SpringX',
			description:
				'Initiated by BuilderDAO, SuperteamDAO, SevenX Ventures, & ABCDE Labs- it supports early-stage entrepreneurs with education, funding, & resources.',
			iconUrl: virtalIcon,
			url: 'https://www.springx.net/',
			perks:
				'Best teams get recommended to the SpringX Accelerator Program at the Solana APAC Summit in Malaysia in June 2024.',
			duration: '3 weeks offline + 6 month online follow up',
			funding: 'Conduct IRL workshops, mentoring sessions & investor meetups',
			type: 'Virtual'
		},
		{
			imageUrl: Bfg,
			name: 'Blockchain Founders Group',
			description:
				'Get 1-1 weekly mentoring, access to seed investor network across Europe and tap into an ecosystem of subject matter experts and advisors on niche topics like tokenomics and legal.',
			iconUrl: virtalIcon,
			url: 'https://blockchain-founders.io/startup-accelerator-bfg-adrenaline',
			perks:
				'Fast track evaluation, and tailored feedback to every project that applies regardless of outcome.',
			duration: '8 weeks, remote',
			funding: '100k in USD/EUR (Depending on which currency you raise with)',
			type: 'Virtual'
		}
	];

	import { writable } from 'svelte/store';
	const showAllPartners = writable(false);
	function loadMorePrograms() {
		showAllPartners.set(true);
	}
	$: displayedPartners = $showAllPartners ? [...partners1, ...partners2] : partners1;
</script>

<section class="text-center text-white flex flex-col justify-center items-center">
	<div class="bg-image">
		<div class="partners-content">
			<p class="header-text">Ecosystem Partners</p>
			<p class="description-text">
				When applying to any program, let your local Superteam lead know. This allows <br
					class="description-break"
				/>Superteam to individually support you in getting into an acceleration program.
			</p>
			<div class="partners-grid">
				{#each displayedPartners as partner}
					<PartnerCard
						imageUrl={partner.imageUrl}
						name={partner.name}
						description={partner.description}
						url={partner.url}
						perks={partner.perks}
						duration={partner.duration}
						funding={partner.funding}
						type={partner.type}
					/>
				{/each}
			</div>
			{#if !$showAllPartners}
				<div class="btn">
					<button class="load-more" type="button" on:click={loadMorePrograms}
						>Load more programs</button
					>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.bg-image {
		background-image: url('../assets/fast-tracks/BgGradient.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 1;
		margin-bottom: 8rem;
	}
	@media only screen and (max-width: 1048px) {
		.bg-image {
			background: none;
		}
	}
	@media only screen and (max-width: 700px) {
		.description-break {
			display: none;
		}
	}
	.partners-content {
		padding: 0rem 16rem;
	}
	.header-text {
		color: #fff;
		text-align: center;
		font-size: 2.375rem;
		font-style: normal;
		font-weight: 700;
		line-height: 110%; /* 2.6125rem */
		letter-spacing: -0.1425rem;
		margin-bottom: 0.75rem;
		margin-top: 9.75rem;
		font-family: 'DM-Sans-H';
	}
	.description-text {
		color: #fff;
		text-align: center;
		font-family: 'DM-Sans';
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 160%; /* 1.8rem */
		letter-spacing: -0.0225rem;
		margin-bottom: 3.75rem;
	}
	.partners-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		justify-content: center;
		justify-items: center;
		/* grid-template-columns: repeat(3, 1fr); */
		/* @media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (max-width: 700px) {
			grid-template-columns: repeat(1, 1fr);
		} */
	}
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}
	.load-more {
		display: flex;
		padding: 0.75rem 1rem;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.5rem;
		background: #fff;
		color: #000;
		font-family: Satoshi-B;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: 160%; /* 1.6rem */
		letter-spacing: -0.04rem;
	}
</style>
