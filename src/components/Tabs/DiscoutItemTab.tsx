import { IoCheckmark } from 'react-icons/io5';

const DiscountItemTab = ({ image }: { image: string }) => {
  return (
    <div className='w-full'>
      <div className=' grid grid-cols-2'>
        <div className='w-full flex flex-col pt-24 pl-2'>
          <p className='text-[28px] font-bold mb-5 text-[#151875]'>20% Discount Of All Products</p>
          <p className='text-sm text-gray-500 mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          </p>
          <p className='text-sm text-gray-500 mb-5'>feugiat habitasse nec, bibendum condimentum.</p>
          <div className='w-full flex '>
            <div className='w-full flex flex-col'>
              <div className='flex items-center mb-5'>
                <IoCheckmark className='mr-2' color='#7569B2' />
                <p className='text-xs text-gray-500'>Material expose like metals</p>
              </div>
              <div className='flex items-center'>
                <IoCheckmark className='mr-2' color='#7569B2' />
                <p className='text-xs text-gray-500'>Clear lines and geomatric figures</p>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <div className='flex items-center mb-5'>
                <IoCheckmark className='mr-2' color='#7569B2' />
                <p className='text-xs text-gray-500'>Simple neutral colours.</p>
              </div>
              <div className='flex items-center'>
                <IoCheckmark className='mr-2' color='#7569B2' />
                <p className='text-xs text-gray-500'>Material expose like metals</p>
              </div>
            </div>
          </div>
          <div>
            <button className='py-2 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-xs'>
              Shop Now
            </button>
          </div>
        </div>
        <div className='w-full'>
          <img src={image} alt='image' className='w-[450px] h-[400px]' />
        </div>
      </div>
    </div>
  );
};
export default DiscountItemTab;
