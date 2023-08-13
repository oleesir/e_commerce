export type SignupInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cartItems?: Product[];
};

export type LoginInput = {
  email: string;
  password: string;
  cartItems?: Product[];
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  address: string | undefined;
  callingCode: string | undefined;
  phoneNumber: string | undefined;
  email: string;
  role: string;
  cartId: string;
};

export type Reviews = {
  name: string;
  rating: number;
  comment: string;
  user: string;
};

export type Images = {
  secureUrl: string;
  cloudinaryId: string;
};

export type Product = {
  _id: string;
  name: string;
  slug?: string;
  description: string;
  reviews: Reviews[];
  images: Images[];
  category: string;
  brand: string;
  rating: number;
  numberOfReviews: number;
  price: number;
  cartQuantity: number;
  countInStock: number;
};

// export type data = {
//   _id: string;
//   name: string;
//   slug?: string;
//   description: string;
//   reviews: [{ name: string; rating: number; comment: string; user: string }];
//   images: [{ secureUrl: string; cloudinaryId: string }];
//   category: string;
//   brand: string;
//   rating: number;
//   numberOfReviews: number;
//   price: number;
//   cartQuantity: number;
//   countInStock: number;
// };

export type CartState = {
  cartItems: Product[];
};

export type CartItemFromApi = {
  productId: string;
  quantity: number;
  name: string;
  image: string;
  price: number;
  taxPrice: number;
  priceAfterTax: number;
};

export type CartInput = {
  productId: string | undefined;
  price: number | undefined;
  cartId: string;
  name: string | undefined;
  image: string | undefined;
};

export type DecreaseItemFromCartInput = {
  productId: string | undefined;
  price: number | undefined;
  cartId: string;
};

export type DeleteItemFromCartInput = {
  productId: string | undefined;
  cartId: string;
};
