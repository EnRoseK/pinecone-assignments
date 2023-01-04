export const Button = ({ type, size, children }) => {
    return <button className={`${type} btn-${size}`}>{children}</button>;
};
