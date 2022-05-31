import { FC, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { ClipLoader } from "react-spinners";
import { clearServerMessage } from "../../features/authSlice";
import Loader from "../../components/Loader";
import getGoogleOAuthURL from "../../utils/getGoogleUrl";
import { SignupInput } from "../../types/authTypes";
import { signupSchema } from "../../schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import {
	Content,
	TopMessages,
	Header,
	SubHeader,
	Footer,
	InputContent,
	InputField,
	PasswordInput,
	LoginButton,
	FooterText,
	FooterLink,
	InputFieldStyles,
	Container,
	GoogleBtn,
	ServerErrorMsg,
	ServerErrContent,
} from "./styles";

const SignupPage: FC = () => {
	const dispatch = useAppDispatch();
	let navigate = useNavigate();
	const { isAuth, user, isLoading, isLoadingBtn, error } = useAppSelector((state: any) => state.auth);
	const {
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<SignupInput>({ resolver: yupResolver(signupSchema) });

	useEffect(() => {
		const getData = () => {
			if (isAuth === true) {
				navigate("/home");
			}
		};
		return getData();
	}, [isAuth, navigate, user]);

	const onSubmit = (data: SignupInput) => {
		if (data) {
			dispatch(signupUser(data));
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
							<Header>Create Account</Header>
							<SubHeader>Enter your credentials to create your account</SubHeader>
						</TopMessages>
						<ServerErrContent>{error && <ServerErrorMsg>{error?.message}</ServerErrorMsg>}</ServerErrContent>

						<form onSubmit={handleSubmit(onSubmit)}>
							<InputContent>
								<InputField>
									<Controller
										name="firstName"
										control={control}
										render={({ field }) => (
											<InputFieldStyles
												{...field}
												InputProps={{ disableUnderline: true }}
												variant="standard"
												placeholder="First name"
												error={!!errors.firstName}
												onChange={clearServerError}
												helperText={errors.firstName ? errors.firstName?.message : ""}
											/>
										)}
									/>
								</InputField>
								<InputField>
									<Controller
										name="lastName"
										control={control}
										render={({ field }) => (
											<InputFieldStyles
												{...field}
												InputProps={{ disableUnderline: true }}
												variant="standard"
												placeholder="Last name"
												error={!!errors.lastName}
												onChange={clearServerError}
												helperText={errors.lastName ? errors.lastName?.message : ""}
											/>
										)}
									/>
								</InputField>
								<InputField>
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
								</InputField>
								<InputField>
									<Controller
										name="address"
										control={control}
										render={({ field }) => (
											<InputFieldStyles
												{...field}
												InputProps={{ disableUnderline: true }}
												variant="standard"
												placeholder="Address"
												error={!!errors.address}
												onChange={clearServerError}
												helperText={errors.address ? errors.address?.message : ""}
											/>
										)}
									/>
								</InputField>
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
								</PasswordInput>

								<LoginButton
									disableElevation
									disableFocusRipple
									type="submit"
									disabled={isLoadingBtn === true}
									isLoading={isLoadingBtn}
								>
									{!isLoadingBtn && "Signup"}
									{isLoadingBtn && <ClipLoader color="#fff" size={32} />}
								</LoginButton>

								<GoogleBtn
									isLoading={isLoadingBtn}
									startIcon={<img src={"/google.svg"} style={{ width: "25px" }} alt="google logo" />}
									href={getGoogleOAuthURL()}
								>
									Signup With Google
								</GoogleBtn>
							</InputContent>
						</form>

						<Footer>
							<FooterText>
								Already have an account? <FooterLink href="/login">Login</FooterLink>
							</FooterText>
						</Footer>
					</Content>
				</Container>
			)}
		</>
	);
};

export default SignupPage;
