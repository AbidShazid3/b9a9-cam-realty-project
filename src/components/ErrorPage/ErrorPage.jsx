import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center text-xl space-y-1">
                <p className="font-bold">{error.status}</p>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="text-red-600">{error.data}</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/" className="text-green-500 font-bold">Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;