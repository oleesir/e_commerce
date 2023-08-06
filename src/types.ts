export type SignupInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
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
  countInStock: number;
};
