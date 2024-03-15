import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelBookmark, handelTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
            // console.log(data)
        })
    },[])
    return (
        <div className="w-[854px] p-1 space-y-2">
           {
            blogs.map(blog => <Blog
                 key={blog.id} 
                 blog={blog}
                 handelBookmark={handelBookmark}
                 handelTime={handelTime}
                 ></Blog>)
           }
        </div>
    );
};

export default Blogs;