import OfferCard from './Cards/OfferCard.tsx';

const WhatWeOfferAdvert = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[25px] md:text-[30px] font-bold text-[#151875]'>
          What Olivemarket offers!
        </p>
      </div>
      <div className='w-full flex mt-10'>
        <div className='max-w-5xl  mx-auto'>
          <div className='grid gap-x-8 grid-cols-1  md:grid-cols-4'>
            <OfferCard image='/free.png' />
            <OfferCard image='/cash_back.png' />
            <OfferCard image='/medal.png' />
            <OfferCard image='/call.png' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatWeOfferAdvert;
