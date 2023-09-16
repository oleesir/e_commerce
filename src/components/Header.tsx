import { MdOutlinePersonOff, MdOutlinePersonOutline } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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
import { navItemsMobile } from '../utils/navItemsMobile.ts';
import SearchResult from './SearchResult.tsx';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false);
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

  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full fixed bg-[#FFF] drop-shadow-lg z-10'>
      <div className='py-4 max-w-5xl  mx-auto'>
        <div className='hidden lg:flex justify-between '>
          <div className='flex justify-between items-center'>
            <NavLink to={'/'} className='cursor-pointer'>
              <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
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
                  className=' relative inline-flex items-center justify-start overflow-hidden transition-all duration-500  bg-[#FD665E] rounded-none  hover:bg-[#FFF] group py-2 px-4 ml-8 mr-5'
                >
                  <span className='w-0 h-0 rounded-md bg-[#FFF] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                  <span className='w-full text-[#FFF] text-sm transition-colors duration-300 ease-in-out group-hover:text-[#FD665E] z-10 flex items-center'>
                    {authUser?._id === undefined ? (
                      <MdOutlinePersonOff size={20} className='mr-1' />
                    ) : (
                      <MdOutlinePersonOutline size={20} className='mr-1' />
                    )}
                    Account
                  </span>
                </button>
                {show ? (
                  <div className='w-[110px] h-[50px] bg-[#FFF] absolute shadow-2xl right-5 top-10'>
                    <button onClick={handleLogout} className=' w-full p-4 text-[#FD665E]'>
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
              <div className='relative flex items-center cursor-pointer' onClick={navToCart}>
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
                  <PiShoppingCartLight size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden inset-0 z-50 w-full justify-between px-5'>
          <NavLink to='/'>
            <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
            <span className='text-lg font-titanOne text-[#FD665E]'>market</span>
          </NavLink>
          <div
            className={
              nav
                ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex  w-full h-screen bg-[#F3F6F9]  ease-in duration-300 z-[1035]'
                : 'lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex w-full h-screen bg-[#FD665E]  ease-in-out duration-300'
            }
          >
            <div className='w-full flex flex-col'>
              <div className='w-full grid justify-items-end mb-5 p-5'>
                <button onClick={handleMenu}>
                  <AiOutlineClose size={28} color='#151875' />
                </button>
              </div>

              <div className='w-full grid justify-items-start '>
                {navItemsMobile.map((item: any, i: any) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        navigate(item.path);
                        setNav(!nav);
                      }}
                      className=' w-full border-t-[1px] flex items-start  py-2 pl-5 border-[#151875]'
                    >
                      <p className='text-[#151875] text-[18px]'>{item.navItem}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='flex'>
            <button className='mr-5'>
              <FiSearch size={28} />
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
                <PiShoppingCartLight size={25} />
              </button>
            </div>

            <button onClick={handleMenu} className='block lg:hidden '>
              {!nav ? <AiOutlineMenu size={28} /> : <AiOutlineClose size={28} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
