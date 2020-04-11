import React from "react";
import { Credentials } from "../types/Credentials";
import { login as loginUseCase } from "../../login/use-cases/login";
import { logout as logoutUseCase } from "../../login/use-cases/logout";
import { register as registerUseCase } from "../../register/use-cases/register";
import { AuthContext, UserSession } from "./AuthContext";

export const AuthProvider: React.FC = ({ children }) => {
  const [session, setSession] = React.useState<UserSession | undefined>(
    undefined
  );
  const isAuthenticated = () => {
    if (!session) {
      return false;
    }
    return session.expires > new Date().getTime();
  };
  const login = async (credentials: Credentials) => {
    try {
      const result = await loginUseCase(credentials);
      setSession({
        ...result,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const register = async (credentials: Credentials) => {
    try {
      const result = await registerUseCase(credentials);
      setSession({
        ...result,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const logout = async () => {
    try {
      await logoutUseCase();
      setSession(undefined);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, session, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
