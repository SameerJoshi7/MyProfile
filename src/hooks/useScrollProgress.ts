import { useEffect } from 'react';

export function useScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

      document.documentElement.style.setProperty('--scroll-progress', scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
