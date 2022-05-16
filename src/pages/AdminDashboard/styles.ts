import { styled } from "@mui/system";

type InputProps = {
	backgroundcolor: string;
};

export const Wrapper = styled("div")<InputProps>(({ backgroundcolor }) => ({
	width: "100%",
	backgroundColor: backgroundcolor,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
}));
