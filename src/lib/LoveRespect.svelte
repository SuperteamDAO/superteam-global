<script>
	// @ts-nocheck

	import TestimonialCard from './common/TestimonialCard.svelte';
	import pragun from '../assets/images/pragun.jpg';
	import clsx from 'clsx';
	import testimonials from '../i18n/locales/testimonials.json';

	export let collab = false;
</script>

<div
	class={clsx(
		'respect-container h-fit md:h-fit mt-48 col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible',
		collab ? 'h-fit sm:h-fit md:h-fit' : ''
	)}
>
	<div class="love-header">
		<p class="love">Love and Respect</p>
	</div>

	<div class="mt-12 overflow-x-scroll scrollbar-hidden item-container flex-nowrap">
		<div class="scroll-wrapper w-full grid grid-cols-2">
			<div class="item-row item-row-1 flex flex-row slide-track">
				{#each testimonials as testimonial, index}
					{#if index % 2 === 0}
						<div class="item-col flex flex-row md:flex-col h-[400px] h-fit">
							<div class="item">
								<TestimonialCard
									imgurl={testimonial.imgurl}
									name={testimonial.name}
									username={testimonial.username}
									content={testimonial.content}
								/>
							</div>
							{#if testimonials[index + 1]}
								<div class="item">
									<TestimonialCard
										imgurl={testimonials[index + 1].imgurl}
										name={testimonials[index + 1].name}
										username={testimonials[index + 1].username}
										content={testimonials[index + 1].content}
									/>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
			<div class="item-row item-row-2 flex flex-row slide-track">
				<!-- Duplicate content -->
				{#each testimonials as testimonial, index}
					{#if index % 2 === 0}
						<div class="item-col flex flex-row md:flex-col h-fit">
							<div class="item">
								<TestimonialCard
									imgurl={testimonial.imgurl}
									name={testimonial.name}
									username={testimonial.username}
									content={testimonial.content}
								/>
							</div>
							{#if testimonials[index + 1]}
								<div class="item">
									<TestimonialCard
										imgurl={testimonials[index + 1].imgurl}
										name={testimonials[index + 1].name}
										username={testimonials[index + 1].username}
										content={testimonials[index + 1].content}
									/>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
			<div class="item-row item-row-3 lg:flex-row slide-track hidden lg:flex">
				<!-- Triplicate content -->
				{#each testimonials as testimonial, index}
					{#if index % 2 === 0}
						<div class="item-col flex flex-row md:flex-col h-fit">
							<div class="item">
								<TestimonialCard
									imgurl={testimonial.imgurl}
									name={testimonial.name}
									username={testimonial.username}
									content={testimonial.content}
								/>
							</div>
							{#if testimonials[index + 1]}
								<div class="item">
									<TestimonialCard
										imgurl={testimonials[index + 1].imgurl}
										name={testimonials[index + 1].name}
										username={testimonials[index + 1].username}
										content={testimonials[index + 1].content}
									/>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.respect-container {
		justify-content: center;
		z-index: 4;
	}
	.item {
		margin-right: 24px;
		margin-bottom: 24px;
	}
	.love {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 500;
		font-size: 32px;
		line-height: 35px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	.item-col:nth-child(even) {
		margin-top: 12px;
	}
	.scroll-wrapper {
		display: grid;
		grid-template-columns: repeat(3, auto);
		overflow-x: hidden;
		width: 100%;
	}
	.item-container {
		--scroll-duration: 40s;
		--factor: 1;
		--displacement: 0%;
		--scroll-duration-hover: 60s;
	}

	.item-row {
		display: flex;
		flex-wrap: nowrap;
		animation: scroll var(--scroll-duration) linear infinite;
	}

	.item-container:hover .item-row {
		animation-play-state: paused;
	}

	@media (min-width: 1670px) {
		.scroll-wrapper {
			grid-template-columns: repeat(3, auto);
			--scroll-duration: 40s;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
