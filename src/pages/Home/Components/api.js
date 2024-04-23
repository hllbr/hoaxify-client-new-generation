import http from "@/lib/http";

export const loadUsers = async (page = 0) => {
  return await http.get("/api/v1/users", { params: { page, size: 5 } });
};
