import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { Alert } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import noteService from "../../services/note.service";

const problemFormShema = yup.object().shape({
    fio: yup
        .string()
        .required("Заполните ФИО")
        .matches(/[А Яа-я ]/g, "Неверно заполнено поле ФИО. Допускаются только буквы.")
        .min(3, "Неверно заполнено поле ФИО. Минимум 3 символа.")
        .max(35, "Неверно заполнено поле ФИО. Максимум 35 символов."),
    phone: yup
        .string()
        .required("Заполните телефон")
        .matches(/[0-9]/g, "Неверно заполнено поле телефон. Допускаются только цифры")
        .min(6, "Неверно заполнен телефон. Минимум 6 символов.")
        .max(20, "Неверно заполнен телефон. Максимум 20 символов."),
    problem: yup.string().max(200, "Неверно заполнена проблема. Максимум 200 символов."),
});

export const Main = () => {
    const [alertMessage, setAlertMessage] = useState("");
    let alertSuccess = true;
    const [alertBlock, setAlertBlock] = useState(false);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fio: "",
            phone: "",
            problem: "",
        },
        resolver: yupResolver(problemFormShema),
    });

    const onSubmit = async ({ fio, phone, problem }) => {
        await noteService.addNote(fio, phone, problem).then((data) => {
            console.log(data);
            if (data) {
                setAlertMessage("Сообщение успешно отправлено!");
            } else {
                setAlertMessage("Ошибка отправки сообщения. Попробуйте еще раз позже.");
                alertSuccess = false;
            }
        });

        setAlertBlock(true);
        reset();
    };

    const errorMessage =
        errors?.fio?.message || errors?.phone?.message || errors?.problem?.message;

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5 ">
                <form className="col-4" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="h3 mb-3 fw-normal">Запись к врачу</h1>

                    <div className="form-floating mb-1">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="Иванов Иван Иванович"
                            {...register("fio")}
                        />
                        <label htmlFor="floatingInput1">ФИО</label>
                    </div>
                    <div className="form-floating mb-1">
                        <input
                            type="phone"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="89053755845"
                            {...register("phone")}
                        />
                        <label htmlFor="floatingInput2">телефон</label>
                    </div>
                    <div className="form-floating mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            id="floatingText"
                            placeholder="Опишите проблему"
                            {...register("problem")}
                        />
                        <label htmlFor="floatingText">Опишите вашу проблему</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2 mb-1" type="submit">
                        Отправить
                    </button>
                    {errorMessage && (
                        <div className="text-center" style={{ color: "red" }}>
                            {errorMessage}
                        </div>
                    )}
                </form>
                {alertBlock && <Alert success={alertSuccess}>{alertMessage}</Alert>}
            </div>
        </>
    );
};
