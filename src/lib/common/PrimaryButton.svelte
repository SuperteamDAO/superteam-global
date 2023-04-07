<script>
	import clsx from 'clsx';
	export let href;
</script>

<a
	{href}
	{...$$props}
	class={clsx(
		'px-6 py-3 bg-white text-[#222327] font-secondary font-bold text-[14px] leading-[15px] h-fit rounded-2xl',
		$$props.class
	)}
>
	<slot />
</a>
