import { Credentials } from "../types/Credentials";
import { UserSession } from "../context/AuthContext";
import { apiClient } from "../../../common/utils/api-client";

export const login = async ({
  username,
  password,
}: Credentials): Promise<UserSession> => {
  return await apiClient("login", {
    body: { username, password },
    credentials: "include",
  });
};
