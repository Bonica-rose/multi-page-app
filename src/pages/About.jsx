const About = () => {
    return (
        <div className="flex flex-col items-center my-10 px-4">
        
            <h1 className="text-3xl text-lime-900 font-bold mb-4">
                About This App
            </h1>

            <p className="text-gray-600 text-center max-w-xl">
                This application is built using React and React Router to demonstrate
                multi-page navigation in a single-page application (SPA). It showcases
                features like dynamic routing, protected routes, and API data fetching.
            </p>

            <div className="mt-6 p-4 bg-lime-100 rounded-xl shadow-md max-w-xl">
                <h2 className="text-lg text-lime-900 font-semibold mb-2">Purpose:</h2>
                <p className="text-lime-700">
                The goal of this app is to help developers understand how routing works
                in React applications and how to structure projects using reusable
                components and pages.
                </p>
            </div>

        </div>
    );
}

export default About