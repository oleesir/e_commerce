import { FC } from "react";
import { ClipLoader } from "react-spinners";
import { Wrapper } from "./styles";
type LoadersProps = {
	backgroundcolor: string;
};
const Loader: FC<LoadersProps> = ({ backgroundcolor }) => {
	return (
		<Wrapper backgroundcolor={backgroundcolor}>
			<ClipLoader color="#1976D2" size={35} />
		</Wrapper>
	);
};

export default Loader;
