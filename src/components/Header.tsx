import { MdOutlineAccountCircle } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navToLogin = () => {
    navigate('/auth/login');
  };
  return (
    <div className='w-full'>
      <div className='py-4 max-w-5xl  mx-auto'>
        <div className='hidden lg:flex justify-between '>
          <div className='flex justify-between items-center'>
            <p className=''>
              <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
              <span className='text-lg font-titanOne text-[#FD665E]'>ture</span>
            </p>
            <div className='ml-11 flex'>
              <p className='relative group cursor-pointer'>
                <span className='text-sm text-[#2C2C2C]'>Products</span>
                <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FD665E] transition-all group-hover:w-full duration-500 rounded-md'></span>
              </p>
              <p className='ml-5 relative group cursor-pointer'>
                <span className='text-sm text-[#2C2C2C]'>Blogs</span>
                <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FD665E] transition-all group-hover:w-full duration-500 rounded-md'></span>
              </p>
              <p className='ml-5 relative group cursor-pointer'>
                <span className='text-sm text-[#2C2C2C]'>Contacts</span>
                <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FD665E] transition-all group-hover:w-full duration-500 rounded-md'></span>
              </p>
            </div>
          </div>

          <div className='flex justify-between  items-center w-full'>
            <div className='relative text-gray-600 w-full'>
              <input
                type='text'
                name='search'
                placeholder='Search'
                className='bg-white h-8 pl-2  rounded-none text-sm focus:outline-none border-[1px] w-full ml-5'
              />
              <button type='submit' className='absolute -right-5 top-0  bg-[#FD665E] py-2 px-5'>
                <FiSearch color={'#FFF'} />
              </button>
            </div>
            <div className='flex justify-between items-center'>
              <button
                onClick={navToLogin}
                className=' relative inline-flex items-center justify-start overflow-hidden transition-all duration-500  bg-[#FD665E] rounded-none  hover:bg-[#FFF] group py-2 px-4 ml-8 mr-5'
              >
                <span className='w-0 h-0 rounded-md bg-[#FFF] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                <span className='w-full text-[#FFF] text-sm transition-colors duration-300 ease-in-out group-hover:text-[#FD665E] z-10 flex items-center'>
                  <MdOutlineAccountCircle size={20} className='mr-1' /> Account
                </span>
              </button>
              <button>
                <PiShoppingCartLight size={25} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden inset-0 z-50 w-full justify-between px-5'>
          <p className=''>
            <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
            <span className='text-lg font-titanOne text-[#FD665E]'>Move</span>
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
