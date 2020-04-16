import React from "react";
import "antd/dist/antd.css";
import "./App.scss";
import { Router } from "@reach/router";
import { HomePage } from "./home/components/HomePage";
import { ProtectedRoute } from "./common/components/ProtectedRoute";
import { AppProviders } from "./common/components/AppProviders";
import { LoginPage } from "./user-management/auth/pages/LoginPage";
import { RegisterPage } from "./user-management/auth/pages/RegisterPage";
const App = () => {
  return (
    <AppProviders>
      <Router className="App">
        <ProtectedRoute path="/" component={HomePage} />
        <LoginPage path={"login"} />
        <RegisterPage path={"register"} />
      </Router>
    </AppProviders>
  );
};

export default App;
