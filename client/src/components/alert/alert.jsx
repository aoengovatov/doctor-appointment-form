export const Alert = ({ success = true, children }) => {
    const successStyle = success ? "success" : "dager";
    const style = `alert alert-${successStyle} d-flex align-items-center col-4`;

    return (
        <div className={style} role="alert">
            <div>{children}</div>
        </div>
    );
};
