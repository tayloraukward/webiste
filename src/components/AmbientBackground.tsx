import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const gradient = useMotionTemplate`radial-gradient(600px circle at ${sx} ${sy}, rgba(124, 58, 237, 0.22), transparent 55%)`;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className="absolute inset-0 bg-grid-fade bg-grid bg-size-grid" />
      <motion.div style={{ background: gradient }} className="absolute inset-0" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />
    </div>
  );
}
