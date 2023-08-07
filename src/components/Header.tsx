import { MdOutlinePersonOff, MdOutlinePersonOutline } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../utils/navItems.ts';
import { useLoadUserQuery, useLogoutMutation } from '../features/oliveMarketApi.tsx';
import { getTotalQuantity } from '../features/oliveMarketSlice.tsx';
import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: authUser } = useLoadUserQuery(undefined);
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false);
  const [logout] = useLogoutMutation();
  const { cartTotalQuantity, cartItems } = useAppSelector((state: any) => state.cart);

  useEffect(() => {
    if (cartItems) {
      dispatch(getTotalQuantity());
    }
  }, [cartItems, dispatch]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    await logout(null);
    setShow(false);
  };

  const navToLogin = () => {
    if (authUser?._id === undefined) {
      navigate('/auth/login');
    } else {
      setShow((prevState) => !prevState);
    }
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
                placeholder='Search'
                className='bg-white h-9 pl-2  rounded-none text-sm focus:outline-none border-[1px] w-full ml-5'
              />
              <button type='submit' className='absolute -right-5 top-0  bg-[#FD665E] py-2.5 px-5'>
                <FiSearch color={'#FFF'} />
              </button>
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
              <div className='relative flex items-center'>
                {cartTotalQuantity > 0 && (
                  <div className='absolute rounded-full w-[20px] h-[20px] bg-[#FD665E] text-[#FFF] pt-[3px] left-4 -top-2'>
                    <p className='text-[10px] text-center'>{cartTotalQuantity}</p>
                  </div>
                )}
                <button>
                  <PiShoppingCartLight size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden inset-0 z-50 w-full justify-between px-5'>
          <p className=''>
            <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
            <span className='text-lg font-titanOne text-[#FD665E]'>market</span>
          </p>
          <div
            className={
              nav
                ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex  w-[280px] h-screen bg-black  ease-in duration-300 z-[1035]'
                : 'lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex w-full h-screen bg-black  ease-in-out duration-300'
            }
          >
            <button onClick={handleNav}>
              <AiOutlineClose size={28} color='green' className='bg-green-500' />
            </button>
            <ul>
              <li onClick={handleNav} className='p-4 text-4xl'>
                <p className='text-[#FFF]'>Home</p>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl '>
                <p className='text-[#FFF]'>Signup</p>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl '>
                <p className='text-[#FFF]'>Login</p>
              </li>
            </ul>
          </div>

          <div className='flex'>
            <button className='mr-5'>
              <FiSearch size={28} />
            </button>

            <button className='mr-5'>
              <PiShoppingCartLight size={25} />
            </button>

            <button onClick={handleNav} className='block lg:hidden '>
              {!nav ? <AiOutlineMenu size={28} /> : <AiOutlineClose size={28} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
