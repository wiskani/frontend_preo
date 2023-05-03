import React, {useContext} from "react";
import { Navigate } from "react-router";
import { AdminContext } from "../context/AdminContext";

const ProtectedRoute = ({children}) => {
  const [token]=useContext(AdminContext);
  if (!token){
    return <Navigate to="/" replace />
  }
  return children;
}

export default ProtectedRoute;
