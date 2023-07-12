
'use client';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import chroma from 'chroma-js';

interface SubSectionAnimeTextProps {
  inputText: string;
  randomizeColor: boolean;
  restartOnInView?: boolean;
  colorStart: string;
  colorEnd: string;
}

const SubSectionAnimeText: React.FC<SubSectionAnimeTextProps> = ({ inputText, randomizeColor, restartOnInView = false, colorStart='yellow', colorEnd='red' }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView && restartOnInView) {
      controls.start("hidden");
    }
  }, [controls, inView, restartOnInView]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1, 
      }
    })
  };
  
  // Create a color scale from colorStart to colorEnd
  const colorScale = chroma.scale([colorStart, colorEnd]).mode('lch');

  // Replace spaces with non-breaking spaces
  const chars = [...inputText.replace(/ /g, '\u00A0')];

  return (
    <AnimatePresence mode='wait'>
      <div className="flex flex-wrap items-center justify-center sm:whitespace-pre-wrap">
        {chars.map((char, i) => (
          <motion.span
            ref={ref}
            key={char + "-" + i}
            className="font-lato text-sm lg:text-lg text-gray-700 dark:text-gray-300"
            // If character is a non-breaking space just leave it empty, otherwise apply color styling
            style={char === '\u00A0' ? {} : (randomizeColor ? { color: colorScale(i / chars.length).hex() } : {})}
            variants={textVariants}
            custom={i}
            initial="hidden"
            animate={controls}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default SubSectionAnimeText;
