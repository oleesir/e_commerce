// import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { State, City } from 'country-state-city';
import { OrderInput } from '../types.ts';
import { orderSchema } from '../schema/orderSchema.ts';
import {
  useCreateOrderMutation,
  useGetUserCartQuery,
  useGetUserQuery,
  useLoadUserQuery,
} from '../features/oliveMarketApi.tsx';
import { useCallback, useEffect, useState } from 'react';

const CreateOrder = () => {
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const { data: foundUser } = useGetUserQuery(authUser?._id);
  const [createOrder] = useCreateOrderMutation();
  const [provinceIsoCode, setProvinceIsoCode] = useState(() => {
    const provinceDetails = State.getStatesOfCountry('CA').find(
      (item) => item?.name === foundUser?.province,
    );

    return provinceDetails?.isoCode || '';
  });

  const {
    handleSubmit,
    control,
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

  const getAndSetProvinceIsoCode = useCallback((province?: string) => {
    const provinceDetails = State.getStatesOfCountry('CA').find((item) => item?.name === province);
    setProvinceIsoCode(provinceDetails?.isoCode || '');
  }, []);

  useEffect(() => {
    getAndSetProvinceIsoCode(foundUser?.province);
  }, [foundUser?.province]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValue(name, value);

    if (name === 'province') {
      getAndSetProvinceIsoCode(getValues('province'));
    }
  };

  const onSubmit = (data: OrderInput) => {
    createOrder({
      cartId: userCart?._id,
      address: data?.address,
      province: data?.province,
      city: data?.city,
      phoneNumber: data?.phoneNumber,
      paymentMethod: data?.paymentMethod,
    });
  };

  return (
    <div className='w-full mt-[100px]'>
      <div className='flex flex-col max-w-5xl  mx-auto'>
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
                    {State.getStatesOfCountry('CA').map((item, i) => (
                      <option key={i}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='h-1'>
                  <span className='text-xs text-[#FF0303]'> {errors.province?.message}</span>
                </div>
              </div>

              <div>
                <label className='text-sm font-bold'>City</label>
                <div className='w-full mt-2'>
                  <select
                    {...register('city')}
                    onChange={handleChange}
                    className='w-full bg-[#fff] text-black py-1 lg:py-2 px-5 outline-none border-[1px] rounded-none appearance-none'
                  >
                    {City.getCitiesOfState('CA', provinceIsoCode).map((item, i) => (
                      <option key={i}>{item.name}</option>
                    ))}
                  </select>
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
            <div>
              <div className='w-full flex mt-2'>
                <Controller
                  name='paymentMethod'
                  control={control}
                  defaultValue=''
                  render={({ field, fieldState }) => (
                    <div className='flex flex-col'>
                      <div className='flex items-center'>
                        <div className='flex items-center'>
                          <input
                            type='radio'
                            className='form-radio h-4 w-4 text-indigo-600 transition cursor-pointer duration-150 ease-in-out bg-amber-600 aria-checked:text-red-500 hidden'
                            {...field}
                            value='stripe'
                            id='payment1'
                          />
                          <label
                            htmlFor='payment1'
                            className='ml-3 text-sm flex cursor-pointer font-bold'
                          >
                            <span className='w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink'></span>
                            Stripe
                          </label>
                        </div>
                        <div className='flex items-center ml-11'>
                          <input
                            type='radio'
                            className='form-radio h-4 w-4 text-indigo-600 transition duration-150  ease-in-out bg-amber-600 aria-checked:text-red-500 cursor-pointer hidden'
                            {...field}
                            value='paypal'
                            id='payment2'
                          />
                          <label
                            htmlFor='payment2'
                            className='ml-3 text-sm flex cursor-pointer font-bold'
                          >
                            <span className='w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink '></span>
                            Paypal
                          </label>
                        </div>
                      </div>
                      <div className='h-1'>
                        <span className='text-xs text-[#FF0303]'>
                          {fieldState.error && fieldState.error.message}
                        </span>
                      </div>
                    </div>
                  )}
                />
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
                  <p className='text-sm font-bold'>Subtotal</p>

                  <p className='text-sm '>
                    {new Intl.NumberFormat('en-CA', {
                      style: 'currency',
                      currency: 'CAD',
                    }).format(1000000 / 100)}
                  </p>
                </div>
                <div className='flex w-full justify-between mb-3'>
                  <p className='text-sm font-bold'>Shipping</p>

                  <p className='text-sm '>Free</p>
                </div>
                <div className='flex w-full justify-between mb-3'>
                  <p className='text-sm font-bold'>Estimated Tax</p>

                  <p className='text-sm '>Free</p>
                </div>
                <div className='flex w-full justify-between border-t-[1px] pt-2 mb-5'>
                  <p className='text-sm font-bold'>Total</p>

                  <p className='text-sm '>
                    {new Intl.NumberFormat('en-CA', {
                      style: 'currency',
                      currency: 'CAD',
                    }).format(1000000 / 100)}
                  </p>
                </div>

                <div className='flex w-full'>
                  <button
                    type='submit'
                    className='rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer w-full'
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateOrder;
