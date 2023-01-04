import './styles/bootstrap.min.css';
import './styles/styles.css';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';

const App = () => {
    return (
        <>
            <Navbar />
            <Content />
        </>
    );
};

export default App;
