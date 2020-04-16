import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Button } from "antd";
import { useAuth } from "../../user-management/auth/hooks/useAuth";
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
