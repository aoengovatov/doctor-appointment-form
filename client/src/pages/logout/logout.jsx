import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();
    sessionStorage.setItem("user", "");
    navigate("/login");
    return null;
};
