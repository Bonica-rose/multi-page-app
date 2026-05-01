import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation(); // Get current route info

    const linkClass = "px-3 py-1.5 rounded-full text-sm sm:text-base text-black transition whitespace-nowrap";
    const activeClass = "bg-lime-100 text-lime-700 font-medium shadow";
    const diffClass = "bg-pink-100 text-pink-600 font-semibold"; 

    return (       
        
        <div className="flex justify-center px-2">
            <nav className="flex gap-2 bg-white px-2 py-2 rounded-full mt-3 shadow-md shadow-lime-500
        overflow-x-auto max-w-full">
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
                    end
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : ""}`
                    }
                >
                Users
                </NavLink>

                {location.pathname.startsWith('/users') && (
                    <NavLink
                        to='/users/api'
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? diffClass : ""}`
                        }
                    >
                    API Users
                    </NavLink>
                )}
                
            </nav> 
            
        </div>
    );
}

export default Navbar;