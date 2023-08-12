import ProductCard from './Cards/ProductCard.tsx';
import { useGetProductsQuery } from '../features/oliveMarketApi.tsx';
import ProductCardMobile from './Cards/ProductCardMobile.tsx';

const TrendingProduct = () => {
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[30px] font-bold text-[#151875]'>Trending Products</p>
      </div>
      <div className='w-full flex mt-10'>
        <div className='max-w-5xl  mx-auto'>
          <>
            <div className='hidden md:grid gap-x-8 gap-y-8 md:grid-cols-4'>
              {data &&
                data.map((item: any) => (
                  <ProductCard
                    key={item._id}
                    slug={item?.slug}
                    productId={item?._id}
                    image={item.images[0].secureUrl}
                    name={item.name}
                    rating={item.rating}
                    price={item.price / 100}
                    numberOfReviews={item.numberOfReviews}
                  />
                ))}
            </div>
            <div className='flex flex-col md:hidden'>
              {data &&
                data.map((item: any) => (
                  <ProductCardMobile
                    key={item._id}
                    slug={item?.slug}
                    productId={item?._id}
                    image={item.images[0].secureUrl}
                    name={item.name}
                    rating={item.rating}
                    price={item.price / 100}
                    numberOfReviews={item.numberOfReviews}
                  />
                ))}
            </div>
          </>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 py-10'>
            <div className='w-full bg-[#FFF6FB] py-4 px-8 mb-5 md:mb-0'>
              <div>
                <p className='text-sm'>23% off in all products</p>
                <button className='cursor-pointer'>
                  <p className='text-xs underline text-[#FD665E]'>shop Now</p>
                </button>
              </div>
              <div className='w-full grid justify-items-end'>
                <img src='/new_chair.png' className='w-[100px] h-[100px]' alt='image' />
              </div>
            </div>
            <div className='w-full  bg-[#EEEFFB] py-4 px-8 mb-5 md:mb-0'>
              <div>
                <p className='text-sm'>23% off in all products</p>
                <button className='cursor-pointer'>
                  <p className='text-xs underline text-[#FD665E]'>View Collections</p>
                </button>
              </div>
              <div className='w-full grid justify-items-end'>
                <img src='/new_chair.png' className='w-[100px] h-[100px]' alt='image' />
              </div>
            </div>
            <div className='w-full flex flex-col justify-between'>
              <div className='flex items-center mb-3'>
                <img src='/white_chair.png ' alt='image' className='w-[60px] h-[40px] mr-4' />
                <div>
                  <p className='text-xs'>Executive Seat chair</p>
                  <p className='text-xs'>$200</p>
                </div>
              </div>
              <div className='flex items-center mb-3'>
                <img src='/white_chair.png ' alt='image' className='w-[60px] h-[40px] mr-4' />
                <div>
                  <p className='text-xs'>Executive Seat chair</p>
                  <p className='text-xs'>$200</p>
                </div>
              </div>
              <div className='flex items-center '>
                <img src='/white_chair.png ' alt='image' className='w-[60px] h-[40px] mr-4' />
                <div>
                  <p className='text-xs'>Executive Seat chair</p>
                  <p className='text-xs'>$200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingProduct;
