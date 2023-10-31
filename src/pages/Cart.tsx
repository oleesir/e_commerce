import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';
import { getTotalAmount, getTotalQuantity } from '../features/oliveMarketSlice.tsx';
import { useEffect, useState } from 'react';
import CartItems from '../components/CartItems.tsx';
import SponsorsBanner from '../components/SponsorsBanner.tsx';
import { useGetUserCartQuery, useLoadUserQuery } from '../features/oliveMarketApi.tsx';
import CartItemsApi from '../components/CartItemsApi.tsx';
import { useNavigate } from 'react-router-dom';
import EmptyPage from '../components/EmptyPage.tsx';

const Cart = () => {
  const navigate = useNavigate();
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const { cartItems, totalAmount } = useAppSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();
  const [cartState, setCartState] = useState(cartItems);

  useEffect(() => {
    if (cartItems) {
      setCartState(cartItems);
      dispatch(getTotalQuantity());
      dispatch(getTotalAmount());
    }
  }, [dispatch, cartItems, setCartState]);

  const cartItemResult = () => {
    if (authUser?._id === undefined) {
      return cartState?.length === 0;
    } else {
      return userCart?.cartItems.length === 0;
    }
  };

  const handleCheckout = () => {
    navigate('/create_order');
    if (authUser?._id === undefined) {
      navigate('/auth/login');
    } else {
      navigate('/create_order');
    }
  };

  return (
    <>
      {cartItemResult() ? (
        <EmptyPage message='Your Cart is Empty' image={'/undraw_empty_cart.png'} />
      ) : (
        <div className='w-full flex pt-[100px]'>
          <div className='py-4 max-w-5xl mx-auto px-2'>
            <div className='flex flex-col w-full'>
              <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
                {authUser?._id === undefined ? (
                  <CartItems cartState={cartState} />
                ) : (
                  <CartItemsApi cartFromApi={userCart?.cartItems} />
                )}

                <div className='w-full'>
                  <div className='flex w-full flex-col shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] border-[1px] p-4'>
                    <div className='mb-5'>
                      <p className='text-lg font-bold'>Order Summary</p>
                    </div>
                    <div className='w-full flex flex-col'>
                      <div className='flex w-full justify-between mb-3'>
                        <p className='text-sm font-bold'>Subtotal</p>
                        {authUser?._id === undefined ? (
                          <p className='text-sm '>
                            {new Intl.NumberFormat('en-CA', {
                              style: 'currency',
                              currency: 'CAD',
                            }).format(totalAmount / 100)}
                          </p>
                        ) : (
                          <p className='text-sm '>
                            {new Intl.NumberFormat('en-CA', {
                              style: 'currency',
                              currency: 'CAD',
                            }).format(userCart?.totalPrice / 100)}
                          </p>
                        )}
                      </div>
                      <div className='flex w-full justify-between border-t-[1px] pt-2 mb-5'>
                        <p className='text-sm font-bold'>Total</p>
                        {authUser?._id === undefined ? (
                          <p className='text-sm '>
                            {new Intl.NumberFormat('en-CA', {
                              style: 'currency',
                              currency: 'CAD',
                            }).format(totalAmount / 100)}
                          </p>
                        ) : (
                          <p className='text-sm '>
                            {new Intl.NumberFormat('en-CA', {
                              style: 'currency',
                              currency: 'CAD',
                            }).format(userCart?.totalPrice / 100)}
                          </p>
                        )}
                      </div>

                      <div className='flex w-full'>
                        <button
                          type='button'
                          onClick={handleCheckout}
                          className='rounded-none bg-[#FD665E] text-[#FFF] text-base font-bold py-4 px-8 cursor-pointer w-full'
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
      )}
    </>
  );
};
export default Cart;
