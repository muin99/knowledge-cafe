import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='mb-20  space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title: ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmark(blog)} className='ml-2 text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => (
                        <span key={idx} className="mr-2 text-gray-500 hover:text-gray-700">
                            <a href="">{hashtag}</a>
                        </span>
                    ))
                }
            </p>
            <button className='text-purple-800 font-bold underline' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blog;