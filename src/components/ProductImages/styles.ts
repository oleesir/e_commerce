import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
	width: "100%",
	marginTop: "50px",
	display: "flex",
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));
