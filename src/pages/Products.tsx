import Sidebar from '../components/Sidebar.tsx';
import ProductCard from '../components/Cards/ProductCard.tsx';
import { useGetProductsQuery } from '../features/oliveMarketApi.tsx';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const { state }: { state: any } = useLocation();
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className='w-full mt-[150px]'>
      <div className='max-w-5xl  mx-auto'>
        <div className='grid grid-cols-5 gap-8'>
          <div>
            <Sidebar />
          </div>
          <div className='col-span-4'>
            {state !== null ? (
              <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
                {state.products &&
                  state.products.map((item: any) => (
                    <ProductCard
                      key={item._id}
                      productId={item._id}
                      image={item.images[0].secureUrl}
                      name={item.name}
                      rating={item.rating}
                      price={item.price / 100}
                      slug={item.slug}
                      numberOfReviews={item.numberOfReviews}
                    />
                  ))}
              </div>
            ) : (
              <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
                {data &&
                  data.map((item: any) => (
                    <ProductCard
                      key={item._id}
                      productId={item._id}
                      image={item.images[0].secureUrl}
                      name={item.name}
                      rating={item.rating}
                      price={item.price / 100}
                      slug={item.slug}
                      numberOfReviews={item.numberOfReviews}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
