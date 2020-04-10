import React from "react";
import { Credentials } from "../types/Credentials";
import { login as loginUseCase } from "../../login/use-cases/login";
import { register as registerUseCase } from "../../register/use-cases/register";
import { AuthContext, UserSession } from "./AuthContext";

export const AuthProvider: React.FC = ({ children }) => {
  const [session, setSession] = React.useState<UserSession | undefined>(
    undefined
  );
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const login = async (credentials: Credentials, callback?: () => void) => {
    try {
      // await loginUseCase(credentials);
      await Promise.resolve();
      setIsAuthenticated(true);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };
  const register = async (credentials: Credentials, callback?: () => void) => {
    try {
      // await registerUseCase(credentials);
      await Promise.resolve();
      setIsAuthenticated(true);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };
  const logout = async (callback?: () => void) => {
    // TODO: logout request to server
    await Promise.resolve();
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, session, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
