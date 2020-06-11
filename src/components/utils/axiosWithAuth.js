import axios from 'axios';

export const axioswithAuth = () => {
    return axios.create({

        baseUrl: process.env.DB_URL,
        headers: {
            Authorization: localStorage.getItem("accessToken")
        }
    })
}