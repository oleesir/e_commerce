import { CartItemFromApi } from '../types.ts';
import CartCard from './Cards/CartCard.tsx';

const CartItemsApi = ({ cartFromApi }: { cartFromApi: CartItemFromApi[] }) => {
  return (
    <div className='col-span-3'>
      {cartFromApi &&
        cartFromApi.map((cartItem: CartItemFromApi) => {
          return (
            <CartCard
              key={cartItem?.productId}
              cartItemId={cartItem?.productId}
              price={cartItem?.price}
              name={cartItem?.name}
              images={cartItem?.image}
              quantity={cartItem?.quantity}
            />
          );
        })}
    </div>
  );
};

export default CartItemsApi;
