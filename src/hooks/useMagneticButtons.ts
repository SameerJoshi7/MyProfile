import { useEffect } from 'react';

export function useMagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.hero-cta .btn');

    const handleMouseMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transform = `translate(0px, 0px)`;
    };

    buttons.forEach(btn => {
      (btn as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      btn.addEventListener('mousemove', handleMouseMove as EventListener);
      btn.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('mousemove', handleMouseMove as EventListener);
        btn.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, []);
}
