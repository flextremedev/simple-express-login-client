import React, { useEffect } from "react";
import { Input, Button, Typography } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
const { Title } = Typography;
const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
const register = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoginLoading, setIsLoginLoading] = React.useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = React.useState(false);
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    setIsLoginLoading(true);
    await login({ username, password });
    try {
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoginLoading(false);
    }
  };
  const handleRegister = async () => {
    setIsRegisterLoading(true);
    try {
      await register({ username, password });
    } catch (e) {
      console.error(e);
    } finally {
      setIsRegisterLoading(false);
    }
  };
  useEffect(() => {
    window.addEventListener("unhandledrejection", function () {
      setIsLoginLoading(false);
      setIsRegisterLoading(false);
    });
  }, []);
  return (
    <div className="App">
      <div className="form-container">
        <div className="form-left form-side" />
        <div className="form-side">
          <Title level={1}>Moin.</Title>
          <form>
            <Input
              size="large"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
              className="margin-bottom"
            />
            <Input.Password
              size="large"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
              className="margin-bottom"
            />
            <div className="button-group">
              <Button
                className="btn-primary"
                type="primary"
                onClick={handleLogin}
                size="large"
                disabled={isLoginLoading}
                block>
                Login
              </Button>
              <Button
                className="btn-text"
                type="link"
                onClick={handleRegister}
                size="large"
                disabled={isRegisterLoading}
                block>
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
