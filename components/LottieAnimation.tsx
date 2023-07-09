'use client';
import React from 'react';
import Lottie from 'react-lottie';

// Define the type for your animation data.
interface AnimationData extends Record<string, unknown> {}

interface LottieAnimationProps {
  animationData: AnimationData;
  speed?: number;
  height?: number;
  width?: number;
}

// Define the type for the options object.
interface Options {
  loop: boolean | number;
  autoplay: boolean;
  animationData: AnimationData;
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  };
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, speed = 1, height = 400, width = 400 }) => {

  const defaultOptions: Options = {
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
