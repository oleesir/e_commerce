// import { GrFormNextLink, GrFormPreviousLink, GrNext, GrPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
import { carouselSettings } from '../utils/carouselSettings.ts';
import ProductCard from './Cards/ProductCard.tsx';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '../types.ts';

const FeaturedProducts = ({ newArray }: { newArray: Product[] | undefined }) => {
  const customSlider = useRef();

  // const handleNextSlide = () => {
  //   // @ts-ignore
  //   customSlider.current.slickNext();
  // };
  //
  // const handlePrevSlide = () => {
  //   customSlider.current.slickPrev();
  // };

  return (
    <div className=' w-full md:max-w-5xl py-10 md:mx-auto'>
      <div className='flex'>
        {/*<div className='hidden relative md:flex items-center'>*/}
        {/*  <div className='absolute h-[50px] w-[50px] top-[118px] '>*/}
        {/*    <button*/}
        {/*      onClick={handleNextSlide}*/}
        {/*      className='rounded-full h-full w-full flex justify-center items-center'*/}
        {/*    >*/}
        {/*      <GrPrevious className='text-3xl' />*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className='w-full md:px-10 pt-5 pb-10'>
          <div className=' pl-8  md:max-w-5xl  md:mx-auto  md:pl-0 md:py-2'>
            <Slider {...carouselSettings} ref={(slider: any) => (customSlider.current = slider)}>
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
            </Slider>
          </div>
        </div>

        {/*<div className='hidden relative md:flex items-center'>*/}
        {/*  <div className='absolute  h-[50px] w-[50px] left-[120px] md:-left-[108px] top-30 '>*/}
        {/*    <button*/}
        {/*      onClick={handlePrevSlide}*/}
        {/*      className='rounded-full h-full w-full flex justify-center items-center '*/}
        {/*    >*/}
        {/*      <GrNext className='text-3xl' />*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
export default FeaturedProducts;
