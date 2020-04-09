import { serverConfig } from "../../serverConfig";

export const register = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  await fetch(
    `${serverConfig.SERVER_URL || "http://localhost"}:${
      serverConfig.SERVER_PORT || 8080
    }/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
};
