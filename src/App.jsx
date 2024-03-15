import { useState } from 'react';
import './App.css'
import Blogs from './component/Blogs/Blogs';
import Bookmarks from './component/Bookmarks/Bookmarks';
import Header from './component/Header/Header';

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [time, setTime] = useState(0);

  const handelBookmark = blog => {
    const newBookMark = [...bookmark, blog];
    setBookmark(newBookMark);
  }

  const handelTime = (id, blogtime) => {
   setTime(time - blogtime);

   // remove the book mark
    // console.log('remove book mark', id)
    const  remaining = bookmark.filter(bookmar => bookmar.id !==id);
    setBookmark(remaining);
  }
  return (
    <>
     <Header></Header>
     <div className='flex  justify-between items-start gap-1  my-10 p-5'>
      <Blogs handelBookmark={handelBookmark} handelTime={handelTime}></Blogs>
      <Bookmarks bookmark={bookmark} time={time}></Bookmarks>
     </div>
    </>
  )
}

export default App;
