<script>
	import podcast from '../assets/cards/podcast_new.webp';
	import blog from '../assets/cards/blog_new.webp';
</script>

<div class="relative col-span-5 mt-[224px] flex flex-col justify-center text-center">
	<p
		class="section-heading font-bold font-secondary text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] text-white tracking-normal"
	>
		Media
	</p>
	<div class="flex justify-center">
		<div
			class="flex flex-col lg:flex-row w-full lg:justify-center items-center gap-[32px] mt-[64px]"
		>
			<div class="img-container z-[1] rounded-md">
				<div class="cursor-pointer p-[1px]">
					<p
						class="img-heading absolute font-secondary font-semibold text-[18px] md:text-[24px] leading-[26px] text-white mt-[24px] ml-[24px]"
					>
						Blog
					</p>
					<img
						src={blog}
						alt=""
						loading="lazy"
						class="img-heading h-[90px] md:h-[150px] w-[295px] md:w-[624px] lg:w-[489px]"
					/>
				</div>
			</div>
			<div class="img-container z-[1] rounded-md">
				<div class="cursor-pointer">
					<p
						class="absolute font-secondary font-semibold text-[18px] md:text-[24px] leading-[26px] text-white mt-[24px] ml-[24px]"
					>
						Podcast
					</p>
					<img
						src={podcast}
						alt=""
						loading="lazy"
						class="h-[90px] md:h-[150px] w-[295px] md:w-[624px] lg:w-[489px]"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.img-container {
		position: relative;
		background: #202020;
		padding: 1px;
		transition: background 0.5s ease;
		transition: border 400ms;
	}
	.img-container::after {
		content: '';
		z-index: -1;
		@apply absolute rounded-lg;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: linear-gradient(144.34deg, #f7f3f3 -29.96%, rgba(63, 63, 63, 0.67) 131.56%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.img-container:hover::after {
		opacity: 1;
	}
</style>
