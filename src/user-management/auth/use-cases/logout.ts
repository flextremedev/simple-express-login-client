import { apiClient } from "../../../common/utils/api-client";

export const logout = async (): Promise<void> => {
  return await apiClient("logout", {
    credentials: "include",
    method: "POST",
  });
};
