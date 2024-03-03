export const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-body-secondary">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link px-2 text-body-secondary">
                        Login
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/notes" className="nav-link px-2 text-body-secondary">
                        Notes
                    </a>
                </li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
    );
};
