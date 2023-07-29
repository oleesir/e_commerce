const TopCategoryCard = () => {
  return (
    <div className=' relative group flex flex-col w-[160px] h-[160px] ease-in duration-300 transition shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] cursor-pointer rounded-full'>
      <img src='/white_chair.png' className='w-full h-full rounded-full ' alt='image ' />
      <div className='flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-50 to-opacity-30 group-hover:opacity-10 absolute top-0 left-0 h-full w-full rounded-full'></div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100'>
        <div className='w-full h-full flex justify-center items-end p-4'>
          <div className=''>
            <button className='py-2 px-4 bg-[#FD665E] text-[#FFF] rounded-none text-xs'>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopCategoryCard;
