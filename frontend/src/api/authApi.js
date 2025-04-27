import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const signupApi = async (data) => {
    try {
        const response = await axios.post(`${backend_url}/api/auth/signup`, data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};

export const loginApi = async (data) => {
    try {
        const response = await axios.post(`${backend_url}/api/auth/login`, data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};
