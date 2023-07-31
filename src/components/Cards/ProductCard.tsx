import ReactStars from 'react-rating-star-with-type';

const ProductCard = ({ image }: { image: string }) => {
  return (
    <div className=' relative group flex flex-col w-[200px] h-[300px] ease-in duration-300 hover:scale-105 hover:shadow-xl cursor-pointer pb-2'>
      <img src={image} className='w-full h-[150px] ' alt='image ' />
      <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full'></div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100'>
        <div className='w-full h-full flex justify-center items-end p-2'>
          <div className=''>
            <button className='py-2 px-4 bg-[#FD665E] text-[#FFF] mt-2 rounded-none text-xs'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='p-3'>
        <p className='text-xs mb-1'>Costway Convertible Futon Sofa Bed Memory Foam Couch...</p>
        <div className='mb-1 flex items-center'>
          <ReactStars value={4.5} activeColors={['orange']} classNames='mr-1' size={15} />
          <p className='text-gray-500 text-xs'>(120)</p>
        </div>

        <p className='text-xs mb-1'>$30.00</p>
      </div>
    </div>
  );
};
export default ProductCard;
