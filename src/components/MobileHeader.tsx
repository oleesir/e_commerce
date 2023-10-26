import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItemsMobile } from '@/utils/navItemsMobile.ts';
import {
  // useFilterByCategoryAndBrandQuery,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetUserCartQuery,
  useLoadUserQuery,
} from '@/features/oliveMarketApi.tsx';
import { useAppDispatch, useAppSelector } from '@/reduxHooks.ts';

import { getTotalQuantity } from '@/features/oliveMarketSlice.tsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const MobileHeader = () => {
  const { state }: { state: any } = useLocation();
  const navigate = useNavigate();
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: categories } = useGetCategoriesQuery(undefined);
  const { data: brands } = useGetBrandsQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const dispatch = useAppDispatch();
  const { totalQuantity, cartItems } = useAppSelector((state: any) => state.cart);
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [emptyState, setEmptyState] = useState(null);

  useEffect(() => {
    if (state !== null) {
      setEmptyState(null);
    }
  }, [state, setEmptyState]);

  useEffect(() => {
    if (cartItems) {
      dispatch(getTotalQuantity());
    }
  }, [cartItems, dispatch]);

  useEffect(() => {
    if (category) {
      navigate('/shop', { state: { category } });
    }
  }, [category, navigate]);

  useEffect(() => {
    if (brand) {
      navigate('/shop', { state: { brand } });
    }
  }, [brand, navigate]);

  const navToCart = () => {
    navigate('/cart');
  };

  const navToPath = (value: string) => {
    if (emptyState === null) {
      navigate(value);
    }
  };

  const navigateToShopUsingCategory = (value: string) => {
    setCategory(value);
  };

  const navigateToShopUsingBrand = (value: string) => {
    setBrand(value);
  };

  return (
    <div className='flex lg:hidden inset-0 z-50 w-full px-5'>
      <Sheet>
        <SheetTrigger className=' w-full flex  lg:hidden  hover:opacity-75 transition'>
          <Menu size={30} />
        </SheetTrigger>

        <SheetContent side='top' className='pt-5 px-0 bg-white'>
          <div>
            <div className='w-full flex flex-col '>
              <div className='w-full grid justify-items-start '>
                <>
                  {navItemsMobile.map((item: any, i: any) => {
                    return (
                      <SheetClose
                        key={i}
                        onClick={() => navToPath(item?.path)}
                        className=' w-full  flex items-start  py-2 pl-5 '
                      >
                        <p className='text-[#151875] font-medium text-[18px]'>{item?.name}</p>
                      </SheetClose>
                    );
                  })}
                </>

                <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                  <AccordionItem value='item-1' className='border-b-0'>
                    <AccordionTrigger className='hover:no-underline py-0'>
                      <p className='text-[#151875] text-[18px]'>Categories</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='overflow-y-auto max-h-80 shadow-inner w-full'>
                        {categories &&
                          categories.map((item: any) => {
                            return (
                              <SheetClose className='w-full' key={item?._id}>
                                <button
                                  type='button'
                                  onClick={() => navigateToShopUsingCategory(item?.name)}
                                  className=' w-full flex items-start  py-2 pl-5 '
                                >
                                  <p className='text-[#151875] text-base'>{item?.name}</p>
                                </button>
                              </SheetClose>
                            );
                          })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                  <AccordionItem value='item-2' className='border-b-0'>
                    <AccordionTrigger className='hover:no-underline py-0'>
                      <p className='text-[#151875] text-[18px]'>Brands</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='overflow-y-auto max-h-80 shadow-inner w-full'>
                        {brands &&
                          brands.map((item: any) => {
                            return (
                              <SheetClose className='w-full' key={item?._id}>
                                <button
                                  onClick={() => navigateToShopUsingBrand(item?.name)}
                                  className=' w-full flex items-start  py-2 pl-5 '
                                >
                                  <p className='text-[#151875] text-base'>{item?.name}</p>
                                </button>
                              </SheetClose>
                            );
                          })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className='flex'>
        <button className='mr-5'>
          <Search size={30} />
        </button>
        <div className='relative flex items-center cursor-pointer ' onClick={navToCart}>
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
    </div>
  );
};
