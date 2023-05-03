import React, {useContext, useState} from "react";
import "../styles/ModalDefault.scss";
import { AdminContext } from "../context/AdminContext";
import AppContext from "../context/AppContext";


const CreateArea = () => {
  const [areaName, setAreaName] = useState("");
  const [areaDescription, setAreaDescription] = useState("");
  const [token]= useContext(AdminContext);
  const { setOpenModal }= useContext(AppContext);

  const handleCreateArea= async (e)=>{
    e.preventDefault();
    const requestOptions ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer "+ token,
      },
      body: JSON.stringify({
        sector_name: areaName,
        sector_description:areaDescription,
      }),
    };
    const response = await fetch("/api/sector", requestOptions);
    if (!response.ok){
      console.log("error");
    }else{
      setOpenModal(false);
      window.location.reload();
    }
  }

	return (
		<>
			<div className="container-modal">
  			<form >
  			<div className="row">
  			    <input
              className="input-create" 
              type="text" 
              name="NombreArea" 
              placeholder="Nombre de área"
              value={areaName}
              onChange={(e)=> setAreaName(e.target.value)}
              required
            />
  			</div>
  			<div className="row">
  			    <textarea  
              placeholder="Describe la nueva área.." 
              value={areaDescription}
              onChange={(e)=> setAreaDescription(e.target.value)}
            >
            </textarea>
  			</div>
  			<br/>
  			  <input 
            className="input-create" 
            type="submit"
            value={"Crear Área"}
            onClick={handleCreateArea}
          />
  			</form>
      </div>
		</>
	)
}

export default CreateArea;
