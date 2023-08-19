import { Product } from '../types.ts';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({
  listedProducts,
  setQueryText,
}: {
  listedProducts: Product[] | undefined;
  setQueryText: any;
}) => {
  const navigate = useNavigate();
  const navigateToProduct = ({
    slug,
    productId,
  }: {
    slug: string | undefined;
    productId: string;
  }) => {
    navigate(`/${slug}`, { state: { productId } });
    setQueryText('');
  };

  return (
    <>
      <div className=' absolute w-full border-[1px] z-30 left-5 bg-[#FFF] '>
        {listedProducts &&
          listedProducts.map((product: Product) => {
            return (
              <div
                onClick={() => {
                  navigateToProduct({ slug: product?.slug, productId: product?._id });
                }}
                className='w-full p-2 cursor-pointer hover:bg-[#F6F7FB]'
              >
                <p className='text-[#000]  text-xs cursor-pointer'>
                  {product?.name.length > 70 ? product?.name.slice(0, 65) : product?.name}
                  {product?.name.length >= 70 && '...'}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchResult;
