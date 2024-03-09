import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const currentUrl = location.pathname;
    const user = sessionStorage.getItem("user");

    const getActiveElem = (url) => {
        return url === currentUrl ? "nav-link active" : "nav-link";
    };

    return (
        <header className="d-flex  py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className={getActiveElem("/")}>
                        Home
                    </Link>
                </li>
                {user ? (
                    <>
                        <li className="nav-item">
                            <Link to="/notes" className={getActiveElem("/notes")}>
                                Notes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className={getActiveElem("/loout")}>
                                Logout
                            </Link>
                        </li>
                    </>
                ) : (
                    <li className="nav-item">
                        <Link to="/login" className={getActiveElem("/login")}>
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </header>
    );
};
