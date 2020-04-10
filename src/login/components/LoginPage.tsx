import React from "react";
import { LoginForm } from "./LoginForm";
import { RouteComponentProps } from "@reach/router";
type LoginPageProps = RouteComponentProps;
export const LoginPage: React.FC<LoginPageProps> = () => {
  return <LoginForm />;
};
