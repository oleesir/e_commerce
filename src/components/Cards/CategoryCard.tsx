import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, name }: { image: string; name: string }) => {
  const navigate = useNavigate();

  const navigateToProducts = (value: string) => {
    navigate(`/shop`, { state: { name: value } });
  };
  return (
    <div
      onClick={() => navigateToProducts(name)}
      className=' relative group flex flex-col w-[150px] md:w-[180px] h-[200px] ease-in duration-300 md:hover:scale-105 md:hover:shadow-xl cursor-pointer pb-2'
    >
      <img src={image} className='w-full h-[150px] ' alt='image ' />
      <div className='w-full flex justify-center py-3 '>
        <p className='text-[#151875] font-bold'>{name}</p>
      </div>
    </div>
  );
};
export default CategoryCard;
