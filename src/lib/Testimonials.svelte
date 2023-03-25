<script lang="ts">
    import { _ } from 'svelte-i18n'
	import { tilt } from '../utils/tilt';
	import NavButton from './common/NavButton.svelte';
    import CaretRight from 'phosphor-svelte/lib/CaretRight';
    import CaretLeft from 'phosphor-svelte/lib/CaretLeft';

    let scrollArea: HTMLElement;

    const left = () => {
        console.log('left')
    }

    const right = () => {
        console.log('right')
    }

</script>

<div class="w-full flex flex-col items-stretch">
    <div class="flex flex-col items-center">
        <h2 class="text-center text-white font-bold font-secondary text-[32px]">
            {$_('page.home.testimonials.title')}
        </h2>
        <h3 class="w-[154px] text-white opacity-70 text-center">
            {$_('page.home.testimonials.subtitle')}
        </h3>
    </div>
    <div class="flex items-center justify-between">
        <NavButton class="left" on:click={left}>
            <CaretLeft size={24} color="#fff" />
        </NavButton>
        <NavButton class="right" on:click={right} >
            <CaretRight size={24} color="#fff" />
        </NavButton>
    </div>
    <div class='w-full grid grid-rows-1 grid-cols-1 scrollbar-hidden'>
        <div bind:this={scrollArea} class='relative w-full max-w-full overflow-x-auto block scrollbar-hidden'>
            <div class="absolute h-full w-10 left-0 top-14 fade-right" />
            <div class="flex gap-8 w-full mt-16">
                {#each $_('page.home.testimonials.data') as testimonial}
                        <div class="testimonial p-6 rounded-[5px] min-w-[287px] h-fit flex flex-col gap-10" use:tilt>
                            <p class="text-white text-[18px] font-primary leading-[1.35]">
                                {testimonial.text}
                            </p>
                            <div class="flex gap-6">
                                <div class="rounded-full bg-amber-100 w-10 h-10">

                                </div>
                                <div>
                                    <p class="text-white text-[14px] font-secondary">
                                        {testimonial.author}
                                    </p>
                                    <p class="text-white text-[14px] font-secondary opacity-40">
                                        {testimonial.author_handle}
                                    </p>
                                </div>
                            </div>
                        </div>
                {/each}
            </div>
            <div class="absolute h-full w-10 right-0 top-14" />
        </div>
    </div>
</div>


<style>
    .testimonial {
        position: relative;
        background: linear-gradient(180deg, rgb(22, 22, 22, 0.5) 6.99%, rgba(22, 22, 22, 0) 158.45%);
        border: 1px solid #B1B1B133;      
    }
    .fade-right {
        background-image: linear-gradient(to right, rgb(22, 22, 22, 0.5) 6.99%, rgba(22, 22, 22, 0) 158.45%);
    }
</style>


