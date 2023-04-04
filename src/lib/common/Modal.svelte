<script>
	import { createEventDispatcher } from 'svelte';
	import thunder from '../../assets/logos/thunder.svg';
	import PrimaryButton from './PrimaryButton.svelte';
	import cross from '../../assets/logos/cross.svg';
	import { fade, scale } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	/**
	 * @type {any}
	 */
	export let imgurl;
	export let bullet = thunder;
	/**
	 * @type {any}
	 */
	export let text;
	/**
	 * @type {any}
	 */
	export let top_content;
	/**
	 * @type {any[]}
	 */
	export let points = [];

	export let btnText = '';

	function handleClose() {
		dispatch('close');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="modal-backdrop col-span-5 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleClose}
	transition:fade={{ duration: 300 }}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="modal-content scale-up flex flex-row bg-white w-[780px] h-[600px] rounded-lg"
		on:click={(e) => e.stopPropagation()}
	>
		<div class="left-img h-full w-1/2">
			<div class="overlay h-full w-full" />
			<img src={imgurl} alt={text} class="rounded-l-lg" />
			<p class="text-on-img text-white">
				{text}
			</p>
		</div>
		<div
			class="right relative h-full w-1/2 bg-[#161616] rounded-r-lg z-10 text-white text-left flex flex-col"
		>
			<div class="cross self-end mt-[46px] mr-[64px] cursor-pointer" on:click={handleClose}>
				<img src={cross} alt="" />
			</div>
			<div class="top-content">{top_content}</div>
			<div class="points ml-[64px]">
				{#each points as point, index}
					<div class={`point${index + 1} mt-[${index === 0 ? 32 : 12}px] flex flex-row`}>
						<img src={bullet} alt="" class="mr-[19px]" />
						<p>{point}</p>
					</div>
				{/each}
			</div>
			<div class="mt-[32px] ml-[64px]">
				<PrimaryButton class="font-bold">
					{btnText}
				</PrimaryButton>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		transition: opacity 0.3s ease;
		z-index: 10;
	}
	.modal-content {
		transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s ease 0.3s;
		position: relative;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.overlay {
		position: absolute;
		z-index: 10;
		background: linear-gradient(180deg, #000000 -18.75%, rgba(0, 0, 0, 0) 114.5%);
	}
	.text-on-img {
		position: absolute;
		z-index: 11;
		top: 53px;
		left: 40px;
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 35px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	.top-content {
		width: 230px;
		margin-top: 32px;
		margin-left: 64px;
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	.points {
		width: 250px;
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 171.5%;
		/* identical to box height, or 31px */

		letter-spacing: -0.04em;

		color: #ffffff;
	}
	@keyframes scaleUp {
		0% {
			transform: scale(0.8); /* Start from the specified dimensions */
			opacity: 0;
		}
		100% {
			transform: scale(1); /* Scale up to the actual dimensions */
			opacity: 1;
		}
	}

	.scale-up {
		animation: scaleUp 300ms; /* Apply the scaleUp animation with 300ms duration */
	}
</style>
