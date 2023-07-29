import { useForm } from 'react-hook-form';
import { LoginInput } from '../types.ts';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { PiMapPinLineBold } from 'react-icons/pi';
import { loginSchema } from '../schema/loginSchema.ts';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: yupResolver(loginSchema) });
  const [show, setShow] = useState(false);

  const handleShow = (e: any) => {
    e.preventDefault();
    setShow((prevState) => !prevState);
  };

  const onSubmit = (data: LoginInput) => {
    console.log('DATA', data);
    navigate('/');
  };

  const pushToSignup = () => {
    navigate('/auth/signup');
  };

  return (
    <div className='pt-10 w-full max-w-5xl  mx-auto lg:pt-10'>
      <div className='flex w-full mb-8  px-5 lg:px-0'>
        <p className='text-2xl lg:text-3xl font-extrabold'>Sign in</p>
      </div>
      <div className=' py-2 px-2 grid grid-cols-1 lg:grid-cols-2'>
        <div className='w-full flex flex-col'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full flex justify-center flex-col mb-10'
          >
            <div className='mb-5 lg:mb-8'>
              <label className='text-sm'>Email</label>
              <input
                type='email'
                className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-md'
                {...register('email')}
              />
              <div className='h-1'>
                <span className='text-xs text-[#FF0303]'>{errors.email?.message}</span>
              </div>
            </div>
            <div className='mb-[20px] lg:mb-[20px]'>
              <label className='text-sm'>Password</label>
              <div className='w-full inline-block relative'>
                <input
                  type={!show ? 'password' : 'text'}
                  {...register('password')}
                  className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-md'
                />
                <button
                  onClick={handleShow}
                  className='absolute inset-y-0 right-0 flex items-center pr-5 '
                >
                  {!show ? (
                    <RiEyeCloseLine size={20} className='cursor-pointer text-gray-400' />
                  ) : (
                    <RiEyeLine size={20} className='cursor-pointer text-gray-500' />
                  )}
                </button>
              </div>

              <div className='h-1'>
                <span className='text-xs text-[#FF0303]'> {errors.password?.message}</span>
              </div>
            </div>
            <div className='flex mb-[20px] lg:mb-[50px] justify-end'>
              <p className='text-sm font-bold text-[#FD665E] cursor-pointer'>Forgot Password?</p>
            </div>

            <div className='w-full flex items-center  cursor-pointer '>
              <button
                type='submit'
                className='rounded-md bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer'
              >
                Sign in
              </button>
            </div>
          </form>
          <div className='border-t-[1px] pt-5'>
            <div className='flex'>
              <p className='text-sm'>
                Don&apos;t have an account?{'  '}
                <span onClick={pushToSignup} className='text-[#FD665E] font-medium cursor-pointer'>
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex'>
          <div className='w-full flex justify-center'>
            <div className='flex flex-col'>
              <div className='mb-5'>
                <p className='text-sm'>These are the benefits you will enjoy:</p>
              </div>
              <div className='flex items-start mb-5'>
                <MdShoppingCartCheckout size={20} className='mt-1' color='#FD665E' />
                <div className='flex flex-col ml-2'>
                  <p className='font-bold text-base'>Speedy Checkout</p>
                  <p className='text-sm'>Payment is fast and reliable.</p>
                </div>
              </div>
              <div className='flex items-start mb-5'>
                <PiMapPinLineBold size={20} className='mt-1' color='#FD665E' />
                <div className='flex flex-col ml-2'>
                  <p className='font-bold text-base'>Easy Tracking</p>
                  <p className='text-sm'>Monitor the status of your order.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
