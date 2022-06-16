import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { styled } from "@mui/system";

type InputProps = {
	isLoading: boolean;
};

export const Container = styled(Grid)(({ theme }) => ({
	paddingTop: "150px",
	paddingLeft: "50px",
	paddingRight: "50px",

	[theme.breakpoints.down("md")]: {
		width: "100%",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
}));

export const Content = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#fff",
	padding: "20px",
	width: "30%",
	borderRadius: "5px",

	[theme.breakpoints.down("md")]: {
		width: "100%",
		padding: 0,
	},
}));

export const InputFieldStyles = styled(TextField)(({ theme }) => ({
	width: "100%",
	borderRadius: "2px",
	"input::placeholder": {
		fontSize: "18px",
	},

	"& .MuiInputBase-root": {
		border: "2px solid #c0c0c0",
		fontSize: "18px",
		padding: "5px",
	},

	[theme.breakpoints.down("sm")]: {
		width: "100%",
		padding: 0,
		"input::placeholder": {
			fontSize: "15px",
		},
		"& .MuiInputBase-root": {
			border: "1px solid #c0c0c0",
			fontSize: "15px",
			padding: "4px",
		},
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

export const Header = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "25px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "22px",
	},
}));

export const SubHeader = styled(Typography)((props) => ({
	color: "#5F738C",
	fontSize: "13px",
}));

export const InputContent = styled("div")((props) => ({
	width: "100%",
}));

export const InputField = styled("div")((props) => ({
	width: "100%",
	marginBottom: "25px",
}));

export const PasswordInput = styled("div")((props) => ({
	width: "100%",
	marginBottom: "30px",
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
	fontWeight: 400,
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
	fontWeight: 400,
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

export const FooterLink = styled(Link)((props) => ({
	color: "#0065C0",
	fontSize: "13px",
	cursor: "pointer",
	textDecoration: "none",
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
