import PropTypes from 'prop-types';
import Bookmarks from '../Bookmarks/Bookmarks';




const Bookmark = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) =><Bookmarks key={idx} bookmark={bookmark}></Bookmarks>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmark;