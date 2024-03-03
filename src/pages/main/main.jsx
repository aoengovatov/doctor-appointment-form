export const Main = () => {
    return (
        <div className="d-flex justify-content-center w-100 mt-5">
            <form className="col-4">
                <h1 className="h3 mb-3 fw-normal">Запись к врачу</h1>

                <div className="form-floating mb-1">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="Иванов Иван Иванович"
                    />
                    <label htmlFor="floatingInput1">ФИО</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        type="phone"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="89053755845"
                    />
                    <label htmlFor="floatingInput2">телефон</label>
                </div>
                <div className="form-floating mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        id="floatingText"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingText">Опишите вашу проблему</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">
                    Отправить
                </button>
            </form>
        </div>
    );
};
