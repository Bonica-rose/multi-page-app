import { useParams } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const { type } = useParams();
  const user = useLoaderData(); 
  
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h2 className="text-3xl text-lime-900 font-bold mb-6">User Details</h2>
      <div className="max-w-4xl p-4 bg-lime-100 rounded-xl shadow hover:shadow-md transition flex flex-col">

        <p><b>Name:</b> {user.name ?? `${user.firstName} ${user.lastName}` }</p>
        <p><b>Email: </b>{user.email}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Job:</b> {user.job ?? user.company.title}</p>
        <p><b>Place:</b> {user.place ?? user.address.city}</p>

        <Link
          to={type === 'api' ? '/users/api' : '/users'}
          className="mt-3 bg-black text-white text-sm px-4 py-2 rounded-lg inline-flex w-fit"
        >
          Go Back
        </Link>

      </div>
    </div>
  );
}

export default User