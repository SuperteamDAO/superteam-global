<script>
	import clsx from 'clsx';
	import PrimaryButton from './PrimaryButton.svelte';
	let isOpen = false;
	export let image;
	export let heading = '';
	export let subheading = '';
	export let content1 = '';
	export let content2 = '';
	export let btnText = '';
	function toggleAccordion() {
		isOpen = !isOpen;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="overlay z-[1] object-cover rounded-lg">
	<div
		class={clsx(
			'w-full accordion rounded-lg text-white cursor-pointer flex flex-col',
			isOpen ? 'open' : 'closed'
		)}
		on:click={toggleAccordion}
	>
		<div class="h-[100px] flex flex-row justify-between">
			<div class={clsx('flex flex-col text-left md:flex-row md:items-center w-full h-container')}>
				<div
					class={clsx(
						'ml-[32px] md:ml-[64px] z-[1] text-left font-semibold max-[360px]:text-[20px] text-[24px] leading-[26px] font-secondary',
						isOpen ? 'max-md:pb-[32px]' : ''
					)}
				>
					<p>{heading}</p>
				</div>
				<div
					class={clsx(
						'ml-[32px] max-md:mt-[8px] md:ml-[48px] font-primary max-[360px]:text-[15px] text-[18px] z-[1] leading-[24px] font-medium',
						isOpen ? 'hidden' : 'visible'
					)}
				>
					<p>{subheading}</p>
				</div>
			</div>
			<div class="h-fit image-container">
				<img
					src={image}
					alt=""
					class={clsx(
						isOpen
							? 'accordion-image absolute md:relative w-full max-md:left-0 md:w-[340px] max-md:z-0'
							: 'accordion-image-closed absolute md:relative w-full max-md:left-0 md:w-[340px] max-md:z-0 overflow-hidden object-cover'
					)}
				/>
			</div>
		</div>
		<div
			class={clsx(
				'md:mt-[16px] text-left ml-[32px] md:ml-[64px] h-fit md:w-[267px]',
				'accordion-content'
			)}
		>
			<div class="font-primary max-[360px]:text-[15px] text-[18px] leading-[24px]">
				<p>
					{content1}
					<br />
					<br />
					{content2}
				</p>
			</div>
		</div>
		<div class="accordion-btn ml-[32px] md:ml-[64px] mt-[51px] w-fit">
			<PrimaryButton class="w-fit" href="">{btnText}</PrimaryButton>
		</div>
	</div>
</div>

<style>
	.accordion {
		background: linear-gradient(108.93deg, #121212 8.36%, rgba(18, 18, 18, 0) 128.46%);
		background-color: black;
	}
	.overlay {
		position: relative;
		background: #202020;
		padding: 1px;
		transition: background 0.5s ease;
		transition: border 400ms;
	}

	.overlay::after {
		content: '';
		z-index: -1;
		@apply absolute rounded-lg;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: linear-gradient(144.34deg, #f7f3f3 -29.96%, rgba(63, 63, 63, 0.67) 131.56%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.overlay:hover::after {
		opacity: 1;
	}
	.open {
		height: 400px;
		transition: height 0.3s ease-in-out;
	}

	.closed {
		height: 100px;
		overflow: hidden;
		transition: height 0.3s ease-in-out;
	}
	.accordion-image {
		height: 400px;
		overflow: visible;
		transition: overflow 1s ease-in-out;
	}
	.accordion-image-closed {
		height: 100px;
		overflow: hidden;
		transition: height 0.3s ease-in-out;
	}

	.accordion-content,
	.accordion-btn {
		transition: opacity 1s ease-in-out, transform 0.7s ease-in-out;
	}

	.open .accordion-content {
		opacity: 1;
		transform: translateY(0);
	}

	.closed .accordion-content {
		opacity: 0;
		transform: translateY(20px);
	}

	.open .accordion-btn {
		opacity: 1;
		transform: translateY(0);
	}

	.closed .accordion-btn {
		opacity: 0;
		transform: translateY(20px);
	}
	@media (max-width: 768px) {
		.closed {
			height: 122px;
		}
		.accordion-image-closed {
			height: 122px;
			padding: 1px;
			border-radius: 8px;
			opacity: 50%;
		}
		.accordion-image {
			padding: 1px;
			border-radius: 8px;
			opacity: 50%;
		}
		.h-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 122px;
		}
		.accordion-content,
		.accordion-btn {
			transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
		}
	}
</style>
