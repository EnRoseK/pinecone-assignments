import { MainButton } from '../components/MainButton';
import { SlimNav } from '../components/SlimNav';
import authorPic from '../images/author-picture.png';
import followIcon from '../images/follow.svg';

export const Article = () => {
    return (
        <>
            <SlimNav />
            <div className='container'>
                <div className='row'>
                    <div className='col-8'></div>
                    <div className='col article-sidebar'>
                        <div className='sidebar-author-info'>
                            <img src={authorPic} alt='' className='mb-3' />
                            <h3 className='sidebar-author-title'>Cassie Kozyrkov</h3>
                            <p>115K Followers</p>
                            <p className='mb-4'>
                                Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art, theatre, decision
                                science. All views are my own. twitter.com/quaesita
                            </p>
                            <div className='d-flex'>
                                <MainButton extraClass={`me-2`} href='#'>
                                    Follow
                                </MainButton>
                                <MainButton href='#'>
                                    <img src={followIcon} />
                                </MainButton>
                            </div>
                        </div>

                        <div className='sidebar-posts'>
                            <h3 className='sidebar-posts-title'>More from Medium</h3>

                            <div className='sidebar-single-post'>
                                <div className='content'></div>
                                <div className='picture'>
                                    <img src='' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
