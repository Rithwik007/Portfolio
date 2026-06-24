'use client';

import { useEffect, useState } from 'react';

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(animateRing);
    };
    animateRing();
  }, [mousePosition]);

  if (!visible) return null;

  return (
    <>
      <div
        id="cursor-dot"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: clicking ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%)',
          transition: clicking ? 'transform 0.1s ease' : 'none',
        }}
        aria-hidden="true"
      />
      <div
        id="cursor-ring"
        style={{
          left: ringPosition.x,
          top: ringPosition.y,
          transform: clicking ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        #cursor-ring.clicking::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #60a5fa;
          animation: pulse-ring 0.4s ease-out;
        }
      `}</style>
    </>
  );
}