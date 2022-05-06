import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { styled } from "@mui/system";

export const Content = styled("div", {
	name: "Content",
	slot: "Wrapper",
})((props) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#fff",
	padding: "20px",
	width: "30%",
	borderRadius: "5px",
}));

export const InputFieldStyles = styled(
	Input,
	{},
)((props) => ({
	width: "100%",
	borderRadius: "2px",
	border: "2px solid #c0c0c0",
	fontSize: "20px",
	padding: "5px",
	"input::placeholder": {
		fontSize: "20px",
	},
}));

export const TopMessages = styled("div", {
	name: "Content",
})((props) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	marginBottom: "30px",
}));

export const Header = styled(
	Typography,
	{},
)((props) => ({
	color: "#072F40",
	fontSize: "25px",
}));

export const SubHeader = styled(
	Typography,
	{},
)((props) => ({
	color: "#5F738C",
	fontSize: "13px",
}));

export const InputContent = styled(
	"div",
	{},
)((props) => ({
	width: "100%",
}));

export const EmailInput = styled(
	"div",
	{},
)((props) => ({
	width: "100%",
	marginBottom: "40px",
}));

export const PasswordInput = styled(
	"div",
	{},
)((props) => ({
	width: "100%",
	marginBottom: "20px",
}));

export const ForgotPassword = styled(
	"div",
	{},
)((props) => ({
	display: "flex",
	justifyContent: "flex-end",
	width: "100%",
	marginBottom: "20px",
}));

export const ForgotPasswordText = styled(
	Typography,
	{},
)((props) => ({
	color: "#0065C0",
	fontSize: "13px",
	cursor: "pointer",
}));

export const LoginButton = styled(
	Button,
	{},
)((props) => ({
	width: "100%",
	padding: "10px",
	fontSize: "18px",
	color: "#fff",
	backgroundColor: "#1976D2",
	marginBottom: "20px",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#1976D2",
	},
}));

export const Footer = styled(
	"div",
	{},
)((props) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
}));

export const FooterText = styled(
	Typography,
	{},
)((props) => ({
	color: "#072F40",
	fontSize: "13px",
}));

export const FooterLink = styled(
	Typography,
	{},
)((props) => ({
	color: "#0065C0",
	fontSize: "13px",
	cursor: "pointer",
}));

export const ErrorMsg = styled(
	Typography,
	{},
)((props) => ({
	marginTop: "5px",
	color: "#C62828",
	fontSize: "10px",
}));
