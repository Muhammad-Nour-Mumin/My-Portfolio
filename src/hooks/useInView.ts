"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean that flips to `true` once the element enters
 * the viewport, then disconnects. Used for subtle scroll-reveal animations.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If the browser doesn't support IntersectionObserver, show content
    // immediately rather than hiding it forever.
    if (typeof IntersectionObserver === "undefined") {
      // Intentional fallback: reveal content immediately when the browser
      // lacks IntersectionObserver support, rather than hiding it forever.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
