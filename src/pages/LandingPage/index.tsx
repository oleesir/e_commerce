import React from "react";
import { useAppSelector } from "../../store";
const LandingPage = () => {
	const { isAuth, user, isLoading, isLoadingBtn } = useAppSelector((state: any) => state.auth);
	console.log("USER", user);
	return <h1>LANDING PAGE</h1>;
};

export default LandingPage;
