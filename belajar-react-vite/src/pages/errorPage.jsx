import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Page not found!</h1>
        <p className="font-medium text-slate-500 mb-8">
          Sorry, an unexpected has occured
        </p>
        <p className="font-medium text-slate-500 mb-8">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;