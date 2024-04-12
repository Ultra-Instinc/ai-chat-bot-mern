import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
const Header = () => {
	const auth = useAuth();
	return (
		<AppBar sx={{ bgcolor: "transparent", position: "static", height: "50px" }}>
			<Toolbar sx={{ display: "flex" }}>
				<Logo />
				<div>
					{auth?.isLoggedIn ? (
						<>
							<NavigationLink
								bg='#00fffc'
								text='Go To Chat'
								textColor='black'
								to='/chat'
							/>
							<NavigationLink
								bg='#51538f'
								text='Logout'
								textColor='white'
								to='/'
								onClick={auth.logout}
							/>
						</>
					) : (
						<>
							<NavigationLink
								bg='#00fffc'
								text='Login'
								textColor='black'
								to='/login'
							/>
							<NavigationLink
								bg='#51538f'
								text='Signup'
								textColor='white'
								to='/signup'
							/>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
