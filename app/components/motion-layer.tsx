"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionLayer() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(".hero-reveal > *", {
      opacity: 0,
      y: 34,
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 42,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>(".media-reveal").forEach((element) => {
      gsap.fromTo(element, { scale: 0.92, opacity: 0.4 }, {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: element, start: "top 95%", end: "center 65%", scrub: 0.7 },
      });
    });

    const words = gsap.utils.toArray<HTMLElement>(".scrub-word");
    if (words.length) {
      gsap.fromTo(words, { opacity: 0.13 }, {
        opacity: 1,
        stagger: 0.03,
        ease: "none",
        scrollTrigger: { trigger: ".about-statement", start: "top 82%", end: "bottom 45%", scrub: 0.6 },
      });
    }
  });

  return null;
}
