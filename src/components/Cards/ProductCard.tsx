import ReactStars from 'react-rating-star-with-type';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  image,
  name,
  rating,
  price,
  numberOfReviews,
  slug,
  productId,
}: {
  image: string | undefined;
  name: string;
  rating: number;
  price: number;
  slug: string;
  productId: string | undefined;
  numberOfReviews: number;
}) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`/${slug}`, { state: { productId } });
  };
  return (
    <>
      <div
        onClick={navigateToProduct}
        className='hidden  relative group md:flex flex-col w-[160px] md:w-[180px] h-[280px]  cursor-pointer p-2  border-[1px] shadow-[0_8px_40px_0_rgba(49,32,138,0.05)]'
      >
        <img src={image} className='w-full h-[140px] md:h-[150px] ' alt='image ' />
        <div className='hidden absolute top-0 left-0 w-full h-full md:flex justify-center items-center lg:opacity-0 opacity-100 lg:hover:opacity-100'>
          <div className='w-full h-full flex justify-center items-end p-2'>
            <div className='w-full'>
              <button className='py-2 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-xs w-full'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <p className='text-xs mb-1 text-zinc-700'>
            {name.length > 50 ? name.slice(0, 30) : name}
            {name.length >= 50 && '...'}
          </p>
          <div className='mb-1 flex items-center'>
            <ReactStars value={rating} activeColors={['orange']} classNames='mr-1' size={15} />
            <p className=' text-xs text-zinc-700'>({numberOfReviews})</p>
          </div>

          <p className='text-sm font-semibold mb-1 max-w-prose text-zinc-800'>
            {new Intl.NumberFormat('en-CA', {
              style: 'currency',
              currency: 'CAD',
            }).format(price)}
          </p>
          <div className='absolute bottom-0 left-0 w-full'>
            <div className='w-full  flex justify-center md:hidden'>
              <button
                type='button'
                onClick={navigateToProduct}
                className='py-2 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-sm w-full'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={navigateToProduct}
        className=' md:hidden grid grid-cols-3 mb-5 border-b-[1px] py-3'
      >
        <div className='w-full flex justify-center'>
          <img src={image} className='w-[150px] h-[120px] border-[1px]' alt='image ' />
        </div>

        <div className='col-span-2 p-3'>
          <p className='text-xs mb-2 text-zinc-700'>
            {name.length > 100 ? name.slice(0, 80) : name}
            {name.length >= 100 && '...'}
          </p>
          <div className='mb-2 flex items-center'>
            <ReactStars value={rating} activeColors={['orange']} classNames='mr-1' size={15} />
            <p className='text-zinc-700 text-xs'>({numberOfReviews})</p>
          </div>

          <p className='text-base font-semibold mb-1 text-zinc-700'>
            {new Intl.NumberFormat('en-CA', {
              style: 'currency',
              currency: 'CAD',
            }).format(price)}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
