import React from "react";
import "antd/dist/antd.css";
import "./App.scss";
import { LoginPage } from "./login/components/LoginPage";
import { Router } from "@reach/router";
import { HomePage } from "./home/components/HomePage";
import { ProtectedRoute } from "./common/components/ProtectedRoute";
import { RegisterPage } from "./register/components/RegisterPage";
const App = () => {
  return (
    <Router className="App">
      <ProtectedRoute path="/" component={HomePage} />
      <LoginPage path={"login"} />
      <RegisterPage path={"register"} />
    </Router>
  );
};

export default App;
