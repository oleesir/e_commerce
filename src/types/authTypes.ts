export type UserInfo = {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	role: string;
};

export type LoginInfo = {
	email: string | null;
	password: string | null;
};

export type AuthState = {
	user: UserInfo | null;
	isLoading: boolean;
	isLoadingBtn: boolean;
	isAuth: boolean;
	errors: any;
};

export type IAuth = {
	auth: AuthState;
};

export type LoginInput = {
	email: string;
	password: string;
};

export type IState = {
	email: string | null;
	password: string | null;
};
