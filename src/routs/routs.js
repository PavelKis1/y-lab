import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


export const privateRouts = [
    { path: '/', component: <HomePage /> }
];

export const publicRouts = [
    { path: '/login', component: <LoginPage /> },
];