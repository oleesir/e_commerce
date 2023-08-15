const ViewCard = ({ image }: { image: string }) => {
  return (
    <div className=' relative group flex flex-col w-[150px] h-[200px] md:w-[200px] md:h-[250px] ease-in duration-300  border-2 cursor-pointer pb-2'>
      <img src={image} className='w-full h-[150px] border-[1px]' alt='image ' />
      <div className='flex justify-center items-center absolute top-0 left-0 h-full w-full'></div>

      <div className='p-3'>
        <p className='text-xs mb-1'>Costway Convertible Futon Sofa Bed Memory Foam Couch...</p>
        <p className='text-sm font-bold'>$300.00</p>
      </div>
    </div>
  );
};
export default ViewCard;
