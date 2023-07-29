import { FaPenNib } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

const BlogCard = ({ image }: { image: string }) => {
  return (
    <div className=' w-full h-[370px] flex flex-col  shadow-[0_8px_40px_0_rgba(49,32,138,0.05)]'>
      <div className='w-full flex justify-center '>
        <img src={image} className='w-full h-[200px]' alt='image ' />
      </div>
      <div className='p-4 flex flex-col'>
        <div className='flex '>
          <div className='flex items-center mr-8'>
            <FaPenNib size={10} className='mr-2' color={'#FD665E'} />
            <p className='text-xs text-[#151875]'>SaberAli</p>
          </div>
          <div className='flex items-center'>
            <SlCalender size={10} color={'#FFA454'} className='mr-2' />
            <p className='text-xs text-[#151875]'>21 August,2023</p>
          </div>
        </div>
        <div className='my-3'>
          <p className='text-sm font-bold text-[#151875]'>Top essential trends in 2023</p>
        </div>
        <div className='w-full mb-5'>
          <p className='text-xs text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida...
          </p>
        </div>
        <div>
          <button className='cursor-pointer'>
            <p className='text-xs underline text-[#FD665E]'>Read More</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
