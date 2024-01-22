<script>
	import ProjectCard from './ProjectCard.svelte';
	import { writable, derived } from 'svelte/store';
	import Dropdown from './Dropdown.svelte';
	export let projects = [];

	if (Array.isArray(projects)) {
		projects.sort((a, b) => a.fields['Rank'] - b.fields['Rank']);
	}

	let offsetArray = new Array(projects.length).fill(false);
	offsetArray[1] = true;
	for (let i = 2; i < projects.length; i++) {
		offsetArray[i] = (i - 1) % 3 === 0;
	}

	function getOffsetClasses(index) {
		if (offsetArray[index] && index % 2 === 0) {
			return 'mt-0 md:mt-8';
		}
		if (offsetArray[index] && index % 2 === 1) {
			return 'mt-0 lg:mt-8';
		}
		if (!offsetArray[index] && index % 2 === 0) {
			return 'mt-0 md:mt-8 lg:mt-0';
		}
		return 'mt-0';
	}

	let countries = [];
	if (Array.isArray(projects)) {
		countries = Array.from(new Set(projects.map((project) => project.fields['Country'])));
	}

	let selectedCountry = writable('');

	const filteredProjects = derived(selectedCountry, ($selectedCountry) =>
		projects.filter(
			(project) => $selectedCountry === '' || project.fields['Country'] === $selectedCountry
		)
	);
</script>

<div class="mt-12 z-50">
	<p class="text-white font-primary font-medium text-center">Filter by Country</p>
	
	<Dropdown {countries} {selectedCountry} />
</div>

<div class="flex justify-center items-center mt-[42px] z-20">
	<div class="flex flex-col gap-8 md:grid md:gap-0 cards-container">
		{#each $filteredProjects as { fields }, index}
			<ProjectCard
				name={fields.Name}
				tagline={fields.Tagline}
				projectLink={fields['Project Link']}
				twitterLink={fields['Project Twitter']}
				imgUrl={fields['Logo Link']}
				country={fields['Country']}
				class="col-span-1 row-span-1 {getOffsetClasses(index)}"
			/>
		{/each}
	</div>
</div>

<style>
	@media (min-width: 786px) {
		.cards-container {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 32px;
		}
	}
	@media (min-width: 1024px) {
		.cards-container {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: auto;
		}
	}
</style>
