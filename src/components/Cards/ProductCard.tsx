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
    <div className=' relative group flex flex-col w-[150px] md:w-[170px] h-[280px] ease-in duration-300 md:hover:scale-105 md:hover:shadow-xl cursor-pointer pb-2 mr-5'>
      <img src={image} className='w-full h-[150px] ' alt='image ' />
      <div className='hidden md:flex justify-center items-center absolute top-0 left-0 h-full w-full'></div>
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
          {name.length > 40 ? name.slice(0, 30) : name}
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

        <div className='w-full  flex justify-center md:hidden'>
          <button
            type='button'
            onClick={navigateToProduct}
            className='py-2 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-xs w-full'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
