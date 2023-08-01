const Footer = () => {
  return (
    <div className='w-full bg-[#EEEFFB] mt-20 py-20'>
      <div className='py-4 max-w-5xl  mx-auto '>
        <div className='grid grid-cols-4 gap-x-4'>
          <div className='flex flex-col'>
            <p className='mb-5'>
              <span className='text-xl mb-0 font-titanOne text-[#FD665E]'>Olive</span>
              <span className='text-base font-titanOne text-[#FD665E]'>market</span>
            </p>
            <div className='relative text-gray-600 w-full mb-3'>
              <input
                type='text'
                name='search'
                placeholder='Email Address'
                className='bg-white h-8 pl-2  rounded-none text-sm focus:outline-none border-[1px] w-full'
              />
              <button
                type='submit'
                className='absolute right-0 top-0  bg-[#FD665E] py-[8px] px-5 text-[#FFF] text-xs'
              >
                Sign up
              </button>
            </div>
            <p className='text-xs text-[#8A8FB9]'>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div className='flex flex-col '>
            <p className='font-medium text-sm mb-5'>Categories</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
          </div>
          <div className='flex flex-col '>
            <p className='font-medium text-sm mb-5'>Customer Case</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
          </div>
          <div className='flex flex-col '>
            <p className='font-medium text-sm mb-5'>Pages</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
