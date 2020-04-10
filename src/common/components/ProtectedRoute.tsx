import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { useAuth } from "../auth/useAuth";
type ProtectedRouteProps = RouteComponentProps & {
  component: React.ComponentType;
};
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to="/login" noThrow />
  );
};
