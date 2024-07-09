<!-- PartnerCard.svelte -->
<script>
	import ImageLoader from "$lib/ImageLoader.svelte";

  import button from "../../assets/fast-tracks/button.svg";

	export let imageUrl;
	export let name;
	export let description;
	export let iconUrl;
	export let url;
</script>

<div class="card">
	<div class="image-container">
    <div class="partner-image">
      <ImageLoader src={imageUrl} alt={name} loading="lazy" />
    </div>
	</div>
	<h3 class="card-title">{name}</h3>
	<p class="card-description">{description}</p>
	<div class="card-footer">
    <div class="status-icon">
      <ImageLoader src={iconUrl} alt="Icon" loading="lazy" />
    </div>
		<a href={url} target="_blank">
      <ImageLoader src={button} alt="Icon" loading="lazy" />
		</a>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		padding: 1.25rem;
		background-color: #000;
		border-radius: 0.75rem;
		border: 2px solid rgba(255, 255, 255, 0.12);
		color: #fff;
		/* font-family: 'DM Sans', sans-serif; */
		width: 19.5rem;
		height: 27.25rem;
		position: relative;
	}
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.partner-image {
    & img {
      width: 100%;
      object-fit: cover;
    }
	}
	.card-title {
		color: #fff;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.65rem;
		letter-spacing: -0.09rem;
		text-align: left;
		margin-top: 1.5rem;
		font-family: 'DM-Sans-H';
	}
	.card-description {
		font-family: 'DM Sans';
		color: #fff;
		font-size: 1rem;
		line-height: 1.8rem;
		letter-spacing: -0.0225rem;
		text-align: left;
		margin-top: 0.75rem;
		font-family: 'DM-Sans';
	}
	.card-footer {
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 1.25rem;
		left: 0;
		right: 0;
		padding: 0 1.25rem;
	}
	.status-icon {
    & img {
      width: 5rem;
    }
	}
</style>