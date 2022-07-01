import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Grid)(({ theme }) => ({
	height: "100%",
	display: "flex",
	justifyContent: "flex-end",

	// [theme.breakpoints.down("md")]: {
	// 	height: "50vh",
	// },
	// [theme.breakpoints.down("sm")]: {
	// 	height: "50vh",
	// },
}));
