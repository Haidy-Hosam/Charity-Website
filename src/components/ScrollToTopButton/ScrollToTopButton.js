import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      // Check both window.pageYOffset and document.documentElement.scrollTop
      // to handle scrolling on window or html/body element
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrollPosition > 200);
    };

    // Listen to scroll on window
    window.addEventListener("scroll", toggleVisible);
    
    // Also listen on document element (for html/body scrolling)
    document.addEventListener("scroll", toggleVisible);

    // Initial check in case page starts scrolled
    toggleVisible();

    return () => {
      window.removeEventListener("scroll", toggleVisible);
      document.removeEventListener("scroll", toggleVisible);
    };
  }, []);

const scrollToTop = () => {
  const duration = 800; // كل ما تكبري الرقم يبقى أبطأ وأنعم
  const start = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease function (بيخليها تطلع تدريجي مش فجأة)
    const easeOut = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - easeOut));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};


  return (
  <button
    className={`scrollTopBtn ${visible ? "show" : ""}`}
    onClick={scrollToTop}
    title="Scroll to top"
    aria-label="Scroll to top"
  >
    ↑
  </button>
);

}