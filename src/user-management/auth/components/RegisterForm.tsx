import React, { useEffect } from "react";
import { Input, Button } from "antd";
import { Link, navigate } from "@reach/router";
import { useAuth } from "../hooks/useAuth";
import { Form } from "../../../common/components/Form";
export const RegisterForm: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isRegisterLoading, setIsRegisterLoading] = React.useState(false);
  const { register } = useAuth();
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // TODO: add referer
  const navigateToHome = () => navigate("/");
  const handleRegister = async () => {
    setIsRegisterLoading(true);
    try {
      if (register) {
        await register({ username, password });
        navigateToHome();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsRegisterLoading(false);
    }
  };
  useEffect(() => {
    window.addEventListener("unhandledrejection", function () {
      setIsRegisterLoading(false);
    });
  }, []);
  return (
    <Form title={"Moin."}>
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
          onClick={handleRegister}
          size="large"
          disabled={isRegisterLoading}
          block>
          Register
        </Button>
        <Link to="/login">
          <Button className="btn-text" type="link" size="large" block>
            Already have an account?
          </Button>
        </Link>
      </form>
    </Form>
  );
};
