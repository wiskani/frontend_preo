import React, {createContext, useEffect, useState, useContext} from "react";
import AppContext from "../context/AppContext";

export const AdminContext = createContext();

export const AdminProvider = (props)=>{
	const [token, setToken] = useState(localStorage.getItem("AdminToken"));
	const {setNameAdmin} = useContext(AppContext)

	useEffect(() => {
		const fetchAdmin = async ()=>{
			const requestOptions = {
				method : "GET",
				headers : {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			};

			const response = await fetch("/api/admins/me", requestOptions);
			const data = await response.json();

			if (!response.ok){
				setToken(null);
				setNameAdmin('');
			}
			localStorage.setItem("AdminToken", token);
			setNameAdmin(data.name_admin);
		};
		fetchAdmin();
	}, [token]);

	return(
		<AdminContext.Provider value={[token, setToken]}>
			{props.children}
		</AdminContext.Provider>
	)
}
