<script lang="ts">
	import '../styles/reset.css';
	import '../styles/fonts.css';
	import '../styles/global.css';
	import '../utils/gsap';

	import Header from '$lib/common/Header.svelte';
	import Footer from '$lib/common/Footer.svelte';
	import Analytics from '$lib/common/Analytics.svelte';

	import { disableScrollHandling } from '$app/navigation';
	import { onMount } from 'svelte';
	import og_pic from '../assets/images/og_pic.png';

	onMount(async () => {
		disableScrollHandling();
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<link rel="preconnect" href="https://abs.twimg.com/" />
	<link rel="preconnect" href="https://api.twitter.com/" />
	<link rel="preconnect" href="https://pbs.twimg.com/" />
	<link rel="preconnect" href="https://t.co/" />
	<link rel="preconnect" href="https://video.twimg.com/" />
	<link rel="dns-prefetch" href="https://abs.twimg.com/" />
	<link rel="dns-prefetch" href="https://api.twitter.com/" />
	<link rel="dns-prefetch" href="https://pbs.twimg.com/" />
	<link rel="dns-prefetch" href="https://t.co/" />
	<link rel="dns-prefetch" href="https://video.twimg.com/" />

	<link rel="preconnect" href="https://res.cloudinary.com/" />
	<link rel="dns-prefetch" href="https://res.cloudinary.com/" />
	<meta name="keywords" content="crypto, technology, india, earn, build" />
	<meta name="copyright" content="Superteam" />
	<meta name="reply-to" content="hello@superteam.fun" />
	<meta name="url" content="http://superteam.fun" />
	<meta name="identifier-URL" content="http://superteam.fun" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta
		name="description"
		content="Superteam is a community of the best talent learning, earning and building in crypto."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="news_keywords" content="crypto" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@SuperteamDAO" />

	<meta name="twitter:title" content="Welcome to Superteam" />
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/dgvnuwspr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689167718/Global%20Dashboard/3EB05A88C23EF39E104FDE_7C0_uicwxz.jpg?_s=public-apps"
	/>
	<meta
		name="og:image:secure_url"
		content="https://res.cloudinary.com/dgvnuwspr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689167718/Global%20Dashboard/3EB05A88C23EF39E104FDE_7C0_uicwxz.jpg?_s=public-apps"
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dgvnuwspr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689167718/Global%20Dashboard/3EB05A88C23EF39E104FDE_7C0_uicwxz.jpg?_s=public-apps"
	/>
	<meta
		name="og:image"
		content="https://res.cloudinary.com/dgvnuwspr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689167718/Global%20Dashboard/3EB05A88C23EF39E104FDE_7C0_uicwxz.jpg?_s=public-apps"
	/>
	<meta name="og:site_name" content="Superteam" />
	<meta name="og:title" content="Welcome to Superteam" />
	<meta name="og:type" content="community" />
	<meta name="og:url" content="https://superteam.fun" />
	<meta name="application-name" content="superteam" />
	<meta name="og:email" content="hello@superteam.fun" />
	<meta
		name="og:description"
		content="Superteam is a community of the best talent learning, earning and building in crypto."
	/>
	<!-- <meta
		name="twitter:image"
		content="https://pbs.twimg.com/profile_images/1505359960942657539/sMjuxRcg_400x400.jpg"
	/> -->
</svelte:head>

<Analytics />

<!-- <Scene size={{ width: width, height: height }} /> -->

<!-- {#if $loading.status === 'LOADING' || $loading.status === 'NAVIGATING'}
	<div>
		Loading...
	</div>
{:else} -->
<Header class="mx-auto px-10 md:px-[72px]" />

<div class="relative h-full grid grid-cols-5 gap-5 px-10 md:px-[72px] mx-auto">
	<slot />
	<Footer />
</div>

<!-- {/if} -->

<style>
	:global(.scrollbar-track) {
		background-color: transparent !important;
	}
</style>
