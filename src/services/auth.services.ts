import axios from "../axios";

const AuthService = {
	signinUser(formData: any) {
		return axios.post("/auth/login", formData);
	},
	loggedIn() {
		return axios.get("/auth/loggedin");
	},
};

export default AuthService;
