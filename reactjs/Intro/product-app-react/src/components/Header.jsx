export const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className='container'>
                    <a className='navbar-brand' href='./index.html'>
                        Navbar
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul id='menuTarget' className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link active' href='./index.html'>
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
