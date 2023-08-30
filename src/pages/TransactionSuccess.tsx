// import { useNavigate } from 'react-router-dom';

const TransactionSuccess = () => {
  // const navigate = useNavigate();
  //
  // const navToShop = () => {
  //   navigate('/shop');
  // };

  return (
    <div className='w-full flex items-center justify-center pt-[210px] bg-[#FFF] cursor-pointer'>
      <div className=' mb-56 flex flex-col items-center lg:mb-20'>
        <div className='flex flex-col items-center justify-center'>
          <img src='/undraw_Successful_purchase.png' className='w-[250px] h-[200px]' alt='image' />
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-2xl mb-3'>Transaction Successful!!!</p>
          <p className='font-bold text-base'>
            Thank you for choosing Olivemarket.Your items will be delivered to you in two working
            days.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TransactionSuccess;
