import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import UserList from "../pages/UserList";
import User from "../pages/User";
import NotFound from "../pages/NotFound";
import App from "../App"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "users", element: <UserList /> },
            { path: "user/:id", element: <User /> }, 

            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;