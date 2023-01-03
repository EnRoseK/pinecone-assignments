export const SidebarMenu = ({ title = '', items = [] }) => {
    return (
        <>
            <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                <span className='fs-4'>{title}</span>
            </a>
            <hr />
            <ul className='nav nav-pills flex-column mb-auto'>
                {items.map((item) => (
                    <li className='nav-item'>
                        <a href={item.link} className='nav-link text-white'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};
