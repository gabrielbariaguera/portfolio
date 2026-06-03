import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  amount?: number;
  once?: boolean;
};

const offsetByDirection: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
};

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  amount = 0.3,
  once = true,
}: Props) {
  const hiddenState = {
    opacity: 0,
    ...offsetByDirection[direction],
  };

  const variants: Variants = {
    hidden: hiddenState,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}