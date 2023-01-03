export const NavbarWrapper = ({ children }) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>{children}</div>
        </nav>
    );
};
