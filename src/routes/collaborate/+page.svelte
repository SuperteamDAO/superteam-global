<script>
	import LoveRespect from '$lib/LoveRespect.svelte';
	import Partners from '$lib/Partners.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import CollabServices from '$lib/CollabServices.svelte';
	import Collab from '$lib/Collab.svelte';
	import ImageLoader from '$lib/ImageLoader.svelte';

	import hero05x from '../../assets/hero/hero_collaborate0.5x.png';
	import hero from '../../assets/hero/hero_collaborate.png';
	import hero1_5x from '../../assets/hero/hero_collaborate1.5x.png';
</script>

<svelte:head>
	<title>Work with us</title>
	<meta
		name="description"
		content="Explore projects Superteam Members around the world have built and launched!"
	/>
	<meta name="og:title" content="Work with us" />
	<meta name="og:type" content="community" />
	<meta name="og:url" content="https://superteam.fun" />
	<meta name="application-name" content="superteam" />
	<meta name="og:email" content="hello@superteam.fun" />
	<meta name="twitter:title" content="Work with us" />
</svelte:head>

<div class="col-span-5 h-fit">
	<section class="hero relative col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-center">
		<HeroContainer
			line1="get access to"
			line2="the best talent on Solana"
			line3="superteam is the forefront community for web3,"
			line4="powered by solana."
			buttonVisible={false}
		/>
		<div class="hero-bg absolute top-0 left-0 w-full h-[calc(100vh)] overflow-hidden">
			<div class="stars" />
			<div class="stars2" />
			<div class="stars3" />
			<div class="w-full h-full relative">
				<ImageLoader
					src={hero}
					srcset={`${hero05x} 640w, ${hero} 1440w, ${hero1_5x} 2560w`}
					sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px"
					loading="eager"
					alt=""
					class="object-cover absolute inset-0 w-full h-full z-10"
				/>
			</div>
		</div>
	</section>

	<!-- <div class="pb-[200px]"></div> -->

	<CollabServices />

	<LoveRespect collab={true} />
	<Collab />
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
		height: calc(100% + 48px);
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
			height: calc(100% + 72px);
			width: calc(100% + 72px + 72px);
			transform: translateY(-72px) translateX(-72px);
		}
	}
</style>
