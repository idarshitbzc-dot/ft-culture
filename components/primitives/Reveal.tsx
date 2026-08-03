"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Fades content up 16px over 400ms when it scrolls into view.
 * Pass `index` for the 60ms stagger between siblings.
 * Returns a plain div when the user asks for reduced motion.
 */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(index, 8) * 0.06,
      }}
    >
      {children}
    </motion.div>
  );
}
