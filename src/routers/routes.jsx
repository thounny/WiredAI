// @copyright 2024 thounny

// NODE MODULES
import { createBrowserRouter } from "react-router-dom";

// COMPONENTS
import App from '../App.jsx';
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";

// ACTIONS
import registerAction from "./actions/registerAction";
import loginAction from "./actions/loginAction";

// ROUTER
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/register',
        element: <Register />,
        action: registerAction,
    },
    {
        path: '/login',
        element: <Login />,
        action: loginAction,
    },
]);

export default router;