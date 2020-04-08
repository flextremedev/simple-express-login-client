import React from "react";
import { LoginForm } from "./LoginForm";
import { login } from "../use-cases/login";
import { RouteComponentProps } from "@reach/router";
type LoginPageProps = RouteComponentProps;
export const LoginPage: React.FC<LoginPageProps> = () => {
  return <LoginForm login={login} />;
};
