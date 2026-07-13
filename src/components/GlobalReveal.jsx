import { useEffect } from "react";

export default function GlobalReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach((el) => {
        if (!el.classList.contains("_observed")) {
          el.classList.add("_observed");
          const rect = el.getBoundingClientRect();
          // If already in or near viewport, reveal immediately with NO transition
          if (rect.top < window.innerHeight + 100) {
            el.style.transition = "none";
            el.classList.add("revealed");
            void el.offsetHeight; // force reflow
            el.style.transition = "";
          } else {
            observer.observe(el);
          }
        }
      });
    };

    observeAll();

    // Watch for dynamically added elements (route changes)
    const ro = new ResizeObserver(() => observeAll());
    ro.observe(document.getElementById("root") || document.body);

    return () => {
      observer.disconnect();
      ro.disconnect();
    };
  }, []);

  return null;
}
