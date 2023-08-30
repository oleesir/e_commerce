// import { useNavigate } from 'react-router-dom';

const TransactionFailed = () => {
  // const navigate = useNavigate();
  //
  // const navToShop = () => {
  //   navigate('/shop');
  // };

  return (
    <div className='w-full flex items-center justify-center pt-[210px] bg-[#FFF] cursor-pointer'>
      <div className=' mb-56 flex flex-col items-center lg:mb-20'>
        <div className='flex flex-col items-center justify-center'>
          <img src='/undraw_Warning.png' className='w-[250px] h-[200px]' alt='image' />
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-2xl mb-3'>Transaction Failed!!!</p>
          <p className='font-bold text-base'>Please try again.</p>
        </div>
      </div>
    </div>
  );
};
export default TransactionFailed;
