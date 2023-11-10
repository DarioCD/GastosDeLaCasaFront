import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TokenService from "../../services/token.service";
import UsuarioService from "../../services/usuario.service";

const Home = ({userData, setUserData}) => {
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
          response.json().then((data) => {
            async function getUser() {
              try {
                const responseUser = await UsuarioService.getUserByEmail(data.message, token);
                responseUser.json().then((dataUser) => {
                  setUserData(dataUser);
                });
              } catch (error) {
                throw error;
              }
            }
            getUser()
          });
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
      <button onClick={() => console.log(userData)}> DATOS DEL USER </button>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
