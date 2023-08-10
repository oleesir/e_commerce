import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../reduxHooks.ts';
import { addToCart, decreaseItem, removeItem } from '../../features/oliveMarketSlice.tsx';

const CartCard = ({
  cartItemId,
  price,
  name,
  images,
  quantity,
}: {
  cartItemId: string;
  price: number;
  name: string;
  images: string;
  quantity: number;
}) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state: any) => state.cart);
  const selectedItem = cartItems.find((item: any) => item?._id === cartItemId);

  const isDisabled = selectedItem?.cartQuantity === selectedItem?.countInStock;

  const handleIncreaseProduct = () => {
    dispatch(addToCart(selectedItem));
  };

  const handleDecreaseProduct = () => {
    dispatch(decreaseItem(selectedItem));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(selectedItem));
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
              <p className='text-xs mb-5'>{name}</p>
              <div className='w-full mb-5'>
                <div className='flex w-1/3  justify-between'>
                  <button
                    type='button'
                    disabled={selectedItem?.cartQuantity === 1}
                    onClick={handleDecreaseProduct}
                    className={
                      selectedItem?.cartQuantity === 1
                        ? 'py-[5px] px-[8px] bg-[#FD665E] text-[#FFF] cursor-not-allowed opacity-50'
                        : 'py-[5px] px-[8px] bg-[#FD665E] text-[#FFF] cursor-pointer'
                    }
                  >
                    <RiSubtractLine size={10} color='#FFF' />
                  </button>
                  <div className='p-[5px] flex items-center'>
                    <p className='text-xs font-bold'>{quantity}</p>
                  </div>
                  <button
                    type='button'
                    disabled={isDisabled}
                    onClick={handleIncreaseProduct}
                    className={
                      isDisabled
                        ? 'py-[5px] px-[8px] bg-[#FD665E] text-[#FFF] cursor-not-allowed opacity-50'
                        : 'py-[5px] px-[8px] bg-[#FD665E] text-[#FFF] cursor-pointer'
                    }
                  >
                    <RiAddLine size={10} color='#FFF' />
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
