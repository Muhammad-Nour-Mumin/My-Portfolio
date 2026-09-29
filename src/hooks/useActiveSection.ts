"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks which section is currently most relevant in the viewport using
 * IntersectionObserver, so the navigation can highlight the active link
 * without relying on scroll-position math.
 *
 * IntersectionObserver callbacks only include entries whose threshold
 * crossed *since the last callback* — not the full current state of every
 * observed element. A naive implementation that only looks at the current
 * callback's entries can end up with an empty "visible" list (e.g. when a
 * section's "leaving" entry arrives in its own batch) and skip updating the
 * active section entirely. To avoid that, we keep a persistent map of the
 * latest entry for every observed section and always recompute from the
 * full map, not just the latest batch.
 */
export function useActiveSection(ids: string[], defaultId: string = ids[0]) {
  const [activeId, setActiveId] = useState(defaultId);
  const entriesRef = useRef(new Map<string, IntersectionObserverEntry>());

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const entriesMap = entriesRef.current;
    entriesMap.clear();
    const lastId = ids[ids.length - 1];

    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          entriesMap.set(entry.target.id, entry);
        });

        const visible = Array.from(entriesMap.values()).filter((entry) => entry.isIntersecting);

        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      {
        // Biases toward the section occupying the upper-middle band of the
        // viewport, which feels most natural for scrollspy navigation.
        rootMargin: "-15% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Edge case: when the last section is short, the page may run out of
    // room to scroll before that section reaches the observer's "active
    // band", so the intersection math above can keep the *previous*
    // section highlighted even though the user is scrolled all the way to
    // the bottom of the page. Explicitly force the last nav item active
    // once the user hits the bottom of the document.
    function handleScroll() {
      // A small tolerance (rather than an exact pixel match) absorbs the
      // few-pixel gap that can appear between the browser's scroll-margin
      // based scroll-into-view landing spot and the mathematically exact
      // maximum scrollY, so clicking the last nav link reliably marks it
      // active even if it doesn't land at the literal last pixel.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (scrolledToBottom) {
        setActiveId(lastId);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      entriesMap.clear();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids]);

  return activeId;
}
