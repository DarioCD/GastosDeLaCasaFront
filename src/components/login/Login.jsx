import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TokenService from "../../services/token.service";
import UsuarioService from "../../services/usuario.service";
import Swal from "sweetalert2";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();

  const initialInputsData = {
    email: "",
    password: "",
  };

  const [inputsData, setinputsData] = useState(initialInputsData);

  const handleOnChange = (e) => {
    setinputsData({
      ...inputsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    async function insertUsuario() {
      try {
        const response = await UsuarioService.login(inputsData);
        if (response.status !== 200) {
          toast.error('¡Correo o contraseña incorrectos!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          return;
        }
        if (response.status === 200) {
          await TokenService.loginJWT(inputsData);
          toast.success(`¡ Sesión iniciada con éxito !`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          //navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
    }
    insertUsuario();
  };
  return (
    <div>
      <h1>Login</h1>
      <form className="formularioLogin" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="email" className="text-secondary">
            CORREO
          </label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder=""
              required
              className="formularioLoginInput"
              onChange={handleOnChange}
              value={inputsData.email}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-secondary">
            CONTRASEÑA
          </label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder=""
              required
              className="formularioLoginInput"
              onChange={handleOnChange}
              value={inputsData.password}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-4 w-100">
            <b style={{ color: "white" }}>LOGIN</b>
          </button>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">¿No tienes cuenta?</p>
          <Link to={"/register"} className="registerLink">
            <b>Accede aquí</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
