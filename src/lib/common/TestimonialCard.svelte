<script>
	export let imgurl;
	export let content;
	export let name;
	export let username;
	export let twturl;
</script>

<a href={twturl} class="cursor-pointer" target="_blank">
	<div class="test-container h-fit flex flex-col items-start py-7 px-6 rounded-[5px]">
		<div class="content text-white lg:text-[18px] md:text-[16px] text-[14px]">
			<p>
				{content}
			</p>
		</div>
		<div class="flex flex-row mt-[40px]">
			<div class="image w-[40px] h-[40px] mr-[24px]">
				<img src={imgurl} alt="" class="rounded-full" />
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
	.content {
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		letter-spacing: -0.04em;
	}
	.user {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		letter-spacing: -0.04em;
	}
</style>
