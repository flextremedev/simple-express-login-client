import { apiClient } from "../../common/utils/api-client";
import { Credentials } from "../../common/types/Credentials";

export const register = async ({
  username,
  password,
}: Credentials): Promise<{ expiresIn: number; id: string }> => {
  return await apiClient("register", {
    body: { username, password },
    credentials: "include",
  });
};
