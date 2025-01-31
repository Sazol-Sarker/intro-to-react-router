import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    const {statusText,status}=error;
    return (
        <div className="text-2xl flex flex-col items-center justify-center">
            <h2 >OOPS!</h2>
            <h3>{statusText}</h3>
            <h3>{status}</h3>
            <Link to='/'>
            <button className="border-2 border-slate-500 m-2 p-2 rounded-lg">Go back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;