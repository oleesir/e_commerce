import Slider from 'react-slick';
import { carouselSettings } from '../utils/carouselSettings.ts';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '../types.ts';
import CarouselCard from '@/components/Cards/CauroselCard.tsx';
import { GrNext, GrPrevious } from 'react-icons/gr';

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
    <div className=' w-full md:max-w-4xl  md:mx-auto py-10'>
      <div className=' w-full flex'>
        <div className='hidden  md:flex items-center'>
          <button
            onClick={handleNextSlide}
            className='rounded-full w-full flex justify-center items-center '
          >
            <GrPrevious className='text-3xl' />
          </button>
        </div>
        <div className='w-full md:px-15 '>
          <Slider
            {...carouselSettings}
            ref={(slider: any) => (customSlider.current = slider)}
            className=' pl-6 '
          >
            {newArray &&
              newArray.map((item: any) => (
                <CarouselCard
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

        <div className='hidden md:flex items-center'>
          <button
            onClick={handlePrevSlide}
            className='rounded-full h-full w-full flex justify-center items-center '
          >
            <GrNext className='text-3xl' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProducts;
