<script>
	import ImageLoader from '$lib/ImageLoader.svelte';
	import FastTrackContainer from '$lib/common/FastTrackContainer.svelte';
	import hero from '../../assets/fast-tracks/Hero.png';
	import Accelerator from '$lib/Accelerator.svelte';
	import FastTrackFaq from '$lib/FastTrackFaq.svelte';
</script>

<svelte:head>
	<title>Fast Track</title>
	<meta
		name="description"
		content="Explore projects Superteam Members around the world have built and launched!"
	/>
	<meta name="og:title" content="Fast Track" />
	<meta name="og:type" content="community" />
	<meta name="og:url" content="https://superteam.fun" />
	<meta name="application-name" content="superteam" />
	<meta name="og:email" content="hello@superteam.fun" />
	<meta name="twitter:title" content="Fast Track" />
</svelte:head>

<div class="col-span-5 h-fit">
	<section class="hero relative col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-centerr">
		<FastTrackContainer
			line1="Fast track your idea"
			line2="out of the sandbox"
			line3="Global Superteam Members can receive perks & personalized support"
			line4="when applying to the following acceleration & incubation programs."
		/>
		<div class="hero-bg absolute top-0 left-0 w-full h-[calc(100vh)] overflow-hidden">
			<div class="w-full h-full relative">
				<ImageLoader
					src={hero}
					srcset={`${hero} 640w, ${hero} 1440w, ${hero} 2560w`}
					sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px"
					loading="eager"
					alt=""
					class="object-cover w-full h-full z-10"
				/>
			</div>
			<div class="stars" />
			<div class="stars2" />
			<div class="stars3" />
		</div>
	</section>

	<Accelerator />

	<FastTrackFaq />
</div>

<style lang="scss">
	$starStartOffset: 600px;
	$starFieldWidth: 2560;
	$starFieldHeight: 2560;

	$numStarOneStars: 500;
	$numStarTwoStars: 200;
	$numStarThreeStars: 200;

	$starOneScrollDuration: 100s;
	$starTwoScrollDuration: 125s;
	$starThreeScrollDuration: 175s;

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-#{$starFieldHeight}px);
		}
	}

	@function create-stars($n) {
		$stars: '#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF';

		@for $i from 2 through $n {
			$stars: '#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF';
		}
		@return unquote($stars);
	}

	@mixin star-template($numStars, $starSize, $scrollSpeed) {
		z-index: 1;
		width: $starSize;
		height: $starSize;
		border-radius: 50%;
		background: transparent;
		box-shadow: create-stars($numStars);
		animation: animStar $scrollSpeed linear infinite;
		&:after {
			content: ' ';
			top: -$starStartOffset;
			width: $starSize;
			height: $starSize;
			border-radius: 50%;
			position: absolute;
			background: transparent;
			box-shadow: create-stars($numStars);
		}
	}



	.hero {
		perspective: 1000px;
	}

	.hero-bg {
		width: 100%;
		height: calc(100% + 80px);
		width: calc(100% + 40px + 40px);
		transform: translateY(-48px) translateX(-40px);
		z-index: 1;

		.stars {
			@include star-template($numStarOneStars, 1px, $starOneScrollDuration);
		}
		.stars2 {
			@include star-template($numStarTwoStars, 2px, $starTwoScrollDuration);
		}
		.stars3 {
			@include star-template($numStarThreeStars, 3px, $starThreeScrollDuration);
		}
	}

	.hero-bg::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		transform-style: preserve-3d;
		transform: translateZ(100px);
	}

	@media (min-width: 768px) {
		.hero-bg {
			height: calc(100% + 190px);
			width: calc(100% + 72px + 72px);
			transform: translateY(-72px) translateX(-72px);
		}
	}
</style>
