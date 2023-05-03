import React, {useContext} from "react";
import "../styles/Header.scss";
import AppContext from "../context/AppContext.js";
import { AdminContext } from "../context/AdminContext.js"
import ButtonIcon from "../components/ButtonIcon.jsx"
import {useNavigate} from "react-router-dom";

const Header = () => {

	const { nameAdmin, location }= useContext(AppContext);
  const [token, setToken] = useContext(AdminContext);
  const navigate= useNavigate();
	
	const handleNameHeader = (props)=>{
		const map = {
			'/dashboard': 'Bienvenido a la aplicación de la encuesta ambiental',
			'/areas': 'Áreas'
		}

		const header = map[props]

		return header
	}

	const handleLogout =()=>{
		setToken(null);
    navigate('/');
    window.location.reload();

	}


	return (
		<div className="header">
			<div className="left">
				<p>{handleNameHeader(location)}</p>
			</div>
			<div className="right">
				<p>{nameAdmin}</p>
				<div className="logout" onClick={handleLogout}>
					<ButtonIcon image={"logout"} />
				</div>
			</div>
		</div>
	);
}

export default Header;
