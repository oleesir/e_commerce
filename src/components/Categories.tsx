import { useGetCategoriesQuery } from '../features/oliveMarketApi.tsx';
import CategoryCard from './Cards/CategoryCard.tsx';

const Categories = () => {
  const { data } = useGetCategoriesQuery(undefined);
  return (
    <div className='w-full flex mt-10'>
      <div className='max-w-5xl  mx-auto'>
        <div className='hidden md:grid gap-x-8 gap-y-8 md:grid-cols-4'>
          {data &&
            data.map((item: any) => (
              <CategoryCard key={item?._id} image={item?.image} name={item?.name} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Categories;
