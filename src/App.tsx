import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Onboarding from "./components/pages/Onboarding/Onboarding";

import Loader from "./components/views/Loader/Loader";
import { PrivateRoute } from "./helpers/PrivateRoute";

const Error = React.lazy(() => import("./components/pages/ErrorPage/Error"));
const Header = React.lazy(() => import("./components/views/Header/Header"));
const Authorization = React.lazy(() => import("./components/pages/Authorization/Authorization"));
const Footer = React.lazy(() => import("./components/views/Footer/Footer"));
const App = () => {
  let navigate = useLocation();
  const chackLoginPage = (): boolean => {
    return navigate.pathname === "/login" || navigate.pathname === "/registration";
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className={`app ${chackLoginPage() ? "login" : ""}`}>
        <Header />
        <div className="app_wrapper">
          <Authorization />
          <Onboarding />
          <Routes>
            {/* <Route path="*" element={<Error />} /> */}

            {/* <Route path="/" element={<Catalog />} />
        <Route
          path="/papa"
          element={
            <PrivateRoute>
              <Catalog />
            </PrivateRoute>
          }
        /> */}
          </Routes>{" "}
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};
export default App;
