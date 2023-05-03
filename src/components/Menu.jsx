import React, {useContext, useEffect} from "react";
import "../styles/Menu.scss";
import AppContext from "../context/AppContext";
import drop from "../assets/icons/drop.svg";
import personal from "../assets/icons/personal.svg";
import survey from "../assets/icons/survey.svg";
import question from "../assets/icons/icon-question.svg";
import ButtonNav from "./ButtonNav";

import { Link, useLocation } from "react-router-dom";

const Menu = () => {
	
	const {setLocation}= useContext(AppContext);
	const locationURL = useLocation()

	useEffect(() => {
		setLocation(locationURL.pathname)
	}, [locationURL])


	return (
		<nav className="navbar">
			<ul>
				<li>
					<ButtonNav 
						image =	{"area"}
						link= {<Link to={"/areas"} >Áreas</Link>}
					/>
				</li>
				<li>
					<ButtonNav 
						image = {"drop"}
						link= {<a href="/">Aspectos</a>}
					/>
				</li>
				<li>
					<img src={personal} alt="personal"/>
					<a href="/">Personal</a>
				</li>
				<li>
					<img src={survey} alt="survey"/>
					<a href="/">Encuestas</a>
				</li>
			</ul>
			<ul>
				<li>
					<img src={question} alt="question"/>
					<a href="/">Ayuda</a>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
