import http from "@/lib/http";

export const loadUsers = async () => {
  return await http.get("api/v1/users");
};
