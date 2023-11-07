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
  const { data: queryProducts, isLoading, isFetching } = useGetProductsQuery(undefined);
  const newArray = queryProducts && queryProducts.slice(0, 10);

  if (isLoading || isFetching) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const onClick = () => {
    navigate('/shop');
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='flex w-full py-[40px] md:py-[120px] bg-[#F1F0FF]'>
        <div className='flex max-w-5xl  mx-auto'>
          <div className='grid grid-cols-1  md:grid-cols-2'>
            <div className='flex flex-col pt-[50px] md:pt-[100px]'>
              <div className='flex flex-col px-5'>
                <div>
                  <p className='text-3xl md:text-4xl font-bold text-[#151875] max-w-prose'>
                    New Gadgets Collections
                  </p>
                  <p className='text-3xl md:text-4xl font-bold text-[#151875] max-w-prose'>
                    Trends in 2023
                  </p>
                </div>
                <p className='text-base mt-2 text-[#151875] max-w-prose'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                  in
                </p>
                <p className='text-base text-[#151875] max-w-prose'>phasellus non in justo.</p>
              </div>
              <div className='px-5'>
                <button
                  onClick={onClick}
                  type='button'
                  className='py-3 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-sm'
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
      <div className='w-full pt-20 '>
        <div className='w-full flex justify-center '>
          <p className='text-[30px] font-bold text-[#151875]'>Featured Products</p>
        </div>
        <div className='w-full flex   px-3'>
          <FeaturedProducts newArray={newArray} />
        </div>
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
          <p className='text-[18px] text-[#151875] font-bold'>You may also like</p>
        </div>
      </div>
      <div className='w-full flex justify-center  px-3'>
        <FeaturedProducts newArray={newArray} />
      </div>
    </div>
  );
};
export default Home;
