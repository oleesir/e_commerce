import * as yup from "yup";

export const schema = yup.object({
	email: yup.string().email("Please enter a vaild email").required("Email is required"),
	password: yup.string().required("Password is required").min(6, "Your password has to be at least 6 characters"),
});
