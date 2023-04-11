<script>
	import { onMount } from "svelte";
	import ProjectPageHero from "$lib/Projects/ProjectPageHero.svelte";
	import ProjectsGrid from "$lib/Projects/ProjectsGrid.svelte";
	import HeroContainer from "$lib/common/HeroContainer.svelte";
    import builbg from '../../assets/bg-build.jpg';

    export let data

</script>

<img src={builbg} class="absolute top-0 left-0 w-full object-cover" alt="" />
<section class="relative col-span-5 flex flex-col items-center pb-[300px]">
    <HeroContainer
         line1="Industry leading"
         line2="Projects"
         line3="superteam is the forefront community for web3,"
         line4="powered by solana."
    />
    <ProjectsGrid projects={data.projects} />
</section>