<script>
	import clsx from 'clsx';
	export let href;
</script>

<a
	{href}
	{...$$props}
	class={clsx(
		'primary-cta px-6 py-3 text-[#222327] font-secondary font-bold text-[14px] leading-[15px] h-fit rounded-2xl',
		$$props.class
	)}
>
	<slot />
</a>

<style>
	.primary-cta:hover {
		box-shadow: 0px -4px 27px rgba(200, 108, 59, 0), 0px 4px 12px rgba(57, 22, 149, 0);
		transition: box-shadow 0.25s ease-out;	
	}
	.primary-cta:hover {
		box-shadow: 0px -4px 27px rgba(200, 108, 59, 0.68), 0px 4px 12px rgba(57, 22, 149, 1);
	}
</style>
