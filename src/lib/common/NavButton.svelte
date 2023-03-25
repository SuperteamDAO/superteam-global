<script lang="ts">
    export const direction = "left";
</script>

<button 
    {...$$props}
    on:click
    class="h-11 w-11 rounded-full flex items-center justify-center {$$props.class}"
>
    <span>
        <slot />
    </span>
</button>

<style>
    .right {
        position: relative;
        transform-style: preserve-3d;
        background-image: linear-gradient(310.43deg, #6C6F7B -200.14%, #040507 75.56%);
    }
    .right::after {
        content: '';
        position: absolute;
        top: -2px;
        right: -2px;
        left: -2px;
        bottom: -2px;
        border-radius: 25px;
        background-image: linear-gradient(270deg, #C2C2C2 -114.58%, #040507 50%);
        transform: translateZ(-2px);
    }
    .left {
        position: relative;
        transform-style: preserve-3d;
        background-image: linear-gradient(49.57deg, #6C6F7B -200.14%, #040507 75.56%);
    }
    .left::after {
        content: '';
        position: absolute;
        top: -2px;
        right: -2px;
        left: -2px;
        bottom: -2px;
        border-radius: 25px;
        background-image: linear-gradient(90deg, #C2C2C2 -114.58%, #040507 50%);
        transform: translateZ(-2px);
    }

    .left span {
        transform: translateX(-2px);
    }
    .right span {
        transform: translateX(2px);
    }
</style>