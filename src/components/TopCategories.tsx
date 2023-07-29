import TopCategoryCard from './Cards/TopCategoryCard.tsx';
import Carousel from 'react-multi-carousel';
import { responsive } from '../utils/responsive.ts';

const TopCategories = () => {
  return (
    <>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[30px] font-bold text-[#151875]'>Top Categories</p>
      </div>
      <div className='max-w-5xl  mx-auto'>
        <div className='w-full'>
          <Carousel showDots={true} responsive={responsive}>
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default TopCategories;

// const TopCategories = () => {
//   return (
//     <div className=' relative group flex flex-col w-[180px] h-[180px] ease-in duration-300 transition shadow-md cursor-pointer rounded-full'>
//       <img src='/white_chair.png' className='w-full h-full rounded-full ' alt='image ' />
//       <div className='flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-10 absolute top-0 left-0 h-full w-full rounded-full'></div>
//       <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100'>
//         <div className='w-full h-full flex justify-center items-end p-2'>
//           <div className=''>
//             <button className='py-2 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-xs'>
//               View
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TopCategories;
