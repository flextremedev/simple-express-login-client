import React from "react";
import { RouteComponentProps } from "@reach/router";
import { LoginForm } from "../components/LoginForm";
type LoginPageProps = RouteComponentProps;
export const LoginPage: React.FC<LoginPageProps> = () => {
  return <LoginForm />;
};
