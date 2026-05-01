const Home = () => {
    return (
    <div className="flex flex-col items-center justify-center my-10 px-4">
      
      <h1 className="text-3xl text-lime-900 font-bold mb-4">
        ✽ Welcome to Our Application︕
      </h1>

      <p className="text-gray-600 text-center max-w-xl">
        This is a multi-page React application built using React Router.
        You can navigate between different pages like Home, About, and User List.
        It also demonstrates dynamic routing, and API data fetching.
      </p>

      <div className="mt-6 p-4 bg-lime-100 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2 text-lime-900">Features:</h2>
        <ul className="list-disc list-inside text-lime-700">
          <li>Client-side routing</li>
          <li>Dynamic user pages</li>
          <li>API data fetching</li>
        </ul>
      </div>

    </div>
  );
}

export default Home