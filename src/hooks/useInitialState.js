import { useState } from "react";

const useInicialState= ()=>{
  const [openModal, setOpenModal] = useState(false);
	const [nameAdmin, setNameAdmin] = useState("");
	const [location, setLocation] = useState("");
	

	return{
		openModal,
		setOpenModal,
		nameAdmin,
		setNameAdmin,
		location,
		setLocation
	}
}

export default useInicialState;
