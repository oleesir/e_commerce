import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  const navToShop = () => {
    navigate('/shop');
  };
  return (
    <div
      className='w-full flex justify-center pt-[200px] h-screen bg-[#FFF] cursor-pointer'
      onClick={navToShop}
    >
      <div>
        <div className='flex flex-col items-center'>
          <img src='/undraw_empty_cart.png' className='w-[150px] h-[100px]' alt='image' />
          <p className='font-bold '>Your Cart is Empty</p>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
