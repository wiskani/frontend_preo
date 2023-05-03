import React, {useContext, useEffect, useState} from "react";
import {AdminContext} from "../context/AdminContext.js";
import AppContext from "../context/AppContext.js";
import "../styles/Areas.scss";
import Modal from  "../components/Modal.jsx"
import CreateArea from "../components/CreateArea.jsx";
import DeleteArea from "../components/DeleteArea.jsx";
import EditArea from "../components/EditArea.jsx";
import ButtonIcon from "../components/ButtonIcon.jsx"; 
import TableManyToMany from "../components/TableManyToMany.jsx";

const Areas = () => {
    const [token] = useContext(AdminContext);
    const {openModal, setOpenModal} = useContext(AppContext);
    const [sectors, setSectors] = useState([]);
    const [iconType, setIconType] = useState("");
    const [idArea, setIdArea] = useState("");
    const [areaName, setAreaName] = useState("");
    const [areaDescription, setAreaDescription] = useState("");

    const getSectors = async ()=>{
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };
        const response = await fetch("/api/sector/list", requestOptions);
        if(!response.ok){
        }else{
            const data = await response.json();
            setSectors(data);
        }
    };
    
    useEffect(() => {
        getSectors();
    }, [])

    const handleModal= ()=>{
        setOpenModal(!openModal)
    }

    return (
        <>
            
                <Modal>
                    {iconType=="createArea" && <CreateArea/>}
                    {iconType=="deleteArea" && <DeleteArea id={idArea}/>}
                    {iconType=="editArea" && <EditArea id={idArea} name={areaName} description={areaDescription}/>}
                    {iconType=="personalArea" && <TableManyToMany id={idArea} type={iconType}/>}
                    {iconType=="aspectoArea" && <TableManyToMany id={idArea} type={iconType}/>}
                </Modal>
            
            <button
                className="button-create" 
                onClick={()=>{
                    handleModal()
                    setIconType("createArea")
                }}
            >
                Crear área
            </button>
	          <table className="styled-table">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Modificar/borrar</th>
                      <th>Administrar personal</th>
                      <th>Administrar aspectos</th>
                  </tr>
              </thead>
              <tbody>
                  {sectors.map((sector)=>(
                      <tr key={sector.id}>
                          <td>{sector.sector_name}</td>
                          <td>{sector.sector_description}</td>
                        <td>
                            <div className="icon-two-container">
                                <div onClick={()=>{
                                    handleModal()
                                    setIconType("editArea")
                                    setIdArea(sector.id)
                                    setAreaName(sector.sector_name)
                                    setAreaDescription(sector.sector_description)
                                    }}>
                                    <ButtonIcon image={"edit"}/>
                                </div>
                                <div onClick={()=>{
                                    handleModal()
                                    setIconType("deleteArea")
                                    setIdArea(sector.id)
                                    }}>
                                    <ButtonIcon image={"garbage"}/>
                                </div>
                            </div>
                          </td>
                          <td>
                              <div className="icon-two-container">
                                  <div onClick={()=>{
                                      handleModal()
                                      setIconType("personalArea")
                                      setIdArea(sector.id)
                                      }}
                                  >
                                    <ButtonIcon image={'personal'} />
                                  </div>
                              </div>
                          </td>
                          <td>
                              <div className="icon-two-container">
                                  <div onClick={()=>{
                                      handleModal()
                                      setIconType("aspectoArea")
                                      setIdArea(sector.id)
                                      }}
                                  >
                                    <ButtonIcon image={'gota'} />
                                  </div>
                              </div>
                          </td>
                      </tr>
                  ))}
               </tbody>
            </table>
        </>
    )
}

export default Areas;
