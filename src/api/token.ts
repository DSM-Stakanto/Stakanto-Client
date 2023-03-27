import axios from "axios";
const requestToken = axios.create({
  baseURL: "http://3.112.203.180:8080",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});
requestToken.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
requestToken.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default requestToken;
