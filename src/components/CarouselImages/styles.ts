import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
	display: "none",
	[theme.breakpoints.down("sm")]: {
		height: "400px",
		display: "flex",
		gap: 100,
		overflow: "auto",
		width: "100%",
		scrollSnapType: "x mandatory",
		"& > *": {
			scrollSnapAlign: "center",
		},
		"::-webkit-scrollbar": { display: "none" },
	},
}));
