import { Routes, Route } from "react-router-dom";
import "./App.css";

export const App = () => {
    return (
        <>
            <div>Запись к врачу</div>
            <Routes>
                <Route path="/" element={<div>Главная страница</div>} />
                <Route path="/login" element={<div>Форма входа</div>} />
                <Route
                    path="/notes"
                    element={<div>Запись на прием (для администратора)</div>}
                />
                <Route
                    path="*"
                    element={<div>ошибка. такой страницы не существует</div>}
                />
            </Routes>
        </>
    );
};
