import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useAuth } from "../../common/auth/useAuth";
import { Button } from "antd";
export const HomePage: React.FC<RouteComponentProps> = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    if (logout) {
      logout();
    }
  };
  return (
    <div>
      Home<Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
