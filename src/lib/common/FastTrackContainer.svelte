<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	export let line1 = '';
	export let line2 = '';
	export let line3 = 'superteam is the forefront community for web3,';
	export let line4 = 'powered by solana.';

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
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

		tl.fromTo(
			'.sub-heading',
			{ y: 0, opacity: 0 },
			{
				opacity: 1,
				duration: 1.8,
				ease: 'power4.out'
			},
			'-=1.8'
		);

		tl.to('.know-more-button', { opacity: 1, duration: 1.8, ease: 'power4.out' });
		tl.to('.slot', { opacity: 1, duration: 1.8, ease: 'power4.out' }, '-=1.8');

		tl.to('.heading .line', {
			position: 'relative'
		});
	});
</script>

<div class="flex flex-col items-center hero-content w-full">
	<h1
		class="heading w-[320px] text-[calc(24px+0.5vw)] md:w-[600px] flex flex-col md:text-[48px] leading-[1.005] tracking-[-4%] font-semibold font-secondary text-white mt-12 text-center"
	>
		<span class="line block h-9 md:h-12 w-full">
			<span class="heading-text"> {line1} </span>
		</span>
		<span class="line block h-9 md:h-12">
			<span class="heading-text"> {line2} </span>
		</span>
	</h1>
	<p
		class="sub-heading opacity-0 text-white font-primary text-[16px] md:text-[20px] leading-[1.35] tracking-[-4%] text-center mt-8"
	>
		<span class="inline sm:block">
			{line3}
		</span>
		<span class="inline sm:block">
			{line4}
		</span>
	</p>
	<slot />
</div>

<style lang="postcss">
	.hero-content {
		z-index: 20;
		margin-top: calc((100vh / 290) * 160);
	}
	.heading .line {
		@apply block relative overflow-hidden w-full h-8 md:h-12;
	}
	.heading .line span {
		@apply absolute w-full top-0 left-0 opacity-0;
	}
	.heading {
		white-space: nowrap;
	}
</style>
