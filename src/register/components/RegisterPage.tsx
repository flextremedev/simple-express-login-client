import React from "react";
import { RouteComponentProps } from "@reach/router";
import { RegisterForm } from "./RegisterForm";
import { register } from "../use-cases/register";
type RegisterPageProps = RouteComponentProps;
export const RegisterPage: React.FC<RegisterPageProps> = () => {
  return <RegisterForm register={register} />;
};
