"use client";
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from '@/components/framer-motion/cliented-framer-motion';
type PageWrapperProps = {
    children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15, x: 5, rotate: 60 }}
                animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                exit={{ opacity: 0, y: 15, x: 5 }}
                transition={{
                    delay: 2,
                    ease:'easeInOut'
                    
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageWrapper;
