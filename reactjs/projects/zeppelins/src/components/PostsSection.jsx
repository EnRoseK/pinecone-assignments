import { Categories } from './PostsSection/Categories';
import { PostCard } from './PostsSection/PostCard';
import '../styles/PostsSection.css';

export const PostsSection = ({ posts }) => {
    return (
        <div className='postsSection'>
            <Categories />
            <div className='posts'>
                {posts.map((post) => (
                    <PostCard post={post} />
                ))}
            </div>
        </div>
    );
};
