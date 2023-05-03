import React, {useState } from "react";
import "../styles/ButtomNav.scss";
import { AreaIcon, DropIcon } from "../assets/icons/Icons";


const ButtonNav = (props) => {
  const [hoverButom, setHoverButom] = useState(false)

    const handleHover=()=>{
      if (hoverButom){
        return("#F2B705")
      }else{
        return("white")
      }
    }

  return (
    <div className="ButtonContainer">
      <div className="ButtonBar" style={{"backgroundColor": hoverButom? "#F2B705" : "transparent"}}></div>
      <div className="ButtonLink">
        <div>
          {props.image =="area" && <AreaIcon stroke={handleHover()}/>}
          {props.image =="drop" && <DropIcon stroke={handleHover()}/>}
        </div>
        <div
          onMouseEnter={()=> setHoverButom(true)}
          onMouseLeave={()=> setHoverButom(false)}
        >
          { props.link }
        </div>
      </div>
    </div>
  )
}

export default ButtonNav
