import React from 'react';
import PageWrapper from './page-wrapper';
import HeroSection from '@/components/Header_AI';
import SubSection from '@/components/SubSection';
import data from '@/lib/subSectionData'
import FadeInWhenVisible from './card-wrapper';
import bouncingBitcoin from  '../public/bouncing-bitcoin.json'

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
        <HeroSection />
        <div className="flex flex-col items-center justify-center">
          {data.map((item: CryptoTraderAd, index: number) => (
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
      </PageWrapper>
    </div>
    </>
  );
};

export default MyComponent;
