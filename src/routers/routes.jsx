// @copyright 2024 thounny

// NODE MODULES
import { createBrowserRouter } from "react-router-dom";

// COMPONENTS
import App from '../App.jsx';

// ROUTER
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

export default router;