<script>
	import PartnerCard from '../lib/Partners/PartnerCard.svelte';

	const partners = [
		{
			imageUrl: 'src/assets/fast-tracks/orangedao.svg',
			name: 'OrangeDAO',
			description: 'Special Sign up sheet + expedited reviews for Orange DAO Fellowships',
			iconUrl: 'src/assets/fast-tracks/virtualicon.svg',
			url: 'https://www.orangedao.xyz/'
		},
		{
			imageUrl: 'src/assets/fast-tracks/alliance.svg',
			name: 'Alliance DAO',
			description:
				'Personalized support from the team + feedback on application drafts, strategic advice for startup narrative, guidance on application strategy & interview preparation.',
			iconUrl: 'src/assets/fast-tracks/hybridicon.svg',
			url: 'https://www.alliance.xyz/'
		},
		{
			imageUrl: 'src/assets/fast-tracks/outlier.svg',
			name: 'Outlier Ventures Base camp',
			description:
				'Let your project lead know so we can directly put you in contact with the Outlier Ventures team.',
			iconUrl: 'src/assets/fast-tracks/virtualicon.svg',
			url: 'https://www.outlierventures.io/base-camp/'
		},
		{
			imageUrl: 'src/assets/fast-tracks/colosseum.svg',
			name: 'Colosseum',
			description:
				'Get invited to a special Zoom call, get competition strategies & project submission tips. Chance to get fast tracked into Colosseum if recommended by a Superteam Lead!',
			iconUrl: 'src/assets/fast-tracks/hybridicon.svg',
			url: 'https://www.colosseum.org/'
		},
		{
			imageUrl: 'src/assets/fast-tracks/springx.svg',
			name: 'SpringX',
			description:
				'Get recommended to the SpringX Accelerator Program at the Solana APAC Summit in Malaysia in June 2024.',
			iconUrl: 'src/assets/fast-tracks/virtualicon.svg',
			url: 'https://www.springx.net/'
		},
		{
			imageUrl: 'src/assets/fast-tracks/solanaincubator.svg',
			name: 'Solana Incubator',
			description: 'Special perk when application is open, but call and shortlist?',
			iconUrl: 'src/assets/fast-tracks/hybridicon.svg',
			url: 'https://incubator.solanalabs.com/'
		}
	];
</script>

<section class="text-center text-white flex flex-col justify-center items-center mb-24">
	<div class="bg-image">
    <div class="partners-content">
      <p class="header-text">Accelerator Partners</p>
      <p class="description-text">
        When applying to any program, let your local Superteam lead know. This allows <br class="description-break" />Superteam
        to individually support you in getting into an acceleration program.
      </p>
      <div class="partners-grid">
        {#each partners as partner}
          <PartnerCard
            imageUrl={partner.imageUrl}
            name={partner.name}
            description={partner.description}
            iconUrl={partner.iconUrl}
            url={partner.url}
          />
        {/each}
      </div>
    </div>
	</div>
</section>

<style>
	.bg-image {
		background-image: url('../assets/fast-tracks/BgGradient.png');
		background-size: cover;
		background-position: center;
		z-index: 2;
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
    padding: 0rem 1rem;
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
		margin-top: 3.75rem;
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
		display: grid;
		gap: 1.5rem;
		justify-content: center;
    justify-items: center;
		grid-template-columns: repeat(3, 1fr);
		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (max-width: 700px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
