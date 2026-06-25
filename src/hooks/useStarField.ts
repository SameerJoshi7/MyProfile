import { useEffect } from 'react';

export function useStarField() {
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        star.style.setProperty('--delay', (Math.random() * 4) + 's');
        star.style.opacity = (Math.random() * 0.5).toString();
        if (Math.random() > 0.7) {
          star.style.width = '3px';
          star.style.height = '3px';
        }
        starsContainer.appendChild(star);
      }
    }
  }, []);
}
