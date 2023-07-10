'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ISubSectionProps {
    imageUrl: string;
    heading: string;
    subText: string;
}

const SubSection: React.FC<ISubSectionProps> = ({ imageUrl, heading, subText }) => {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    
    const fontSizeBasedOnTextLength = subText.length > 50 ? "text-md" : "text-xl";
    
    return (
        <div className="lg:flex bg-white p-5 rounded-lg shadow-lg dark:bg-gray-900">
            <motion.div
                className={`w-full lg:w-1/2 ${subText.length > 50 && "order-last lg:order-first"}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-full h-64 lg:h-auto">
                    <Image src={imageUrl} alt={heading} width={500} height={300} className="object-cover" />
                </div>
            </motion.div>
            <motion.div
                className={`w-full lg:w-1/2 flex flex-col justify-center items-center text-center 
                            ${subText.length > 50 ? 'my-2 lg:my-0' : ''} ${fontSizeBasedOnTextLength}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="font-bold text-2xl mb-2 uppercase dark:text-white">{heading}</h1>
                <p className="text-gray-700 dark:text-gray-300">{subText}</p>
            </motion.div>
        </div>
    );
};

export default SubSection;
