import React from "react";
import { Credentials } from "../types/Credentials";
export type UserSession = {
  expires: number;
  id: string;
};
type AuthContextType = {
  session?: UserSession;
  isAuthenticated: () => boolean;
  login?: (credentials: Credentials, callback?: () => void) => Promise<void>;
  logout?: (callback?: () => void) => Promise<void>;
  register?: (credentials: Credentials, callback?: () => void) => Promise<void>;
};
export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: () => false,
});
