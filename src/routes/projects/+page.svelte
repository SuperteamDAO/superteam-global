<script>
	import ProjectPageHero from "$lib/Projects/ProjectPageHero.svelte";
	import ProjectsGrid from "$lib/Projects/ProjectsGrid.svelte";
    import builbg from '../../assets/bg-build.jpg';

</script>

<img src={builbg} class="absolute top-0 left-0 w-full object-cover" alt="" />
<section class="relative col-span-5 flex flex-col items-center pb-[300px]">   
    <ProjectPageHero />
    <ProjectsGrid />
</section>