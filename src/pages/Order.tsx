import { useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { OrderInput } from '../types.ts';
import { orderSchema } from '../schema/orderSchema.ts';
import {
  useCreateOrderMutation,
  useGetProvincesQuery,
  useGetUserCartQuery,
  useGetUserQuery,
  useLoadUserQuery,
  useSearchCitiesQuery,
} from '../features/oliveMarketApi.tsx';
import Loader from '../components/Loaders/Loader.tsx';
import { useNavigate } from 'react-router-dom';
import CityResult from '../components/CityResult.tsx';
import { useDebounce } from '@uidotdev/usehooks';

const Order = () => {
  const navigate = useNavigate();
  const { data: authUser, isLoading: authLoading } = useLoadUserQuery(undefined);
  const { data: foundUser, isLoading: userLoading } = useGetUserQuery(authUser?._id);
  const { data: provinces } = useGetProvincesQuery(undefined);
  const [queryText, setQueryText] = useState('');
  const [city, setCity] = useState('');
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<OrderInput>({
    resolver: yupResolver(orderSchema),
    values: {
      ...foundUser,
    },
  });
  const debouncedSearchQuery = useDebounce(queryText, 500);
  const { data: listedCities } = useSearchCitiesQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery == '',
  });

  useEffect(() => {
    if (!authLoading) {
      authUser?._id === undefined && navigate('/auth/login');
    }
  }, [authUser?._id, navigate]);

  useEffect(() => {
    if (city) {
      const foundCity = listedCities && listedCities.find((c: any) => c?._id === city);
      const province = provinces && provinces.find((c: any) => c?.isoCode === foundCity?.stateCode);
      setValue('province', province?.name);
    }
  }, [city, setValue]);

  const [createOrder, { data: stripeLink, isLoading }] = useCreateOrderMutation();

  useEffect(() => {
    if (stripeLink) {
      window.location.href = stripeLink;
    }
  }, [stripeLink]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValue(name, value);

    if (name === 'city') {
      setQueryText(getValues('city'));
    }
  };

  const onSubmit = (data: OrderInput) => {
    createOrder({
      cartId: userCart?._id,
      address: data?.address,
      province: data?.province,
      city: data?.city,
      phoneNumber: data?.phoneNumber,
    });
  };

  return (
    <>
      {userLoading && <Loader />}
      {!userLoading && (
        <div className='w-full pt-[150px] '>
          <div className='flex flex-col max-w-5xl  mx-auto mb-56  lg:mb-20'>
            <div className='w-full'>
              <p className='font-bold text-2xl'>Shipping</p>
            </div>
            <form
              className='grid grid-cols-1 md:grid-cols-4 md:gap-4'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='w-full  md:col-span-3  p-8'>
                <div className='w-full grid grid-cols-2 gap-4 mb-5'>
                  <div>
                    <label className='text-sm font-bold'>Province</label>
                    <div className='w-full mt-2'>
                      <select
                        {...register('province')}
                        onChange={handleChange}
                        className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-none appearance-none'
                      >
                        {provinces &&
                          provinces.map((item: any) => {
                            return (
                              <option key={item?._id} value={item?.name}>
                                {item?.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className='h-1'>
                      <span className='text-xs text-[#FF0303]'> {errors.province?.message}</span>
                    </div>
                  </div>

                  <div>
                    <label className='text-sm font-bold'>City</label>
                    <div className='w-full mt-2'>
                      <div className='relative text-gray-600 w-full'>
                        <input
                          type='text'
                          {...register('city')}
                          onChange={handleChange}
                          className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px]'
                        />
                        {queryText !== '' ? (
                          listedCities && listedCities.length !== 0 ? (
                            <CityResult
                              setCity={setCity}
                              cities={listedCities}
                              setValue={setValue}
                              setQueryText={setQueryText}
                            />
                          ) : null
                        ) : null}
                      </div>
                    </div>
                    <div className='h-1'>
                      <span className='text-xs text-[#FF0303]'>{errors.city?.message}</span>
                    </div>
                  </div>
                </div>

                <div className='mb-8'>
                  <label className='text-sm font-bold'>Address</label>
                  <input
                    type='text'
                    {...register('address')}
                    onChange={handleChange}
                    className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-none'
                  />
                  <div className='h-1'>
                    <span className='text-xs text-[#FF0303]'>{errors.address?.message}</span>
                  </div>
                </div>
                <div className='mb-8'>
                  <label className='text-sm font-bold '>Phone number</label>
                  <input
                    type='text'
                    {...register('phoneNumber')}
                    onChange={handleChange}
                    className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-none'
                  />
                  <div className='h-1'>
                    <span className='text-xs text-[#FF0303]'>{errors.phoneNumber?.message}</span>
                  </div>
                </div>
              </div>

              <div className='w-full'>
                <div className='flex w-full flex-col shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] border-[1px] p-4'>
                  <div className='mb-5'>
                    <p className='text-lg font-bold'>Order Summary</p>
                  </div>
                  <div className='w-full flex flex-col'>
                    <div className='flex w-full justify-between mb-3'>
                      <p className='text-sm font-bold'>Quantity</p>

                      <p className='text-sm '>{userCart?.totalQuantity}</p>
                    </div>
                    <div className='flex w-full justify-between mb-3'>
                      <p className='text-sm font-bold'>Shipping</p>

                      <p className='text-sm '>Free</p>
                    </div>
                    <div className='flex w-full justify-between mb-3'>
                      <p className='text-sm font-bold'>Total Price</p>

                      <p className='text-sm '>
                        {new Intl.NumberFormat('en-CA', {
                          style: 'currency',
                          currency: 'CAD',
                        }).format(userCart?.totalPrice / 100)}
                      </p>
                    </div>
                    <div className='flex w-full justify-between mb-3'>
                      <p className='text-sm font-bold'>Estimated Tax</p>

                      <p className='text-sm '>
                        {new Intl.NumberFormat('en-CA', {
                          style: 'currency',
                          currency: 'CAD',
                        }).format(userCart?.totalTax / 100)}
                      </p>
                    </div>
                    <div className='flex w-full justify-between border-t-[1px] pt-2 mb-5'>
                      <p className='text-sm font-bold'>Total</p>

                      <p className='text-sm '>
                        {new Intl.NumberFormat('en-CA', {
                          style: 'currency',
                          currency: 'CAD',
                        }).format(userCart?.totalPriceAfterTax / 100)}
                      </p>
                    </div>

                    <div className='flex w-full'>
                      <button
                        disabled={isLoading}
                        type='submit'
                        className={
                          isLoading
                            ? 'rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3  cursor-not-allowed w-full flex justify-center'
                            : 'rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer w-full'
                        }
                      >
                        {isLoading && <ClockLoader color='#fff' size={20} />}
                        {!isLoading && 'Order'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
