import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Register from "./register/Register";
import Login from "./login/Login";
import Header from "./header/Header";
import HomeLogin from "./home/HomeLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TokenService from "../services/token.service";

const GastosApp = () => {
  //const token = localStorage.getItem("token");

  const [userData, setUserData] = useState("");

  // useEffect(() => {
  //   async function checkToken() {
  //     const response = await TokenService.decodeToken(token);
  //     if (response.status === 200) {
  //       console.log("joya");
  //     } else {
  //       console.log(response);
  //     }
  //   }
  //   checkToken();
  // }, [token]);

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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
          <Route
            path="/register"
            element={<Register setUserData={setUserData} />}
          />
          <Route path="/*" element={<Navigate to="/home" />} />
        </>
      </Routes>
    </div>
  );
};

export default GastosApp;
