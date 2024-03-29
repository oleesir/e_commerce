import { IoCheckmark } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const DiscountItemTab = ({ image }: { image: string }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/shop');
  };
  return (
    <div className='w-full'>
      <div className=' grid md:grid-cols-2'>
        <div className='w-full flex flex-col pt-10 pl-2 pb-4'>
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
            <button
              type='button'
              onClick={onClick}
              className='py-4 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-base'
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <img src={image} alt='image' className='w-[300px] h-[350px]' />
        </div>
      </div>
    </div>
  );
};
export default DiscountItemTab;
