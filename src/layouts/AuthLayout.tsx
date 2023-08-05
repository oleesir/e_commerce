import { NavLink, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='flex w-full '>
      <div className='w-full flex flex-col'>
        <div className='w-full flex py-2 px-6'>
          <NavLink to={'/'} className='cursor-pointer '>
            <span className='text-2xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
            <span className='text-lg font-titanOne text-[#FD665E]'>market</span>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
