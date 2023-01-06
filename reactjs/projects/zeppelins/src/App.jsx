import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PostsSection } from './components/PostsSection';
import './styles/App.css';

const App = () => {
    return (
        <div className='container'>
            <Header />
            <HeroSection />
            <PostsSection />
        </div>
    );
};

export default App;
