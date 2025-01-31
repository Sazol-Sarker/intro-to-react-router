import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post=useLoaderData();
    const {userId,title,body}=post;
    return (
        <div>
           <h2><b>User Id {userId}</b></h2> 
           <h3>{title}</h3>
           <h3>{body}</h3>
          </div>
    );
};

export default PostDetails;