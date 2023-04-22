<script>
	import ProjectsGrid from '$lib/Projects/ProjectsGrid.svelte';
	import HeroContainer from '$lib/common/HeroContainer.svelte';
	import builbg from '../../assets/images/Build.webp';

	export let data;
</script>

<img src={builbg} class="absolute top-0 left-0 w-full object-cover" loading="eager" alt="" />
<section class="relative col-span-5 flex flex-col items-center pb-[300px]">
	<HeroContainer
		line1="Industry leading"
		line2="Projects"
		line3="superteam is the forefront community for web3,"
		line4="powered by solana."
		buttonVisible={false}
	/>
	<ProjectsGrid projects={data.projects} />
</section>
