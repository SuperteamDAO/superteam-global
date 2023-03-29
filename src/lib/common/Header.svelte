<script>
	import NamedLogo from "./NamedLogo.svelte";
	import PrimaryButton from "./PrimaryButton.svelte";
    import { gsap } from "gsap";
	import { onMount } from "svelte";


    onMount(() => {
        gsap.fromTo(
            "header",
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
        );
    });
</script>

<header class="w-full col-span-5 flex items-center justify-between mt-8">
    <NamedLogo />
    <div class="hidden md:flex gap-6 items-center">
        <a href="/projects" class="text-white font-secondary font-bold text-[14px]">Projects</a>
        <PrimaryButton>
            Collab with us
        </PrimaryButton>
    </div>
</header>