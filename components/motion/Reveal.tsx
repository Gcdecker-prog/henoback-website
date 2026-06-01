'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion/variants';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'ul';
};

export function Reveal({ children, className, as = 'div' }: RevealProps) {
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
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
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
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}
