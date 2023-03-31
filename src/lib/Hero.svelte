<script>
	import AnimatedLogo from './common/AnimatedLogo.svelte';
	import PrimaryButton from './common/PrimaryButton.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const timeline = gsap.timeline();
		timeline.fromTo(
			'.heading .line span',
			{
				y: 100,
				opacity: 0,
				stagger: {
					amount: 0.3
				}
			},
			{
				y: 0,
				opacity: 1,
				duration: 1.8,
				ease: 'power4.out'
			}
		);

		timeline.fromTo(
			'.sub-heading',
			{ y: 0, opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				ease: 'power4.out'
			},
			'-=1'
		);

		timeline.fromTo(
			'.know-more-button',
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: 'power4.out' },
			'-=1'
		);
	});
</script>

<section
	class="hero col-span-5 h-[calc(100vh-40px-32px)] flex flex-col justify-center items-center"
>
	<AnimatedLogo />
	<h1
		class="heading w-[280px] md:w-[430px] flex flex-col text-[32px] md:text-[48px] leading-[1.005] tracking-[-4%] font-semibold font-secondary text-white mt-12 text-center"
	>
		<span class="line block">
			<span> your portal to the </span>
		</span>
		<span class="line block">
			<span> world of solana </span>
		</span>
	</h1>
	<p
		class="sub-heading text-white font-primary text-[16px] md:text-[20px] leading-[1.35] tracking-[-4%] text-center mt-8"
	>
		superteam is the forefront community for web3,
		<br />
		powered by solana.
	</p>
	<PrimaryButton class="know-more-button mt-8">Know more</PrimaryButton>
</section>

<style lang="postcss">
	.heading .line {
		@apply block relative overflow-hidden w-full h-12;
	}
	br {
		content: '';
	}
	.heading .line span {
		@apply absolute w-full top-0 left-0;
	}
</style>
