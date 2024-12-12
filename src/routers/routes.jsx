// @copyright 2024 thounny

// NODE MODULES
import { createBrowserRouter } from "react-router-dom";

// COMPONENTS
import App from '../App.jsx';
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ResetLink from "../pages/ResetLink.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import Conversation from "../pages/Conversation.jsx";

// LOADERS
import registerLoader from "./loaders/registerLoader";
import loginLoader from "./loaders/loginLoader";
import resetLinkLoader from "./loaders/resetLinkLoader";
import resetPasswordLoader from "./loaders/resetPasswordLoader";
import appLoader from "./loaders/appLoader";

// ACTIONS
import registerAction from "./actions/registerAction";
import loginAction from "./actions/loginAction";
import resetLinkAction from "./actions/resetLinkAction";
import resetPasswordAction from "./actions/resetPasswordAction";
import appAction from "./actions/appAction";
import conversationLoader from "./loaders/conversationLoader.js";
import conversationAction from "./actions/conversationAction.js";


// ROUTER
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: appLoader,
        action: appAction,
        children: [
            {
                path: "/:conversationId",
                element: <Conversation />,
                loader: conversationLoader,
                action: conversationAction,
            }
        ]
    },
    {
        path: '/register',
        element: <Register />,
        loader: registerLoader,
        action: registerAction,
    },
    {
        path: '/login',
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
    },
    {
        path: '/reset-link',
        element: <ResetLink />,
        loader: resetLinkLoader,
        action: resetLinkAction,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
        loader: resetPasswordLoader,
        action: resetPasswordAction,
    }
]);

export default router;