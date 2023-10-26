import AccordionLayout from '../layouts/AccordionLayout.tsx';

const Footer = () => {
  return (
    <div className='w-full bg-[#EEEFFB]  md:py-[120px] '>
      <div className=' py-5 max-w-5xl  mx-auto px-3'>
        <div className='flex flex-col md:hidden'>
          <div className='w-full mb-2 flex justify-center'>
            <p>
              <span className='text-base mb-0 font-titanOne text-[#FD665E]'>Olive</span>
              <span className='text-sm font-titanOne text-[#FD665E]'>market</span>
            </p>
          </div>
          <AccordionLayout title={'Customer Case'}>
            {
              <div className='w-full flex'>
                <div className='flex flex-col '>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                </div>
              </div>
            }
          </AccordionLayout>
          <AccordionLayout title={'Customer Case'}>
            {
              <div className='w-full flex '>
                <div className='flex flex-col '>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                </div>
              </div>
            }
          </AccordionLayout>
          <AccordionLayout title={'Customer Case'}>
            {
              <div className='w-full flex '>
                <div className='flex flex-col '>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                  <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
                </div>
              </div>
            }
          </AccordionLayout>
        </div>

        <div className=' grid-cols-4 gap-x-4 px-5 hidden md:grid'>
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
          <div className='w-full flex justify-center'>
            <div className='flex flex-col '>
              <p className='font-medium text-sm mb-5'>Customer Case</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            </div>
          </div>

          <div className='w-full flex justify-center'>
            <div className='flex flex-col '>
              <p className='font-medium text-sm mb-5'>Customer Case</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            </div>
          </div>

          <div className='w-full flex justify-center'>
            <div className='flex flex-col '>
              <p className='font-medium text-sm mb-5'>Customer Case</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
              <p className='text-xs text-[#8A8FB9] mb-3'>Laptops & Computers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
