import { Credentials } from "../types/Credentials";
import { UserSession } from "../context/AuthContext";
import { apiClient } from "../../../common/utils/api-client";

export const register = async ({
  username,
  password,
}: Credentials): Promise<UserSession> => {
  return await apiClient("register", {
    body: { username, password },
    credentials: "include",
  });
};
