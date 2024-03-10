import http from "@/lib/http";

const BASE_URL = "/api/v1/users";

export const signUp = (body) => {
  return http.post(BASE_URL, body);
};
