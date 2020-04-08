export const register = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
