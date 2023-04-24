<script>
	// @ts-nocheck

	import TestimonialCard from './common/TestimonialCard.svelte';
	import pragun from '../assets/images/pragun.jpg';
	import clsx from 'clsx';
	import { _ } from 'svelte-i18n';

	export let collab = false;
</script>

<div
	class={clsx(
		'respect-container h-fit md:h-fit mt-[224px] lg:-mt-[176px] col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible',
		collab ? 'h-fit sm:h-fit md:h-fit' : ''
	)}
>
	<div class="love-header">
		<p class="love text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] section-heading">
			Love and Respect
		</p>
	</div>

	<div class="mt-12 overflow-x-scroll scrollbar-hidden item-container flex-nowrap">
		<div class="scroll-wrapper w-full grid grid-cols-2">
			<div class="item-row item-row-1 flex flex-row slide-track">
				{#each $_('page.home.testimonials.data') as testimonial, index}
					{#if index % 2 === 0}
						<div class="item-col flex flex-row md:flex-col h-fit">
							<div class="item">
								<TestimonialCard
									imgurl={testimonial.imgurl}
									name={testimonial.name}
									username={testimonial.username}
									content={testimonial.content}
									twturl={testimonial.tweet_link}
								/>
							</div>
							{#if $_('page.home.testimonials.data')[index + 1]}
								<div class="item">
									<TestimonialCard
										imgurl={$_('page.home.testimonials.data')[index + 1].imgurl}
										name={$_('page.home.testimonials.data')[index + 1].name}
										username={$_('page.home.testimonials.data')[index + 1].username}
										content={$_('page.home.testimonials.data')[index + 1].content}
										twturl={$_('page.home.testimonials.data')[index + 1].tweet_link}
									/>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
			<div class="item-row item-row-2 flex flex-row slide-track">
				<!-- Duplicate content -->
				{#each $_('page.home.testimonials.data') as testimonial, index}
					{#if index % 2 === 0}
						<div class="item-col flex flex-row md:flex-col h-fit">
							<div class="item">
								<TestimonialCard
									imgurl={testimonial.imgurl}
									name={testimonial.name}
									username={testimonial.username}
									content={testimonial.content}
									twturl={testimonial.tweet_link}
								/>
							</div>
							{#if $_('page.home.testimonials.data')[index + 1]}
								<div class="item">
									<TestimonialCard
										imgurl={$_('page.home.testimonials.data')[index + 1].imgurl}
										name={$_('page.home.testimonials.data')[index + 1].name}
										username={$_('page.home.testimonials.data')[index + 1].username}
										content={$_('page.home.testimonials.data')[index + 1].content}
										twturl={$_('page.home.testimonials.data')[index + 1].tweet_link}
									/>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
			<div class="item-row item-row-3 lg:flex-row slide-track hidden lg:flex">
				<!-- Triplicate content -->
				{#each $_('page.home.testimonials.data') as testimonial, index}
					{#if index % 2 === 0}
						<div class="item-col flex flex-row md:flex-col h-fit">
							<div class="item">
								<TestimonialCard
									imgurl={testimonial.imgurl}
									name={testimonial.name}
									username={testimonial.username}
									content={testimonial.content}
									twturl={testimonial.tweet_link}
								/>
							</div>
							{#if $_('page.home.testimonials.data')[index + 1]}
								<div class="item">
									<TestimonialCard
										imgurl={$_('page.home.testimonials.data')[index + 1].imgurl}
										name={$_('page.home.testimonials.data')[index + 1].name}
										username={$_('page.home.testimonials.data')[index + 1].username}
										content={$_('page.home.testimonials.data')[index + 1].content}
										twturl={$_('page.home.testimonials.data')[index + 1].tweet_link}
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
		font-weight: 700;
		text-align: center;

		color: #ffffff;
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
