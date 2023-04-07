<script>
	import AnimatedLogo from './AnimatedLogo.svelte';
	import PrimaryButton from './PrimaryButton.svelte';
	export let line1 = '';
	export let line2 = '';
	export let line3 = '';
	export let line4 = '';
	export let buttonVisible = true;
</script>

<div class="flex flex-col justify-start items-center mt-[72px] md:mt-[160px]">
	<AnimatedLogo />
	<h1
		class="heading w-[320px] md:w-[480px] flex flex-col text-[32px] md:text-[48px] leading-[1.005] tracking-[-4%] font-semibold font-secondary text-white mt-12 text-center"
	>
		<span class="line block">
			<span> {line1} </span>
		</span>
		<span class="line block">
			<span> {line2} </span>
		</span>
	</h1>
	<p
		class="sub-heading opacity-0 text-white font-primary text-[16px] md:text-[20px] leading-[1.35] tracking-[-4%] text-center mt-8"
	>
		{line3}
		<br />
		{line4}
	</p>
	{#if buttonVisible}
		<PrimaryButton href="/" class="know-more-button mt-8">Know more</PrimaryButton>
	{/if}
</div>

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
