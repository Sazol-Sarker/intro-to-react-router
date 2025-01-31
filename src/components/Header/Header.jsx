import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="border-2 border-green-200 h-100 w-100">
            <h2>This is a header with navbar!</h2>
            <nav className="m-4 p-4 text-xl ">
                <NavLink className="p-4 m-4 bg-teal-300" to="/">Home</NavLink>
                <NavLink className="p-4 m-4 bg-teal-300" to="/posts">Posts</NavLink>
                <NavLink className="p-4 m-4 bg-teal-300" to="/users">Users</NavLink>
                <NavLink className="p-4 m-4 bg-teal-300" to="/about">About</NavLink>
                <NavLink className="p-4 m-4 bg-teal-300" to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;