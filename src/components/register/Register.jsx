import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UsuarioService from "../../services/usuario.service";
import TokenService from "../../services/token.service";
import { toast } from "react-toastify";

const Register = ({ setUserData }) => {
  const navigate = useNavigate();

  const initialInputsData = {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    sueldo: "",
    verifyPaswword: "",
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
      if (inputsData.password === inputsData.verifyPaswword) {
        try {
          const response = await UsuarioService.register(inputsData);
          if (response.status !== 200) {
            toast.error(
              `El email ${inputsData.email} ya ha sido registrado previamente`,
              {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
            return;
          }
          if (response.status === 200) {
            response.json().then((data) => {
              setUserData(data.message);
            });
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
            navigate("/home");
          }
        } catch (error) {
          throw error;
        }
      } else {
        toast.error(`¡ Las contraseñas no coinciden !`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    insertUsuario();
  };

  return (
    <div className="loginContainer" style={{height : "110vh"}}>
      <form className="formularioLogin" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="nombre" className="text-secondary">
            NOMBRE
          </label>
          <div>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder=""
              required
              className="formularioLoginInput"
              onChange={handleOnChange}
              value={inputsData.nombre}
            />
          </div>
        </div>
        <div>
          <label htmlFor="apellidos" className="text-secondary">
            APELLIDOS
          </label>
          <div>
            <input
              id="apellidos"
              name="apellidos"
              type="text"
              placeholder=""
              required
              className="formularioLoginInput"
              onChange={handleOnChange}
              value={inputsData.apellidos}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-secondary">
            EMAIL
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

        <div className="">
          <label htmlFor="sueldo" className="text-secondary">
            Sueldo
          </label>
          <div>
            <input
              id="sueldo"
              name="sueldo"
              type="number"
              placeholder=""
              required
              className="formularioLoginInput"
              onChange={handleOnChange}
              value={inputsData.sueldo}
            />
          </div>
        </div>

        <div className="">
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

        <div className="">
          <label htmlFor="verifyPaswword" className="text-secondary">
            VERIFICAR LA CONTRASEÑA
          </label>
          <div>
            <input
              id="verifyPaswword"
              name="verifyPaswword"
              type="password"
              placeholder=""
              required
              className="formularioLoginInput"
              onChange={handleOnChange}
              value={inputsData.verifyPaswword}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-4 w-100">
            <b style={{ color: "white" }}>REGISTRATE</b>
          </button>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">¿Ya tienes cuenta?</p>
          <Link to={"/login"} className="registerLink">
            <b>Accede aquí</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
