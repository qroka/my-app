'use client';

import { useEffect, useRef } from 'react';

function isIosSafari(): boolean {
  if (typeof window === 'undefined') return false;
  const userAgent = window.navigator.userAgent;
  const platform = (window.navigator as any).platform || '';
  const isTouchMac = /Mac/.test(platform) && 'ontouchend' in window;
  const isIOSDevice = /(iPad|iPhone|iPod)/.test(userAgent) || /(iPad|iPhone|iPod)/.test(platform);
  return isIOSDevice || isTouchMac;
}

/**
 * Locks body scroll cross-browser with special handling for iOS Safari.
 * Pass `locked=true` to lock; when it turns false the scroll is restored.
 */
export function useBodyScrollLock(locked: boolean): void {
  const scrollTopRef = useRef<number>(0);
  const prevTopRef = useRef<string>('');
  const prevPositionRef = useRef<string>('');
  const prevWidthRef = useRef<string>('');
  const prevOverflowRef = useRef<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const body = document.body as HTMLBodyElement;

    if (!locked) {
      return;
    }

    scrollTopRef.current = window.scrollY || window.pageYOffset || 0;
    prevTopRef.current = body.style.top;
    prevPositionRef.current = body.style.position;
    prevWidthRef.current = body.style.width;
    prevOverflowRef.current = body.style.overflow;

    const ios = isIosSafari();

    let removeTouchMove: (() => void) | null = null;

    // Apply styles to lock body
    body.style.position = 'fixed';
    body.style.top = `-${scrollTopRef.current}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    if (ios) {
      // On iOS, fixed body plus preventing touchmove provides reliable lock
      const onTouchMove = (e: TouchEvent) => {
        // Allow pinch-zoom gestures
        if (e.touches.length > 1) return;
        e.preventDefault();
      };
      document.addEventListener('touchmove', onTouchMove, { passive: false });
      removeTouchMove = () => document.removeEventListener('touchmove', onTouchMove as EventListener);
    }

    return () => {
      // Restore styles
      body.style.position = prevPositionRef.current;
      body.style.top = prevTopRef.current;
      body.style.width = prevWidthRef.current;
      body.style.overflow = prevOverflowRef.current;

      if (removeTouchMove) removeTouchMove();

      const y = scrollTopRef.current;
      window.scrollTo(0, y);
    };
  }, [locked]);
}

export default useBodyScrollLock;


