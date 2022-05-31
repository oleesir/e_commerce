import axios from "../axios";
import { LoginInput, SignupInput } from "../types/authTypes";

const AuthService = {
	signinUser(formData: LoginInput) {
		return axios.post("/auth/login", formData);
	},
	signupUser(formData: SignupInput) {
		return axios.post("/auth/signup", formData);
	},
	loggedIn() {
		return axios.get("/auth/loggedin");
	},
};

export default AuthService;
