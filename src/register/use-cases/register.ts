import { apiClient } from "../../common/utils/api-client";
import { Credentials } from "../../common/types/Credentials";
import { UserSession } from "../../common/auth/AuthContext";

export const register = async ({ username, password }: Credentials): Promise<UserSession> => {
    return await apiClient("register", {
        body: { username, password },
        credentials: "include",
    });
};
