import axios from "../axios";

const ProductService = {
	getProducts() {
		return axios.get("/products");
	},
	getProduct(_id: string) {
		return axios.get(`/products/${_id}`);
	},
};

export default ProductService;
