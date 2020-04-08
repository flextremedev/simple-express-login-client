import React, { useEffect } from "react";
import { Input, Button } from "antd";
import { Form } from "../../common/components/Form";
import { Credentials } from "../../common/types/Credentials";
type RegisterFormProps = {
  register: (credentials: Credentials) => Promise<void>;
};
export const RegisterForm: React.FC<RegisterFormProps> = ({ register }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isRegisterLoading, setIsRegisterLoading] = React.useState(false);
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
        <Button className="btn-text" type="link" size="large" block>
          Already have an account?
        </Button>
      </form>
    </Form>
  );
};
