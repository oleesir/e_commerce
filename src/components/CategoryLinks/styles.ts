import { Grid, Typography, Link as MaterialLink } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

type InputProps = {
	isLoading: boolean;
};

export const Container = styled(Grid)(({ theme }) => ({
	backgroundColor: "#fff",
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
	fontSize: "18px",
	color: "#072F40",
	fontWeight: "bold",
}));

export const NavLink = styled(Link)(({ theme }) => ({
	display: "block",
	textDecoration: "none",
	cursor: "pointer",
	fontSize: "20px",
	width: "100%",
	padding: "10px",
	color: "#072F40",
}));

export const HeaderContent = styled("div")(({ theme }) => ({
	width: "100%",
	marginBottom: "10px",
	paddingLeft: "10px",
}));

export const UnStyledList = styled("ul")(({ theme }) => ({
	listStyle: "none",
}));

export const NavList = styled("li")(({ theme }) => ({
	cursor: "pointer",
	paddingLeft: "40px",
}));
