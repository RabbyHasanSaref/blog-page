const Blog = ({blog, handelBookmark, handelTime}) => {
    const {id, author, author_img, cover, posted_date, reading_time, title, hashtags} = blog;
    return (
        <div className='w-[600px]'>
             <div>
                <img src={cover} alt="" />
            </div>

            <div className="flex justify-between items-start my-5">
                <div className="flex gap-1">
                    <img className="w-12" src={author_img} alt="" />
                    <div>
                        <h5 className="text-lg font-bold">{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-1">
                    <p>{reading_time} min read</p>
                    |
                    <h5 onClick={()=>handelBookmark(blog)} className="text-lg font-bold cursor-pointer">Book Mark</h5>
                </div>
            </div>

            <div className="space-y-1">
                <h5 className="flex text-lg font-bold">{title}</h5>
                <div className="flex cursor-pointer">
                <p>
                    {
                        hashtags.map((has, idx) =>  <span key={idx}><a href=""> # {has}</a></span>)
                    }
                </p>
                </div>

                <button onClick={()=>handelTime(id, reading_time)} className="flex text-base font-semibold text-blue-500 underline">Mark as read</button>
            </div>
            <hr className="my-5" />
        </div>
    );
};

export default Blog;