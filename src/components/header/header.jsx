export const Header = () => {
    const currentUrl = window.location.pathname;

    const getActiveElem = (url) => {
        return url === currentUrl ? "nav-link active" : "nav-link";
    };

    return (
        <header className="d-flex  py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="/" className={getActiveElem("/")}>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/login" className={getActiveElem("/login")}>
                        Login
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/notes" className={getActiveElem("/notes")}>
                        Notes
                    </a>
                </li>
            </ul>
        </header>
    );
};
