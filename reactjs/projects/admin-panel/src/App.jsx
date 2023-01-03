import './styles/bootstrap.min.css';
import './styles/styles.css';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';

const App = () => {
    return (
        <>
            <Navbar />
            <main className='d-flex flex-nowrap'>
                <Sidebar />
                <Dashboard />
            </main>
        </>
    );
};

export default App;
