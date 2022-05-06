import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
	Content,
	TopMessages,
	Header,
	SubHeader,
	Footer,
	InputContent,
	EmailInput,
	PasswordInput,
	LoginButton,
	ForgotPassword,
	ForgotPasswordText,
	FooterText,
	FooterLink,
	InputFieldStyles,
	ErrorMsg,
} from "./styles";

const schema = yup.object({
	email: yup.string().email("Please enter a vaild email").required("Email is required"),
	password: yup.string().required("Password is required").min(6, "Your password has to be at least 6 characters"),
});

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<Grid container md={12} direction="column" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
			<Content>
				<TopMessages>
					<Header>Welcome Back</Header>
					<SubHeader>Enter your credentials to access your account</SubHeader>
				</TopMessages>
				<form onSubmit={handleSubmit(onSubmit)}>
					<InputContent>
						<EmailInput>
							<InputFieldStyles placeholder="Email" disableUnderline={true} {...register("email")} />
							<ErrorMsg>{errors.email?.message}</ErrorMsg>
						</EmailInput>
						<PasswordInput>
							<InputFieldStyles placeholder="Password" disableUnderline={true} {...register("password")} />
							<ErrorMsg>{errors.password?.message}</ErrorMsg>
						</PasswordInput>
						<ForgotPassword>
							<ForgotPasswordText>Forgot password?</ForgotPasswordText>
						</ForgotPassword>
						<LoginButton disableElevation disableFocusRipple type="submit">
							Login
						</LoginButton>
					</InputContent>
				</form>

				<Footer>
					<FooterText>New to Olive?</FooterText> <FooterLink>Create an account</FooterLink>
				</Footer>
			</Content>
		</Grid>
	);
};

export default LoginPage;
