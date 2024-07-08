<script>
	import { slide } from 'svelte/transition';
	import ImageLoader from '$lib/ImageLoader.svelte';
	import FAQ from '../assets/fast-tracks/FAQ.png';
	let faqs = [
		{
			question: 'Who is eligible to apply?',
			answer:
				'This program is exclusive for Superteam Members. All Global Superteam Members are eligible to apply.',
			open: false
		},
		{
			question: 'How much does this cost?',
			answer: '$0.',
			open: false
		},
		{
			question: 'How long does it take to get accepted?',
			answer:
				'This varies from program to program but applicants normally receive feedback within 1-2 weeks from the final application deadline.',
			open: false
		},
		{
			question: 'Does fast track mean I get a guaranteed spot in the program?',
			answer:
				'No. This program is an attempt to grant exclusive perks to Superteam Members and does not guarantee that the applications will get accepted.',
			open: false
		}
	];

	function toggle(index) {
		faqs = faqs.map((faq, i) => {
			if (i === index) faq.open = !faq.open;
			else faq.open = false;
			return faq;
		});
	}
</script>

<div
	class="faq-container col-span-5 flex flex-col justify-center align-middle relative left-1/2 right-1/2 -translate-x-1/2 w-screen -mt-[70px] md:-mt-[250px] -mb-[50px] md:-mb-[20px] lg:-mb-[30px] z-1 bg-black h-fit md:rounded-[64px] md:h-fit"
>
	<div class="overlay absolute w-full h-full hidden md:block" />
	<ImageLoader
		src={FAQ}
		srcset={`${FAQ} 640w, ${FAQ} 1024w`}
		sizes="(max-width: 640px) 100vw, 1024px"
		loading="lazy"
		alt=""
		class="lg:h-fit h-[690px] md:rounded-[64px] object-cover"
	/>
	<div class="container w-full flex flex-col md:justify-center items-center h-[800px] md:h-full">
		<p class="header-text">Your questions, answered</p>
		<p class="description-text">
			If you have any further questions, reach out to Neil Shroff <a
				href="https://x.com/neilshroff"
				target="_blank">here</a
			>
		</p>
		{#each faqs as faq, index}
			<div class="faq-item">
				<button class="question" on:click={() => toggle(index)}>
					{faq.question}
					<span class="icon">{faq.open ? '▲' : '▼'}</span>
				</button>
				{#if faq.open}
					<p class="answer" transition:slide>{faq.answer}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.faq-container {
    margin-top: 1rem;
		z-index: 1;
    display: flex;
    align-items: center;
	}
  @media only screen and (max-width: 700px) {
    .faq-container {
      height: 55rem;
    }
  }
	.overlay {
		border-radius: 64px;
		background: radial-gradient(
			49.05% 88.04% at 50% 84.89%,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.37) 100%
		);
	}
	.overlay-sm {
		background: radial-gradient(
					29.56% 40.33% at 47.94% 24.3%,
					rgba(0, 0, 0, 0.2) 0%,
					rgba(0, 0, 0, 0) 100%
				)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
			radial-gradient(23.82% 42.75% at 49.03% 54.97%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.87) 100%)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	}

	.container {
		position: absolute;
	}
	.container a {
		cursor: pointer;
		border-bottom: 1px solid #fff;
	}
	.header-text {
		color: #fff;
		text-align: center;
		font-size: 2.375rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.6125rem;
		letter-spacing: -0.1425rem;
		margin-bottom: 0.75rem;
		padding-top: 2rem;
		font-family: 'DM-Sans-H';
		@media only screen and (max-width: 500px) {
			font-size: 2rem;
		}
	}
	.description-text {
		margin-bottom: 2.5rem;
		color: #fff;
		text-align: center;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.8rem;
		letter-spacing: -0.0225rem;
		font-family: 'DM-Sans';
		@media only screen and (max-width: 700px) {
			font-size: 1rem;
		}
	}

	.faq-item {
		margin-top: 1rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.12);
		max-width: 600px;
		width: 100%;
		@media only screen and (max-width: 700px) {
			max-width: 300px;
		}
	}
	.question {
		color: white;
		text-align: left;
		width: 100%;
		font-size: 1.2rem;
		cursor: pointer;
		padding: 1rem 0rem;
		color: #fff;
		font-size: 1.25rem;
		font-style: normal;
		line-height: 1.375rem;
		font-family: 'DM-Sans-H2';
	}
	.icon {
		float: right;
	}
	.answer {
		color: #fff;
		text-align: left;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.8rem;
		letter-spacing: -0.0225rem;
		text-align: left;
		margin-bottom: 1rem;
		font-family: 'DM-Sans';
	}
</style>
