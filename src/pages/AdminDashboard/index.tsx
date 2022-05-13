import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

const AdminDashboard = () => {
	const { isAuth, user } = useAppSelector((state: any) => state.auth);
	console.log("DASHBOARD USER", user);

	return <h1>ADMIN DASHBOARD PAGE</h1>;
};

export default AdminDashboard;
