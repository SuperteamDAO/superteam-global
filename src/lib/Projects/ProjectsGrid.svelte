<script>
	import ProjectCard from './ProjectCard.svelte';

    let array = (new Array(9)).fill(false);
    array[1] = true;

    for (let i = 2; i < 9; i++) {
        if ((i - 1) % 3 === 0) {
            array[i] = true;
        } else {
            array[i] = false;
        }
    }

</script>

<div class="flex justify-center items-center mt-[42px]">
	<div class="flex flex-col gap-8 lg:grid lg:gap-0 cards-container">
        {#each array as offset}
            <ProjectCard 
                class="col-span-1 row-span-1 {offset ? 'lg:mt-8' : ''}" 
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
