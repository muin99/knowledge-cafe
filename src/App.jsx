import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}></Blogs>
        <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  )
}

export default App
