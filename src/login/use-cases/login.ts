import { serverConfig } from "../../serverConfig";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  await fetch(
    `${serverConfig.SERVER_URL || "http://localhost"}:${
      serverConfig.SERVER_PORT || 8080
    }/login`,
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
