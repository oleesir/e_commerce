import BlogCard from './Cards/BlogCard.tsx';

const LatestBlog = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[30px] font-bold text-[#151875]'>Latest Blog</p>
      </div>
      <div className='max-w-5xl  mx-auto '>
        <div className='grid grid-cols-3 gap-x-8'>
          <BlogCard image='/room_one.png' />
          <BlogCard image='/room_two.png' />
          <BlogCard image='/room_three.png' />
        </div>
      </div>
    </div>
  );
};
export default LatestBlog;
