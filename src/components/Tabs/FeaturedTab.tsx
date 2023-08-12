import ProductCard from '../Cards/ProductCard.tsx';
import { useGetProductsQuery } from '../../features/oliveMarketApi.tsx';
import ProductCardMobile from '../Cards/ProductCardMobile.tsx';

const FeaturedTab = () => {
  const { data } = useGetProductsQuery(undefined);

  return (
    <>
      <div className='hidden md:grid gap-x-8 gap-y-8 md:grid-cols-4'>
        {data &&
          data.map((item: any) => (
            <ProductCard
              key={item._id}
              slug={item?.slug}
              productId={item?._id}
              image={item.images[0].secureUrl}
              name={item.name}
              rating={item.rating}
              price={item.price / 100}
              numberOfReviews={item.numberOfReviews}
            />
          ))}
      </div>
      <div className='flex flex-col md:hidden'>
        {data &&
          data.map((item: any) => (
            <ProductCardMobile
              key={item._id}
              slug={item?.slug}
              productId={item?._id}
              image={item.images[0].secureUrl}
              name={item.name}
              rating={item.rating}
              price={item.price / 100}
              numberOfReviews={item.numberOfReviews}
            />
          ))}
      </div>
    </>
  );
};
export default FeaturedTab;
