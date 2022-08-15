import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import "./style.scss";
const Registration = React.lazy(() => import("./Registration/Registration"));
const LoginPage = React.lazy(() => import("./Login/LoginPage"));
const ResetPassword = React.lazy(() => import("./ResetPassword/ResetPassword"));
const SendInstructions = React.lazy(() => import("./SendInstructions/SendInstructions"));

const Authorization: React.FC = () => {
  return (
    <Routes>
      {" "}
      <Route path="/auth/sendInstructions" element={<SendInstructions />} />
      <Route path="/auth/resetPassword" element={<ResetPassword />} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Authorization;
