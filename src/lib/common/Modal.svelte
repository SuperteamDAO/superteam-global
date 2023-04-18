<script>
	import { createEventDispatcher } from 'svelte';
	import thunder from '../../assets/logos/thunder.svg';
	import PrimaryButton from './PrimaryButton.svelte';
	import { X } from 'phosphor-svelte';
	import { fade, scale } from 'svelte/transition';
	import Thunder from './Thunder.svelte';
	const dispatch = createEventDispatcher();

	export let imgurl;
	export let bullet = thunder;
	export let text;
	export let top_content;
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
		class="modal-content bottom-sheet scale-up flex flex-col md:flex-row bg-white w-full md:w-[95%] lg:w-[780px] h-fit md:h-[600px] md:rounded-lg"
		on:click={(e) => e.stopPropagation()}
	>
		<div class="left-img h-[200px] md:h-full w-full md:w-1/2">
			<div class="overlay h-full w-full" />
			<img
				src={imgurl}
				alt={text}
				class="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
			/>
			<div
				class="text-on-img text-[24px] md:text-[32px] text-white top-[24px] left-[24px] md:top-[53px] md:left-[40px] flex flex-row w-5/6 justify-between"
			>
				<div>
					{text}
				</div>
				<div class="cross cursor-pointer md:hidden z-11" on:click={handleClose}>
					<X size={20} color="#727272" weight="duotone" />
				</div>
			</div>
		</div>

		<div
			class="right relative h-fit md:h-full w-full md:w-1/2 bg-[#161616] md:rounded-b-lg md:rounded-bl-none md:rounded-r-lg z-10 text-white text-left flex flex-col"
		>
			<div
				class="cross self-end mt-[46px] mr-[64px] cursor-pointer hidden md:block"
				on:click={handleClose}
			>
				<X size={30} />
			</div>
			<div
				class="top-content w-fit md:w-[230px] text-[14px] md:text-[18px] mt-[32px] ml-[32px] mr-[105px] md:mr-0 md:ml-[64px] md:leading-[19px] leading-[19px]"
			>
				{top_content}
			</div>
			<div
				class="points ml-[36px] md:ml-[64px] text-[14px] md:text-[18px] w-fit md:w-[250px] mr-[80px] md:mr-[64px]"
			>
				{#each points as point, index}
					<div class={`point${index + 1} mt-[${index === 0 ? 32 : 12}px] flex flex-row gap-4`}>
						<span class="mt-2 md:mt-2 self-center">
							<Thunder size={16} />
						</span>
						<p class="mt-2">{point}</p>
					</div>
				{/each}
			</div>
			<div class="mt-[32px] ml-[32px] md:ml-[64px] mb-[34px]">
				<PrimaryButton href="/" class="font-bold">
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
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		line-height: 35px;
		text-align: center;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	.top-content {
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		color: #ffffff;
		@media (max-width: 640px) {
			line-height: 19px;
		}
	}
	.points {
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		line-height: 171.5%;
		letter-spacing: -0.04em;

		color: #ffffff;
	}
	@keyframes scaleUp {
		0% {
			transform: scale(0.8);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.scale-up {
		@media (min-width: 641px) {
			animation: scaleUp 300ms;
		}
	}

	@keyframes slideUp {
		0%,
		50% {
			transform: translateY(100%);
			opacity: 0;
		}

		50%,
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.bottom-sheet {
		@media (max-width: 640px) {
			position: fixed;
			bottom: 0;
			width: 100%;
			border-top-left-radius: 15px;
			border-top-right-radius: 15px;
			overflow: hidden;
			animation: slideUp 600ms;
		}
	}

	.modal-backdrop {
		transition: opacity 0.3s ease;
		z-index: 10;
		display: flex;
		@media (max-width: 640px) {
			align-items: flex-end;
			justify-content: center;
		}
	}
</style>
