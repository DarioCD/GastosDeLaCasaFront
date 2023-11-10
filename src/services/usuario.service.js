import { API_URL } from "./apiUrl";

const login = async (data) => {
  try {
    const response = await fetch(`${API_URL}/usuario/check`, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const register = async (data) => {
  try {
    const response = await fetch(`${API_URL}/register/usuario`, {
      method: "POST",
      body: JSON.stringify({
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,
        password: data.password,
        sueldo: data.sueldo,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (data, token) => {
  try {
    const response = await fetch(`${API_URL}/usuario/email`, {
      method: "POST",
      body: JSON.stringify({
        email: data.sub,
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

const UsuarioService = {
  login,
  register,
  getUserByEmail
};

export default UsuarioService;
