<script>
	import buildstations2 from '../assets/cards/buildstations2.png';
	import supermeets from '../assets/cards/supermeets.png';
	import uniprogram from '../assets/cards/uniprogram.png';
	import IllustrationCard from './common/IllustrationCard.svelte';
</script>

<div
	class="mt-48 col-span-5 relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex flex-col justify-center items-center"
>
	<div class="text-center">
		<p class="font-semibold text-3xl leading-none text-white tracking-tighter">Superteam IRL</p>
	</div>
	<div class="col-span-5 lg:grid lg:grid-cols-5 gap-[24px] mt-11 lg:mt-4">
		<div />
		<IllustrationCard imageUrl={buildstations2} text="BuildStations" />
		<div class="md:mt-14">
			<IllustrationCard imageUrl={supermeets} text="Supermeets" />
		</div>
		<IllustrationCard imageUrl={uniprogram} text="University Program" />
		<div />
	</div>
</div>

<style>
	.text-center {
		font-family: 'Satoshi-Variable';
	}
</style>
