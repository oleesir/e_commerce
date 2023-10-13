import { CityStateResponse, OrderInput } from '../types.ts';
import { Dispatch, SetStateAction } from 'react';
import { UseFormSetValue } from 'react-hook-form';

const CityResult = ({
  cities,
  setValue,
  setQueryText,
  setCity,
}: {
  cities: CityStateResponse[] | undefined;
  setValue: UseFormSetValue<OrderInput>;
  setQueryText: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <div className=' absolute w-full border-[1px] z-30 left-0 bg-[#FFF] pb-0 shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] border-t-[0]'>
        {cities &&
          cities
            .map((city: CityStateResponse) => {
              return (
                <div
                  key={city?._id}
                  onClick={() => {
                    setCity(city?._id);
                    setValue('city', city?.name);
                    setQueryText('');
                  }}
                  className='w-full p-2 cursor-pointer hover:bg-[#F6F7FB]'
                >
                  <p className='text-[#000]  text-xs cursor-pointer'>{city?.name}</p>
                </div>
              );
            })
            .sort()}
      </div>
    </>
  );
};

export default CityResult;
