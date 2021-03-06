import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import ProductCards from "../../components/ProductCards";
import {Grid} from "@mui/material";
import {getAllProducts} from "../../features/productSlice";
import Loader from "../../components/Loader";
import CategoryLinks from "../../components/CategoryLinks";
import {Wrapper, WrapperItem} from "./styles";

const HomePage = () => {
	const dispatch = useAppDispatch();
	const {products, isLoading} = useAppSelector((state: any) => state.product);


	useEffect(() => {
		const getData = () => {
			dispatch(getAllProducts());
		};
		return getData();
	}, [dispatch]);


	return (
		<>
			{isLoading && <Loader backGroundColor="#fff" height="100vh"/>}
			{!isLoading && (
				<Wrapper container md={12}>
					<WrapperItem item md={2}>
						<CategoryLinks/>
					</WrapperItem>

					<Grid item md={10} sm={12} xs={12} sx={{backgroundColor: "#fff"}}>
						<ProductCards products={products}/>
					</Grid>
				</Wrapper>
			)}
		</>
	);
};

export default HomePage;
