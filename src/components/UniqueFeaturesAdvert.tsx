const UniqueFeaturesAdvert = () => {
  return (
    <div className='py-4 max-w-5xl  mx-auto  px-5'>
      <div className='w-full grid md:grid-cols-2'>
        <div className='w-full grid justify-center items-center'>
          <img src='/watch.png' className='w-[300px] h-[300px]' alt='imagee' />
        </div>
        <div className='w-full flex flex-col pt-[60px]'>
          <div className='flex flex-col'>
            <p className='font-bold text-[20px] text-[#151875]'>Unique Features Of latest & </p>
            <p className='font-bold text-[20px] text-[#151875]'>Trending Products</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex mb-3 items-center'>
              <div className='w-[8px] h-[8px] bg-green-500 rounded-full mr-2'></div>
              <p className='text-sm text-gray-500'>
                All frames constructed with hardwood solids and laminates.
              </p>
            </div>
            <div className='flex mb-3 '>
              <div className='w-[9px] h-[8px] bg-green-500 rounded-full mt-[5px] mr-2'></div>
              <p className='text-sm text-gray-500'>
                Reinforced with double wood dowels, glue, screw - nails corner blocks and machine
                nails.
              </p>
            </div>
            <div className='flex mb-3 items-center'>
              <div className='w-[8px] h-[8px] bg-green-500 rounded-full mr-2'></div>
              <p className='text-sm text-gray-500'>
                Arms, backs and seats are structurally reinforced.
              </p>
            </div>
            <div>
              <button className='py-2 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-xs'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UniqueFeaturesAdvert;
