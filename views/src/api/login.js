import fetchApi from "./fetch";

const loginApi = {
    authenticateUser: async (userData) => {
        const response = await fetchApi('/verify', "POST", userData)
        return response.status
    }
}

export default loginApi