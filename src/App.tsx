import React from "react";
import "antd/dist/antd.css";
import "./App.scss";
import { LoginForm } from "./login/components/LoginForm";
import { login } from "./login/use-cases/login";
const App = () => {
  return (
    <div className="App">
      <LoginForm login={login} />
    </div>
  );
};

export default App;
