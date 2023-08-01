const ViewCard = ({ image }: { image: string }) => {
  return (
    <div className=' relative group flex flex-col w-[200px] h-[250px] ease-in duration-300 hover:scale-105 hover:shadow-xl cursor-pointer pb-2'>
      <img src={image} className='w-full h-[150px] ' alt='image ' />
      <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full'></div>

      <div className='p-3'>
        <p className='text-xs mb-1'>Costway Convertible Futon Sofa Bed Memory Foam Couch...</p>
        <p className='text-sm font-bold'>$300.00</p>
      </div>
    </div>
  );
};
export default ViewCard;
