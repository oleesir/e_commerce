import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  const navToShop = () => {
    navigate('/shop');
  };
  return (
    <div
      className='w-full flex justify-center pt-[250px]  bg-[#FFF] cursor-pointer'
      onClick={navToShop}
    >
      <div className='mb-56 flex flex-col items-center lg:mb-20'>
        <div className='flex flex-col items-center'>
          <img src='/undraw_empty_cart.png' className='w-[250px] h-[200px]' alt='image' />
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-xl'>Your Cart is Empty</p>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
