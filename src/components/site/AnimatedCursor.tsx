import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CursorState = {
  enabled: boolean;
  visible: boolean;
  pressed: boolean;
};

function getInitialEnabled() {
  if (typeof window === "undefined") return false;
  const finePointer = window.matchMedia?.("(pointer: fine)").matches ?? false;
  const canHover = window.matchMedia?.("(hover: hover)").matches ?? false;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  return (finePointer || canHover) && !reducedMotion;
}

export function AnimatedCursor() {
  const [state, setState] = useState<CursorState>(() => ({
    enabled: getInitialEnabled(),
    visible: false,
    pressed: false,
  }));

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 1200, damping: 48, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 48, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqFine = window.matchMedia?.("(pointer: fine)");
    const mqHover = window.matchMedia?.("(hover: hover)");
    const mqReduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    const onMediaChange = () => {
      const enabled = ((mqFine?.matches ?? false) || (mqHover?.matches ?? false)) && !(mqReduce?.matches ?? false);
      setState((s) => ({ ...s, enabled, visible: enabled ? s.visible : false, pressed: enabled ? s.pressed : false }));
    };

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setState((s) => (s.visible ? s : { ...s, visible: true }));
    };

    const onDown = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setState((s) => ({ ...s, pressed: true, visible: true }));
    };
    const onUp = () => setState((s) => ({ ...s, pressed: false }));
    const onLeave = () => setState((s) => ({ ...s, visible: false, pressed: false }));
    const onEnter = () => setState((s) => ({ ...s, visible: s.enabled }));

    onMediaChange();

    mqFine?.addEventListener("change", onMediaChange);
    mqHover?.addEventListener("change", onMediaChange);
    mqReduce?.addEventListener("change", onMediaChange);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("blur", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      mqFine?.removeEventListener("change", onMediaChange);
      mqHover?.removeEventListener("change", onMediaChange);
      mqReduce?.removeEventListener("change", onMediaChange);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    if (state.enabled) el.classList.add("has-animated-cursor");
    else el.classList.remove("has-animated-cursor");
    return () => el.classList.remove("has-animated-cursor");
  }, [state.enabled]);

  const opacity = useMemo(() => (state.enabled && state.visible ? 1 : 0), [state.enabled, state.visible]);

  if (!state.enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        style={{ x: ringX, y: ringY, opacity }}
        animate={{ scale: state.pressed ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-[2px]"
      />
      <motion.div
        style={{ x: dotX, y: dotY, opacity }}
        animate={{ scale: state.pressed ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 800, damping: 36 }}
        className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-glow"
      />
    </div>
  );
}
