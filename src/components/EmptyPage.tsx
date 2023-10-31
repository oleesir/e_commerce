import { useNavigate } from 'react-router-dom';

const EmptyPage = ({ message, image }: { message: string; image: string }) => {
  const navigate = useNavigate();

  const navToShop = () => {
    navigate('/shop');
  };
  return (
    <div
      className='w-full flex justify-center pt-[250px]  bg-[#FFF] cursor-pointer'
      onClick={navToShop}
    >
      <div className='mb-56 flex flex-col items-center lg:mb-20 '>
        <div className='flex flex-col items-center'>
          <img src={image} className='w-[250px] h-[200px]' alt='image' />
        </div>
        <div className='flex flex-col items-center  '>
          <p className='font-semi-bold text-xl max-w-prose text-zinc-800'>{message}</p>
        </div>
      </div>
    </div>
  );
};
export default EmptyPage;
