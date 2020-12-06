import React from "react";
import { RouteComponentProps } from "@reach/router";
import { LoginForm } from "../components/LoginForm";
import { getUsers } from "../use-cases/getUsers";
type LoginPageProps = RouteComponentProps;
export const LoginPage: React.FC<LoginPageProps> = () => {
  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      console.log({ users });
    };
    fetchUsers();
  });
  return <LoginForm />;
};
