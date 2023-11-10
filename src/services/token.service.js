import { API_URL, API_URL_JWT } from "./apiUrl";

const loginJWT = async (data) => {
  try {
    const response = await fetch(`${API_URL_JWT}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    response.json().then((response) => {
      localStorage.setItem("token", response.token.substring(7));
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const decodeToken = async (data) => {
  try {
    const response = await fetch(`${API_URL}/usuario/decode/token`, {
      method: "POST",
      body: JSON.stringify({
        token: data
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${data}`
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const TokenService = {
  loginJWT,
  decodeToken
};

export default TokenService;