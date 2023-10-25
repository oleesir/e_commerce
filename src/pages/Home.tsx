import WhatWeOfferAdvert from '../components/WhatWeOfferAdvert.tsx';
import UniqueFeaturesAdvert from '../components/UniqueFeaturesAdvert.tsx';
import DiscountItem from '../components/DiscountItem.tsx';
import SubscribeBanner from '../components/SubscribeBanner.tsx';
import SponsorsBanner from '../components/SponsorsBanner.tsx';
import { useGetProductsQuery } from '../features/oliveMarketApi.tsx';
import Loader from '../components/Loaders/Loader.tsx';
import FeaturedProducts from '../components/FeaturedProducts.tsx';
import Categories from '../components/Categories.tsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { data: queryProducts, isLoading } = useGetProductsQuery(undefined);
  const newArray = queryProducts && queryProducts.slice(0, 10);

  const onClick = () => {
    navigate('/shop');
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='w-full flex flex-col'>
          <div className='flex w-full pt-20 bg-[#F1F0FF]'>
            <div className='flex max-w-5xl  mx-auto'>
              <div className='grid grid-cols-1  md:grid-cols-2'>
                <div className='flex flex-col pt-[50px] md:pt-[100px]'>
                  <div className='flex flex-col px-5'>
                    <div>
                      <p className='text-3xl md:text-4xl font-bold text-[#151875]'>
                        New Gadgets Collections
                      </p>
                      <p className='text-3xl md:text-4xl font-bold text-[#151875]'>
                        Trends in 2023
                      </p>
                    </div>
                    <p className='text-[12px] mt-2 text-[#151875]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
                      adipiscing in
                    </p>
                    <p className='text-[12px] text-[#151875]'>phasellus non in justo.</p>
                  </div>
                  <div className='px-5'>
                    <button
                      onClick={onClick}
                      type='button'
                      className='py-2 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-sm'
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
                <img src='/headies.png' className='w-[400px] h-[400px] pr-5 ' alt='banner_chair' />
              </div>
            </div>
          </div>
          <div className='w-full flex pt-20 px-5'>
            <Categories />
          </div>
          <div className='w-full pt-20'>
            <div className='w-full flex justify-center '>
              <p className='text-[30px] font-bold text-[#151875]'>Featured Products</p>
            </div>
            <FeaturedProducts newArray={newArray} />
          </div>

          <div className='w-full flex py-20 px-5'>
            <WhatWeOfferAdvert />
          </div>
          <div className='w-full  bg-[#F1F0FF] '>
            <UniqueFeaturesAdvert />
          </div>

          <div className='w-full  pt-20 px-5'>
            <DiscountItem />
          </div>
          <div className='w-full  pt-20 '>
            <SubscribeBanner />
          </div>
          <div className='w-full  pt-20'>
            <SponsorsBanner />
          </div>
          <div className='max-w-5xl  mx-auto'>
            <div className='w-full pt-20'>
              <p className='text-[20px] text-[#151875] font-bold'>You may also like</p>
            </div>
          </div>
          <FeaturedProducts newArray={newArray} />
        </div>
      )}
    </>
  );
};
export default Home;
