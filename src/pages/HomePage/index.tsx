import React from "react";
import { useAppSelector } from "../../store";
const HomePage = () => {
	const { isAuth, user, isLoading, isLoadingBtn } = useAppSelector((state: any) => state.auth);
	console.log("USER", user);
	return <h1>HOME PAGE</h1>;
};

export default HomePage;
