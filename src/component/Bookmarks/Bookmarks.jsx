import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark, time}) => {
    return (
        <div className="w-[411px] p-1">
            <div className=" mb-2 bg-[#f3f3f3] p-5">
            <h1 className="text-lg font-bold text-blue-500">Spent time on read : {time} min</h1>
            </div>

            <div className="bg-[#f3f3f3] p-2">
                <h1 className="text-lg font-bold my-2">Bookmarked Blogs : {bookmark.length}</h1>
                {
                    bookmark.map((bookmar, idx) => <Bookmark key={idx} bookmar={bookmar}></Bookmark>)
                }

            </div>
        </div>
    );
};

export default Bookmarks;