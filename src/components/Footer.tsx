import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';

const Footer = () => {
  return (
    <div className='w-full mt-auto'>
      <div className=' w-full bg-[#EEEFFB]  md:py-[120px] '>
        <div className=' py-5 max-w-5xl  mx-auto px-3'>
          <div className='flex flex-col md:hidden'>
            <div className='w-full mb-2 flex justify-center'>
              <p>
                <span className='text-base mb-0 font-bold text-[#FD665E]'>Olive</span>
                <span className='text-sm  text-[#FD665E]'>market</span>
              </p>
            </div>

            <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='hover:no-underline py-0'>
                  <p className='text-[#151875] text-sm font-bold'>PRODUCTS</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col w-full pt-5'>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Teams</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Careers</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Advertising</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Collectives</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Talent</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='hover:no-underline py-0'>
                  <p className='text-[#151875] text-sm font-bold'>COMPANY</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col  w-full pt-5'>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>About</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Contact Us</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Terms of Service</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Legal</p>
                    <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Gift Cards</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className=' grid-cols-3 gap-x-4 px-5 hidden md:grid'>
            <div className='flex flex-col'>
              <p className='mb-5'>
                <span className='text-xl mb-0 font-bold text-[#FD665E]'>Olive</span>
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
                17 Princess Road, London, Greater London NW1 8JR
              </p>
            </div>
            <div className='w-full flex justify-end '>
              <div className='flex flex-col '>
                <p className='font-bold text-sm mb-5 text-[#151875]'>PRODUCTS</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Teams</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Careers</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Advertising</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Collectives</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Talent</p>
              </div>
            </div>

            <div className='w-full flex justify-end'>
              <div className='flex flex-col '>
                <p className='font-bold text-sm mb-5 text-[#151875]'>COMPANY</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>About</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Contact Us</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Terms of Service</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Legal</p>
                <p className='text-xs text-[#8A8FB9] mb-3 cursor-pointer'>Gift Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center bg-[#EEEFFB]'>
        <p className='font-medium text-xs text-[#151875]'>
          &copy; 2023 Olivemarket, All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
