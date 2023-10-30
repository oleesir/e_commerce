const NotFound = () => {
  return (
    <div className='w-full flex justify-center pt-[250px]  bg-[#FFF] cursor-pointer'>
      <div className='mb-56 flex flex-col items-center lg:mb-20 '>
        <div className='flex items-center'>
          <img src='/undraw_Page_not_found.png' className='w-[250px] h-[200px]' alt='image' />
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-2xl mb-3'>Oops!!!</p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
