import Sidebar from '../components/Sidebar.tsx';
import ProductCard from '../components/Cards/ProductCard.tsx';
import { useGetProductsQuery } from '../features/oliveMarketApi.tsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Products = () => {
  const { state }: { state: any } = useLocation();
  const { data: products } = useGetProductsQuery(undefined);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [visibleProductsFromState, setVisibleProductsFromState] = useState(8);

  useEffect(() => {
    if (state?.products === undefined) {
      setVisibleProductsFromState(8);
    }
  }, [state?.products]);

  useEffect(() => {
    if (products) {
      setVisibleProducts(8);
    }
  }, [products]);

  const showMoreProducts = () => {
    setVisibleProducts((prevState) => prevState + 4);
  };

  const showMoreProductsFromState = () => {
    setVisibleProductsFromState((prevState) => prevState + 4);
  };

  return (
    <div className='w-full pt-[150px]'>
      <div className='max-w-5xl  mx-auto'>
        <div className='grid grid-cols-5 gap-8'>
          <div>
            <Sidebar />
          </div>
          <div className='col-span-4'>
            {state !== null ? (
              <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
                {state.products &&
                  state.products
                    .slice(0, visibleProductsFromState)
                    .map((item: any) => (
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
                {products &&
                  products
                    .slice(0, visibleProducts)
                    .map((item: any) => (
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

        {state === null ? (
          <div className='w-full flex justify-center mt-10'>
            <button
              type='button'
              onClick={showMoreProducts}
              className='text-[#FFF] text-xs bg-[#FD665E] p-3'
            >
              Show more
            </button>
          </div>
        ) : state?.products.length <= visibleProductsFromState ||
          state?.products.length === undefined ? null : (
          <div className='w-full flex justify-center mt-10'>
            <button
              type='button'
              onClick={showMoreProductsFromState}
              className='text-[#FFF] text-xs bg-[#FD665E] p-3'
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Products;
