import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PostsSection } from './components/PostsSection';
import { Footer } from './components/Footer';
import './styles/Global.css';

const App = () => {
    const posts = [
        {
            id: 1,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-1.png',
            link: '/',
            category: 'uiDesign',
        },
        {
            id: 2,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-2.png',
            link: '/',
            category: 'uxDesign',
        },
        {
            id: 3,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-1.png',
            link: '/',
            category: 'productDesign',
        },
        {
            id: 4,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-2.png',
            link: '/',
            category: 'articles',
        },
        {
            id: 5,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-1.png',
            link: '/',
            category: 'tutorials',
        },
        {
            id: 6,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-2.png',
            link: '/',
            category: 'news',
        },
        {
            id: 7,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-1.png',
            link: '/',
            category: 'productDesign',
        },
        {
            id: 8,
            title: 'This way is wrong about UI Design.',
            description:
                'A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ',
            imgName: 'blog-post-2.png',
            link: '/',
            category: 'tutorials',
        },
    ];

    return (
        <div className='container'>
            <Header />
            <HeroSection />
            <PostsSection posts={posts} />
            <Footer />
        </div>
    );
};

export default App;
