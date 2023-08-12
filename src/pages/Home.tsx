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
import ViewCard from '../components/Cards/ViewCard.tsx';
import { useGetProductsQuery } from '../features/oliveMarketApi.tsx';
import Loader from '../components/Loaders/Loader.tsx';

const Home = () => {
  const { data: queryProducts, isLoading } = useGetProductsQuery(undefined);
  const newArray = queryProducts && queryProducts.slice(0, 5);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='w-full flex flex-col mt-[100px]'>
          <div className='flex w-full mt-5 bg-[#F1F0FF]'>
            <div className='flex max-w-5xl  mx-auto'>
              <img src='/lamp.png' className='w-[200px] h-[200px] lg:flex hidden' alt='lamp' />
              <div className='grid grid-cols-1  md:grid-cols-2'>
                <div className='flex flex-col pt-[50px] md:pt-[100px]'>
                  <div className='flex flex-col px-5'>
                    <p className='text-[12px] mb-2 text-[#151875]'>Best furniture for castle...</p>
                    <div>
                      <p className='text-3xl md:text-xl font-bold text-[#151875]'>
                        New Furniture Collection
                      </p>
                      <p className='text-3xl md:text-xl font-bold text-[#151875]'>Trends in 2023</p>
                    </div>
                    <p className='text-[12px] mt-2 text-[#151875]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
                      adipiscing in
                    </p>
                    <p className='text-[12px] text-[#151875]'>phasellus non in justo.</p>
                  </div>
                  <div className='px-5'>
                    <button className='py-2 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-xs'>
                      Shop Now
                    </button>
                  </div>
                </div>
                <img src='/couch.png' className='w-[400px] h-[400px] pr-5 ' alt='banner_chair' />
              </div>
            </div>
          </div>
          <div className='w-full pt-20'>
            <div className=' w-full px-1 md:max-w-5xl  md:mx-auto '>
              <div className='w-full flex justify-center mb-5'>
                <p className='text-[30px] font-bold text-[#151875]'>Featured Products</p>
              </div>
              <div className='w-full '>
                <Carousel showDots={true} responsive={responsive}>
                  {newArray &&
                    newArray.map((item: any) => (
                      <ProductCard
                        key={item?._id}
                        slug={item?.slug}
                        productId={item?._id}
                        image={item.images[0].secureUrl}
                        name={item?.name}
                        rating={item?.rating}
                        price={item?.price / 100}
                        numberOfReviews={item?.numberOfReviews}
                      />
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className='w-full flex pt-20 px-5'>
            <LatestProductsTab />
          </div>
          <div className='w-full flex pt-20 px-5'>
            <WhatWeOfferAdvert />
          </div>
          <div className='w-full  mt-20 bg-[#F1F0FF] '>
            <UniqueFeaturesAdvert />
          </div>
          <div className='w-full  mt-20 px-5'>
            <TrendingProduct />
            <div className='w-full  mt-20 px-5'>
              <DiscountItem />
            </div>
            <div className='w-full  mt-20 px-5'>
              <TopCategories />
            </div>
            <div className='w-full  mt-20 '>
              <SubscribeBanner />
            </div>
            <div className='w-full  mt-20'>
              <SponsorsBanner />
            </div>
            <div className='max-w-5xl  mx-auto'>
              <div className='w-full flex flex-col mt-20'>
                <div className='flex mb-5'>
                  <p className='text-[20px]'>You may also like</p>
                </div>
                <div className='w-full'>
                  <Carousel
                    responsive={responsive}
                    // arrows={false}
                    // customLeftArrow={<ButtonGroup label='left' />}
                  >
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/black_couch.jpeg' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/black_couch.jpeg' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/black_couch.jpeg' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/white_chair.png' />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
