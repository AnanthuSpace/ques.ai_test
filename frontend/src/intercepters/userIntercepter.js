import axios from "axios";
const backend_url = import.meta.env.VITE_BACKEND_URL;

const userAxiosInstance = axios.create({
    baseURL: backend_url
});

userAxiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem("accessToken");
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default userAxiosInstance;