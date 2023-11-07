import ReactStars from 'react-rating-star-with-type';
import SponsorsBanner from '../components/SponsorsBanner.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useDecrementItemInCartApiMutation,
  useGetProductQuery,
  useGetProductsQuery,
  useGetUserCartQuery,
  useIncrementItemInCartApiMutation,
  useLoadUserQuery,
} from '../features/oliveMarketApi.tsx';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';
import { addToCart, decreaseItem } from '../features/oliveMarketSlice.tsx';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import FeaturedProducts from '../components/FeaturedProducts.tsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';

const Product = () => {
  const navigate = useNavigate();
  const { state }: { state: any } = useLocation();
  const dispatch = useAppDispatch();
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: queryProduct } = useGetProductQuery(state?.productId);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const [incrementItemInCartApi] = useIncrementItemInCartApiMutation();
  const [decrementItemInCartApi] = useDecrementItemInCartApiMutation();
  const [selectedImage, setSelectedImage] = useState('');
  const { data: queryProducts } = useGetProductsQuery(undefined);
  const newArray = queryProducts && queryProducts.slice(0, 10);
  const { cartItems } = useAppSelector((state: any) => state.cart);
  const itemInCart = cartItems.find((item: any) => item._id === state?.productId);

  useEffect(() => {
    if (state?.productId === undefined) {
      navigate('/404');
    }
  }, [state?.productId, navigate]);

  const itemInCartApi = userCart?.cartItems.find(
    (item: any) => item.productId === state?.productId,
  );

  const handleSelectedImage = (image: string) => {
    setSelectedImage(image);
  };

  const handleIncreaseProduct = async () => {
    if (authUser?._id === undefined) {
      queryProduct && dispatch(addToCart(queryProduct));
    } else {
      await incrementItemInCartApi({
        productId: queryProduct?._id,
        price: queryProduct && queryProduct?.price / 100,
        cartId: authUser?.cartId,
        name: queryProduct?.name,
        image: queryProduct?.images[0].secureUrl,
      });
    }
  };

  const handleDecreaseProduct = async () => {
    if (authUser?._id === undefined) {
      queryProduct && dispatch(decreaseItem(queryProduct));
    } else {
      await decrementItemInCartApi({
        productId: queryProduct?._id,
        price: queryProduct && queryProduct?.price / 100,
        cartId: authUser?.cartId,
      });
    }
  };

  return (
    <>
      <div className='w-full'>
        <div className='max-w-5xl  mx-auto px-3 md:px-0 py-[120px]'>
          <div className='w-full flex flex-col'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='flex flex-col'>
                <div className='w-full flex items-center justify-center mb-5'>
                  <img
                    src={selectedImage ? selectedImage : queryProduct?.images[0].secureUrl}
                    className='w-[300px] h-[300px]'
                    alt='product'
                  />
                </div>
                <div className='w-full flex justify-center'>
                  <div className='w-2/5  flex justify-evenly'>
                    {queryProduct?.images.map((image: any) => {
                      return (
                        <button
                          key={image?._id}
                          onClick={() => handleSelectedImage(image?.secureUrl)}
                          className='w-[50px] h-[50px] mr-2 cursor-pointer'
                        >
                          <img
                            key={image?._id}
                            src={image?.secureUrl}
                            className='w-full h-full'
                            alt='product_image '
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:border-l-[1px] md:px-4'>
                <p className=' mb-5 max-w-prose text-zinc-800'>{queryProduct?.name}</p>
                <div className='flex w-full '>
                  <p className='text-[12px] font-bold max-w-prose text-zinc-800'>Brand: </p>
                  <p className='text-[12px] ml-1 max-w-prose text-zinc-800'>
                    {queryProduct?.brand?.name}
                  </p>
                </div>
                <div className='flex w-full mb-1'>
                  <p className='text-[20px] font-bold max-w-prose text-zinc-800'>Price: </p>
                  <p className='text-[20px] ml-1 max-w-prose text-zinc-800'>
                    {new Intl.NumberFormat('en-CA', {
                      style: 'currency',
                      currency: 'CAD',
                    }).format(Number(queryProduct?.price) / 100)}
                  </p>
                </div>
                <div className='flex items-center mb-2'>
                  <p className=' text-xs text-zinc-800'>
                    {queryProduct?.countInStock} left in stock.
                  </p>
                </div>
                <div className='flex items-center mb-5'>
                  <ReactStars
                    value={queryProduct?.rating}
                    activeColors={['orange']}
                    classNames='mr-1'
                    size={15}
                  />
                  <p className='text-zinc-800 text-xs mt-1'>(120)</p>
                </div>
                <div className='w-full flex '>
                  {!itemInCart && authUser?._id === undefined ? (
                    <button
                      type='button'
                      onClick={handleIncreaseProduct}
                      className='rounded-none bg-[#FD665E] text-[#FFF] text-base font-bold py-4 px-8 cursor-pointer w-full'
                    >
                      Add to Cart
                    </button>
                  ) : null}

                  {itemInCart && authUser?._id === undefined && (
                    <div className='w-full  flex justify-center'>
                      <div className='w-1/3  flex justify-between'>
                        <button
                          type='button'
                          onClick={handleDecreaseProduct}
                          className='p-3 bg-[#FD665E] text-[#FFF]'
                        >
                          <RiSubtractLine size={20} color='#FFF' />
                        </button>
                        <div className='p-3 flex items-center'>
                          <p className='text-xl'>{itemInCart?.quantity}</p>
                        </div>
                        <button
                          type='button'
                          onClick={handleIncreaseProduct}
                          className='p-3 bg-[#FD665E] text-[#FFF]'
                        >
                          <RiAddLine size={20} color='#FFF' />
                        </button>
                      </div>
                    </div>
                  )}

                  {!itemInCartApi && authUser?._id ? (
                    <button
                      type='button'
                      onClick={handleIncreaseProduct}
                      className='rounded-none bg-[#FD665E] text-[#FFF] text-base font-bold py-4 px-8 cursor-pointer w-full'
                    >
                      Add to Cart
                    </button>
                  ) : null}

                  {itemInCartApi && authUser?._id && (
                    <div className='w-full  flex justify-center'>
                      <div className='w-1/3  flex justify-between'>
                        <button
                          type='button'
                          onClick={handleDecreaseProduct}
                          className='p-3 bg-[#FD665E] text-[#FFF]'
                        >
                          <RiSubtractLine size={20} color='#FFF' />
                        </button>
                        <div className='p-3 flex items-center'>
                          <p className='text-xl'>{itemInCartApi?.quantity}</p>
                        </div>
                        <button
                          type='button'
                          onClick={handleIncreaseProduct}
                          className='p-3 bg-[#FD665E] text-[#FFF]'
                        >
                          <RiAddLine size={20} color='#FFF' />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='w-full mt-10 px-5'>
              <Accordion type='single' collapsible className='pl-5 pr-4 w-full py-2 '>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='hover:no-underline py-0'>
                    <p className='text-[#151875] text-[24px] font-semibold max-w-prose'>
                      About this product
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className='pt-5'>
                    <p className='max-w-prose text-zinc-700'>{queryProduct?.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className='w-full flex flex-col mt-10 md:px-5'>
              <div className='flex w-full justify-center'>
                <p className='text-[18px] text-[#151875] font-semibold max-w-prose'>
                  You may also like
                </p>
              </div>
              <FeaturedProducts newArray={newArray} />
            </div>
            <div className='w-full  mt-20 '>
              <SponsorsBanner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
