<script>
	import { onMount } from 'svelte';
	import ProjectCard from './ProjectCard.svelte';

    export let projects;

    let offsetArray = (new Array(projects?.length ?? 0)).fill(false);
    offsetArray[1] = true;

    for (let i = 2; i < projects?.length ?? 0; i++) {
        if ((i - 1) % 3 === 0) {
            offsetArray[i] = true;
        } else {
            offsetArray[i] = false;
        }
    }

</script>

<div class="flex justify-center items-center mt-[42px]">
	<div class="flex flex-col gap-8 lg:grid lg:gap-0 cards-container">
        {#each projects as { fields }, index}
            <ProjectCard
                name={fields.Name}
                tagline={fields.Tagline}
                projectLink={fields["Project Link"]}
                class="col-span-1 row-span-1 {offsetArray[index] ? 'lg:mt-8' : ''}" 
            />
        {/each}
	</div>
</div>

<style>
	.cards-container {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto;
        column-gap: 32px;
	}
</style>
