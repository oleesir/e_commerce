import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItemsMobile } from '@/utils/navItemsMobile.ts';
import {
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
import { ScrollArea } from '@/components/ui/scroll-area';

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
                        <p className='text-[#151875] font-medium text-[18px] max-w-prose '>
                          {item?.name}
                        </p>
                      </SheetClose>
                    );
                  })}
                </>

                <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                  <AccordionItem value='item-1' className='border-b-0'>
                    <AccordionTrigger className='hover:no-underline py-0'>
                      <p className='text-[#151875] text-[18px] max-w-prose'>Categories</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className=' w-full'>
                        <ScrollArea className='h-72 w-full rounded-none border-0'>
                          <div className='p-4'>
                            {categories &&
                              categories.map((item: any) => (
                                <SheetClose className='w-full' key={item?._id}>
                                  <button
                                    onClick={() => navigateToShopUsingCategory(item?.name)}
                                    className=' w-full flex items-start  py-2 pl-5 '
                                  >
                                    <p className='text-base max-w-prose text-zinc-800'>
                                      {item?.name}
                                    </p>
                                  </button>
                                </SheetClose>
                              ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                  <AccordionItem value='item-2' className='border-b-0'>
                    <AccordionTrigger className='hover:no-underline py-0'>
                      <p className='text-[#151875] text-[18px] max-w-prose'>Brands</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className=' w-full'>
                        <ScrollArea className='h-72 w-full rounded-none border-0'>
                          <div className='p-4'>
                            {brands &&
                              brands.map((item: any) => (
                                <SheetClose className='w-full' key={item?._id}>
                                  <button
                                    onClick={() => navigateToShopUsingBrand(item?.name)}
                                    className=' w-full flex items-start  py-2 pl-5 '
                                  >
                                    <p className='text-base max-w-prose text-zinc-800'>
                                      {item?.name}
                                    </p>
                                  </button>
                                </SheetClose>
                              ))}
                          </div>
                        </ScrollArea>
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
