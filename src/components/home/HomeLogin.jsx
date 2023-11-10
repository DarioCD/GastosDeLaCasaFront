import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TokenService from "../../services/token.service";
import Swal from "sweetalert2";
const HomeLogin = ({userData}) => {
  const token = localStorage.getItem("token");


  const navigate = useNavigate();
  useEffect(() => {
    async function insertUsuario() {
      try {
        const response = await TokenService.decodeToken(token);
        if (response.status !== 200) {
          navigate("/");
          return;
        }
        if (response.status === 200) {
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
    }
    insertUsuario();
  }, [token]);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/register")}></button>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomeLogin;
