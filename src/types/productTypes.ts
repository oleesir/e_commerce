export type Reviews = {
	name: string;
	rating: number;
	comment: string;
	user: string;
};

export type Images = {
	cloudinaryId: string;
	secureUrl: string;
};

export type ProductInfo = {
	_id: string;
	name: string;
	slug: string;
	description: string;
	images: Images[];
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
	isLoading: boolean;
	cartFromApi: any;
};

export type CartInputState = {
	productId: string;
	price:number;
};


export type DeleteInputState = {
	productId: string;
};


export type CartItemsInfo = {
	productId: string;
	quantity:number;
	price:number;
};


export type CartItemsFromApi = {
	cartItems: CartItemsInfo[];
	totalPrice:number;
	totalQuantity:number

};
