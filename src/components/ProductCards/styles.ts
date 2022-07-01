import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Grid)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		paddingRight: 0,
		paddingLeft: 0,
	},
}));
