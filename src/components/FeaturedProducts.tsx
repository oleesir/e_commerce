import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import Slider from 'react-slick';
import { carouselSettings } from '../utils/carouselSettings.ts';
import ProductCard from './Cards/ProductCard.tsx';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '../types.ts';

const FeaturedProducts = ({ newArray }: { newArray: Product[] | undefined }) => {
  const customSlider = useRef();
  const handleNextSlide = () => {
    // @ts-ignore
    customSlider.current.slickNext();
  };

  const handlePrevSlide = () => {
    // @ts-ignore
    customSlider.current.slickPrev();
  };

  return (
    <div className=' w-full md:max-w-5xl  md:mx-auto'>
      <div className='flex'>
        <div className='hidden relative md:flex items-center'>
          <div className='absolute h-[50px] w-[50px] rounded-full shadow-md -left-2 top-30 bg-[#FFF]'>
            <button
              onClick={handleNextSlide}
              className='rounded-full h-full w-full flex justify-center items-center'
            >
              <GrFormPreviousLink className='text-3xl' />
            </button>
          </div>
        </div>
        <div className='w-full md:w-[910px] px-1 md:max-w-5xl  md:mx-auto pl-4 md:pl-0'>
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

        <div className='hidden relative md:flex items-center'>
          <div className='absolute  h-[50px] w-[50px] rounded-full shadow-md -left-14 top-30 bg-[#FFF]'>
            <button
              onClick={handlePrevSlide}
              className='rounded-full h-full w-full flex justify-center items-center '
            >
              <GrFormNextLink className='text-3xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProducts;
