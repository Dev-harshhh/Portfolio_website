'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  infinite: false,
});


    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;