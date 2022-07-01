import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Logo } from "./styles";

const TemporaryDrawer = () => {
	const [toggleState, setToggleState] = React.useState(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setToggleState(open);
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

	return (
		<div>
			<React.Fragment>
				<>
					<MenuOutlinedIcon
						fontSize="medium"
						onClick={toggleDrawer(true)}
						sx={{ display: { xs: "block", md: "none" }, color: "#072F40", mr: "5px" }}
					/>
				</>

				<Drawer anchor="left" open={toggleState} onClose={toggleDrawer(false)}>
					<Logo>
						<CloseOutlinedIcon fontSize="medium" onClick={toggleDrawer(false)} sx={{ mr: "5px", ml: "9px" }} />
						<Link href="/">
							<Typography variant="h5" color="textPrimary" sx={{ display: "inline-block" }}>
								OLIVE
							</Typography>
						</Link>
					</Logo>
					{list()}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default TemporaryDrawer;
