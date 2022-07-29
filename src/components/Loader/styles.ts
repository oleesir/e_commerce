import { styled } from "@mui/system";

type InputProps = {
	backGroundColor: string;
	height:string;
};

export const Wrapper = styled("div")<InputProps>(({ backGroundColor,height }) => ({
	width: "100%",
	backgroundColor: backGroundColor,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: height,
}));
