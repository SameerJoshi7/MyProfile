import { useEffect } from 'react';

export function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animFrame: number;
    const render = () => {
      // Ring follows smoothly with easing
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (dot) {
        // Dot tracks mouse instantly on the GPU
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ring) {
        // Ring trails slightly behind on the GPU
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      
      animFrame = requestAnimationFrame(render);
    };
    render();

    const interactiveElements = document.querySelectorAll('a, button, .skill-chip, .stat-card, .award-card, .exp-card, .project-card');
    const addHoverClass = () => ring?.classList.add('hover');
    const removeHoverClass = () => ring?.classList.remove('hover');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);
}
