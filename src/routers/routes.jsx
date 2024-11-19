// @copyright 2024 thounny

// NODE MODULES
import { createBrowserRouter } from "react-router-dom";

// COMPONENTS
import App from '../App.jsx';
import Register from "../pages/Register.jsx";

// ACTIONS
import registerAction from "./actions/registerAction";

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
    }
]);

export default router;