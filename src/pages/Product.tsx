import ReactStars from 'react-rating-star-with-type';
import Accordion from '../components/Accordion.tsx';
import ViewCard from '../components/Cards/ViewCard.tsx';
import Carousel from 'react-multi-carousel';
import { responsive } from '../utils/responsive.ts';
import SponsorsBanner from '../components/SponsorsBanner.tsx';

const Product = () => {
  return (
    <div className='w-full mt-[150px]'>
      <div className='max-w-5xl  mx-auto'>
        <div className='w-full flex flex-col'>
          <div className='grid grid-cols-2 gap-8'>
            <div className='flex flex-col'>
              <div className='w-full flex items-center justify-center'>
                <img src='/black_couch.jpeg' className='w-[300px] h-[300px]' alt='product' />
              </div>
              <div className='w-full flex justify-center'>
                <div className='w-2/3  flex justify-evenly'>
                  <img
                    src='/black_couch.jpeg'
                    className='w-[60px] h-[60px] mr-2 cursor-pointer'
                    alt='product_image '
                  />
                  <img
                    src='/black_couch.jpeg'
                    className='w-[60px] h-[60px]  mr-2 cursor-pointer'
                    alt='product_image '
                  />
                  <img
                    src='/black_couch.jpeg'
                    className='w-[60px] h-[60px] mr-2 cursor-pointer'
                    alt='product_image '
                  />
                  <img
                    src='/black_couch.jpeg'
                    className='w-[60px] h-[60px] mr-2 cursor-pointer'
                    alt='product_image '
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col border-l-[1px] pl-3'>
              <p className='text-[24px] mb-5'>
                Exclusive BenYao 7Seaters Executive Living Room Set.
              </p>
              <div className='flex w-full '>
                <p className='text-[12px] font-bold'>Brand: </p>
                <p className='text-[12px] ml-1'>
                  Exclusive BenYao 7Seaters Executive Living Room Set.
                </p>
              </div>
              <div className='flex w-full '>
                <p className='text-[20px] font-bold'>Price: </p>
                <p className='text-[20px] ml-1'>$1,000</p>
              </div>
              <div className='flex items-center mb-5'>
                <ReactStars value={4.5} activeColors={['orange']} classNames='mr-1' size={15} />
                <p className='text-gray-500 text-xs mt-1'>(120)</p>
              </div>

              <button
                type='submit'
                className='rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer'
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className='w-full mt-10'>
            <Accordion />
          </div>
          <div className='w-full flex flex-col mt-10'>
            <div className='flex mb-5'>
              <p className='text-[20px]'>You may also like</p>
            </div>
            <div className='w-full'>
              <Carousel
                responsive={responsive}
                // arrows={false}
                // customLeftArrow={<CustomLeftArrow />}
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
          <div className='w-full  mt-20 '>
            <SponsorsBanner />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
