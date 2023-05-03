import React, {useState} from "react";
import { LoutIcon, GarbageIcon, EditIcon, PersonalIcon, DropIcon } from "../assets/icons/Icons";

const ButtonIcon = (props) => {
  const [hoverButom, setHoverButom] = useState(false)

  const handleHover=()=>{
    if (hoverButom){
      return("#F2B705")
    }else{
      return("#031F73")
    }
  }

  return (
    <div
      onMouseEnter={()=> setHoverButom(true)}
      onMouseLeave={()=> setHoverButom(false)}
    >
      {props.image =="logout" && <LoutIcon stroke={handleHover()}/>}
      {props.image =="garbage" && <GarbageIcon stroke={handleHover()}/>}
      {props.image =="edit" && <EditIcon stroke={handleHover()}/>}
      {props.image =="personal" && <PersonalIcon stroke={handleHover()}/>}
      {props.image =="gota" && <DropIcon stroke={handleHover()}/>}
    </div>
  )
}

export default ButtonIcon
