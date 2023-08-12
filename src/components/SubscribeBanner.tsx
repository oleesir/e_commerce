const SubscribeBanner = () => {
  return (
    <div className="bg-[url('/subscribe_banner.png')] w-[100%] h-[350px] bg-cover bg-center flex justify-center items-center flex-col">
      <div>
        <div className='text-center'>
          <p className='text-[25px] font-bold text-[#151875]'>
            Get latest update by subscribing to{' '}
          </p>
          <p className='text-[25px] font-bold text-[#151875]'>our new letter.</p>
        </div>
      </div>
      <div>
        <button className='py-2 px-6 bg-[#FD665E] text-[#FFF] mt-5 rounded-none text-xs'>
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default SubscribeBanner;
