import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { ClipLoader } from "react-spinners";
import Loader from "../../components/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema";
import { IAuth } from "../../types/authTypes";

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
	Container,
	LoginFont,
} from "./styles";

const LoginPage: FC = () => {
	const dispatch = useAppDispatch();
	let navigate = useNavigate();
	const { isAuth, user, isLoading, isLoadingBtn } = useAppSelector((state: IAuth) => state.auth);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	useEffect(() => {
		const getData = () => {
			if (isAuth === true && user?.role === "admin") {
				navigate("/dashboard");
			}
		};
		return getData();
	}, [isAuth, navigate, user]);

	const onSubmit = (data: any) => {
		if (data) {
			dispatch(loginUser(data));
		}
	};

	return (
		<>
			{isLoading && <Loader backgroundcolor="#fff" />}
			{!isLoading && (
				<Container
					container
					md={12}
					direction="column"
					justifyContent="center"
					alignItems="center"
					sx={{ height: "100vh" }}
				>
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
								<LoginButton
									disableElevation
									disableFocusRipple
									type="submit"
									disabled={isLoadingBtn === true}
									isLoading={isLoadingBtn}
								>
									{!isLoadingBtn && <LoginFont>Login</LoginFont>}
									{isLoadingBtn && <ClipLoader color="#fff" size={32} />}
								</LoginButton>
							</InputContent>
						</form>

						<Footer>
							<FooterText>New to Olive?</FooterText> <FooterLink>Create an account</FooterLink>
						</Footer>
					</Content>
				</Container>
			)}
		</>
	);
};

export default LoginPage;
