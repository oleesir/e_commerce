import ReactStars from 'react-rating-star-with-type';
import { useNavigate } from 'react-router-dom';

const CarouselCard = ({
  image,
  name,
  rating,
  price,
  numberOfReviews,
  slug,
  productId,
}: {
  image: string;
  name: string;
  rating: number;
  price: number;
  slug: string;
  productId: string;
  numberOfReviews: number;
}) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`/${slug}`, { state: { productId } });
  };
  return (
    <div className='  relative group flex flex-col w-[160px] md:w-[190px] h-[280px]  cursor-pointer py-2 px-[5px]  border-[1px]  overflow-x-auto mx-0 '>
      <img src={image} className='w-full h-[120px] md:h-[140px] ' alt='image ' />
      <div className='hidden absolute top-0 left-0 w-full h-full md:flex justify-center items-center opacity-0 hover:opacity-100'>
        <div className='w-full h-full flex justify-center items-end p-2'>
          <div className='w-full'>
            <button
              onClick={navigateToProduct}
              className='py-2 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-xs w-full'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='w-full mb-1'>
        <p className='text-xs  max-w-prose text-zinc-800'>
          {name.length > 50 ? name.slice(0, 40) : name}
          {name.length >= 50 && '...'}
        </p>
        <div className='mb-1 flex items-center'>
          <ReactStars value={rating} activeColors={['orange']} classNames='mr-1' size={12} />
          <p className='text-gray-500 text-xs '>({numberOfReviews})</p>
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
              className='py-4 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-sm w-full'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselCard;
