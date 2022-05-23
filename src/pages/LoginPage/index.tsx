import { FC, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { ClipLoader } from "react-spinners";
import { clearServerMessage } from "../../features/authSlice";
import Loader from "../../components/Loader";
import getGoogleOAuthURL from "../../utils/getGoogleUrl";
import { LoginInput } from "../../types/authTypes";
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
	Container,
	GoogleBtn,
	ServerErrorMsg,
	ServerErrContent,
} from "./styles";

const LoginPage: FC = () => {
	const dispatch = useAppDispatch();
	let navigate = useNavigate();
	const { isAuth, user, isLoading, isLoadingBtn, error } = useAppSelector((state: any) => state.auth);
	const schema = yup.object({
		email: yup.string().required("Email is required").email("Email is invalid"),
		password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters."),
	});

	const {
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<LoginInput>({ resolver: yupResolver(schema) });

	useEffect(() => {
		const getData = () => {
			if (isAuth === true && user?.role === "admin") {
				navigate("/admin/dashboard");
			}
		};
		return getData();
	}, [isAuth, navigate, user]);

	const onSubmit = (data: LoginInput) => {
		if (data) {
			dispatch(loginUser(data));
		}
	};

	const clearServerError = (e: any) => {
		setValue(e?.target?.name, e?.target?.value);
		dispatch(clearServerMessage());
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
						<ServerErrContent>{error && <ServerErrorMsg>{error?.message}</ServerErrorMsg>}</ServerErrContent>

						<form onSubmit={handleSubmit(onSubmit)}>
							<InputContent>
								<EmailInput>
									<Controller
										name="email"
										control={control}
										render={({ field }) => (
											<InputFieldStyles
												{...field}
												InputProps={{ disableUnderline: true }}
												variant="standard"
												placeholder="Email"
												error={!!errors.email}
												onChange={clearServerError}
												helperText={errors.email ? errors.email?.message : ""}
											/>
										)}
									/>
								</EmailInput>
								<PasswordInput>
									<Controller
										name="password"
										control={control}
										render={({ field }) => (
											<InputFieldStyles
												{...field}
												InputProps={{ disableUnderline: true }}
												variant="standard"
												placeholder="Password"
												error={!!errors.password}
												onChange={clearServerError}
												helperText={errors.password ? errors.password?.message : ""}
											/>
										)}
									/>

									{/* {errors.password && errors?.password?.message && <ErrorMsg>{errors?.password?.message}</ErrorMsg>} */}
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
									{!isLoadingBtn && "Login"}
									{isLoadingBtn && <ClipLoader color="#fff" size={32} />}
								</LoginButton>

								<GoogleBtn
									isLoading={isLoadingBtn}
									startIcon={<img src={"/google.svg"} style={{ width: "25px" }} alt="google logo" />}
									href={getGoogleOAuthURL()}
								>
									Sign In With Google
								</GoogleBtn>
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
