import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { users } from "../users";

const User = () => {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="flex flex-col items-center mt-10 px-4">
        <h2 className="text-2xl text-gray-400 font-bold mb-6">User not found</h2>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h2 className="text-3xl text-lime-900 font-bold mb-6">User Details</h2>
      <div
        className="p-4 bg-lime-100 rounded-xl shadow hover:shadow-md transition flex flex-col"
      >
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email: </b>{user.email}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Job:</b> {user.job}</p>
        <p><b>Salary:</b> {user.salary}</p>
        <p><b>Place:</b> {user.place}</p>

        <Link
          to='/users'
          className="mt-3 bg-black text-white text-sm px-4 py-2 rounded-lg inline-flex w-fit"
        >
          Go Back
        </Link>

      </div>
    </div>
  );
}

export default User