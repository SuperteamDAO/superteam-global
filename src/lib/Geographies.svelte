<script>
	import { writable } from 'svelte/store';
	
	import india from '../assets/chapters/india.webp';
	import germany from '../assets/chapters/germany.webp';
	import vietnam from '../assets/chapters/vietnam.webp';
	import uk from '../assets/chapters/uk.webp';
	import uae from '../assets/chapters/uae.webp';
	import nigeria from '../assets/chapters/nigeria.webp';
	import balkan from '../assets/chapters/balkan.webp';
	import malaysia from '../assets/chapters/malaysia.webp';
	import japan from '../assets/chapters/japan.webp';
	import france from '../assets/chapters/france.webp';
	import canada from '../assets/chapters/canada.webp';
	import singapore from '../assets/chapters/singapore.webp';
	import poland from '../assets/chapters/poland.webp';
	import korea from '../assets/chapters/korea.webp';
	import indonesia from '../assets/chapters/indonesia.webp';
	import ireland from '../assets/chapters/ireland.webp';

	
	const countries = [
	  { key: 'india', name: 'India', path: india, href: 'https://in.superteam.fun/' },
	  { key: 'vietnam', name: 'Vietnam', path: vietnam, href: 'https://vn.superteam.fun/' },
	  { key: 'germany', name: 'Germany', path: germany, href: 'https://de.superteam.fun/' },
	  { key: 'uk', name: 'UK', path: uk, href: 'https://uk.superteam.fun/' },
	  { key: 'uae', name: 'UAE', path: uae, href: 'https://uae.superteam.fun/' },
	  { key: 'nigeria', name: 'Nigeria', path: nigeria, href: 'https://ng.superteam.fun/' },
	  { key: 'balkan', name: 'Balkan', path: balkan, href: 'https://blkn.superteam.fun/' },
	  { key: 'malaysia', name: 'Malaysia', path: malaysia, href: 'https://my.superteam.fun/' },
	  { key: 'france', name: 'France', path: france, href: 'https://fr.superteam.fun/' },
	  { key: 'japan', name: 'Japan', path: japan, href: 'https://jp.superteam.fun/' },
	  { key: 'singapore', name: 'Singapore', path: singapore, href: 'https://sg.superteam.fun/' },
	  { key: 'canada', name: 'Canada', path: canada, href: 'https://ca.superteam.fun/' },
	  { key: 'poland', name: 'Poland', path: poland, href: 'https://pl.superteam.fun/' },
	  { key: 'korea', name: 'Korea', path: korea, href: 'https://kr.superteam.fun/' },
	  { key: 'indonesia', name: 'Indonesia', path: indonesia, href: 'https://id.superteam.fun/' },
	  { key: 'ireland', name: 'Ireland', path: ireland, href: 'https://x.com/superteamIE' }
	];
  
	const showAllPartners = writable(false);
	const firstPart = 12;
	
	function loadMorePrograms() {
	  showAllPartners.set(true);
	}
	
	$: displayedCountries = $showAllPartners ? countries : countries.slice(0, firstPart);
	$: remainingCountries = countries.slice(firstPart);
  </script>
  
  <div class="col-span-5">
	<h2 class="partners-text section-heading font-secondary text-center font-bold text-white mb-10 text-[24px] md:text-[32px] lg:leading-[26px] leading-[22px]">
	  Find Your Nearest Superteam
	</h2>
	
	<div class="col-span-5 mt-10]">
	  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16">
		{#each displayedCountries as country}
		  <a href={country.href} target="_blank" class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-black max-w-[450px] mx-auto">
			<img src={country.path} alt={country.name} class="w-full h-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105" />
			<h3 class="absolute bottom-6 left-6 text-white text-2xl font-bold font-secondary">{country.name}</h3>
		  </a>
		{/each}
	  </div>
	  
	  {#if remainingCountries.length > 0 && !$showAllPartners}
		<div class="flex justify-center mt-8">
		  <button class="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200" on:click={loadMorePrograms}>
			Load More
		  </button>
		</div>
	  {/if}
	</div>
  </div>
  
  <style>
	img {
	  width: 100%;
	  height: 100%;
	}
  </style>
