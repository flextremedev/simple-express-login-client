export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  await fetch("http://localhost:8080/login", {
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
