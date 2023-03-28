<script>
	import NamedLogo from "./NamedLogo.svelte";
	import PrimaryButton from "./PrimaryButton.svelte";

</script>

<header class="w-full col-span-5 flex items-center justify-between mt-8 h-10">
    <NamedLogo />
    <div class="flex gap-6 items-center">
        <a href="/projects" class="text-white font-secondary font-bold text-[14px]">Projects</a>
        <PrimaryButton>
            Collab with use
        </PrimaryButton>
    </div>
</header>