import axios from "axios";
const API_URL = "http://172.16.4.182:4000";

const AuthService = () => {
  async function login(user) {
    return await axios
      .post(`${API_URL}/login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      ;
  }

  function logout() {
    localStorage.removeItem("user");
  }

  function register(user) {
    return axios.post(`${API_URL}/register`, {
      email: user.email,
      password: user.password,
    });
  }

  return { login, register, logout };
};

export default AuthService;
