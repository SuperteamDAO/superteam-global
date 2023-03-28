<script>
	import AnimatedLogo from "./common/AnimatedLogo.svelte";
	import PrimaryButton from "./common/PrimaryButton.svelte";
    import { time } from "../utils/gsap";
    

</script>
<section class="col-span-5 h-[calc(100vh-40px-32px)] flex flex-col justify-center items-center">
    <AnimatedLogo />
    <h1 class="heading text-[48px] leading-[1.005] tracking-[-4%] font-semibold font-secondary text-white mt-12 text-center">
        <span>
            your portal to the
        </span>
        <br>
        <span>
            world of solana
        </span>
    </h1>
    <p class="text-white font-primary text-[20px] leading-[1.35] tracking-[-4%] text-center mt-8">
        superteam is the forefront community for web3, 
        <br>
        powered by solana.
    </p>
    <PrimaryButton class="mt-8">
        Know more
    </PrimaryButton>
</section>