import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Register from "./register/Register";
import Login from "./login/Login";
import Header from "./header/Header";
import HomeLogin from "./home/HomeLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GastosApp = () => {
  const [userData, setUserData] = useState();

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Routes>
        <>
          <Route path="/" element={<HomeLogin />} />
          <Route
            path="/home"
            element={<Home userData={userData} setUserData={setUserData} />}
          />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
          <Route
            path="/register"
            element={<Register setUserData={setUserData} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      </Routes>
    </div>
  );
};

export default GastosApp;
