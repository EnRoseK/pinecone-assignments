export const PostCard = ({ post }) => {
    return (
        <div className='postCard'>
            <div className='postImg'>
                <div className='imageWrapper'>
                    <img src={`/img/${post.imgName}`} alt={post.title} />
                </div>
            </div>
            <div className='postContent'>
                <p className='date'>Nov 23 2020</p>
                <h3 className='postTitle'>{post.title}</h3>
                <p className='postDesc'>{post.description}</p>
                <a href={post.link} className='postLink'>
                    Read More
                </a>
            </div>
        </div>
    );
};
