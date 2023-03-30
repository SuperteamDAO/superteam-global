<script>
	import buildstations from '../assets/cards/buildstations.png';
	import supermeets from '../assets/cards/supermeets.png';
	import uniprogram from '../assets/cards/uniprogram.png';
	import IllustrationCard from './common/IllustrationCard.svelte';
</script>

<div class="mt-48 col-span-5 flex flex-col justify-center items-center">
	<div class="text-center">
		<p class="font-semibold text-3xl leading-none text-white tracking-tighter">Superteam IRL</p>
	</div>
	<div class="col-span-5 lg:grid lg:grid-cols-5 gap-[24px] mt-11 lg:mt-4">
		<div />
		<IllustrationCard imageUrl={buildstations} text="BuildStations" />
		<div class="md:mt-14">
			<IllustrationCard imageUrl={supermeets} text="Supermeets" />
		</div>
		<IllustrationCard imageUrl={uniprogram} text="University Program" />
		<div />
	</div>
</div>

<style>
</style>
