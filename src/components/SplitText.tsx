import "../styles/Skills.css";

import { useRef, useEffect, useState } from "react";
import type { ElementType } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  tag?: ElementType;
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag: Tag = "p",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !fontsLoaded) return;

      const items = ref.current.querySelectorAll(".split-item");
      if (!items.length) return;

      const startPct = (1 - threshold) * 100;

      gsap.fromTo(
        items,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start: `top ${startPct}%`,
            once: true,
          },
          onComplete: onLetterAnimationComplete,
        }
      );
    },
    { dependencies: [text, fontsLoaded], scope: ref }
  );

  const renderContent = () =>
    splitType === "words"
      ? text.split(" ").map((word, i) => (
          <span key={i} className="split-item inline-block mr-[0.25em]">
            {word}
          </span>
        ))
      : text.split("").map((char, i) => (
          <span key={i} className="split-item inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ));

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, display: "inline-block" }}
    >
      {renderContent()}
    </Tag>
  );
}
