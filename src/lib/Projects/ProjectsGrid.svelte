<script>
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

    const getOffsetClasses = (index) => {
        if (offsetArray[index] && index % 2 === 0) {
            return 'mt-0 md:mt-8';
        }

        if (offsetArray[index] && index % 2 === 1) {
            return 'mt-0 lg:mt-8';
        }

        if (!offsetArray[index] && index % 2 === 0) {
            return 'mt-0 md:mt-8 lg:mt-0';
        }

        return 'mt-0'
    }

</script>

<div class="flex justify-center items-center mt-[42px]">
	<div class="flex flex-col gap-8 md:grid md:gap-0 cards-container">
        {#each projects as { fields }, index}
            <ProjectCard
                name={fields.Name}
                tagline={fields.Tagline}
                projectLink={fields["Project Link"]}
                twitterLink={fields["Project Twitter"]}
                imgUrl={fields["Logo Link"]}
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
