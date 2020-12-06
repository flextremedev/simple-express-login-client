import { apiClient } from "../../../common/utils/api-client";

export const getUsers = async (): Promise<any> => {
  return await apiClient("api/users");
};
