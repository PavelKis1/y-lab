import axios from "axios";

export const login = async (login, password) => {
    await axios.post('https://dummyjson.com/auth/login', {
        username: login,
        password: password
    }
    );
}