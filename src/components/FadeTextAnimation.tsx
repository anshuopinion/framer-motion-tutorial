import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";

export interface FadeInAnimationProps {
  children: ReactNode;
  variants?: Variants;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function FadeInAnimation(props: FadeInAnimationProps) {
  const { children, variants = defaultAnimations } = props;

  return <motion.div variants={variants}>{children}</motion.div>;
}
