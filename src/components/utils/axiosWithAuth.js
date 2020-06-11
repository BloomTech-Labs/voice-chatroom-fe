import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseUrl: process.env.DB_URL,
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
