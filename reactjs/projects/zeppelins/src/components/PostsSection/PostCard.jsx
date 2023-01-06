export const PostCard = () => {
    return (
        <div className='postCard'>
            <div className='postImg'>
                <img src='/img/post-image-1.png' alt='' />
            </div>
            <div className='postContent'>
                <p className='date'>Nov 23 2020</p>
                <h3 className='postTitle'>This way is wrong about UI Design.</h3>
                <p className='postDesc'>
                    A quick guide to assisting users in the challenging steps from learning about your podcast on the
                    web. A quick guide to assisting users in the challenging steps from learning about your podcast on
                    the web.
                </p>
                <a href='/' className='postLink'>
                    Read More
                </a>
            </div>
        </div>
    );
};
