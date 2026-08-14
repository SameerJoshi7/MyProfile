import { useEffect } from 'react';

export function useScrollProgress() {
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollPx = window.scrollY;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

      document.documentElement.style.setProperty('--scroll-progress', scrolled);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update(); // Init

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
