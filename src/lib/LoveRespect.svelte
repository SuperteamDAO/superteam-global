<script>
	import { onMount, onDestroy } from 'svelte';
	import TestimonialCard from './common/TestimonialCard.svelte';
	import pragun from '../assets/images/pragun.jpg';
	/**
	 * @type {{ scrollLeft: number; addEventListener: (arg0: string, arg1: { (): void; (): void; }) => void; }}
	 */
	let itemRow;
	/**
	 * @type {number | undefined}
	 */
	let scrollInterval;

	onMount(() => {
		// Clone the content of the item-row and append it to create a seamless loop
		const clonedContent = itemRow.children[0].cloneNode(true);
		itemRow.children[0].appendChild(clonedContent);

		scrollInterval = setInterval(() => {
			itemRow.scrollLeft += 1;
			// Reset the scroll position when reaching the end of the original content
			if (itemRow.scrollLeft >= itemRow.scrollWidth / 2) {
				itemRow.scrollLeft = 0;
			}
		}, 30);

		itemRow.addEventListener('mouseover', () => {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(() => {
				itemRow.scrollLeft += 1;
			}, 80);
		});

		itemRow.addEventListener('mouseout', () => {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(() => {
				itemRow.scrollLeft += 1;
			}, 30);
		});

		return () => {
			clearInterval(scrollInterval);
		};
	});

	function onManualScroll() {
		if (itemRow.scrollLeft >= itemRow.scrollWidth / 2) {
			itemRow.scrollLeft = 0;
		} else if (itemRow.scrollLeft === 0 && itemRow.scrollWidth > 0) {
			itemRow.scrollLeft = itemRow.scrollWidth / 2;
		}
	}
</script>

<div
	class="respect-container h-[225px] md:h-[580px] mt-48 col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible z-3"
>
	<div class="love-header">
		<p class="love">Love and Respect</p>
	</div>

	<div
		class="mt-12 overflow-x-scroll scrollbar-hidden"
		bind:this={itemRow}
		on:scroll={onManualScroll}
	>
		<div class="item-row flex flex-row">
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col md:h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
			</div>
			<div class="item-col flex flex-row md:flex-col h-[580px]">
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the"
					/>
				</div>
				<div class="item">
					<TestimonialCard
						imgurl={pragun}
						name="Pragun Dua"
						username="@pragdua"
						content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
					/>
				</div>
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
	.respect-container {
		justify-content: center;
		z-index: 4;
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
</style>
