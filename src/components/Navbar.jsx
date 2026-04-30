import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation(); // Get current route info

    const linkClass =
        "px-2 py-1 rounded-full text-black-700 transition";

    const activeClass =
        "text-lime-600 font-medium";

    return (
        // <div className="flex justify-center">
        <div className="relative flex justify-center w-full">
            <nav className="flex gap-2 bg-white px-2 py-1 rounded-full mt-3 shadow-md shadow-lime-500">
                <NavLink
                to="/"
                className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : ""}`
                }
                >
                Home
                </NavLink>

                <NavLink
                to="/about"
                className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : ""}`
                }
                >
                About
                </NavLink>

                <NavLink
                to="/users"
                className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : ""}`
                }
                >
                Users
                </NavLink>

                
            </nav>

            {location.pathname === '/users' && (
                <Link
                to='/fetch/users'
                className="absolute right-16 mt-4 
                bg-black text-balance text-white px-5 py-1.5 rounded-full"
                >
                    Use API
                </Link>
            )}

            
        </div>
    );
}

export default Navbar;