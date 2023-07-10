'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
type CtaCardProps = {
  heading: string;
  subText: string;
  imageUrl: string;
};

 const CtaCard: React.FC<CtaCardProps> = ({ heading, subText, imageUrl }) => {
  return (
    <motion.div className="bg-gradient-to-r from-blue-500 to-purple-500 w-screen h-screen p-10 lg:flex">
      <div className="relative md:w-1/2 h-64 md:h-auto">
        <Image className="absolute h-full w-full object-cover" src={imageUrl} alt="CTA image" width={500}  height={500}/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-grey-darker text-base">{subText}</p>
      </div>
    </motion.div>
  )
};
