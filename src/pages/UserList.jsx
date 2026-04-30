import { Link } from "react-router-dom";
import { users } from "../users";

const UserList = () => {  

  return (
    <div className="my-10 px-4 flex flex-col items-center">
      
      <h1 className="text-3xl text-lime-900 font-bold mb-6">
        👥 Users List
      </h1> 

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-lime-100 rounded-xl shadow hover:shadow-md transition flex flex-col"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.email}</p>

            <Link
              to={`/user/${user.id}`}
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