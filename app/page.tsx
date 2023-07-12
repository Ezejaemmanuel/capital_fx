import React from 'react';
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
import forexChart from '../public/forex-chart.json'
import bouncingBitcoin from  '../public/bouncing-bitcoin.json'
import data from '@/lib/subSectionData'

interface CryptoTraderAd {
  shortName: string;
  heading: string;
  subText: string;
  animationDescription: string;
}

const MyComponent: React.FC = () => {
  
  return (
    <>
    <div className='dark:bg-dark-900'>
      <PageWrapper >
        {/*<Header />*/}
        <HeroSection />
        <div className="flex flex-col items-center justify-center">
          {data.cryptoTraderAds.map((item: CryptoTraderAd, index: number) => (
            <FadeInWhenVisible key={item.shortName}>
              <div className="w-full ">
                <SubSection 
                  imageURL={'https://www.arshakir.com/uploads/projects/saas-landing-page-freebie-4.webp'} 
                  heading={item.heading} 
                  subText={item.subText} 
                  animationData={bouncingBitcoin} 
                  reverseSection={index % 2 === 0} 
                />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
        <AnimatedText inputText={'my_name____is___jatique i hate nonsense rgpoahgpoargho'} randomizeColor={true} colorStart={'blue'} colorEnd={'green'} />
      </PageWrapper>
    </div>
    </>
  );
};

export default MyComponent;
