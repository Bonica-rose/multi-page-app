import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import UserList, { usersLoader } from "../pages/UserList";
import User from "../pages/User";
import NotFound from "../pages/NotFound";
import UserError from "../pages/UserError";
import { users } from "../users";
import App from "../App"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        hydrateFallbackElement: (
            <div className="flex justify-center mt-10 text-gray-500">
                Loading...
            </div>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            {
                path: "users",
                element: <UserList type='local' />
            },
            {
                path: "users/api",
                element: <UserList type='api' />,
                loader: usersLoader
            },
            {
                path: "user/:id/:type",
                element: <User />,
                loader: userLoader,
                errorElement: <UserError />                
            }, 

            { path: "*", element: <NotFound /> },
        ],
    },
]);

export async function userLoader({ params }) {

    const { id, type } = params;

    if (type !== "api" && type !== "local") {
        throw new Response("Invalid user type", { status: 404 });
    }

    if (type === "local") {
        const user = users.find((u) => u.id === Number(id));
        if (!user) {
            throw new Response("Mock User not found", { status: 404 });
        }
        return user;
    }
    
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) {
        throw new Response("API User not found", { status: 404 });
    }

    return res.json();
}

export default router;