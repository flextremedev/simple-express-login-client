import React from "react";
import { AuthProvider } from "../auth/AuthProvider";

export const AppProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
