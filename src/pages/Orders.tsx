import EmptyPage from '../components/EmptyPage.tsx';
import { useGetCustomerOrdersQuery } from '../features/oliveMarketApi.tsx';
import OrderCard from '../components/Cards/OrderCard.tsx';

const Orders = () => {
  const { data: orders } = useGetCustomerOrdersQuery(undefined);

  return (
    <>
      {orders && orders.length === 0 ? (
        <EmptyPage message={'No orders start shopping.'} image={'/emptyOrder.png'} />
      ) : (
        <div className='w-full pt-[120px]'>
          <div className='max-w-5xl  mx-auto  flex flex-col justify-center  pb-10 px-20'>
            {orders &&
              orders.map((order: any) => (
                <OrderCard
                  orderId={order?._id}
                  totalPriceAfterTax={order?.totalPriceAfterTax / 100}
                  key={order?._id}
                  cartItems={order?.cartItems}
                  invoice={order?.receiptUrl}
                  OrderDate={order?.createdAt}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Orders;
