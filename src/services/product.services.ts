import axios from "../axios";

const ProductService = {
	getProducts() {
		return axios.get("/products");
	},
};

export default ProductService;
