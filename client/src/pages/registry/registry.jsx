import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Alert } from "../../components";
import userService from "../../services/user.services";

const loginFormShema = yup.object().shape({
    email: yup
        .string()
        .required("Заполните email")
        .matches(
            /^[A-Z0-9_.-]+@[A-Z0-9]+.[A-Z]{2,4}$/gi,
            "- Некорректный email. " +
                "Допустимые символы: латинские буквы, цифры, тире, нижнее подчеркивание."
        ),
    password: yup
        .string()
        .required("Заполните пароль")
        .matches(
            /^[\w#%]+$/,
            "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
        )
        .min(6, "Неверно заполнен пароль. Минимум 6 символов.")
        .max(20, "Неверно заполнен пароль. Максимум 20 символов."),
});

export const Registry = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSuccess, setAlertSuccess] = useState(true);
    const [alertBlock, setAlertBlock] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginFormShema),
    });

    const onSubmit = async ({ email, password }) => {
        await userService.addUser(email, password).then((data) => {
            if (data?.email) {
                reset();
                navigate("/login");
            } else {
                setAlertSuccess(false);
                setAlertMessage(data);
                setAlertBlock(true);
                reset();
            }
        });
    };

    const errorMessage = errors?.email?.message || errors?.password?.message;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5">
            <form className="col-4" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="h3 mb-3 fw-normal">Регистрация</h1>

                <div className="form-floating mb-1">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        {...register("email")}
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-2">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        {...register("password")}
                    />
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>

                <button className="btn btn-primary w-100 py-2 mb-1" type="submit">
                    Зарегистрироваться
                </button>

                {errorMessage && (
                    <div className="text-center" style={{ color: "red" }}>
                        {errorMessage}
                    </div>
                )}
            </form>
            {alertBlock && <Alert success={alertSuccess}>{alertMessage}</Alert>}
        </div>
    );
};
