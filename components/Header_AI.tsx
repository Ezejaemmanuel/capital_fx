'use client';
/*
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <motion.h1 
                        className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        CapitalFX - Your Gateway to Cryptocurrencies and Forex
                    </motion.h1>
                    <motion.p 
                        className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        CapitalFX is a leading platform for trading and investing in cryptocurrencies, forex, and other financial instruments. We provide a seamless and secure interface for all your trading needs.
                    </motion.p>
                    <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

                    </Link>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="CapitalFX" width={500} height={500} layout="responsive" />
                    </motion.div>
                </div>                
            </div>
        </section>
    );
}

export default HeroSection;
*/import Image from 'next/legacy/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <AnimatePresence mode='wait'>
            <motion.h1 
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              key={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              CapitalFX - <span className="text-primary-700">{descriptions[index]}</span>
            </motion.h1>
          </AnimatePresence>
          <motion.p 
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            CapitalFX is a leading platform for trading and investing in cryptocurrencies, forex, and other financial instruments. We provide a seamless and secure interface for all your trading needs.
          </motion.p>
          <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    
          </Link>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="CapitalFX" width={500} height={500} layout="responsive" />
          </motion.div>
        </div>                
      </div>
    </section>
  );
}

export default HeroSection;
