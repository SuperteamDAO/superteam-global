import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export * from "gsap";
export { ScrollTrigger };
