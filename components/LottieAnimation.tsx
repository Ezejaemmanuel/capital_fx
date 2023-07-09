'use client';
import React from 'react';
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  animationData: any; // replace with the type of your animation data
  speed?: number;
  height?: number;
  width?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, speed = 1, height = 400, width = 400 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={false}
        isPaused={false}
        speed={speed}
        direction={1}
        ariaRole="button"
        ariaLabel="Animation"
        isClickToPauseDisabled={false}
      />
    </div>
  );
};

export default LottieAnimation;
