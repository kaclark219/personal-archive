import { useRef, type ReactNode } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./HorizontalScroll.scss";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HorizontalScrollProps = {
    children: ReactNode;
};

function HorizontalScroll({ children }: HorizontalScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const getScrollAmount = () => {
            return track.scrollWidth - window.innerWidth;
        };

        gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",

            scrollTrigger: {
            trigger: container,

            start: "top top",

            end: () => `+=${getScrollAmount()}`,

            pin: true,

            scrub: 1,

            invalidateOnRefresh: true,

            // Uncomment while debugging:
            // markers: true,
            },
        });
        },
        {
        scope: containerRef,
        },
    );

    return (
        <div ref={containerRef} className="horizontal-scroll">
        <div ref={trackRef} className="horizontal-scroll__track">
            {children}
        </div>
        </div>
    );
}

export default HorizontalScroll;