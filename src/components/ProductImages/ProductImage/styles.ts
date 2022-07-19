import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";

export const Image = styled("img")(({ theme }) => ({
	height: "50px",
	width: "50px",
	cursor: "pointer",
	// [theme.breakpoints.down("sm")]: {
	// 	height: "150px",
	// },
}));

export const Container = styled(IconButton)(({ theme }) => ({
	// height: "50px",
	// width: "50px",
	marginRight: "20px",
	cursor: "pointer",
	// [theme.breakpoints.down("sm")]: {
	// 	height: "150px",
	// },
}));
