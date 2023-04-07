<script>
	import AnimatedLogo from './common/AnimatedLogo.svelte';
	import PrimaryButton from './common/PrimaryButton.svelte';
	import { onMount, getContext } from 'svelte';
	import { gsap } from 'gsap';
	import HeroContainer from './common/HeroContainer.svelte';
	export let line1 = '';
	export let line2 = '';
	export let line3 = '';
	export let line4 = '';
	export let buttonVisible = true;

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
	});
</script>

<section class="hero col-span-5 h-[calc(100vh-40px-32px)] flex flex-col items-center">
	<HeroContainer {line1} {line2} {line3} {line4} {buttonVisible} />
</section>

<style lang="postcss">
</style>
