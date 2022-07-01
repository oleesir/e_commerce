import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAppSelector, useAppDispatch } from "../../../store";
import { logoutUser } from "../../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Logo, IconBtn, LogoutBtn, AccountView, Greetings, UserEmail } from "./styles";

const TopDrawer = () => {
	const [toggleState, setToggleState] = React.useState(false);
	const { isAuth, user } = useAppSelector((state: any) => state.auth);
	let navigate = useNavigate();
	const dispatch = useAppDispatch();

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setToggleState(open);
	};

	const logout = () => {
		dispatch(logoutUser());
		setToggleState(false);
	};

	const list = () => (
		<Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{ width: "300px" }}>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const navToLogin = () => {
		navigate("/login");
	};

	return (
		<div>
			<React.Fragment>
				{isAuth === true ? (
					<IconBtn onClick={toggleDrawer(true)}>
						<AccountCircleOutlinedIcon
							fontSize="medium"
							sx={{
								color: "#072F40",
								cursor: "pointer",
								display: { xs: "flex", md: "none" },
							}}
						/>
					</IconBtn>
				) : (
					<IconBtn onClick={navToLogin}>
						<NoAccountsOutlinedIcon
							fontSize="medium"
							sx={{
								color: "#072F40",
								cursor: "pointer",
								display: { xs: "flex", md: "none" },
							}}
						/>
					</IconBtn>
				)}

				<Drawer anchor="top" open={toggleState} onClose={toggleDrawer(false)}>
					<Logo>
						<CloseOutlinedIcon fontSize="medium" onClick={toggleDrawer(false)} sx={{ mr: "5px", ml: "9px" }} />
						<Link href="/">
							<Typography variant="h5" color="textPrimary" sx={{ display: "inline-block" }}>
								OLIVE
							</Typography>
						</Link>
					</Logo>
					<AccountView>
						<Greetings>Welcome, {user?.firstName}</Greetings>
						<UserEmail>{user?.email}</UserEmail>
					</AccountView>
					{list()}

					<LogoutBtn
						disableElevation
						disableFocusRipple
						onClick={logout}
						// onClick={toggleDrawer(false)}
						onKeyDown={toggleDrawer(false)}
					>
						Logout
					</LogoutBtn>
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default TopDrawer;
