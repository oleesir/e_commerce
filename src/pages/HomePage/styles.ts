import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Grid)(({ theme }) => ({
	paddingLeft: "50px",
	paddingRight: "50px",
	paddingTop: "100px",
	backgroundColor: "#F5F5F5",

	[theme.breakpoints.down("md")]: {
		paddingLeft: "30px",
		paddingRight: "30px",
	},
	[theme.breakpoints.down("sm")]: {
		paddingLeft: "10px",
		paddingRight: "10px",
	},
}));

export const WrapperItem = styled(Grid)(({ theme }) => ({
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
