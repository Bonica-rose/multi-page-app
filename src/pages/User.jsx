import { useParams, Link, useLoaderData } from "react-router-dom";

const User = () => {
  const { type } = useParams();
  const user = useLoaderData();

  return (
    <div className="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-xl max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-lime-100 rounded-2xl shadow-md hover:shadow-lg transition p-3">

        <h2 className="text-2xl sm:text-3xl font-bold text-lime-900 text-center mb-6">
          User Details
        </h2>

        <div className="space-y-3 text-sm sm:text-base text-gray-800">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {user.name ?? `${user.firstName} ${user.lastName}`}
          </p>

          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <p>
            <span className="font-semibold">Age:</span> {user.age}
          </p>

          <p>
            <span className="font-semibold">Job:</span>{" "}
            {user.job ?? user.company?.title}
          </p>

          <p>
            <span className="font-semibold">Place:</span>{" "}
            {user.place ?? user.address?.city}
          </p>
        </div>

        <div className="mt-4 flex justify-center sm:justify-start">
          <Link
            to={type === "api" ? "/users/api" : "/users"}
            className="bg-black text-white text-sm sm:text-base px-4 py-1.5 rounded-lg hover:bg-gray-900 transition w-full sm:w-auto text-center"
          >
            Go Back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default User;