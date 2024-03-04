export const Alert = ({ children }) => {
    return (
        <div className="alert alert-success d-flex align-items-center col-4" role="alert">
            <div>{children}</div>
        </div>
    );
};
