import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([])
const handleBookmark = (blog) => {
const newBookmarks = [...bookmarks, blog]
setBookmarks(newBookmarks);
}

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  )
}

export default App
