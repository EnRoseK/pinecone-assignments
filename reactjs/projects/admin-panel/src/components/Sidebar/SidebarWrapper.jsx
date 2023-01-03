export const SidebarWrapper = ({ children }) => {
    return (
        <div className='d-flex flex-column flex-shrink-0 p-3 text-bg-dark' style={{ width: 280 }}>
            {children}
        </div>
    );
};
