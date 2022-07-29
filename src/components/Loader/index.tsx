import { FC } from "react";
import { ClipLoader } from "react-spinners";
import { Wrapper } from "./styles";
type LoadersProps = {
	backGroundColor: string;
	height:string;
};
const Loader: FC<LoadersProps> = ({ backGroundColor,height }) => {
	return (
		<Wrapper backGroundColor={backGroundColor} height={height}>
			<ClipLoader color="#1976D2" size={35} />
		</Wrapper>
	);
};

export default Loader;
