import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function UserError() {
    const error = useRouteError();

    let message = "Something went wrong";

    if (isRouteErrorResponse(error)) {
        message = error.data || error.statusText;
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <div className="flex flex-col items-center mt-10 px-4">
        <h2 className="text-2xl text-red-500 font-bold mb-4">
            {message}
        </h2>
        <p className="text-gray-500">Status: {error.status || "Unknown"}</p>
        </div>
    );
}