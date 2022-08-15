import React from "react";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = false;
  return auth ? children : <Navigate to="/login" />;
};
