import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Home } from './pages/Home';
import { Article } from './pages/Article';

const App = () => {
    return (
        <>
            {/* <Home /> */}
            <Article />
        </>
    );
};

export default App;
