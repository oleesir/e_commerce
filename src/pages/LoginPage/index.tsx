import {FC, useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {clearServerMessage, loginUser} from "../../features/authSlice";
import {clearLocalStorageData} from "../../features/cartSlice";
import {useAppDispatch, useAppSelector} from "../../store";
import {ClipLoader} from "react-spinners";
import Loader from "../../components/Loader";
import getGoogleOAuthURL from "../../utils/getGoogleUrl";
import {LoginInput} from "../../types/authTypes";
import {loginSchema} from "../../schemas/authSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    Container,
    Content,
    EmailInput,
    Footer,
    FooterLink,
    FooterText,
    ForgotPassword,
    ForgotPasswordText,
    GoogleBtn,
    Header,
    InputContent,
    InputFieldStyles,
    LoginButton,
    PasswordInput,
    ServerErrContent,
    ServerErrorMsg,
    SubHeader,
    TopMessages,
} from "./styles";


const LoginPage: FC = () => {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const {isAuth, user, isLoading, isLoadingBtn, error} = useAppSelector((state: any) => state.auth);


    const {
        handleSubmit,
        setValue,
        control,
        formState: {errors},
    } = useForm<LoginInput>({resolver: yupResolver(loginSchema)});

    useEffect(() => {
        const getData = () => {
            if (isAuth === true && user?.role === "admin") {
                dispatch(clearLocalStorageData());
                navigate("/admin/dashboard");
            }

            if (isAuth === true) {
                dispatch(clearLocalStorageData());
                navigate("/");
            }
        };
        return getData();
    }, [isAuth, navigate, user, dispatch]);

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
            {isLoading && <Loader backgroundcolor="#fff"/>}
            {!isLoading && (
                <Container container md={12} direction="column" justifyContent="center" alignItems="center">
                    <Content>
                        <TopMessages>
                            <Header>Welcome Back</Header>
                            <SubHeader>Enter your credentials to access your account</SubHeader>
                        </TopMessages>
                        <ServerErrContent>{error &&
                          <ServerErrorMsg>{error?.message}</ServerErrorMsg>}</ServerErrContent>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputContent>
                                <EmailInput>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({field}) => (
                                            <InputFieldStyles
                                                {...field}
                                                InputProps={{disableUnderline: true}}
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
                                        render={({field}) => (
                                            <InputFieldStyles
                                                {...field}
                                                InputProps={{disableUnderline: true}}
                                                variant="standard"
                                                placeholder="Password"
                                                error={!!errors.password}
                                                onChange={clearServerError}
                                                helperText={errors.password ? errors.password?.message : ""}
                                            />
                                        )}
                                    />
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
                                    {isLoadingBtn && <ClipLoader color="#fff" size={32}/>}
                                </LoginButton>

                                <GoogleBtn
                                    isLoading={isLoadingBtn}
                                    startIcon={<img src={"/google.svg"} style={{width: "25px"}} alt="google logo"/>}
                                    href={getGoogleOAuthURL()}
                                >
                                    Sign in with Google
                                </GoogleBtn>
                            </InputContent>
                        </form>

                        <Footer>
                            <FooterText>
                                New to Olive? <FooterLink href="/signup">Create an account</FooterLink>
                            </FooterText>
                        </Footer>
                    </Content>
                </Container>
            )}
        </>
    );
};

export default LoginPage;
