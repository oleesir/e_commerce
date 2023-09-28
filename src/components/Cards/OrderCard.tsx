import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { BiChevronDown } from 'react-icons/bi';
import {
  useGetProductQuery,
  useGetUserQuery,
  useLoadUserQuery,
} from '../../features/oliveMarketApi.tsx';

const OrderCard = ({
  orderId,
  totalPriceAfterTax,
  cartItems,
  invoice,
  OrderDate,
}: {
  invoice: string;
  totalPriceAfterTax: number;
  orderId: string;
  cartItems: any;
  OrderDate: string;
}) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: queryProduct } = useGetProductQuery(product);
  const { data: foundUser } = useGetUserQuery(authUser?._id);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (queryProduct?._id && queryProduct?.slug) {
      navigate(`/${queryProduct?.slug}`, { state: { productId: queryProduct?._id } });
    }
  }, [navigate, product, queryProduct?._id, queryProduct?.slug]);

  const navigateToProduct = (productId: string) => {
    setProduct(productId);
  };

  return (
    <div className='flex flex-col w-full border-[1px] mb-5'>
      <div className='w-full flex justify-between  bg-[#F6F4EB] py-2.5 px-5'>
        <div className='grid grid-cols-3 gap-8'>
          <div>
            <p className='text-xs mb-1 font-bold'>Order Placed</p>
            <p className='text-xs'>{format(parseISO(OrderDate), 'MMMM d, yyyy')}</p>
          </div>
          <div>
            <p className='text-xs mb-1 font-bold'>Total</p>
            <p className='text-xs'>
              {new Intl.NumberFormat('en-CA', {
                style: 'currency',
                currency: 'CAD',
              }).format(totalPriceAfterTax)}
            </p>
          </div>
          <div className='relative'>
            <p className='text-xs mb-1 font-bold'>Delivered To</p>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='flex items-center cursor-pointer'
            >
              <p className='text-xs text-[#FD665E] mr-1'>{`${foundUser?.firstName} ${foundUser?.lastName}`}</p>
              <BiChevronDown />
            </button>
            {showPopup && (
              <div className=' bg-[#FFF] absolute shadow-2xl right-5 top-10 p-3'>
                <div className='flex w-full'>
                  <p className='text-xs font-bold'>{foundUser?.province},</p>
                </div>
                <div className='flex w-full'>
                  <p className='text-xs font-bold'>{foundUser?.city},</p>
                </div>
                <div className='flex w-full'>
                  <p className='text-xs font-bold'>{foundUser?.address}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-xs mb-1 font-bold'>ORDER #{orderId}</p>
          <div className='w-full flex justify-center'>
            <Link to={invoice} className='text-xs font-bold text-[#FD665E]'>
              Invoice
            </Link>
          </div>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <div className='grid grid-cols-3  py-4 px-5' key={cartItem?._id}>
          <div className='flex w-full col-span-2 '>
            <div className='pr-2'>
              <img
                src={cartItem?.image}
                className='w-[150px] h-[120px] border-[1px]'
                alt='image '
              />
            </div>

            <div className=' w-full'>
              <p className='text-xs mb-2'>
                {cartItem?.name.length > 260 ? cartItem?.name.slice(0, 240) : cartItem?.name}
                {cartItem?.name.length >= 260 && '...'}
              </p>
              <div className='mb-2 flex items-center'>
                <button
                  onClick={() => navigateToProduct(cartItem?.productId)}
                  className='border-[1px] text-xs  bg-[#F6F4EB] p-2'
                >
                  Purchase again
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <button className='w-full border-[1px] text-xs  bg-[#F6F4EB] py-2.5'>
              Write product review
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrderCard;
