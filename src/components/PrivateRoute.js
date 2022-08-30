import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
   
  const fname = useSelector((state) => state.fullname);

  return fname ? children : <Navigate to="/login" />
}

export default PrivateRoute