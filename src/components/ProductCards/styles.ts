import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Grid)(({ theme }) => ({
	paddingRight: "16px",
	[theme.breakpoints.down("md")]: {
		paddingRight: "10px",
	},
}));
