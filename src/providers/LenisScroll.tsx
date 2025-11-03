"use client";
import { useRef, useEffect, ReactNode } from "react";
import Lenis from "lenis";

const LenisScroll = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        // touchMultiplier: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);

  return children;
};

export default LenisScroll;
