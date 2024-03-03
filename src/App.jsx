import { Routes, Route } from "react-router-dom";
import { Main, Login, Notes, Error } from "./pages";
import { Header, Footer } from "./components";
import "./App.css";

export const App = () => {
    return (
        <>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>

            <Footer />
        </>
    );
};
