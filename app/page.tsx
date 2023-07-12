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
import BouncingBitcoin from '../public/bouncing-bitcoin.json'
import forexChart from '../public/forex-chart.json'
import bouncingBitcoin from  '../public/bouncing-bitcoin.json'
const MyComponent: React.FC = () => {
  
  return (
    <>
    <div className='dark:bg-dark-900'>
      <PageWrapper >
        {/*<Header />*/}
        <HeroSection />
        <div className="flex flex-col items-center justify-center">
          <FadeInWhenVisible>
            <div className="w-full ">
              <SubSection imageURL={'https://www.arshakir.com/uploads/projects/saas-landing-page-freebie-4.webp'} heading={'Understanding Cryptocurrency and Forex: A Brief Overview'} subText={'Cryptocurrency is a digital form of currency that uses cryptography for secure transactions, while Forex refers to the global decentralized market for trading foreign currencies'} animationData={bouncingBitcoin} reverseSection={true} />
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
