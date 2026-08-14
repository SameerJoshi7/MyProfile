import { useEffect } from 'react';

export function useNavbarScroll() {
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        nav.style.background = window.scrollY > 50 ? 'rgba(7, 7, 15, 0.95)' : 'rgba(7, 7, 15, 0.6)';
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
