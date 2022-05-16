import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { NavLinks, HeaderFont, HeaderContent, NavLink, UnStyledList, NavList } from "./styles";

const AdminLayout = () => {
	return (
		<Grid container md={12}>
			<Grid item md={2} sm={2} xs={2} sx={{ paddingTop: "20px", backgroundColor: "#1976D2" }}>
				<HeaderContent>
					<HeaderFont>Dashboard</HeaderFont>
				</HeaderContent>
				<NavLinks>
					<UnStyledList>
						<NavList>
							<NavLink to="/admin/dashboard">Dashboard</NavLink>
						</NavList>
						<NavList>
							<NavLink to="/admin/orders">Orders</NavLink>
						</NavList>
						<NavList>
							<NavLink to="/admin/products">Products</NavLink>
						</NavList>
						<NavList>
							<NavLink to="/admin/users">Users</NavLink>
						</NavList>
						<NavList>
							<NavLink to="#">Logout</NavLink>
						</NavList>
					</UnStyledList>
				</NavLinks>
			</Grid>
			<Grid item md={10} sm={10} xs={10}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default AdminLayout;
