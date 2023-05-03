import React, {useContext} from "react";
import {AdminContext} from "../context/AdminContext";

const DeleteArea = (props) => {
  const [token] = useContext(AdminContext);
  const handleDelete = async ()=>{
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
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
          <label >¿Condirmas borrar área?</label>
        </div>
  			<br/>
  			  <input 
            className="input-create" 
            type="submit"
            value={"Si"}
            onClick={handleDelete}
          />
  			</form>
      </div>
		</>
    
  )
}
export default DeleteArea
