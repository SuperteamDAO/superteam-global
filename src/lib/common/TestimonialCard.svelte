<script>
	/**
	 * @type {any}
	 */
	export let imgurl;
	/**
	 * @type {any}
	 */
	export let content;
	/**
	 * @type {any}
	 */
	export let name;
	/**
	 * @type {any}
	 */
	export let username;
</script>

<div class="test-container h-fit flex flex-col items-start py-7 px-6 gap-[41px] rounded-[5px]">
	<div class="content text-white">
		<p>
			{content}
		</p>
	</div>
	<div class="flex flex-row">
		<div class="image w-[40px] h-[40px] mr-[24px]">
			<img src={imgurl} alt="" class="rounded-full" />
		</div>
		<div class="user">
			<div class="name text-white">
				<p>{name}</p>
			</div>
			<div class="username">
				<p>{username}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.test-container {
		width: 289px;

		background: linear-gradient(180deg, #161616 6.99%, rgba(22, 22, 22, 0) 158.45%);
		border: 1px solid rgba(177, 177, 177, 0.2);
		border-radius: 5.00463px;
	}
	.username {
		color: #ffffff;

		opacity: 0.4;
	}
	.content {
		font-family: 'Satoshi-Variable';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.04em;
	}
	.user {
		font-family: 'Archivo_SemiExpanded';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 17px;
		letter-spacing: -0.04em;
	}
</style>
