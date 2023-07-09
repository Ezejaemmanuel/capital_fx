// 'use client';
// import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

// interface AnimatedTextProps {
//   inputText: string;
//   randomizeColor: boolean;
// }

// const colors = ["#F59E0B", "#EF4444", "#3B82F6", "#10B981", "#EC4899"]; 

// const AnimatedText: React.FC<AnimatedTextProps> = ({ inputText, randomizeColor }) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const textVariants = {
//     hidden: { opacity: 0 },
//     visible: (i: number) => ({
//       opacity: 1,
//       transition: {
//         delay: i * 0.1, 
//       }
//     })
//   };
  
//   // Replace spaces with non-breaking spaces
//   const chars = [...inputText.replace(/ /g, '\u00A0')];

//   return (
//     <AnimatePresence mode='wait'>
//       <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100">
//         {chars.map((char, i) => (
//           <motion.span
//             ref={ref}
//             key={char + "-" + i}
//             // If character is a non-breaking space just leave it empty, otherwise apply color styling
//             style={char === '\u00A0' ? {} : (randomizeColor ? { color: colors[i % colors.length] } : {})}
//             variants={textVariants}
//             custom={i}
//             initial="hidden"
//             animate={controls}
//           >
//             {char}
//           </motion.span>
//         ))}
//       </div>
//     </AnimatePresence>
//   );
// };

// export default AnimatedText;
'use client';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AnimatedTextProps {
  inputText: string;
  randomizeColor: boolean;
  restartOnInView?: boolean;
}

const colors = ["#F59E0B", "#EF4444", "#3B82F6", "#10B981", "#EC4899"]; 

const AnimatedText: React.FC<AnimatedTextProps> = ({ inputText, randomizeColor, restartOnInView = false }) => {
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
  
  // Replace spaces with non-breaking spaces
  const chars = [...inputText.replace(/ /g, '\u00A0')];

  return (
    <AnimatePresence mode='wait'>
      <div className="flex flex-wrap items-center justify-center  whitespace-pre-wrap">
        {chars.map((char, i) => (
          <motion.span
            ref={ref}
            key={char + "-" + i}
            // If character is a non-breaking space just leave it empty, otherwise apply color styling
            style={char === '\u00A0' ? {} : (randomizeColor ? { color: colors[i % colors.length] } : {})}
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

export default AnimatedText;
