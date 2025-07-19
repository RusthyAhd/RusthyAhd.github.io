import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rippleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState('default');

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    let ringX = 0;
    let ringY = 0;

    const animate = () => {
      ringX += (mousePos.x - ringX) / 6;
      ringY += (mousePos.y - ringY) / 6;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 15}px, ${ringY - 15}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [mousePos]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-cursor]');

    const handleEnter = (e) => setHoverType(e.target.getAttribute('data-cursor') || 'default');
    const handleLeave = () => setHoverType('default');

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  // Ripple on click with shadow animation
  useEffect(() => {
    const onClick = (e) => {
      if (!rippleRef.current) return;

      const ripple = rippleRef.current;
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.classList.remove('animate-ripple');
      void ripple.offsetWidth; // trigger reflow
      ripple.classList.add('animate-ripple');
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Shadow color based on hoverType
  const getShadowColor = () => {
    switch (hoverType) {
      case 'link':
        return 'rgba(250, 204, 21, 0.6)';
      case 'project':
        return 'rgba(34, 197, 94, 0.5)';
      default:
        return 'rgba(59, 130, 246, 0.6)';
    }
  };

  return (
    <>
      {/* Central dot */}
      <div
        ref={dotRef}
        className="fixed z-[9999] w-2 h-2 bg-blue-500 rounded-full pointer-events-none"
        style={{ translate: '-50% -50%' }}
      />

      {/* Glowing ring */}
      <div
        ref={ringRef}
        className={`fixed z-[9998] border-2 rounded-full pointer-events-none transition-all duration-200
          ${hoverType === 'link' ? 'w-12 h-12 border-yellow-400' :
            hoverType === 'project' ? 'w-14 h-14 border-green-400' :
            'w-10 h-10 border-blue-500'}
        `}
        style={{
          translate: '-50% -50%',
          boxShadow: `0 0 35px ${getShadowColor()}`,
          opacity: 0.8,
        }}
      />

      {/* Ripple as big shadow */}
      <div
        ref={rippleRef}
        className="fixed pointer-events-none w-12 h-12 rounded-full opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          zIndex: 9997,
          backgroundColor: getShadowColor(),
          filter: `blur(20px)`,
          opacity: 0,
        }}
      />

      {/* Ripple animation */}
      <style>{`
        @keyframes rippleAnim {
          0% {
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0.6;
            filter: blur(15px);
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
            filter: blur(40px);
          }
        }
        .animate-ripple {
          animation: rippleAnim 0.6s ease-out forwards;
          opacity: 0.6 !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
