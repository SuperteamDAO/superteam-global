<script>
	import ImageLoader from "$lib/ImageLoader.svelte";

	export let imgurl;
	export let content;
	export let name;
	export let username;
	export let twturl;
</script>

<a href={twturl} class="cursor-pointer" target="_blank">
	<div class="test-container h-fit flex flex-col items-start py-7 px-6 rounded-[5px]">
		<div
			class="font-primary font-medium leading-[-0.04em] text-white lg:text-[18px] md:text-[16px] text-[14px]"
		>
			<p>
				{content}
			</p>
		</div>
		<div class="flex flex-row mt-[40px]">
			<div class="image w-[40px] h-[40px] mr-[24px]">
				<ImageLoader src={imgurl} width={40} height={40} alt="" class="rounded-full" loading="lazy" />
			</div>
			<div class="user">
				<div
					class="name text-white text-[12px] lg:text-[16px] md:text-[15px] lg:leading-[17px] md:leading-[16px] leading-[13px]"
				>
					<p>{name}</p>
				</div>
				<div
					class="username mt-[4px] text-[12px] lg:text-[16px] md:text-[15px] lg:leading-[17px] md:leading-[16px] leading-[13px]"
				>
					<p>{username}</p>
				</div>
			</div>
		</div>
	</div>
</a>

<style>
	.test-container {
		width: 289px;

		background: linear-gradient(180deg, #161616 6.99%, rgba(22, 22, 22, 0) 158.45%);
		border: 1px solid rgba(177, 177, 177, 0.2);
		border-radius: 5px;
	}
	.username {
		color: #ffffff;
		opacity: 0.4;
	}
	.user {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
	}
</style>
