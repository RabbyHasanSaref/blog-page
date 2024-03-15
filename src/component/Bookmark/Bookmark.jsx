const Bookmark = ({bookmar}) => {
    const {title} = bookmar
    return (
        <div>
            <div className="bg-white p-2 my-2">
                    <p>{title}</p>
            </div>
        </div>
    );
};

export default Bookmark;