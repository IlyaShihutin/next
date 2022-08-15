import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import "./style.scss";
const StepWelcome = React.lazy(() => import("./StepsSBO/StepWelcome"));
const StepName = React.lazy(() => import("./StepsSBO/StepName"));
const Onboarding: React.FC = () => {
  return (
    <div className="onboarding_steps">
      <Routes>
        {" "}
        {/* <Route path="/onboarding/step1" element={<SendInstructions />} />
      <Route path="/auth/resetPassword" element={<ResetPassword />} /> */}
        <Route path="/onboarding/welcome" element={<StepWelcome />} />
        <Route path="/onboarding/name" element={<StepName />} />
        {/* <Route path="/auth/login" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
};

export default Onboarding;
