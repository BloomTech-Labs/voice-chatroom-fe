import axios from 'axios';

export const axioswithAuth = () => {
    return axios.create({

        baseUrl: "http://localhost:6000",
        headers: {
            Authorization: localStorage.getItem("accessToken")
        }
    })
}