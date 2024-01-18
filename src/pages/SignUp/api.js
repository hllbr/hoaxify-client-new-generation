import axios from "axios";
import { i18nInstance } from "../../local";

const BASE_URL = "/api/v1/users";

export const signUp = (body) => {
  return axios.post(BASE_URL, body, {
    headers: {
      "Accept-Language": i18nInstance.language
    },
  });
};
