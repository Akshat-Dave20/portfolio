import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    // Set styling via JS or add to index.css. We use inline setup for isolation.
    gsap.set(follower, { css: { left: 0, top: 0, position: 'fixed', width: '40px', height: '40px', border: '1px solid var(--accent-neon-blue)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999 } });

    const onMouseMove = (e) => {
      gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.1 });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div ref={followerRef} className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;
