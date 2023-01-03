export const Pagination = ({ page, currentPage, setCurrentPage }) => {
    const pages = [];
    for (let i = 1; i <= page; i++) {
        pages.push(i);
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {pages.map((singlePage) =>
                    singlePage === currentPage ? (
                        <li className='page-item active' key={singlePage}>
                            <span className='page-link'>{currentPage}</span>
                        </li>
                    ) : (
                        <li className='page-item' key={singlePage}>
                            <a
                                className='page-link'
                                onClick={() => {
                                    setCurrentPage(singlePage);
                                }}
                            >
                                {singlePage}
                            </a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};
