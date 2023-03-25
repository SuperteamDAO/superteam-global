import { writable } from "svelte/store";

const settings = {
    max: 25,
    perspective: 1000,
    scale: 1.15,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

interface NodeType extends HTMLDivElement {
    transitionTimeoutId?: any;
}

export const tilt = (node: NodeType) => {
    const active = writable(false);
    
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

    const handleMouseMove = (e: MouseEvent) => {
        active.subscribe((value) => {
            if (value) {
                const cardWidth = node.offsetWidth;
                const cardHeight = node.offsetHeight;
                const centerX = node.offsetLeft + cardWidth / 2;
                const centerY = node.offsetTop + cardHeight / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                const rotateXUncapped = (settings.max * mouseY / (cardHeight  / 2));
                const rotateYUncapped = (-1 * settings.max * mouseX / (cardWidth / 2));

                const rotateX = 
                    rotateXUncapped < -settings.max ? -settings.max : 
                    (rotateXUncapped > settings.max ? settings.max : rotateXUncapped);
                const rotateY =
                    rotateYUncapped < -settings.max ? -settings.max :
                    (rotateYUncapped > settings.max ? settings.max : rotateYUncapped);

                node.style.setProperty("--mouseX", `${mouseX}px`);
                node.style.setProperty("--mouseY", `${mouseY}px`);
                node.style.setProperty("--perspective", `${settings.perspective}px`);
                node.style.setProperty("--rotateX", `${rotateX}deg`);
                node.style.setProperty("--rotateY", `${rotateY}deg`);
                node.style.setProperty("--scale", `${settings.scale}`);
            }
        })
    }
    
    const handleMouseLeave = () => {
        node.style.setProperty("--perspective", `1000px`);
        node.style.setProperty("--rotateX", `0deg`);
        node.style.setProperty("--rotateY", `0deg`);
        node.style.setProperty("--scale", `1`);
        
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