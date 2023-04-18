<script>
	import podcast from '../assets/cards/podcast.webp';
	import blog from '../assets/cards/blog.webp';
</script>

<div class="relative col-span-5 mt-44 flex flex-col justify-center text-center">
	<p
		class="font-bold font-secondary text-[24px] md:text-[32px] lg:leading-[35px] leading-[26px] text-white tracking-normal"
	>
		Media
	</p>
	<div class="flex justify-center">
		<div class="flex flex-col md:flex-row">
			<div class="relative">
				<img width={400} height={400} src={podcast} alt="" />
				<div class="absolute w-full h-full inset-0 flex flex-col justify-end">
					<p class="text-[32px] font-bold text-white mb-[72px]">Podcast</p>
				</div>
			</div>
			<div class="relative">
				<img width={400} height={400} src={blog} alt="" />
				<div class="absolute w-full h-full inset-0 flex flex-col justify-end">
					<p class="text-[32px] font-bold text-white mb-[72px]">Blog</p>
				</div>
			</div>
		</div>
	</div>
</div>
