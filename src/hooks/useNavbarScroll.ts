import { useEffect } from 'react';

export function useNavbarScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        nav.style.background = window.scrollY > 50 ? 'rgba(7, 7, 15, 0.95)' : 'rgba(7, 7, 15, 0.6)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
