const OfferCard = ({ image }: { image: string }) => {
  return (
    <div className=' w-[200px] h-[200px] flex flex-col shadow-[0_8px_40px_0_rgba(49,32,138,0.05)]'>
      <div className='w-full flex justify-center items-center h-20 border-amber-950'>
        <img src={image} className='w-[40px] h-[40px] border-amber-950' alt='image ' />
      </div>
      <div className='w-full text-center p-2'>
        <p className='font-bold mb-5  text-[#151875]'>24/7 Support</p>
        <p className='text-xs text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
  );
};
export default OfferCard;
