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
			<div class="cursor-pointer">
				<p
					class="img-heading absolute font-secondary font-semibold text-[18px] md:text-[24px] leading-[26px] text-white mt-[24px] ml-[24px]"
				>
					Blog
				</p>
				<img
					src={blog}
					alt=""
					class="img-heading h-[90px] md:h-[150px] w-[295px] md:w-[624px] lg:w-[489px]"
				/>
			</div>
			<div class="cursor-pointer">
				<p
					class="absolute font-secondary font-semibold text-[18px] md:text-[24px] leading-[26px] text-white mt-[24px] ml-[24px]"
				>
					Podcast
				</p>
				<img
					src={podcast}
					alt=""
					class="h-[90px] md:h-[150px] w-[295px] md:w-[624px] lg:w-[489px]"
				/>
			</div>
		</div>
	</div>
</div>
