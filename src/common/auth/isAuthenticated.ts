import { apiClient } from "../utils/api-client";
import { UserSession } from "./AuthContext";

export const isAuthenticated = (): Promise<UserSession> => {
    return apiClient("isAuthenticated", { credentials: "include" });
};
