import { Link, useLocation, useLoaderData } from "react-router-dom";
import { users } from "../users";

export async function usersLoader() {
    const res = await fetch('https://dummyjson.com/users')
    if (!res.ok) {
        throw new Response('Failed to fetch users',{status:500})
    }
    return res.json()
}

const UserList = ({ type }) => { 
  
  const location = useLocation();
  const loaderData = useLoaderData();

  const isApiRoute = location.pathname === "/users/api";

  const userList = isApiRoute ? loaderData.users : users;
  

  return (
    <div className="my-10 px-4 flex flex-col items-center">
      
      <h1 className="text-3xl text-lime-900 font-bold mb-6">
        👥 Users List
      </h1> 

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userList.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-lime-100 rounded-xl shadow hover:shadow-md transition flex flex-col"
          >
            <h2 className="text-lg font-semibold">{user.name ?? `${user.firstName} ${user.lastName}` }</h2>
            <p className="text-gray-600 text-sm truncate w-full">{user.email}</p>

            <Link
              to={`/user/${user.id}/${type}`}
              className="mt-3 bg-sky-700 text-sm text-white px-4 py-2 rounded-lg inline-flex w-fit"
            >
              👁️‍🗨️ View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;