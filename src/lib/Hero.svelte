<script>
	import AnimatedLogo from "./common/AnimatedLogo.svelte";
	import PrimaryButton from "./common/PrimaryButton.svelte";
    import { time } from "../utils/gsap";
	import { onMount } from "svelte";

    onMount(() => {
        time.fromTo(".heading .line span", {
            y: 100,
            opacity: 0,
            stagger: {
                amount: 0.3
            }
        }, {
            y: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power4.out"
        })

        time.fromTo(".sub-heading", {
            y: 0,
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
        }, "-=1")
    })
    

</script>
<section class="hero col-span-5 h-[calc(100vh-40px-32px)] flex flex-col justify-center items-center">
    <AnimatedLogo />
    <h1 class="heading w-[430px] flex flex-col text-[48px] leading-[1.005] tracking-[-4%] font-semibold font-secondary text-white mt-12 text-center">
        <span class="line">
            <span>
                your portal to the
            </span>
        </span>
        <br>
        <span class="line">
            <span>
                world of solana
            </span>
        </span>
    </h1>
    <p class="sub-heading text-white font-primary text-[20px] leading-[1.35] tracking-[-4%] text-center mt-8">
        superteam is the forefront community for web3, 
        <br>
        powered by solana.
    </p>
    <PrimaryButton class="mt-8">
        Know more
    </PrimaryButton>
</section>

<style lang="postcss">
    .heading {
        width: 430px;
    }
    .heading .line {
        @apply block relative overflow-hidden w-full h-12;
    }
    br {
        content: "";
    }
    .heading .line span {
        @apply absolute w-full top-0 left-0;
    }
</style>