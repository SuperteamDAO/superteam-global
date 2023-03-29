import { gsap } from "gsap";
import { writable } from "svelte/store";
import { adjust, clamp, round } from "./math";

const settings = {
    max: 25,
    perspective: 1500,
    scale: 1,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

interface NodeType extends HTMLDivElement {
    transitionTimeoutId?: any;
}

export const tilt = (node: NodeType) => {
    const active = writable(false);
    let request: any = null;
    const mouse = { x: 0, y: 0 };
    
    const setTransition = () => {
        clearTimeout(node?.transitionTimeoutId);
        node.style.transition = "";
        node.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
        node.transitionTimeoutId = setTimeout(() => {
            node.style.transition = "";
        }, settings.speed);
    }

    const handleMouseEnter = () => {
        active.set(true);
        setTransition();
    };

    const update = () => {
        console.log("update")
        active.subscribe((value) => {
            if (value) {
                const cardWidth = node.offsetWidth;
                const cardHeight = node.offsetHeight;

                const absolute = {
                    x: mouse.x - node.offsetLeft,
                    y: mouse.y - node.offsetTop,
                };

                const percent = {
                    x: clamp(round(100 / cardWidth) * absolute.x),
                    y: clamp(round(100 / cardHeight) * absolute.y),
                }

                const center = {
                    x: percent.x - 50,
                    y: percent.y - 50,
                }

                node.style.setProperty("--backgroundX",  `${adjust(percent.x, 0, 100, 37, 63)}px`);
                node.style.setProperty("--backgroundY",  `${adjust(percent.y, 0, 100, 33, 67)}px`);
                node.style.setProperty("--rotateX", `${round(-(center.x / 3.5))}deg`)
                node.style.setProperty("--rotateY", `${round(center.y / 2)}deg`)
                node.style.setProperty("--mouseX", `${round(percent.x)}%`);
                node.style.setProperty("--mouseY", `${round(percent.y)}%`);
                node.style.setProperty("--mouse-from-left", `${percent.x / 100}`);
                node.style.setProperty("--mouse-from-top", `${percent.y / 100}`);
                node.style.setProperty("--mouse-from-center", `${clamp(
                    Math.sqrt(
                        Math.pow(percent.x - 50, 2) + Math.pow(percent.y - 50, 2)
                    ) / 50, 0, 1)}`);
                node.style.setProperty("--opacity", `1`);
            }
        })
    }
    const handleMouseMove = (e: MouseEvent) => {
        if (e instanceof MouseEvent) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
        cancelAnimationFrame(request);
		request = requestAnimationFrame(update);	
    }

    
    const handleMouseLeave = () => {
        node.style.setProperty("--backgroundX",  `50%`);
        node.style.setProperty("--backgroundY",  `50%`);
        node.style.setProperty("--rotateX", `0deg`)
        node.style.setProperty("--rotateY", `0deg`)
        node.style.setProperty("--mouseX", `50%`);
        node.style.setProperty("--mouseY", `50%`);
        node.style.setProperty("--mouse-from-left", `0.5`);
        node.style.setProperty("--mouse-from-top", `0.5`);
        node.style.setProperty("--mouse-from-center", `0`);
        node.style.setProperty("--opacity", `0`);

        active.set(false);
        setTransition();
    };

    const handleBlur = () => {
        handleMouseLeave();
    }
    
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);
    node.addEventListener("blur", handleBlur);

    return {
        destroy() {
            node.removeEventListener("mouseenter", handleMouseEnter);
            node.removeEventListener("mousemove", handleMouseMove);
            node.removeEventListener("mouseleave", handleMouseLeave);
            node.removeEventListener("blur", handleBlur);
        },
    };  
}