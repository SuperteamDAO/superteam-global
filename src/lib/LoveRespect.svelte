<script>
	import TestimonialCard from './common/TestimonialCard.svelte';
	import pragun from '../assets/images/pragun.jpg';
	import { afterUpdate, onMount } from 'svelte';

	/**
	 * @type {HTMLDivElement}
	 */
	let container;
	const numRows = 2; // Set the number of fixed rows
	const containerHeight = 580;

	function layoutItems() {
		const items = container.querySelectorAll('.masonry-item');
		const columnWidth = items[0].clientWidth;

		let columns = [[]];
		let currentColumnHeight = 0;
		let currentRow = 0;

		items.forEach((item, index) => {
			if (currentColumnHeight + item.clientHeight > containerHeight) {
				currentRow++;
				if (currentRow === numRows) {
					currentRow = 0;
					columns.push([]);
					currentColumnHeight = 0;
				}
			}

			columns[columns.length - 1].push(item);
			currentColumnHeight += item.clientHeight + 32; // Add 32px margin-bottom to each item

			// Set position of the item
			const x = (columnWidth + 32) * (columns.length - 1);
			const y = (currentRow * containerHeight) / numRows;
			item.style.transform = `translate(${x}px, ${y}px)`;
			currentRow = (currentRow + 1) % numRows;

			// Calculate the number of columns needed
			const neededColumns = Math.ceil(items.length / numRows);
			// Set the width of the container
			container.style.width = `${(columnWidth + 32) * neededColumns}px`;
		});
	}

	onMount(() => {
		layoutItems();
	});

	afterUpdate(() => {
		layoutItems();
	});
</script>

<div
	class="respect-container h-[225px] md:h-[580px] mt-48 col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-visible z-3"
>
	<div class="love-header">
		<p class="love">Love and Respect</p>
	</div>
	<div
		bind:this={container}
		class="respect-cards mt-12 h-[full] overflow-x-visible scrollbar-hidden masonry-columns"
	>
		<div class="break-inside-avoid mb-[32px] masonry-item" id="card-2">
			<TestimonialCard
				imgurl={pragun}
				name="Pragun Dua"
				username="pragdua"
				content="absoultely the best people in the game, no competetion the the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game"
			/>
		</div>
		<div class="break-inside-avoid masonry-item" id="card-2">
			<TestimonialCard
				imgurl={pragun}
				name="Pragun Dua"
				username="pragdua"
				content="absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the absoultely the best people in the game, no competetion the"
			/>
		</div>
		<div class="break-inside-avoid mb-[32px] masonry-item" id="card-2">
			<TestimonialCard
				imgurl={pragun}
				name="Pragun Dua"
				username="pragdua"
				content="absoultely the best people in the game, no competetion the"
			/>
		</div>
		<div class="break-inside-avoid mb-[32px] masonry-item" id="card-2">
			<TestimonialCard
				imgurl={pragun}
				name="Pragun Dua"
				username="pragdua"
				content="absoultely the best people in the game, no competetion the"
			/>
		</div>
		<div class="break-inside-avoid mb-[32px] masonry-item" id="card-2">
			<TestimonialCard
				imgurl={pragun}
				name="Pragun Dua"
				username="pragdua"
				content="absoultely the best people in the game, no competetion the"
			/>
		</div>
	</div>
</div>

<style>
	.respect-container {
		display: flex;
		flex-direction: column;
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
	.respect-cards {
		position: relative;
		height: 580px;
		width: 100%;
		display: grid;
		grid-auto-flow: column;
		grid-template-rows: repeat(2, 1fr); /* Set the number of fixed rows */
		grid-gap: 32px;
		height: 100vh; /* Set the fixed height */
		overflow-x: auto;
	}
	.masonry-item {
		position: absolute;
		margin-bottom: 32px;
	}
</style>
