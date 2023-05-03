import React, {useContext, useState} from "react";
import "../styles/ModalDefault.scss";
import { AdminContext } from "../context/AdminContext";
import AppContext from "../context/AppContext";

const EditArea = (props) => {
  const [areaName, setAreaName] = useState(props.name);
  const [areaDescription, setAreaDescription] = useState(props.description);
  const [token]= useContext(AdminContext);
  const { setOpenModal }= useContext(AppContext);
  
  const handleUpdateArea= async (e)=>{
    e.preventDefault();
    const requestOptions ={
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer "+ token,
      },
      body: JSON.stringify({
        sector_name: areaName,
        sector_description:areaDescription,
      }),
    };
    const response = await fetch(`/api/sector/${props.id}`, requestOptions);
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
              defaultValue={props.name}
              value={areaName} 
              onChange={(e)=> setAreaName(e.target.value)}
              required
            />
  			</div>
  			<div className="row">
  			    <textarea  
              value={areaDescription}
              onChange={(e)=> setAreaDescription(e.target.value)}
            >
            </textarea>
  			</div>
  			<br/>
  			  <input 
            className="input-create" 
            type="submit"
            value={"Actualizar"}
            onClick={handleUpdateArea}
          />
  			</form>
      </div>
		</>
  )
}

export default EditArea
