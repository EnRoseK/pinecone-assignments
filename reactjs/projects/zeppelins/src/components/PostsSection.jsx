import { Categories } from './PostsSection/Categories';
import { PostCard } from './PostsSection/PostCard';

export const PostsSection = () => {
    return (
        <div className='postsSection'>
            <Categories />
            <div className='posts'>
                <PostCard />
            </div>
        </div>
    );
};
