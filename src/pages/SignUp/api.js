import axios from "axios";

const BASE_URL = "/api/v1/users";

export const signUp = (body) => {
    return axios.post(BASE_URL,body);
};
