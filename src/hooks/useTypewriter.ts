import { useEffect } from 'react';

export function useTypewriter() {
  useEffect(() => {
    const words = ['Next.js & React Apps 💻', 'Node.js APIs 🛠️', 'Full-Stack Magic ✨', 'Scalable Systems 🚀', 'Clean UIs 🎨'];
    let wordIdx = 0, charIdx = 0, isDeleting = false;
    const tyEl = document.getElementById('typewriterText');
    let typeTimeout: number;

    const type = () => {
      const current = words[wordIdx];
      if (tyEl) {
        if (isDeleting) {
          tyEl.textContent = current.substring(0, charIdx--);
          if (charIdx < 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            typeTimeout = window.setTimeout(type, 500);
            return;
          }
        } else {
          tyEl.textContent = current.substring(0, ++charIdx);
          if (charIdx === current.length) {
            isDeleting = true;
            typeTimeout = window.setTimeout(type, 1800);
            return;
          }
        }
      }
      typeTimeout = window.setTimeout(type, isDeleting ? 60 : 100);
    };
    type();

    return () => {
      clearTimeout(typeTimeout);
    };
  }, []);
}
