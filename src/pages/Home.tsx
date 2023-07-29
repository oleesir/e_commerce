import ProductCard from '../components/Cards/ProductCard.tsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/responsive.ts';
import LatestProductsTab from '../components/Tabs/LatestProductsTab.tsx';
import WhatWeOfferAdvert from '../components/WhatWeOfferAdvert.tsx';
import UniqueFeaturesAdvert from '../components/UniqueFeaturesAdvert.tsx';
import TrendingProduct from '../components/TrendingProduct.tsx';
import DiscountItem from '../components/DiscountItem.tsx';
import TopCategories from '../components/TopCategories.tsx';
import SubscribeBanner from '../components/SubscribeBanner.tsx';
import SponsorsBanner from '../components/SponsorsBanner.tsx';
import LatestBlog from '../components/LatestBlog.tsx';

const Home = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex w-full mt-5 bg-[#F1F0FF]'>
        <div className='flex max-w-5xl  mx-auto'>
          <img src='/lamp.png' className='w-[200px] h-[200px]' alt='lamp' />
          <div className=''>
            <div className='flex flex-col pt-[150px]'>
              <p className='text-[12px] mb-2 text-[#151875]'>Best furniture for castle...</p>
              <div>
                <p className='text-3xl font-bold text-[#151875]'>New Furniture Collection</p>
                <p className='text-3xl font-bold text-[#151875]'>Trends in 2023</p>
              </div>
              <p className='text-[12px] mt-2 text-[#151875]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
              </p>
              <p className='text-[12px] text-[#151875]'>phasellus non in justo.</p>
            </div>
            <button className='py-2 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-xs'>
              Shop Now
            </button>
          </div>
          <img src='/couch.png' className='w-[400px] h-[400px]' alt='banner_chair' />
        </div>
      </div>
      <div className='w-full flex pt-20'>
        <div className='max-w-5xl  mx-auto'>
          <div className='w-full flex justify-center mb-5'>
            <p className='text-[30px] font-bold text-[#151875]'>Featured Products</p>
          </div>
          <div className='w-full'>
            <Carousel showDots={true} responsive={responsive}>
              <ProductCard image='/cane_chair.png' />
              <ProductCard image='/white_chair.png' />
              <ProductCard image='/black_couch.jpeg' />
              <ProductCard image='/cane_chair.png' />
              <ProductCard image='/white_chair.png' />
              <ProductCard image='/black_couch.jpeg' />
              <ProductCard image='/cane_chair.png' />
              <ProductCard image='/white_chair.png' />
              <ProductCard image='/white_chair.png' />
            </Carousel>
          </div>
        </div>
      </div>
      <div className='w-full flex pt-20'>
        <LatestProductsTab />
      </div>
      <div className='w-full flex pt-20'>
        <WhatWeOfferAdvert />
      </div>
      <div className='w-full  mt-20 bg-[#F1F0FF]'>
        <UniqueFeaturesAdvert />
      </div>
      <div className='w-full  mt-20 '>
        <TrendingProduct />
        <div className='w-full  mt-20 '>
          <DiscountItem />
        </div>
        <div className='w-full  mt-20 '>
          <TopCategories />
        </div>
        <div className='w-full  mt-20 '>
          <SubscribeBanner />
        </div>
        <div className='w-full  mt-20 '>
          <SponsorsBanner />
        </div>
        <div className='w-full  mt-20 '>
          <LatestBlog />
        </div>
      </div>
    </div>
  );
};
export default Home;
