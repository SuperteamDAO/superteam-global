<script>
	import clsx from "clsx";
    import placeholder from '../../assets/cards/instagrants.jpg'
	import PrimaryButton from "$lib/common/PrimaryButton.svelte";

    export let name;
    export let tagline;
    export let projectLink;
    export let imgUrl;

</script>
<div class={
    clsx(
        "project-card relative h-[400px] w-[320px] rounded-lg",
        $$props.class
    )}
>
    <img src={imgUrl} class="rounded-lg h-full bg-cover" alt="">
    <div class="absolute w-full h-full top-0 left-0 px-8 py-6 flex flex-col justify-between">
        <div>
            <p class="text-on-image text-left font-secondary text-white text-[24px] tracking-[-0.04em]">
                {name}
            </p>
            <p class="whitespace-pre-wrap font-primary font-bold text-white text-[18px] mt-6">
                {tagline}
            </p>
        </div>
        <PrimaryButton href={projectLink} target="_blank" class="w-full text-center">
            Visit
        </PrimaryButton>
    </div>
</div>
