import { FaCheck } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='w-full flex flex-col border-r-[1px]'>
      <div className='mb-5'>
        <p className='text-sm underline text-[#151875] mb-2'>Categories</p>
        <div className='flex items-center'>
          <label
            htmlFor='check-one'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-one'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor='check-two'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-two'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
      </div>

      <div className='mb-5'>
        <p className='text-sm underline text-[#151875] mb-2'>Brand</p>
        <div className='flex items-center'>
          <label
            htmlFor='check-three'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-three'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor='check-four'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-four'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
      </div>

      <div className='mb-5'>
        <p className='text-sm underline text-[#151875] mb-2'>Discount Offer</p>
        <div className='flex items-center'>
          <label
            htmlFor='check-five'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-five'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor='check-six'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-six'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
      </div>

      <div className='mb-5'>
        <p className='text-sm underline text-[#151875] mb-2'>Price Filter</p>
        <div className='flex items-center'>
          <label
            htmlFor='check-ten'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-ten'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor='check-seven'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-seven'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
      </div>

      <div className='mb-5'>
        <p className='text-sm underline text-[#151875] mb-2'>Rating Items</p>
        <div className='flex items-center'>
          <label
            htmlFor='check-eight'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-eight'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor='check-nine'
            className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container'
          >
            <input
              type='checkbox'
              id='check-nine'
              className='appearance-none h-[12px] w-[12px] border-[1px] border-[#FD665E] mr-2'
            />
            <FaCheck
              size={8}
              className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0 cursor-pointer'
            />
            hello
          </label>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
// bg-[#FD665E]
