import axios from "axios";

const axiosWithAuth = () => {

    const token = localStorage.getItem("token");
//axios instance as a function that can be re-used
    return axios.create ({
        baseUrl: "http://localhost:5000",
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;
