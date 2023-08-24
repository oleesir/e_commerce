import { Product } from '../types.ts';
import CartCard from './Cards/CartCard.tsx';

const CartItems = ({ cartState }: { cartState: Product[] }) => {
  return (
    <div className='w-full md:col-span-3'>
      {cartState &&
        cartState.map((cartItem: Product) => {
          return (
            <CartCard
              key={cartItem?._id}
              cartItemId={cartItem?._id}
              price={cartItem?.price}
              name={cartItem?.name}
              images={cartItem?.images[0].secureUrl}
              quantity={cartItem?.cartQuantity}
            />
          );
        })}
    </div>
  );
};

export default CartItems;
