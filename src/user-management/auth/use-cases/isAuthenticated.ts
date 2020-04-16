import { UserSession } from "../context/AuthContext";
import { apiClient } from "../../../common/utils/api-client";

export const isAuthenticated = async (): Promise<UserSession> => {
  return await apiClient("isAuthenticated", { credentials: "include" });
};
