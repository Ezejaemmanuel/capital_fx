
'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const CTACard: React.FC = () => (
    <motion.div 
        className="bg-white max-w-xs mx-auto rounded-xl shadow-md overflow-hidden lg:max-w-2xl hover:shadow-2xl transition duration-500 ease-in-out transform"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{duration: 0.5}}
    >
        <div>
            <Image
                className="h-48 w-full object-cover"
                src={'https://www.arshakir.com/uploads/projects/saas-landing-page-freebie-4.webp'}
                alt="Your alt text"
                width={500} 
                height={300} 
            />
        </div>
        <div className="px-8 py-6">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-black">CTA Heading</h4>
            <p className="leading-normal text-gray-700">This is a brief descritption or the subtext of the call to action.</p>
            <div className="mt-6 pt-3 border-t">
                <Link href="/CTA-link" className="text-indigo-500 hover:text-indigo-400 transition duration-300">Get Started
                </Link>
            </div>
        </div>
    </motion.div>
);

export default CTACard;
