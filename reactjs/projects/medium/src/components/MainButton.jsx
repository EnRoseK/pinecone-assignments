export const MainButton = ({ href, children, extraClass }) => {
    return (
        <a href={href} className={`d-flex align-items-center btn main-btn ${extraClass}`}>
            {children}
        </a>
    );
};
