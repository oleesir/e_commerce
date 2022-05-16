import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

type InputProps = {
	isLoading: boolean;
};

export const Container = styled(Grid)(({ theme }) => ({
	// [theme.breakpoints.down("laptop")]: {
	// 	width: "100%",
	// 	paddingLeft: "50px",
	// 	paddingRight: "50px",
	// },
	// [theme.breakpoints.only("mobile")]: {
	// 	width: "100%",
	// 	paddingLeft: "20px",
	// 	paddingRight: "20px",
	// },
}));

export const NavLinks = styled("nav")(({ theme }) => ({
	width: "100%",
}));

export const HeaderFont = styled(Typography)(({ theme }) => ({
	fontSize: "30px",
	color: "#fff",
	fontWeight: "bold",
}));

export const NavLink = styled(Link)(({ theme }) => ({
	display: "block",
	textDecoration: "none",
	cursor: "pointer",
	paddingLeft: "20px",
	fontSize: "20px",
	width: "100%",
	padding: "20px",
	color: "#fff",
	borderBottom: "1px solid #fff",
}));

export const HeaderContent = styled("div")(({ theme }) => ({
	width: "100%",
	marginBottom: "50px",
	paddingLeft: "20px",
}));

export const UnStyledList = styled("ul")(({ theme }) => ({
	listStyle: "none",
}));

export const NavList = styled("li")(({ theme }) => ({
	cursor: "pointer",
}));
