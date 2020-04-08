import React, { useEffect } from "react";
import { Input, Button } from "antd";
import { Form } from "../../common/components/Form";
import { Credentials } from "../../common/types/Credentials";
import { Link } from "@reach/router";
type LoginFormProps = {
  login: (credentials: Credentials) => Promise<void>;
};
export const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoginLoading, setIsLoginLoading] = React.useState(false);
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
  useEffect(() => {
    window.addEventListener("unhandledrejection", function () {
      setIsLoginLoading(false);
    });
  }, []);
  return (
    <Form title={"Moin moin."}>
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
        <Button
          className="btn-primary"
          type="primary"
          onClick={handleLogin}
          size="large"
          disabled={isLoginLoading}
          block>
          Login
        </Button>
        <Link to="/register">
          <Button className="btn-text" type="link" size="large" block>
            Don't have an account?
          </Button>
        </Link>
      </form>
    </Form>
  );
};
