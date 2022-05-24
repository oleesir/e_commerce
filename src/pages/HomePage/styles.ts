import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Grid)(({ theme }) => ({
	paddingLeft: "100px",
	paddingRight: "100px",
	[theme.breakpoints.down("md")]: {
		paddingLeft: "10px",
		paddingRight: 0,
	},
}));

export const WrapperItem = styled(Grid)(({ theme }) => ({
	// backgroundColor: "#F5F5F5",
	paddingRight: "10px",
	"&.MuiGrid-root": {
		"&.MuiGrid-item": {
			paddingLeft: 0,
			paddingTop: 0,
		},
	},
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

export const Container = styled(Grid)(({ theme }) => ({
	paddingRight: "16px",
	[theme.breakpoints.down("md")]: {
		paddingRight: "10px",
	},
}));
