import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import CartItems from "../../components/CartItems";
import {getAllProducts} from "../../features/productSlice";
import {getTotalAmount, getTotalQuantity, getUserCart} from "../../features/cartSlice";
import Loader from "../../components/Loader";
import {Wrapper} from "./styles";




const Cart: FC = () => {
    const dispatch = useAppDispatch();
    const {products} = useAppSelector((state: any) => state.product);
    const {cartTotalQuantity, cartItems, cartTotalAmount,cartFromApi,isLoading }= useAppSelector((state: any) => state.cart);
    const [cartState,setCartState] = useState(cartItems)
    const {isAuth} = useAppSelector((state: any) => state.auth);



    useEffect(() => {
        const getData = () => {
            dispatch(getAllProducts());
        };
        return getData();
    }, [dispatch]);

    useEffect(() => {
        if(isAuth){
            dispatch(getUserCart());
        }

    }, [dispatch,isAuth]);


    useEffect(() => {
        if(!isAuth && cartItems){
            setCartState(cartItems)
            dispatch(getTotalQuantity());
            dispatch(getTotalAmount());
        }

    }, [dispatch,cartItems,isAuth,setCartState,cartState]);


    return (
        <Wrapper>
            {isLoading && <Loader backgroundcolor="#fff"/>}
            {!isLoading &&  <CartItems
              cartTotalQuantity={cartTotalQuantity}
              cartTotalAmount={cartTotalAmount}
              products={products}
              isAuth={isAuth}
              cartState={cartState}
              cartFromApi={cartFromApi}
            />}

        </Wrapper>
    );
};

export default Cart;
