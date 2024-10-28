import PropTypes from 'prop-types';
import Bookmarks from '../Bookmarks/Bookmarks';




const Bookmark = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) =><Bookmarks key={idx} bookmark={bookmark}></Bookmarks>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmark;