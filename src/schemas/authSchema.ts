import * as yup from "yup";

export const signupSchema = yup.object({
	firstName: yup
		.string()
		.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
		.required("Firstname is required"),
	lastName: yup
		.string()
		.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
		.required("Lastname is required"),
	address: yup.string().required("Address is required"),
	email: yup.string().required("Email is required").email("Email is invalid"),
	password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters."),
});

export const loginSchema = yup.object({
	email: yup.string().required("Email is required").email("Email is invalid"),
	password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters."),
});
