import { useForm } from 'react-hook-form';
import { LoginInput } from '../../types.ts';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { PiMapPinLineBold } from 'react-icons/pi';
import { loginSchema } from '../../schema/loginSchema.ts';
import { useNavigate } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
import { useLoginMutation } from '../../features/oliveMarketApi.tsx';
import { useAppDispatch } from '../../reduxHooks.ts';
import { clearLocalStorageData } from '../../features/oliveMarketSlice.tsx';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: yupResolver(loginSchema) });
  const [show, setShow] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [login, { data: user, error, isLoading }] = useLoginMutation();

  useEffect(() => {
    if (user) {
      dispatch(clearLocalStorageData());
      navigate(-1);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      // @ts-ignore
      setServerError(error?.data.message);
    }
  }, [error]);

  const handleShow = (e: any) => {
    e.preventDefault();
    setShow((prevState) => !prevState);
  };

  const onSubmit = async (data: LoginInput) => {
    await login({
      email: data.email,
      password: data.password,
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') || '')
        : [],
    });
  };

  const pushToSignup = () => {
    navigate('/auth/signup');
  };

  // const getErrorMessage = () => {
  //   if (!error) return undefined;
  //
  //   if ('status' in error) {
  //     const errorData = error.data as { message: string };
  //     // you can access all properties of `FetchBaseQueryError` here
  //     return errorData?.message;
  //   }
  // };

  return (
    <div className='pt-10 w-full max-w-5xl  mx-auto lg:pt-10'>
      <div className='flex w-full mb-8  px-5 lg:px-0'>
        <p className='text-2xl lg:text-3xl font-extrabold'>Welcome back</p>
      </div>
      <div className=' py-2 px-2 grid grid-cols-1 lg:grid-cols-2'>
        <div className='w-full flex flex-col'>
          <div className='w-full flex h-1 justify-center mb-5'>
            <p className='text-base text-[#FF0303]'>{serverError}</p>
          </div>
          <form
            data-testid='login-form'
            onSubmit={handleSubmit(onSubmit)}
            className='w-full flex justify-center flex-col mb-10'
          >
            <div className='mb-5 lg:mb-8'>
              <label htmlFor='email' className='text-sm'>
                Email
              </label>
              <input
                id='email'
                type='email'
                className='w-full bg-[#fff] text-black py-4 lg:py-2 px-5 outline-none border-[1px] rounded-none'
                {...register('email', {
                  onChange: () => {
                    if (error) {
                      setServerError(null);
                    }
                  },
                })}
              />
              <div className='h-1'>
                <span className='text-xs text-[#FF0303]'>{errors.email?.message}</span>
              </div>
            </div>
            <div className='mb-[20px] lg:mb-[20px]'>
              <label htmlFor='password' className='text-sm'>
                Password
              </label>
              <div className='w-full inline-block relative'>
                <input
                  id='password'
                  type={!show ? 'password' : 'text'}
                  {...register('password', {
                    onChange: () => {
                      if (error) {
                        setServerError(null);
                      }
                    },
                  })}
                  className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-none'
                />
                <button
                  type='button'
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
                disabled={isLoading}
                className={
                  isLoading
                    ? 'bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-not-allowed flex justify-center w-full'
                    : 'bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer w-full'
                }
              >
                {isLoading && <ClockLoader color='#fff' size={20} />}
                {!isLoading && 'Login'}
              </button>
            </div>
          </form>
          <div className='border-t-[1px] pt-5'>
            <div className='flex'>
              <p className='text-sm'>
                Don&apos;t have an account?
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
