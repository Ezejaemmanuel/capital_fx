"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'
interface ImageWithTextProps {
    text: string;
    imageUrl: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({text, imageUrl}) => {

    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 dark:bg-gray-900" >
            <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image className="w-full md:w-1/2" src={imageUrl} width={400} height={400} alt="image"/>
            </motion.div>
            <motion.div
                className="text-white order-1 md:order-2 mb-4 md:mb-0 md:text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p className="mb-4">{text}</p>
            </motion.div>
        </div>
    );
}

export default ImageWithText;
