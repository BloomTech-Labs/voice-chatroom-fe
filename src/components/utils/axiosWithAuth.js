import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    url: process.env.DB_URL,
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
