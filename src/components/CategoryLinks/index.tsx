import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import { NavLinks, HeaderFont, HeaderContent, NavLink, UnStyledList, NavList, Container } from "./styles";

const CategoryLinks = () => {
	return (
		<Container>
			<HeaderContent>
				<HeaderFont>Categories</HeaderFont>
			</HeaderContent>
			<NavLinks>
				<UnStyledList>
					<NavList>
						<NavLink to="#">
							<Typography>Computing</Typography>
						</NavLink>
					</NavList>
					<NavList>
						<NavLink to="#">
							<Typography>Electronics</Typography>
						</NavLink>
					</NavList>
					<NavList>
						<NavLink to="#">
							<Typography>Sporting Goods</Typography>
						</NavLink>
					</NavList>
					<NavList>
						<NavLink to="#">
							<Typography>Gaming</Typography>
						</NavLink>
					</NavList>
					<NavList>
						<NavLink to="/account">
							<Typography>Phones</Typography>
						</NavLink>
					</NavList>
				</UnStyledList>
			</NavLinks>
		</Container>
	);
};

export default CategoryLinks;
