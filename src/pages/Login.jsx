import React, {useState, useContext} from "react";
import '../styles/Login.scss';
import {useNavigate} from "react-router-dom";

import { AdminContext } from "../context/AdminContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(AdminContext);
    const navigate= useNavigate();

    const submitLogin = async ()=>{
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: JSON.stringify(
                `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
            ),
        };
        const response = await fetch("/api/token", requestOptions);

        const data = await response.json();

        if(!response.ok){
            setErrorMessage(data.detail);
        }else {
            setToken(data.access_token);
            navigate('/dashboard')
        }
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        submitLogin();
    };

	return (
    <div className="login">
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <i className="icon-mail"></i>
                        <input 
                            type="text"
                            id="email"
                            placeholder="CORREO ELECTRÓNICO"
                            className="input-field"
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <i className="icon-lock"></i>
                        <input
                            type="password"
                            id="password"
                            placeholder="PASSWORD"
                            className="input-field"
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="login-button" type="submit">
                        LOGIN
                    </button>
                    <a href="/">¿Olvidaste tu contraseña?</a>
            </form>
        </div>
    </div>
	);
};

export default Login;


