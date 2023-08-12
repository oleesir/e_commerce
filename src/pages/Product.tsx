import ReactStars from 'react-rating-star-with-type';
import Accordion from '../components/Accordion.tsx';
import ViewCard from '../components/Cards/ViewCard.tsx';
import Carousel from 'react-multi-carousel';
import { responsive } from '../utils/responsive.ts';
import SponsorsBanner from '../components/SponsorsBanner.tsx';
import { useLocation } from 'react-router-dom';
import {
  useDecrementItemInCartApiMutation,
  useGetProductQuery,
  useGetUserCartQuery,
  useIncrementItemInCartApiMutation,
  useLoadUserQuery,
} from '../features/oliveMarketApi.tsx';
import Loader from '../components/Loaders/Loader.tsx';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../reduxHooks.ts';
import { addToCart, decreaseItem } from '../features/oliveMarketSlice.tsx';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

const Product = () => {
  const { state }: { state: any } = useLocation();
  const dispatch = useAppDispatch();
  const { productId }: { productId: string } = state;
  const { data: authUser } = useLoadUserQuery(undefined);
  const { data: queryProduct, isLoading } = useGetProductQuery(productId);
  const { data: userCart } = useGetUserCartQuery(authUser?.cartId);
  const [incrementItemInCartApi] = useIncrementItemInCartApiMutation();
  const [decrementItemInCartApi] = useDecrementItemInCartApiMutation();
  const [selectedImage, setSelectedImage] = useState('');

  const itemInCart = useAppSelector((state: any) =>
    state.cart.cartItems.find((item: any) => item._id === productId),
  );
  const itemInCartApi = userCart?.cartItems.find((item: any) => item.productId === productId);

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
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='w-full mt-[150px] '>
          <div className='max-w-5xl  mx-auto px-3 md:px-0'>
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
                    <div className='w-2/3  flex justify-evenly'>
                      {queryProduct?.images.map((image: any) => {
                        return (
                          <button
                            onClick={() => handleSelectedImage(image?.secureUrl)}
                            className='w-[50px] h-[50px] mr-2 cursor-pointer'
                          >
                            <img
                              key={image._id}
                              src={image.secureUrl}
                              className='w-full h-full'
                              alt='product_image '
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col md:border-l-[1px] md:pl-3'>
                  <p className='text-[24px] mb-5'>{queryProduct?.name}</p>
                  <div className='flex w-full '>
                    <p className='text-[12px] font-bold'>Brand: </p>
                    <p className='text-[12px] ml-1'>{queryProduct?.brand} </p>
                  </div>
                  <div className='flex w-full '>
                    <p className='text-[20px] font-bold'>Price: </p>
                    <p className='text-[20px] ml-1'>
                      {new Intl.NumberFormat('en-CA', {
                        style: 'currency',
                        currency: 'CAD',
                      }).format(Number(queryProduct?.price) / 100)}
                    </p>
                  </div>
                  <div className='flex items-center mb-5'>
                    <ReactStars
                      value={queryProduct?.rating}
                      activeColors={['orange']}
                      classNames='mr-1'
                      size={15}
                    />
                    <p className='text-gray-500 text-xs mt-1'>(120)</p>
                  </div>
                  <div className='w-full flex '>
                    {!itemInCart && authUser?._id === undefined ? (
                      <button
                        type='button'
                        onClick={handleIncreaseProduct}
                        className='rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer w-full'
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
                            <p className='text-xl'>{itemInCart?.cartQuantity}</p>
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
                        className='rounded-none bg-[#FD665E] text-[#FFF] text-sm font-bold py-3 px-8 cursor-pointer w-full'
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
              <div className='w-full mt-10'>
                <Accordion description={queryProduct?.description} />
              </div>
              <div className='w-full flex flex-col mt-10'>
                <div className='flex mb-5'>
                  <p className='text-[20px]'>You may also like</p>
                </div>
                <div className='w-full'>
                  <Carousel
                    responsive={responsive}
                    // arrows={false}
                    // customLeftArrow={<CustomLeftArrow />}
                  >
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/black_couch.jpeg' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/black_couch.jpeg' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/black_couch.jpeg' />
                    <ViewCard image='/cane_chair.png' />
                    <ViewCard image='/white_chair.png' />
                    <ViewCard image='/white_chair.png' />
                  </Carousel>
                </div>
              </div>
              <div className='w-full  mt-20 '>
                <SponsorsBanner />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
