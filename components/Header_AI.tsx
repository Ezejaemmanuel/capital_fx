'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import forexChat from '../public/yellow_forex.json'; // replace with your file path
import getStarted from '../public/get-started-button.json'
import LottieAnimation from './LottieAnimation';

const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const HeroSection: React.FC = () => {
    const [index, setIndex] = useState(0);
    const descriptions = [
        "Unlock the world of Cryptocurrencies and Forex",
        "Embrace the power of Cryptocurrencies and Forex",
        "Dive into the realm of Cryptocurrencies and Forex",
        "Unleash the potential of Cryptocurrencies and Forex",
        "Navigate the landscape of Cryptocurrencies and Forex"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }, 5000); // Change description every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col-reverse lg:flex-row-reverse max-w-screen-xl px-4 py-8 mx-auto lg:space-x-reverse lg:space-x-8 lg:py-16 space-y-8 lg:space-y-0">
                <div className="flex-1 flex justify-center  items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="max-w-full">
                            <LottieAnimation animationData={forexChat} speed={1} />
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 flex flex-col justify-center lg:items-start">
                    <AnimatePresence mode='wait'>
                        <motion.h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none font-serif md:text-5xl xl:text-6xl dark:text-white  bg-clip-text text-transparent"
                            key={index}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <span className="text-black dark:text-white">C</span>
                            <span className="text-black dark:text-white">a</span>
                            <span className="text-black dark:text-white">p</span>
                            <span className="text-red-500">i</span>
                            <span className="text-black dark:text-white">t</span>
                            <span className="text-black dark:text-white">a</span>
                            <span className="text-green-500">l</span>
                            <span className="text-black dark:text-white">F</span>
                            <span className="text-black dark:text-white">X</span> - <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">{descriptions[index]}</span>
                        </motion.h1>
                    </AnimatePresence>
                    <motion.p
                        className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <AnimatedText inputText={'CapitalFX is a leading platform for trading and investing in cryptocurrencies, forex, and other financial instruments. We provide a seamless and secure interface for all your trading needs.'} randomizeColor={true} colorStart={'yellow'} colorEnd={'purple'} />
                    </motion.p>
                    <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ">
                    Get STARTED
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
