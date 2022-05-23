import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";

type InputProps = {
	isLoading: boolean;
};

export const Container = styled(Grid)(({ theme }) => ({
	[theme.breakpoints.down("laptop")]: {
		width: "100%",
		paddingLeft: "50px",
		paddingRight: "50px",
	},

	[theme.breakpoints.only("mobile")]: {
		width: "100%",
		paddingLeft: "20px",
		paddingRight: "20px",
	},
}));

export const Content = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#fff",
	padding: "20px",
	width: "30%",
	borderRadius: "5px",

	[theme.breakpoints.down("laptop")]: {
		width: "100%",
		padding: 0,
	},
}));

export const InputFieldStyles = styled(TextField)((props) => ({
	width: "100%",
	borderRadius: "2px",
	"input::placeholder": {
		fontSize: "20px",
	},

	"& .MuiInputBase-root": {
		border: "2px solid #c0c0c0",
		fontSize: "20px",
		padding: "5px",
	},
}));

export const TopMessages = styled("div")((props) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	marginBottom: "30px",
}));

export const Header = styled(Typography)((props) => ({
	color: "#072F40",
	fontSize: "25px",
}));

export const SubHeader = styled(Typography)((props) => ({
	color: "#5F738C",
	fontSize: "13px",
}));

export const InputContent = styled("div")((props) => ({
	width: "100%",
}));

export const EmailInput = styled("div")((props) => ({
	width: "100%",
	marginBottom: "40px",
}));

export const PasswordInput = styled("div")((props) => ({
	width: "100%",
	marginBottom: "20px",
}));

export const ForgotPassword = styled("div")((props) => ({
	display: "flex",
	justifyContent: "flex-end",
	width: "100%",
	marginBottom: "20px",
}));

export const ForgotPasswordText = styled(Typography)((props) => ({
	color: "#0065C0",
	fontSize: "13px",
	cursor: "pointer",
}));

export const LoginButton = styled(Button)<InputProps>(({ isLoading }) => ({
	width: "100%",
	padding: "10px",
	fontSize: "16px",
	backgroundColor: "#1976D2",
	marginBottom: "20px",
	textTransform: "none",
	color: "#fff",
	cursor: "pointer",
	opacity: isLoading === true ? 0.5 : 1,
	"&:hover": {
		backgroundColor: "#1976D2",
	},
}));

export const GoogleBtn = styled(Button)<InputProps>(({ isLoading }) => ({
	width: "100%",
	padding: "10px",
	fontSize: "16px",
	backgroundColor: "transparent",
	marginBottom: "20px",
	cursor: "pointer",
	textTransform: "none",
	border: "1px solid #1976D2",
	"&:hover": {
		backgroundColor: "transparent",
	},
}));

export const LoginFont = styled("p")(() => ({
	fontSize: "18px",
	color: "#fff",
}));

export const Footer = styled("div")((props) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
}));

export const FooterText = styled(Typography)((props) => ({
	color: "#072F40",
	fontSize: "13px",
}));

export const FooterLink = styled(Typography)((props) => ({
	color: "#0065C0",
	fontSize: "13px",
	cursor: "pointer",
}));

export const ErrorMsg = styled(Typography)((props) => ({
	marginTop: "5px",
	color: "#C62828",
	fontSize: "10px",
}));

export const ServerErrorMsg = styled(Typography)((props) => ({
	marginTop: "5px",
	color: "#C62828",
	fontSize: "15px",
}));

export const ServerErrContent = styled("div")((props) => ({
	width: "100%",
	textAlign: "center",
	marginBottom: "10px",
}));
