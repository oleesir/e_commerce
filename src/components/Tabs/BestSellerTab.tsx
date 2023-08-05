import ProductCard from '../Cards/ProductCard.tsx';
import { useGetProductsQuery } from '../../features/oliveMarketApi.tsx';

const BestSellerTab = () => {
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
      {data &&
        data.map((item: any) => (
          <ProductCard
            key={item._id}
            image={item.images[0].secureUrl}
            name={item.name}
            rating={item.rating}
            price={item.price / 100}
            numberOfReviews={item.numberOfReviews}
          />
        ))}
    </div>
  );
};
export default BestSellerTab;
