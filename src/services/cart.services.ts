import axios from "../axios";
import {CartInputState} from "../types/productTypes";

const CartService = {
    addToCartFromApi(formData: CartInputState) {
        return axios.post(`/carts`, formData);
    },

    getUserCartFromApi() {
        return axios.get(`/carts/user_cart`);
    },
};

export default CartService;
