import axios from "../axios";
import {CartInputState} from "../types/productTypes";

const CartService = {
    addToCartFromApi(formData: CartInputState) {
        return axios.post(`/carts`, formData);
    },
    reduceCartFromApi(formData: CartInputState) {
        return axios.post(`/carts/decrease`, formData);
    },
    getUserCartFromApi() {
        return axios.get(`/carts/user_cart`);
    },
    removeItemFromCartApi(productId:string) {
        return axios.delete(`/carts/remove/${productId}`);
    },
};

export default CartService;
