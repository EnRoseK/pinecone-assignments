import '../styles/Header.css';

export const Header = () => {
    return (
        <header>
            <div className='logo'>
                <div className='mainLogo'>
                    <img src='/img/logo.png' alt='' />
                </div>
                <div className='extraLogo'>Hire Me</div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a className='nav-link' href='/'>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a className='nav-link active' href='/'>
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className='nav-link' href='/'>
                            Cv
                        </a>
                    </li>
                    <li>
                        <a className='nav-link' href='/'>
                            Store
                        </a>
                    </li>
                    <li>
                        <a className='nav-link' href='/'>
                            Freelance
                        </a>
                    </li>
                    <li>
                        <a className='nav-link' href='/'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a className='nav-link' href='/'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
