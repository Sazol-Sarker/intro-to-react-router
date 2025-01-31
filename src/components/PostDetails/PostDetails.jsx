import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post=useLoaderData();
    const navigate=useNavigate();
    const {userId,title,body}=post;
    const handleGoback=()=>{
        navigate(-1);
    }
    return (
        <div className="flex flex-col border-2 border-green-400 m-4 p-4 justify-center items-center text-xl">
           <h2><b>User Id {userId}</b></h2> 
           <h3>{title}</h3>
           <h3>{body}</h3>
           <button onClick={handleGoback} className="p-2 m-2 border-2 border-blue-400">Go back</button>
          </div>
    );
};

export default PostDetails;