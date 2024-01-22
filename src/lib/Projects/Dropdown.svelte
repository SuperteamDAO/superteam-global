<script>
	import { writable } from 'svelte/store';

	export let countries = [];
	export let selectedCountry = writable('');

	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectCountry(country) {
		selectedCountry.set(country);
		isOpen = false;
	}
</script>

<div class="dropdown">
	<div class="selected-option" on:click={toggleDropdown} on:keydown={() => {}} on:keypress={() => {}}>
		{$selectedCountry || 'Select Country'}
		{#if isOpen}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-icon">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-icon">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
			</svg>
		{/if}
	</div>
	{#if isOpen}
		<div class="options">
			<div class="option" on:click={() => selectCountry('')} on:keydown={() => {}} on:keypress={() => {}}>
				All
			</div>
			{#each countries as country (country)}
				<div class="option" on:click={() => selectCountry(country)}  on:keydown={() => {}} on:keypress={() => {}}>
					{country}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
		width: 200px;
	}

	.selected-option {
		padding: 10px;
		border: 1px solid #414068;
		border-radius: 5px;
        margin-top: 0.5rem;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: linear-gradient(0deg, #161637, #281951);
		color: #fff;
	}

	.arrow-icon {
		width: 16px;
		height: 16px;
	}

	.options {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border: 1px solid #3a3766;
		z-index: 1;
	}

	.option {
		padding: 10px;
		cursor: pointer;
		transition: background-color 0.3s;
		background-color: #1f1c33;
		color: #fff; 
	}

	.option:hover {
		background-color: #2a2646;
	}
</style>
