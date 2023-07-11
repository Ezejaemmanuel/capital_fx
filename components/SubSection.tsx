'use client'; import React from 'react'; 
import Image from 'next/image'; 
import { motion } from 'framer-motion';
 import bouncingBitcoin from '../public/bouncing-bitcoin.json'
  import LottieAnimation from './LottieAnimation';

interface ISubSectionProps { imageUrl: string; heading: string; subText: string; }

const SubSection: React.FC<ISubSectionProps> = ({ imageUrl, heading, subText }) => { const textVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, };
const animationHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 350 : 400;
const animationWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 350 : 400;

return (
    <div className="lg:flex bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:from-gray-900  dark:to-gray-800  p-3 rounded-lg shadow-lg bg-opacity-50">
        <motion.div
            className={`w-full lg:w-1/2 ${subText.length > 50 && "order-last lg:order-first"}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="w-full h-64 lg:h-auto object-cover ">
                <LottieAnimation animationData={bouncingBitcoin} speed={1} height={animationHeight} width={animationWidth}/>
            </div>
        </motion.div>
        <motion.div
            className={`w-full lg:w-1/2 flex flex-col justify-center items-center text-center 
                        ${subText.length > 50 ? 'my-2 lg:my-0' : ''}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="font-bold text-lg lg:text-3xl mb-2 uppercase dark:text-white">{heading}</h1>
            <p className="text-sm lg:text-lg text-gray-700 dark:text-gray-300">{subText}</p>
        </motion.div>
    </div>
);
};

export default SubSection;
