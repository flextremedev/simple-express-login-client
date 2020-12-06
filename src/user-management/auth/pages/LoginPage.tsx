import React from "react";
import { RouteComponentProps } from "@reach/router";
import { LoginForm } from "../components/LoginForm";
// import { useUsers } from "../hooks/useUsers";
import { useQuery } from "react-query";
import { getUsers } from "../use-cases/getUsers";
type LoginPageProps = RouteComponentProps;
export const LoginPage: React.FC<LoginPageProps> = () => {
  // const [loading, setIsLoading] = React.useState(false);
  // const [data, setData] = React.useState(undefined);
  const { data, isLoading } = useQuery("getUsers", getUsers);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  console.log({ data });
  return <LoginForm />;
};
