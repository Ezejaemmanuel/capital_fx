// 'use client';
// import { motion } from 'framer-motion';

// type CtaCardProps = {
//   heading: string;
//   subText: string;
//   imageUrl: string;
// };

//  const CtaCard: React.FC<CtaCardProps> = ({ heading, subText, imageUrl }) => {
//   return (
//     <motion.div 
//       className="my-10 lg:mx-20 bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:flex dark:bg-dark-800  hover:scale-105 transition transform duration-500 ease-in-out"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <div className="relative lg:w-1/2 h-64 lg:h-auto">
//         <img className="absolute lg:mt-4 lg:mb-4 lg:ml-4 lg:mr-4 h-56 lg:h-60 w-56 lg:w-60 object-cover rounded-full" src={imageUrl} alt="CTA Image" />
//       </div>
//       <div className="px-6 py-4">
//         <motion.div 
//           className="text-3xl text-yellow-500 font-bold mb-2" 
//           layoutId={heading}
//           transition={{ duration: 0.5 }}
//         >
//           {heading}
//         </motion.div>
//         <p className="text-lg text-yellow-300">{subText}</p>
//       </div>
//     </motion.div>
//   )
// };
// export default CtaCard;
'use client'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

// Define props type
interface CtaCardProps {
  heading: string;
  subText: string;
  imageUrl: string;
  ctaLink: string;
}

const MinorHeroSection: React.FC<CtaCardProps> = ({ heading, subText, imageUrl, ctaLink }) => (
    <motion.div 
        className="flex flex-col items-center w-auto m-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{duration: 0.5}}
    >
        <div>
          <Image
              className="w-56 h-56 object-cover rounded-full my-2"
              src={imageUrl}
              alt={heading}
              width={224} 
              height={224} 
          />
        </div>
        <motion.h2 
            className="text-center text-3xl font-bold mb-2" 
            layoutId={heading}
            transition={{ duration: 0.5 }}
        >
            {heading}
        </motion.h2>
        <p className="text-lg text-gray-500">{subText}</p>
        <div className="mt-6">
            <Link href={ctaLink} className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-xl md:px-10">
                    Get Started
                
            </Link>
        </div>
    </motion.div>
);

export default MinorHeroSection;