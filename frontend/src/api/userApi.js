import userAxiosInstance from "../intercepters/userIntercepter";

export const createProjectApi = async (projectName) => {
    try {
        console.log(projectName)
        const response = await userAxiosInstance.post(`/api/create-project`, { projectName });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

export const fetchProjectsApi = async () => {
    try {
        const response = await userAxiosInstance.get(`/api/get-projects`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

export const getProfileApi = async () => {
    try {
        const response = await userAxiosInstance.get(`/api/get-profile`)
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

export const updateProfileApi = async () => {
    try {
        const response = await userAxiosInstance.get(`/api/profile-update`)
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}