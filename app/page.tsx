import React from 'react';
import { Card } from '@/components/flowbite/cliented-flowbite';
import PageWrapper from './page-wrapper';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import AnimatedText from '@/components/AnimatedText';
import HeroSection from '@/components/Header_AI';
import LottieAnimation from '@/components/LottieAnimation';
import animationData from '../public/yellow_forex.json'; // replace with your file path
import FadeInWhenVisible from './card-wrapper';
import CTACard from '@/components/CtaCard';
import MinorHeroSection from '@/components/MinorHeroSection';
import SubSection from '@/components/SubSection';
import getStartedButton from '../public/get-started-button.json'
type Box = {
  color: string;
  text: string;
};

const MyComponent: React.FC = () => {
  const boxes: Box[] = [
    { color: 'red', text: 'Box 1' },
    { color: 'blue', text: 'Box 2' },
    { color: 'green', text: 'Box 3' },
    { color: 'yellow', text: 'Box 4' },
  ];

  return (
    <>
    <div className='dark:bg-dark-900'>
      <PageWrapper >
        {/*<Header />*/}
        <HeroSection />
        <div className="flex flex-col items-center justify-center">
          <FadeInWhenVisible>
            <div className="w-full ">
              <SubSection imageUrl={'https://www.arshakir.com/uploads/projects/saas-landing-page-freebie-4.webp'} heading={'Understanding Cryptocurrency and Forex: A Brief Overview'} subText={'Cryptocurrency is a digital form of currency that uses cryptography for secure transactions, while Forex refers to the global decentralized market for trading foreign currencies'} />
            </div>
          </FadeInWhenVisible>
        </div>
        <AnimatedText inputText={'my_name____is___jatique i hate nonsense rgpoahgpoargho'} randomizeColor={true} colorStart={'blue'} colorEnd={'green'} />
      </PageWrapper>
    </div>
    </>
  );
};

export default MyComponent;
