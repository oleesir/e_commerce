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
    <div className=' text-card-foreground relative group flex flex-col w-[170px] md:w-[180px] h-[280px]  cursor-pointer pb-2  border-[1px] md:shadow-[0_8px_40px_0_rgba(49,32,138,0.05)]'>
      <img src={image} className='w-full h-[140px] md:h-[150px] ' alt='image ' />
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
      <div className='p-3'>
        <p className='text-xs mb-1'>
          {name.length > 40 ? name.slice(0, 20) : name}
          {name.length >= 40 && '...'}
        </p>
        <div className='mb-1 flex items-center'>
          <ReactStars value={rating} activeColors={['orange']} classNames='mr-1' size={15} />
          <p className='text-gray-500 text-xs'>({numberOfReviews})</p>
        </div>

        <p className='text-xs mb-1'>
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
              className='py-3 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-sm w-full'
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
