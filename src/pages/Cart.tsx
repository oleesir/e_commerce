import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';
import { getTotalAmount, getTotalQuantity } from '../features/oliveMarketSlice.tsx';
import { useEffect, useState } from 'react';
import CartItems from '../components/CartItems.tsx';
import SponsorsBanner from '../components/SponsorsBanner.tsx';

const Cart = () => {
  const { cartItems, cartTotalAmount } = useAppSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();

  const [cartState, setCartState] = useState(cartItems);

  useEffect(() => {
    if (cartItems) {
      setCartState(cartItems);
      dispatch(getTotalQuantity());
      dispatch(getTotalAmount());
    }
  }, [dispatch, cartItems, setCartState]);
  return (
    <div className='w-full flex pt-[100px]'>
      <div className='py-4 max-w-5xl mx-auto'>
        <div className='flex flex-col w-full'>
          <div className='grid grid-cols-4 gap-4'>
            <CartItems cartState={cartState} />
            <div>
              <div className='flex w-full flex-col shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] border-[1px] p-4'>
                <div className='mb-5'>
                  <p className='text-lg font-bold'>Order Summary</p>
                </div>
                <div className='w-full flex flex-col'>
                  <div className='flex w-full justify-between mb-3'>
                    <p className='text-sm font-bold'>Subtotal</p>
                    <p className='text-sm '>
                      {new Intl.NumberFormat('en-CA', {
                        style: 'currency',
                        currency: 'CAD',
                      }).format(cartTotalAmount / 100)}
                    </p>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px] pt-2 mb-5'>
                    <p className='text-sm font-bold'>Total</p>
                    <p className='text-sm '>
                      {new Intl.NumberFormat('en-CA', {
                        style: 'currency',
                        currency: 'CAD',
                      }).format(cartTotalAmount / 100)}
                    </p>
                  </div>

                  <div className='flex w-full'>
                    <button
                      type='button'
                      className='rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer w-full'
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full  mt-20 '>
            <SponsorsBanner />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
