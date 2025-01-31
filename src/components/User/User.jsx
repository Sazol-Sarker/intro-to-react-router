import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,company,address,phone,username}=user;
    console.log(user);
    return (
        <div className="text-xl border-4 border-blue-400 m-4 p-4 rounded-md flex flex-col items-center justify-center">
            <h2>name: {name}</h2>
            <h2>company: {company.name}</h2>
            <h2>address: {address.street}</h2>
            <h2>phone: {phone.split(' ')[0]}</h2>
            <h2>user name: {username}</h2>
            <Link className="border-2 border-blue-400 rounded-lg m-2 p-2" 
            to={`/user/${id}`}>Show More</Link>
        </div>
    );
};

export default User;