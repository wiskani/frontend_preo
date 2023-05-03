import { useState, useContext  } from 'react';
import {AdminContext} from "../context/AdminContext.js";
import AppContext from "../context/AppContext.js";
import ButtonIcon from "../components/ButtonIcon.jsx"; 

//make a function component called Aspectos
//this component will be used to display the aspectos 
const Aspectos = () => {
    const [token] = useContext(AdminContext);
   	const {openModal, setOpenModal} = useContext(AppContext);
    const [aspectos, setAspectos] = useState([]);
    const [iconType, setIconType] = useState("");


    return (
        <>
            
                <Modal>
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

export default Aspectos;
