import React, { ChangeEvent } from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
function App() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const login = () => {
        fetch("http://localhost:8080/login", {
            method: "POST",
            mode: "no-cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        });
    };
    return (
        <div className="App">
            <Input size="large" placeholder="Username" value={username} onChange={handleChangeUsername} />
            <Input.Password size="large" placeholder="Password" value={password} onChange={handleChangePassword} />
            <Button type="primary" onClick={login}>
                Login
            </Button>
        </div>
    );
}

export default App;
