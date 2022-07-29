import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import { useAppSelector } from "./store";

const PrivateRoute: FC<{ allowedRoles: string[] }> = ({ allowedRoles }) => {
	const { isLoading, isAuth, user } = useAppSelector((state: any) => state.auth);

	if (isLoading) {
		return <Loader backGroundColor="#fff" height="100vh" />;
	}

	if (!isLoading && !isAuth) {
		return <Navigate to="/login" />;
	}

	return allowedRoles.includes(user?.role) ? (
		<Outlet />
	) : user && isAuth === true ? (
		<Navigate to="/unauthorized" />
	) : (
		<Navigate to="/login" />
	);
};

export default PrivateRoute;
