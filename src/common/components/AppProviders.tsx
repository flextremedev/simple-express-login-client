import React from "react";
import { AuthProvider } from "../../user-management/auth/components/AuthProvider";
export const AppProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
