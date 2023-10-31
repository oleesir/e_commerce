import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '@/reduxHooks.ts';
import { addToCart, decreaseItem, removeItem } from '../../features/oliveMarketSlice.tsx';
import {
  useDecrementItemInCartApiMutation,
  useDeleteItemInCartApiMutation,
  useGetProductQuery,
  useIncrementItemInCartApiMutation,
  useLoadUserQuery,
} from '../../features/oliveMarketApi.tsx';
import { Minus, Plus } from 'lucide-react';

const CartCard = ({
  cartItemId,
  price,
  name,
  images,
  quantity,
}: {
  cartItemId: string;
  price: number;
  name: string | undefined;
  images: string | undefined;
  quantity: number;
}) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state: any) => state.cart);
  const [incrementItemInCartApi] = useIncrementItemInCartApiMutation();
  const [decrementItemInCartApi] = useDecrementItemInCartApiMutation();
  const [deleteItemInCartApi] = useDeleteItemInCartApiMutation();
  const { data: authUser } = useLoadUserQuery(undefined);
  const selectedItem = cartItems.find((item: any) => item?._id === cartItemId);
  const { data: queryProduct } = useGetProductQuery(cartItemId);

  const handleIncreaseProduct = async () => {
    if (authUser?._id === undefined) {
      dispatch(addToCart(selectedItem));
    } else {
      await incrementItemInCartApi({
        productId: cartItemId,
        price: price / 100,
        cartId: authUser?.cartId,
        name: queryProduct?.name,
        image: queryProduct?.images[0].secureUrl,
      });
    }
  };

  const handleDecreaseProduct = async () => {
    if (authUser?._id === undefined) {
      dispatch(decreaseItem(selectedItem));
    } else {
      await decrementItemInCartApi({
        productId: cartItemId,
        price: price / 100,
        cartId: authUser?.cartId,
      });
    }
  };

  const isDisabled =
    authUser?._id === undefined
      ? selectedItem?.quantity === selectedItem?.countInStock
      : quantity === queryProduct?.countInStock;

  const handleRemoveItem = async () => {
    if (authUser?._id === undefined) {
      dispatch(removeItem(selectedItem));
    } else {
      await deleteItemInCartApi({ productId: cartItemId, cartId: authUser?.cartId });
    }
  };

  return (
    <div className=' w-full border-[1px] p-4 shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] mb-5'>
      <div className='grid grid-cols-4 gap-4'>
        <div className=' flex justify-center'>
          <img src={images} className='w-[100px] h-[100px] ' alt='image ' />
        </div>
        <div className='col-span-3'>
          <div className='w-full flex justify-between'>
            <div className='flex flex-col w-1/2'>
              <p className='text-sm mb-5'>{name}</p>
              <div className='w-full mb-5'>
                <div className='flex w-1/3  justify-between'>
                  <button
                    type='button'
                    disabled={selectedItem?.quantity === 1 || quantity === 1}
                    onClick={handleDecreaseProduct}
                    className={
                      selectedItem?.quantity === 1 || quantity === 1
                        ? 'py-[10px] px-[10px] bg-[#FD665E] text-[#FFF] cursor-not-allowed opacity-50'
                        : 'py-[10px] px-[10px] bg-[#FD665E] text-[#FFF] cursor-pointer'
                    }
                  >
                    <Minus size={20} color='#FFF' />
                  </button>
                  <div className='p-[10px] flex items-center'>
                    <p className='text-base font-bold'>{quantity}</p>
                  </div>
                  <button
                    type='button'
                    disabled={isDisabled}
                    onClick={handleIncreaseProduct}
                    className={
                      isDisabled
                        ? 'py-[10px] px-[10px] bg-[#FD665E] text-[#FFF] cursor-not-allowed opacity-50'
                        : 'py-[10px] px-[10px] bg-[#FD665E] text-[#FFF] cursor-pointer'
                    }
                  >
                    <Plus size={20} color='#FFF' />
                  </button>
                </div>
              </div>
              <div className='w-full'>
                <div className='flex '>
                  <div className='flex '>
                    <button type='button' onClick={handleRemoveItem} className='p-[5px] flex'>
                      <RiDeleteBin6Line size={15} color='#FD665E' />
                      <p className='text-[#FD665E] text-xs font-bold ml-1'>Remove</p>
                    </button>

                    <button type='button' className='p-[5px] flex'>
                      <BsBookmark size={15} color='#FD665E' />
                      <p className='text-[#FD665E] text-xs font-bold ml-1'>Save </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='text-sm font-bold'>
                {new Intl.NumberFormat('en-CA', {
                  style: 'currency',
                  currency: 'CAD',
                }).format(price / 100)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartCard;
