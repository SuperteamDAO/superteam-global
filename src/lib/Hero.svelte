<script>
	import hero05x from '../assets/hero/hero_home0.5x.webp';
	import hero from '../assets/hero/hero_home.webp';
	import hero1_5x from '../assets/hero/hero_home1.5x.webp';
	import ImageLoader from './ImageLoader.svelte';
	import HeroContainer from './common/HeroContainer.svelte';
	export let line1 = '';
	export let line2 = '';
	export let line3 = '';
	export let line4 = '';
	export let buttonVisible = true;
</script>

<section class="hero relative col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-center">
	<HeroContainer {line1} {line2} {line3} {line4} {buttonVisible}>
		<slot />
	</HeroContainer>
	<div class="hero-bg absolute top-0 left-0 w-full h-full overflow-hidden">
		<div class="stars"></div>
		<div class="stars2"></div>
		<div class="stars3"></div>
		<div class="w-full h-full relative">
			<ImageLoader
				src={hero}
				srcset={`${hero05x} 640w, ${hero} 1440w, ${hero1_5x} 2560w`}
				sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px"
				loading="eager"
				alt=""
				class="object-cover w-full h-full z-10"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	$starStartOffset: 600px;
	$starFieldWidth: 2560;
	$starFieldHeight: 2560;

	$numStarOneStars: 1700;
	$numStarTwoStars: 700;
	$numStarThreeStars: 200;

	$starOneScrollDuration: 100s;
	$starTwoScrollDuration: 125s;
	$starThreeScrollDuration: 175s;

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-#{$starFieldHeight}px)
		}
	}


	@function create-stars($n) {
  		$stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";

		@for $i from 2 through $n {
			$stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";
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
		animation: animStar $scrollSpeed linear infinite, fadeIn 1s ease-in-out;
		&:after {
			content: " ";
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

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (min-width: 768px) {
		.hero-bg {
			height: calc(100% + 72px);
			width: calc(100% + 72px + 72px);
			transform: translateY(-72px) translateX(-72px);
		}
	}
</style>
