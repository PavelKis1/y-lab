import { useState } from "react"
import Button from "./UI/button/Button"
import Input from "./UI/input/Input"
import { useContext } from "react";
import { AuthContext } from "../context/context";
import { login } from "../API/Auth/login";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuth } = useContext(AuthContext);

    const loginForm = e => {
        e.preventDefault();
        login(username, password)
            .then(() => {
                setIsAuth(true);
                localStorage.setItem('auth', 'true');
                setUsername('');
                setPassword('');
            })
            .catch(error => {
                setUsername('');
                setPassword('');
                
            })
    }

    return (
        <form
            className="login-form"
            onSubmit={loginForm}>
                <h1 className="login-title">
                    Login
                </h1>
            <Input
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
                name='username'
                type='text'
                placeholder='Username'
            />
            <Input
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                name='password'
                type='password'
                placeholder='Password'
            />
            <Button>
                Login
            </Button>
        </form>
    )
}

export default LoginForm