<!-- PartnerCard.svelte -->
<script>
	import ImageLoader from '$lib/ImageLoader.svelte';

	import button from '../../assets/fast-tracks/button.svg';
	import perksImg from '../../assets/fast-tracks/perks.svg';
	import durationImg from '../../assets/fast-tracks/duration.svg';
	import fundingImg from '../../assets/fast-tracks/funding.svg';
	import typeImg from '../../assets/fast-tracks/type.svg';
	import line1 from '../../assets/fast-tracks/line1.svg';
	import line2 from '../../assets/fast-tracks/line2.svg';
	import Image from '$lib/Image.svelte';

	export let imageUrl;
	export let name;
	export let description;
	export let url;
	export let perks;
	export let duration;
	export let funding;
	export let type;
</script>

<div class="card">
	<div class="card-p1">
		<div class="image-container">
			<div>
				<ImageLoader src={imageUrl} alt={name} class="partner-image" loading="lazy" />
			</div>
		</div>
		<div class="title-apply">
			<h3 class="card-title">{name}</h3>
			<a href={url} target="_blank">
				<img src={button} alt="Icon" loading="lazy" />
			</a>
		</div>
		<p class="card-description main-description">{description}</p>
	</div>

	<div class="border-dotted">
		<img src={line1} alt={line1} loading="lazy" />
	</div>

	<div class="card-p2">
		<div class="perksSection">
			<!-- <h1>perks</h1> -->
			<img src={perksImg} alt="Perks" loading="lazy" class="icon-img" />
			<p class="card-description">{perks}</p>
		</div>

		<img src={line2} alt={line2} loading="lazy" />

		<div class="time-period">
			<div class="durationSection">
				<!-- <h1>duration</h1> -->
				<img src={durationImg} alt="Duration" loading="lazy" class="icon-img" />
				<p class="card-description">{duration}</p>
			</div>
			<div class="fundingSection">
				<!-- <h1>funding</h1> -->
				<img src={fundingImg} alt="Funding" loading="lazy" class="icon-img" />
				<p class="card-description">{funding}</p>
			</div>
			<div class="typeSection">
				<!-- <h1>type</h1> -->
				<img src={typeImg} alt="Type" loading="lazy" class="icon-img" />
				<p class="card-description">{type}</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		// padding: 1.25rem;
		background-color: #121212;
		border-radius: 0.75rem;
		border: 2px solid rgba(255, 255, 255, 0.12);
		color: #fff;
		/* font-family: 'DM Sans', sans-serif; */
		width: 61rem;
		// height: 22.625rem;
		// position: relative;
	}
	.card-p1 {
		width: 24rem;
		padding: 1.25rem;
		// display: flex;
		// flex-direction: column;
		// justify-content: space-evenly;
	}
	.title-apply {
		display: flex;
		margin-top: 1.5rem;
		justify-content: space-between;
		align-items: center;
	}
	.card-title {
		color: #fff;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.65rem;
		letter-spacing: -0.09rem;
		text-align: left;
		font-family: 'DM-Sans-H';
	}
	.card-description {
		color: #fff;
		font-family: Satoshi-R;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.8rem;
		letter-spacing: -0.045rem;
		text-align: left;
	}
  .main-description {
    margin: 1.25rem 0rem;
  }

  .partner-image {
    border-radius: 20px;
  }

	.card-p2 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 37rem;
		padding: 1.25rem;
	}
	.perksSection {
		display: flex;
		flex-direction: column;
		text-align: left;
	}
  .icon-img {
    height: 2rem;
    width: max-content;
  }
	.time-period {
		display: flex;
		justify-content: space-between;
		text-align: left;
    gap: 2rem;
	}
	.durationSection {
		display: flex;
		flex-direction: column;
		width: 33%;
	}
	.fundingSection {
		display: flex;
		flex-direction: column;
		width: 34%;
	}
	.typeSection {
		display: flex;
		flex-direction: column;
		width: 33%;
	}
  .border-dotted {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
