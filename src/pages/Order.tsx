import { useCallback, useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { State } from 'country-state-city';
import { OrderInput } from '../types.ts';
import { orderSchema } from '../schema/orderSchema.ts';
import {
  useCreateOrderMutation,
  useGetUserCartQuery,
  useGetUserQuery,
  useLoadUserQuery,
} from '../features/oliveMarketApi.tsx';

const Order = () => {
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const { data: foundUser } = useGetUserQuery(authUser?._id);
  const [createOrder, { data: stripeLink, isLoading }] = useCreateOrderMutation();
  const [provinceIsoCode, setProvinceIsoCode] = useState<string>(() => {
    const provinceDetails = State.getStatesOfCountry('CA').find(
      (item) => item?.name === foundUser?.province,
    );

    return provinceDetails?.isoCode || '';
  });

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

  useEffect(() => {
    if (stripeLink) {
      window.location.href = stripeLink;
    }
  }, [stripeLink]);

  // console.log('STATES', State.getStatesOfCountry('CA'));

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
    });
  };

  return (
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
                    {/*{City.getCitiesOfState('CA', provinceIsoCode).map((item, i) => (*/}
                    {/*  <option key={i}>{item.name}</option>*/}
                    {/*))}*/}
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
  );
};
export default Order;
