import React from "react";
import { RouteComponentProps } from "@reach/router";
import { RegisterForm } from "../components/RegisterForm";
type RegisterPageProps = RouteComponentProps;
export const RegisterPage: React.FC<RegisterPageProps> = () => {
  return <RegisterForm />;
};
