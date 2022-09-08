import axios from "axios";
// const API_URL = "http://172.16.4.182:4000";
import { LOCAL_URL} from "../config/dev.env"

async function login(user) {
  return await axios
    .post(`${LOCAL_URL}/login`, {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function logout() {
  localStorage.removeItem("user");
}

// function register(user) {
//   return axios.post(`${API_URL}/register`, {
//     email: user.email,
//     password: user.password,
//   });
// }

export default {
  // register,
  logout,
  login,
};
