import './App.css';
import data from './data.json';
import { useState } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Pagination } from './components/Pagination';

const App = () => {
    const limit = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const page = Math.ceil(data.products.length / limit);

    return (
        <>
            <Header />

            <main className='my-5'>
                <div className='container'>
                    <div className='row g-3'>
                        {data.products.slice((currentPage - 1) * limit, currentPage * limit).map((product, ind) => (
                            <div className='col-6 col-md-3' key={ind}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {page >= 2 && <Pagination page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </>
    );
};

export default App;
