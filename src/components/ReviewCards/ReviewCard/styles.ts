import { Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	marginBottom: "30px",
	[theme.breakpoints.down("sm")]: {
		marginBottom: "20px",
	},
}));

export const ReviewItem = styled(Paper)(({ theme }) => ({
	width: "100%",
	padding: "10px",
	// [theme.breakpoints.down("sm")]: {
	// 	height: "150px",
	// },
}));

export const Ratings = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "20px",
	marginBottom: "10px",

	// [theme.breakpoints.down("sm")]: {
	// 	fontSize: "22px",
	// },
}));

export const ReviewName = styled(Typography)(({ theme }) => ({
	color: "#072F40",
	fontSize: "15px",
	marginBottom: "10px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px",
	},
}));
