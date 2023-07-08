'use client';
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageWrapperProps = {
  children: ReactNode;
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
    rotate: -60
  },
  in: {
    opacity: 1,
    y: "0",
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    }
  },
  out: {
    opacity: 0,
    y: "-60vh",
    rotate: 60,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageWrapper;
