import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Grid, Typography } from "@mui/material";

const AdminDashboard = () => {
	const { isAuth, user } = useAppSelector((state: any) => state.auth);
	console.log("DASHBOARD USER", user);

	return (
		<Grid container md={12} direction="column">
			<h1>DASHBOARD</h1>
		</Grid>
	);
};

export default AdminDashboard;
