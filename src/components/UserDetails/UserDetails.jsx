import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const {id,email,website,name}=user;
    console.log(user);
    return (
        <div className="p-4 m-4 bg-teal-300">
            <h2>User No: {id}</h2>
            <h2>User name: {name}</h2>
            <h2>User email: {email}</h2>
            <h2>User website: {website}</h2>

        </div>
    );
};

export default UserDetails;