import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="border-2 border-green-200 h-100 w-100">
            <h2>This is a header with navbar!</h2>
            <nav className="m-4 p-4 text-xl ">
                <Link className="p-4 m-4 bg-teal-300" to="/">Home</Link>
                <Link className="p-4 m-4 bg-teal-300" to="/users">Users</Link>
                <Link className="p-4 m-4 bg-teal-300" to="/about">About</Link>
                <Link className="p-4 m-4 bg-teal-300" to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;