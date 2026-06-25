import { useEffect } from 'react';

export function use3DTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card, .exp-card');

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.4s ease-out'; // Restore transition on leave
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transition = 'transform 0.05s linear'; // Fast transition while moving
    };

    cards.forEach(card => {
      (card as HTMLElement).style.transition = 'transform 0.4s ease-out';
      card.addEventListener('mousemove', handleMouseMove as EventListener);
      card.addEventListener('mouseleave', handleMouseLeave as EventListener);
      card.addEventListener('mouseenter', handleMouseEnter as EventListener);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener);
        card.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      });
    };
  }, []);
}
