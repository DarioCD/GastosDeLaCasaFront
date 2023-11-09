import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TokenService from "../../services/token.service";

const Home = () => {
  const token = localStorage.getItem("token");

  const [inputsData, setinputsData] = useState("");

  const navigate = useNavigate();

  const initialInputsData = {
    email: "",
    password: "",
  };
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

export default Home;
