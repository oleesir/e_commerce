import { MdOutlinePersonOff, MdOutlinePersonOutline } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../utils/navItems.ts';
import { useDebounce } from '@uidotdev/usehooks';
import {
  useGetUserCartQuery,
  useLoadUserQuery,
  useLogoutMutation,
  useSearchProductsQuery,
} from '../features/oliveMarketApi.tsx';
import { getTotalQuantity } from '../features/oliveMarketSlice.tsx';
import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';
import SearchResult from './SearchResult.tsx';
import { MobileHeader } from '@/components/MobileHeader.tsx';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const [show, setShow] = useState(false);
  const [logout] = useLogoutMutation();
  const [queryText, setQueryText] = useState('');
  const debouncedSearchQuery = useDebounce(queryText, 500);
  const { data: listedProducts } = useSearchProductsQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery == '',
  });
  const { totalQuantity, cartItems } = useAppSelector((state: any) => state.cart);

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

  const handleLogout = async () => {
    await logout(null);
    setShow(false);
    if (location.pathname === '/cart') {
      navigate('/');
    }
  };

  const navToLogin = () => {
    if (authUser?._id === undefined) {
      navigate('/auth/login');
    } else {
      setShow((prevState) => !prevState);
    }
  };

  const navToCart = () => {
    navigate('/cart');
  };

  return (
    <div className='w-full fixed bg-[#FFF] drop-shadow-lg z-10 h-[70px] p-4'>
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
                      className={isActive ? 'text-sm text-[#FD665E]' : 'text-sm text-[#2C2C2C]'}
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
              <div className='relative'>
                <button
                  onClick={navToLogin}
                  className='flex items-center justify-start overflow-hidden transition-all duration-500  bg-[#FD665E] rounded-none text-[#FFF] group py-1.5 px-4 ml-8 mr-5'
                >
                  {authUser?._id === undefined ? (
                    <MdOutlinePersonOff size={20} className='mr-1' />
                  ) : (
                    <MdOutlinePersonOutline size={20} className='mr-1' />
                  )}
                  Account
                </button>
                {show ? (
                  <div className='w-[110px] h-[50px] bg-[#FFF] absolute shadow-2xl right-5 top-10'>
                    <button onClick={handleLogout} className=' w-full p-4 text-[#FD665E]'>
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
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
