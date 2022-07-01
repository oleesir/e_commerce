export type Reviews = {
	name: string;
	rating: number;
	comment: string;
	user: string;
};

export type ProductInfo = {
	_id: string;
	name: string;
	cloudinaryId: string;
	slug: string;
	description: string;
	image: string;
	category: string;
	brand: string;
	rating: number;
	numberOfReviews: number;
	price: number;
	countInStock: number;
	reviews: Reviews[];
	cartQuantity: number;
};

export type ProductState = {
	product: ProductInfo | null;
	products: ProductInfo[];
	isLoading: boolean;
	error: any;
};

export type CartState = {
	cartItems: ProductInfo[];
	cartTotalQuantity: number;
	cartTotalAmount: number;
	error: any;
};
