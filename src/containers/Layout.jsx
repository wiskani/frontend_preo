import React, {useContext} from "react";
import Menu from "../components/Menu.jsx";
import Header from "../components/Header.jsx";
import "../styles/Layout.scss";
import { Outlet, Navigate } from "react-router";
import { AdminContext } from "../context/AdminContext";

const Layout = () => {
	const [token]= useContext(AdminContext);
	
	if (!token){
		Navigate('/')	
	}

	return (
		<div className="Layout">
			<Menu />
			<div className="main_content">
				<Header />
				<div className="content">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
