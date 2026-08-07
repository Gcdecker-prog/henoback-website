'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  motionEase,
  revealVariants,
  staggerContainer,
  staggerItem,
  type RevealDirection,
} from '@/lib/motion/variants';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'ul';
  /** Slide direction — defaults to a clean upward rise */
  direction?: RevealDirection;
  /** Extra delay (seconds) for staggered paired columns */
  delay?: number;
};

const DEFAULT_VIEWPORT = { once: true, margin: '0px 0px -8% 0px', amount: 0.18 } as const;

function withDelay(base: Variants, delay: number): Variants {
  if (!delay) return base;
  const visible = base.visible;
  const baseTransition =
    typeof visible === 'object' && visible && 'transition' in visible
      ? (visible.transition as object)
      : {};

  return {
    hidden: base.hidden,
    visible: {
      ...(typeof visible === 'object' && visible ? visible : {}),
      transition: { duration: 0.7, ease: motionEase, ...baseTransition, delay },
    },
  };
}

export function Reveal({
  children,
  className,
  as = 'div',
  direction = 'up',
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      variants={withDelay(revealVariants(direction), delay)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  as = 'ul',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'ul' | 'div';
}) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}
