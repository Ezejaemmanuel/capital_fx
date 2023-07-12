'use client';
import React, { memo, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible: React.FC<{children: React.ReactNode}> = memo(({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6 }} // changed duration to 0.6 for slower animation
        variants={{
          visible: { opacity: 1, scale: 1, y: 0 }, // added y: 0 so that it ends at the original position
          hidden: { opacity: 0, scale: 0, y: 100 } // added y: 100 to start from '100px' below
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
});

export default FadeInWhenVisible;
