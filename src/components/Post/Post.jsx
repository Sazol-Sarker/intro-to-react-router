import { Link } from "react-router-dom";

const Post = ({post}) => {
    console.log(post);
    const {id,title,body}=post;
    return (
        <div className="text-xl m-2 p-2 border-2 rounded-md border-teal-300 flex flex-col items-center">
            <h2><b>ID: {id}</b></h2>
            <h2><em>Post Title: {title}</em> </h2>
            <h2 className="flex flex-grow">Description: {body}</h2>
            
            <Link to={`/posts/${id}`}>
            <button className="text-xl m-2 p-2 border-2 rounded-lg border-teal-300">More details</button>
            </Link>
            
        </div>
    );
};

export default Post;