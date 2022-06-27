import { styled } from "@mui/system";
import { Typography } from "@mui/material";

type InputProps = {
	bigScreen: boolean | undefined;
	smallScreen: boolean | undefined;
};

export const ReviewContent = styled("div")<InputProps>(({ bigScreen, smallScreen, theme }) => ({
	marginTop: "50px",
	display: bigScreen === true ? "block" : "none",
	[theme.breakpoints.down("md")]: {
		display: smallScreen === true ? "block" : "none",
		marginTop: 0,
	},
}));

export const HeaderContent = styled("div")(({ theme }) => ({
	margin: "20px 0",
}));

export const Header = styled(Typography)(({ theme }) => ({
	display: "none",

	[theme.breakpoints.down("md")]: {
		fontSize: "18px",
		display: "block",
		marginBottom: "15px",
		color: "#072F40",
	},
}));
