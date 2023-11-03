import { PiShoppingCartLight } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../utils/navItems.ts';
import { useDebounce } from '@uidotdev/usehooks';
import {
  useGetUserCartQuery,
  useGetUserQuery,
  useLoadUserQuery,
  useLogoutMutation,
  useSearchProductsQuery,
} from '../features/oliveMarketApi.tsx';
import { getTotalQuantity } from '../features/oliveMarketSlice.tsx';
import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';
import SearchResult from './SearchResult.tsx';
import { MobileHeader } from '@/components/MobileHeader.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DoorClosed, DoorOpen, User } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import Loader from '@/components/Loaders/Loader.tsx';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    data: authUser,
    isLoading: authUserLoading,
    isFetching: authUserFetching,
  } = useLoadUserQuery(undefined);
  const { data: user, isLoading: userLoading } = useGetUserQuery(authUser?._id);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const [queryText, setQueryText] = useState('');
  const debouncedSearchQuery = useDebounce(queryText, 500);
  const { data: listedProducts } = useSearchProductsQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery == '',
  });
  const { totalQuantity, cartItems } = useAppSelector((state: any) => state.cart);

  useEffect(() => {}, [authUser?._id]);

  useEffect(() => {
    if (location.pathname === '/orders') {
      if (authUser?._id === undefined) {
        navigate('/auth/login');
      }
    }
  }, [authUser, navigate, location.pathname]);

  useEffect(() => {
    if (cartItems) {
      dispatch(getTotalQuantity());
    }
  }, [cartItems, dispatch]);

  if (authUserLoading || authUserFetching || logoutLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handleLogout = async () => {
    await logout(null);
  };

  const navToLogin = () => {
    if (authUser?._id === undefined) {
      navigate('/auth/login');
    }
  };

  const navToCart = () => {
    navigate('/cart');
  };

  return (
    <div className='w-full fixed bg-[#FFF] drop-shadow-lg z-20 h-[70px] p-4'>
      <div className=' max-w-5xl  mx-auto'>
        <div className='hidden lg:flex justify-between '>
          <div className='flex justify-between items-center'>
            <NavLink to='/' className='cursor-pointer'>
              <span className='text-2xl mb-0 font-bold text-[#FD665E]'>Olive</span>
              <span className='text-lg font-titanOne text-[#FD665E]'>market</span>
            </NavLink>
            <div className='ml-8 flex'>
              {navItems.map((item: any, i: any) => {
                const isActive = location.pathname.includes(item.root);

                return (
                  <NavLink to={item.path} key={i} className='relative group cursor-pointer ml-5'>
                    <span
                      className={
                        isActive
                          ? 'text-sm text-[#FD665E] max-w-prose'
                          : 'text-sm max-w-prose text-zinc-800'
                      }
                    >
                      {item.navItem}
                    </span>
                    <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FD665E] transition-all group-hover:w-full duration-500 rounded-md'></span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className='flex justify-between  items-center w-full'>
            <div className='relative text-gray-600 w-full'>
              <input
                type='text'
                name='search'
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                placeholder='Search products, brands and categories'
                className='bg-white h-9 pl-2  rounded-none text-sm focus:outline-none border-[1px] w-full ml-5'
              />
              <button type='submit' className='absolute -right-5 top-0  bg-[#FD665E] py-2.5 px-5'>
                <FiSearch color={'#FFF'} />
              </button>
              {queryText ? (
                listedProducts && listedProducts.length !== 0 ? (
                  <SearchResult listedProducts={listedProducts} setQueryText={setQueryText} />
                ) : null
              ) : null}
            </div>
            <div className='flex justify-between items-center'>
              <DropdownMenu>
                {userLoading && (
                  <Skeleton className='flex items-center bg-[#FD665E] rounded-none text-[#FFF] group h-9 w-24 ml-8 mr-5 focus:outline-none' />
                )}
                {!userLoading && (
                  <DropdownMenuTrigger className='flex items-center bg-[#FD665E] rounded-none text-[#FFF] group py-1.5 px-4 ml-8 mr-5 focus:outline-none'>
                    {authUser?._id !== undefined ? <p>Hi,{user?.firstName}</p> : <p>Account</p>}
                  </DropdownMenuTrigger>
                )}

                <DropdownMenuContent className='rounded-none'>
                  {authUser?._id === undefined ? (
                    <DropdownMenuItem
                      className='flex items-center cursor-pointer'
                      onClick={navToLogin}
                    >
                      <DoorOpen size={15} className='mr-1' />
                      <p className='text-sm'>Login</p>
                    </DropdownMenuItem>
                  ) : (
                    <>
                      <DropdownMenuItem className='flex items-center cursor-pointer'>
                        <User size={15} className='mr-1' />
                        <p className='text-sm'>Profile</p>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className='flex items-center cursor-pointer'
                      >
                        <DoorClosed size={15} className='mr-1' />
                        <p className='text-sm'>Logout</p>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                type='button'
                className='relative flex items-center cursor-pointer'
                onClick={navToCart}
              >
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

                <PiShoppingCartLight size={25} className='cursor-pointer' />
              </button>
            </div>
          </div>
        </div>
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
