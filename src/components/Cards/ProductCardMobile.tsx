import ReactStars from 'react-rating-star-with-type';
import { useNavigate } from 'react-router-dom';

const ProductCardMobile = ({
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
    <div onClick={navigateToProduct} className='grid grid-cols-3 mb-5 border-b-[1px] py-3'>
      <div className='w-full flex justify-center'>
        <img src={image} className='w-[150px] h-[120px] ' alt='image ' />
      </div>

      <div className='col-span-2 p-3'>
        <p className='text-sm mb-2'>
          {name.length > 60 ? name.slice(0, 40) : name}
          {name.length >= 60 && '...'}
        </p>
        <div className='mb-2 flex items-center'>
          <ReactStars value={rating} activeColors={['orange']} classNames='mr-1' size={15} />
          <p className='text-gray-500 text-xs'>({numberOfReviews})</p>
        </div>

        <p className='text-xs font-bold mb-1'>
          {new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD',
          }).format(price)}
        </p>
      </div>
    </div>
  );
};
export default ProductCardMobile;
