import { writable } from "svelte/store";

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
                const mouseFromLeft = (e.clientX - centerX) / node.offsetWidth + 0.5;
                const mouseFromTop = (e.clientY - centerY) / node.offsetHeight + 0.5;
                const mouseX = mouseFromLeft * 100;
                const mouseY = mouseFromTop * 100;

                const rotateXUncapped = (settings.max * mouseY / (cardHeight  / 2));
                const rotateYUncapped = (-1 * settings.max * mouseX / (cardWidth / 2));

                const rotateX = rotateXUncapped < -settings.max ? -settings.max : (rotateXUncapped > settings.max ? settings.max : rotateXUncapped);
                const rotateY = rotateYUncapped < -settings.max ? -settings.max : (rotateYUncapped > settings.max ? settings.max : rotateYUncapped);

                node.style.setProperty("--mouseX", `${mouseX}%`);
                node.style.setProperty("--mouseY", `${mouseY}%`);
                node.style.setProperty("--perspective", `${settings.perspective}px`);
                node.style.setProperty("--rotateX", `${rotateX}deg`);
                node.style.setProperty("--rotateY", `${rotateY}deg`);
                node.style.setProperty("--scale", `${settings.scale}`);
                node.style.setProperty("--mouse-from-left", `${mouseFromLeft}`);
                node.style.setProperty("--mouse-from-top", `${mouseFromTop}`);
                node.style.setProperty("--mouse-from-center", `${Math.sqrt(mouseFromLeft * mouseFromLeft + mouseFromTop * mouseFromTop)}%`);
                node.style.setProperty("--opacity", "1")
            }
        })
    }
    
    const handleMouseLeave = () => {
        node.style.setProperty("--opacity", "0");
        node.style.setProperty("--mouse-from-left", `0.5`);
        node.style.setProperty("--mouse-from-top", `0.5`);
        node.style.setProperty("--mouse-from-center", `0`); // XXX: this is not correct
        node.style.setProperty("--mouseX", `50%`);
        node.style.setProperty("--mouseY", `50%`);
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