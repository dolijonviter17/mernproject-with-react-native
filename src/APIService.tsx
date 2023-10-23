import axios from "axios";
const APIService = (token?: string) =>
  axios.create({
    baseURL: "http://localhost:8080",
    timeout: 3000,
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
export default APIService;
