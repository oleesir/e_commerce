import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar.tsx';
import ProductCard from '../components/Cards/ProductCard.tsx';
import { useGetFilterProductsQuery, useGetProductsQuery } from '../features/oliveMarketApi.tsx';
import Loader from '@/components/Loaders/Loader.tsx';

const Products = () => {
  const { state }: { state: any } = useLocation();
  const { data, isLoading: productsLoading } = useGetProductsQuery(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [products, setProducts] = useState(data);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const { data: filteredProducts } = useGetFilterProductsQuery({
    categories: selectedCategories,
    brands: selectedBrands,
    categoryFromState: selectedCategory,
    brandFromState: selectedBrand,
  });

  const [visibleProducts, setVisibleProducts] = useState(8);
  const [visibleProductsFromState, setVisibleProductsFromState] = useState(8);

  useEffect(() => {
    if (state?.category !== undefined) {
      setSelectedCategory(state?.category);
      setSelectedBrand('');
    }
    if (state?.brand !== undefined) {
      setSelectedBrand(state?.brand);
      setSelectedCategory('');
    }
  }, [state?.brand, state?.category, setSelectedBrand, setSelectedCategory]);

  useEffect(() => {
    if (state?.products === undefined) {
      setVisibleProductsFromState(8);
    }
  }, [state?.products]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);

  useEffect(() => {
    if (products) {
      setVisibleProducts(8);
    }
  }, [products, setVisibleProducts]);

  useEffect(() => {
    if (filteredProducts) {
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  }, [filteredProducts, setProducts, data]);

  const showMoreProducts = () => {
    setVisibleProducts((prevState) => prevState + 4);
  };

  const showMoreProductsFromState = () => {
    setVisibleProductsFromState((prevState) => prevState + 4);
  };

  return (
    <div className='w-full py-[150px]'>
      {productsLoading && <Loader />}
      {!productsLoading && (
        <div className='max-w-5xl  mx-auto'>
          <div className='grid grid-cols-5 gap-8'>
            <div>
              <Sidebar
                products={products}
                setProducts={setProducts}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
              />
            </div>
            <div className=' px-5 col-span-5 lg:col-span-4'>
              {state && state?.products !== undefined ? (
                <>
                  <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
                    {state?.products &&
                      state?.products
                        .slice(0, visibleProductsFromState)
                        .map((item: any) => (
                          <ProductCard
                            key={item?._id}
                            productId={item?._id}
                            image={item?.images[0].secureUrl}
                            name={item?.name}
                            rating={item?.rating}
                            price={item?.price / 100}
                            slug={item?.slug}
                            numberOfReviews={item?.numberOfReviews}
                          />
                        ))}
                  </div>
                </>
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

          {state?.products === undefined ? (
            products && products.length <= visibleProducts ? null : (
              <div className='w-full flex justify-center pt-10'>
                <button
                  type='button'
                  onClick={showMoreProducts}
                  className='text-[#FFF] text-xs bg-[#FD665E] py-3 px-6'
                >
                  Show more
                </button>
              </div>
            )
          ) : (
            <>
              {state?.products.length <= visibleProductsFromState ? null : (
                <div className='w-full flex justify-center pt-10'>
                  <button
                    type='button'
                    onClick={showMoreProductsFromState}
                    className='text-[#FFF] text-xs bg-[#FD665E] p-3'
                  >
                    Show more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Products;
