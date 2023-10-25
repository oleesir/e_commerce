import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { navItemsMobile } from '@/utils/navItemsMobile.ts';
import { useGetUserCartQuery, useLoadUserQuery } from '@/features/oliveMarketApi.tsx';
import { useAppDispatch, useAppSelector } from '@/reduxHooks.ts';
import { useEffect } from 'react';
import { getTotalQuantity } from '@/features/oliveMarketSlice.tsx';

export const MobileSidebar = () => {
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const dispatch = useAppDispatch();

  const { totalQuantity, cartItems } = useAppSelector((state: any) => state.cart);

  useEffect(() => {
    if (cartItems) {
      dispatch(getTotalQuantity());
    }
  }, [cartItems, dispatch]);

  const navigate = useNavigate();

  const navToCart = () => {
    navigate('/cart');
  };
  return (
    <div className='flex lg:hidden inset-0 z-50 w-full px-5'>
      <Sheet>
        <SheetTrigger className=' w-full flex justify-between lg:hidden  hover:opacity-75 transition'>
          <Menu size={30} />
          <div className='flex'>
            <button className='mr-5'>
              <Search size={30} />
            </button>

            <div className='relative flex items-center cursor-pointer mr-5' onClick={navToCart}>
              {authUser?._id === undefined
                ? totalQuantity > 0 && (
                    <div className='absolute rounded-full w-[20px] h-[20px] bg-[#FD665E] text-[#FFF] pt-[3px] left-4 -top-2'>
                      <p className='text-[10px] text-center'>{totalQuantity}</p>
                    </div>
                  )
                : userCart?.totalQuantity > 0 && (
                    <div className='absolute rounded-full w-[20px] h-[20px] bg-[#FD665E] text-[#FFF] pt-[3px] left-4 -top-2'>
                      <p className='text-[10px] text-center'>{userCart?.totalQuantity}</p>
                    </div>
                  )}

              <button type='button'>
                <ShoppingCart size={30} />
              </button>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side='left' className='p-0 bg-white'>
          <div>
            {/*<NavLink to='/'>*/}
            {/*  <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>*/}
            {/*  <span className='text-lg font-titanOne text-[#FD665E]'>market</span>*/}
            {/*</NavLink>*/}

            <div className='w-full flex flex-col '>
              <div className='w-full grid justify-items-start '>
                {navItemsMobile.map((item: any, i: any) => {
                  return (
                    <SheetClose className='w-full'>
                      <button
                        key={i}
                        onClick={() => {
                          navigate(item.path);
                        }}
                        className=' w-full  flex items-start  py-2 pl-5 '
                      >
                        <p className='text-[#151875] text-[18px]'>{item.navItem}</p>
                      </button>
                    </SheetClose>
                  );
                })}
              </div>
            </div>
          </div>

          {/*<div className='flex'>*/}
          {/*  <button className='mr-5'>*/}
          {/*    <FiSearch size={28} />*/}
          {/*  </button>*/}

          {/*  <div className='relative flex items-center cursor-pointer mr-5' onClick={navToCart}>*/}
          {/*    {authUser?._id === undefined*/}
          {/*      ? totalQuantity > 0 && (*/}
          {/*          <div className='absolute rounded-full w-[20px] h-[20px] bg-[#FD665E] text-[#FFF] pt-[3px] left-4 -top-2'>*/}
          {/*            <p className='text-[10px] text-center'>{totalQuantity}</p>*/}
          {/*          </div>*/}
          {/*        )*/}
          {/*      : userCart?.totalQuantity > 0 && (*/}
          {/*          <div className='absolute rounded-full w-[20px] h-[20px] bg-[#FD665E] text-[#FFF] pt-[3px] left-4 -top-2'>*/}
          {/*            <p className='text-[10px] text-center'>{userCart?.totalQuantity}</p>*/}
          {/*          </div>*/}
          {/*        )}*/}

          {/*    <button type='button'>*/}
          {/*      <ShoppingCart />*/}
          {/*      /!*<PiShoppingCartLight size={25} />*!/*/}
          {/*    </button>*/}
          {/*  </div>*/}

          {/*  /!*<button onClick={handleMenu} className='block lg:hidden '>*!/*/}
          {/*  /!*  {!nav ? <AiOutlineMenu size={28} /> : <AiOutlineClose size={28} />}*!/*/}
          {/*  /!*</button>*!/*/}
          {/*</div>*/}
          {/*</div>*/}
        </SheetContent>
      </Sheet>
    </div>
  );
};
