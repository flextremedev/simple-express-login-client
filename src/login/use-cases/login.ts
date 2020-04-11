import { apiClient } from "../../common/utils/api-client";
import { Credentials } from "../../common/types/Credentials";

export const login = async ({
  username,
  password,
}: Credentials): Promise<{ expires: number; id: string }> => {
  return await apiClient("login", {
    body: { username, password },
    credentials: "include",
  });
};
