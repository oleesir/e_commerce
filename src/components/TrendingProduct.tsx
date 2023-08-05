import ProductCard from './Cards/ProductCard.tsx';
import { useGetProductsQuery } from '../features/oliveMarketApi.tsx';

const TrendingProduct = () => {
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[30px] font-bold text-[#151875]'>Trending Products</p>
      </div>
      <div className='w-full flex mt-10'>
        <div className='max-w-5xl  mx-auto'>
          <div className='grid grid-cols-4 gap-x-8'>
            {data &&
              data.map((item: any) => (
                <ProductCard
                  key={item._id}
                  image={item.images[0].secureUrl}
                  name={item.name}
                  rating={item.rating}
                  price={item.price / 100}
                  numberOfReviews={item.numberOfReviews}
                />
              ))}
          </div>
          <div className='grid grid-cols-3 gap-x-4 py-10'>
            <div className='w-full bg-[#FFF6FB] py-4 px-8'>
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
            <div className='w-full  bg-[#EEEFFB] py-4 px-8'>
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
              <div className='flex items-center '>
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
