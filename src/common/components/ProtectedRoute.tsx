import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
type ProtectedRouteProps = RouteComponentProps & {
  component: React.ComponentType;
};
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) =>
  false ? <Component {...rest} /> : <Redirect from="" to="/login" noThrow />;
