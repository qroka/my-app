"use client";

import { useRef, useEffect } from 'react';
import DarkVeil from '../components/DarkVeil';
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    // Разрешаем наши жесты, отключая нативный pinch/pan
    el.style.touchAction = 'none';

    let pointerEventsCache: PointerEvent[] = [];
    let gestureStartDistance = 0;
    let currentScale = 1;
    let translateX = 0;
    let translateY = 0;
    let originX = 0;
    let originY = 0;

    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

    const getPoint = (ev: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      return { x: ev.clientX - rect.left, y: ev.clientY - rect.top };
    };

    const setTransform = () => {
      el.style.transformOrigin = `${originX}px ${originY}px`;
      el.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    };

    const onPointerDown = (ev: PointerEvent) => {
      el.setPointerCapture(ev.pointerId);
      pointerEventsCache.push(ev);
      if (pointerEventsCache.length === 1) {
        const p = getPoint(ev);
        originX = p.x;
        originY = p.y;
      }
    };

    const onPointerMove = (ev: PointerEvent) => {
      const idx = pointerEventsCache.findIndex(e => e.pointerId === ev.pointerId);
      if (idx >= 0) pointerEventsCache[idx] = ev;

      if (pointerEventsCache.length === 2) {
        const p0 = getPoint(pointerEventsCache[0]);
        const p1 = getPoint(pointerEventsCache[1]);
        const distance = Math.hypot(p0.x - p1.x, p0.y - p1.y);
        originX = (p0.x + p1.x) / 2;
        originY = (p0.y + p1.y) / 2;

        if (gestureStartDistance === 0) {
          gestureStartDistance = distance;
        } else {
          const scaleDelta = distance / gestureStartDistance;
          currentScale = clamp(currentScale * scaleDelta, 0.5, 3);
          gestureStartDistance = distance;
          setTransform();
        }
      } else if (pointerEventsCache.length === 1) {
        // опционально: пэн одним пальцем
        // const p = getPoint(pointerEventsCache[0]);
        // translateX = p.x - originX;
        // translateY = p.y - originY;
        // setTransform();
      }
    };

    const onPointerUp = (ev: PointerEvent) => {
      pointerEventsCache = pointerEventsCache.filter(e => e.pointerId !== ev.pointerId);
      if (pointerEventsCache.length < 2) {
        gestureStartDistance = 0;
      }
      try { el.releasePointerCapture(ev.pointerId); } catch {}
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('pointerleave', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('pointerleave', onPointerUp);
    };
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Фон: пинч‑зум тут, контент не масштабируется */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <DarkVeil />
      </div>

      {/* Контент в safe-area, без зума */}
      <div
        className="relative z-10"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          paddingLeft: 'env(safe-area-inset-left, 0px)'
        }}
      >
        <Navbar>
          <NavbarSection>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/">Docs</NavbarItem>
          </NavbarSection>
        </Navbar>
      </div>
    </div>
  );
}
