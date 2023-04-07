<script>
	import NamedLogo from "./NamedLogo.svelte";
	import PrimaryButton from "./PrimaryButton.svelte";
	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
    import { expoOut } from "svelte/easing";
	import clsx from "clsx";

    const pos = tweened(-100, { duration: 1800, easing: expoOut });
    
    onMount(() => {
        pos.set(0);
    });
</script>

<header class={
    clsx(
        "w-full col-span-5 flex items-center justify-between mt-8",
        $$props.class
    )
}  style="transform: translateY({$pos}px);">
    <a href="/">
        <NamedLogo />
    </a>
    <div class="hidden md:flex gap-6 items-center">
        <a href="/projects" class="text-white font-secondary font-bold text-[14px]">Projects</a>
        <PrimaryButton>
            Collab with us
        </PrimaryButton>
    </div>
</header>