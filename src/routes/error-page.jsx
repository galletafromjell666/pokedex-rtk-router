import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error page" className="w-full h-screen bg-red-400">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Go Home
        </button>
      </Link>
    </div>
  );
};
