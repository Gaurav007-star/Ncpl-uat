'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

/* -------------------------
   MarqueeContent (forwardRef)
   - Triples children for seamless loop
   ------------------------- */
export const MarqueeContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('flex w-max whitespace-nowrap', className)} {...props}>
      {children}
      {children}
      {children}
    </div>
  );
});
MarqueeContent.displayName = 'MarqueeContent';

/* -------------------------
   Marquee (main)
   props:
     - speed: pixels per second auto-scroll (default 30)
     - dragSpeed: multiplier for pointer drag sensitivity (lower = slower drag) (default 0.35)
     - direction: 'left' | 'right' (auto-scroll direction)
   ------------------------- */
export const Marquee = ({
  className,
  speed = 30,
  dragSpeed = 0.35,
  direction = 'left',
  children,
  ...props
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null); // forwarded into MarqueeContent
  const x = useMotionValue(0);
  const singleWidth = useRef(0);
  const rafRef = useRef(null);
  const lastTime = useRef(null);
  const pointerRef = useRef({ active: false, lastX: 0, id: null });
  const [isDragging, setIsDragging] = useState(false);

  // allow users to pass raw children or a MarqueeContent
  let contentChild;
  try {
    contentChild = React.Children.only(children);
  } catch {
    contentChild = <MarqueeContent>{children}</MarqueeContent>;
  }
  const contentWithRef = React.isValidElement(contentChild)
    ? React.cloneElement(contentChild, { ref: contentRef })
    : contentChild;

  // measure tripled content and center on middle copy
  useEffect(() => {
    const recalc = () => {
      const el = contentRef.current;
      if (!el) return;
      const total = el.scrollWidth || el.offsetWidth || 0;
      singleWidth.current = total / 3 || 0;
      // center to middle copy
      x.set(-singleWidth.current);
    };

    recalc();

    let ro;
    if (typeof ResizeObserver !== 'undefined' && contentRef.current) {
      ro = new ResizeObserver(recalc);
      ro.observe(contentRef.current);
    }
    window.addEventListener('resize', recalc);
    return () => {
      window.removeEventListener('resize', recalc);
      if (ro && contentRef.current) ro.unobserve(contentRef.current);
      if (ro) ro.disconnect();
    };
  }, [x]);

  // wrap helper: keeps the motion value in the middle-copy range
  const wrapIfNeeded = (val) => {
    const s = singleWidth.current;
    if (!s) return val;
    if (val > 0) return val - s;
    if (val < -s * 2) return val + s;
    return val;
  };

  // Always wrap the motion value so edges are never visible
  useEffect(() => {
    return x.on('change', (latest) => {
      const wrapped = wrapIfNeeded(latest);
      if (wrapped !== latest) {
        // directly set wrapped value (invisible to user because of tripled content)
        x.set(wrapped);
      }
    });
  }, [x]);

  // Auto-scroll loop using requestAnimationFrame (time-based)
  useEffect(() => {
    lastTime.current = null;
    const step = (now) => {
      if (!lastTime.current) lastTime.current = now;
      const dt = (now - lastTime.current) / 1000;
      lastTime.current = now;

      if (!isDragging) {
        const delta = speed * dt;
        const latest = direction === 'left' ? x.get() - delta : x.get() + delta;
        const wrapped = wrapIfNeeded(latest);
        x.set(wrapped);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [x, speed, isDragging, direction]);

  // Prevent native dragstart (images/links) from hijacking pointer events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onNativeDragStart = (e) => e.preventDefault();
    container.addEventListener('dragstart', onNativeDragStart, { capture: true });
    return () => container.removeEventListener('dragstart', onNativeDragStart, { capture: true });
  }, []);

  // Pointer handlers — use pointer events so mouse/touch both work and so we can scale dx
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerDown = (e) => {
      // only left mouse or touch should start
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerRef.current.active = true;
      pointerRef.current.lastX = e.clientX;
      pointerRef.current.id = e.pointerId;
      setIsDragging(true);
      try { container.setPointerCapture?.(e.pointerId); } catch (err) { /* no-op */ }
    };

    const onPointerMove = (e) => {
      if (!pointerRef.current.active) return;
      const dx = e.clientX - pointerRef.current.lastX;
      pointerRef.current.lastX = e.clientX;
      // scale movement by dragSpeed (lower => slower)
      x.set(x.get() + dx * dragSpeed);
    };

    const onPointerUp = (e) => {
      if (!pointerRef.current.active) return;
      pointerRef.current.active = false;
      setIsDragging(false);
      try { container.releasePointerCapture?.(pointerRef.current.id); } catch (err) { /* no-op */ }
      pointerRef.current.id = null;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    // also handle pointercancel
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [x, dragSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full overflow-hidden select-none', className)}
      {...props}
    >
      <motion.div
        style={{
          x,
          touchAction: 'none', // important for touch dragging
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
        // We use our own pointer handlers instead of framer drag so dragSpeed scaling works
        transition={{ type: 'spring', stiffness: 20, damping: 40 }} // used for small adjustments if framer animates x
        className="flex w-max whitespace-nowrap cursor-grab active:cursor-grabbing"
      >
        {contentWithRef}
      </motion.div>
    </div>
  );
};

/* -------------------------
   MarqueeItem
   - prevents native dragstart on itself
   ------------------------- */
export const MarqueeItem = ({ className, children, ...props }) => (
  <div
    onDragStart={(e) => e.preventDefault()}
    className={cn('inline-block mx-8 flex-shrink-0 object-contain select-none', className)}
    {...props}
  >
    {children}
  </div>
);

/* -------------------------
   MarqueeFade
   - computes parent background color and builds a gradient that blends into it
   - props:
       side: 'left' | 'right'
       width: css width string (default '6rem')
       color: optional override color string (CSS)
   ------------------------- */
export const MarqueeFade = ({ className, side = 'left', width = '6rem', color, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    // computed parent background (fallback to white)
    const parentBg = color || (parent && window.getComputedStyle(parent).backgroundColor) || 'rgba(255,255,255,1)';
    const gradient = side === 'left'
      ? `linear-gradient(to right, ${parentBg}, transparent)`
      : `linear-gradient(to left, ${parentBg}, transparent)`;
    el.style.background = gradient;
  }, [side, color]);

  // build style with dynamic side (left:0 or right:0)
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width,
    pointerEvents: 'none',
  };
  style[side] = 0;

  return <div ref={ref} style={style} className={cn(className)} {...props} />;
};
