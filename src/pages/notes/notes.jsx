export const Notes = () => {
    return (
        <>
            <h1>Запись к врачу</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Дата</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Проблема</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">20.01.2024</th>
                        <td>Иванов Иван Иванович</td>
                        <td>89547855547</td>
                        <td>головная боль</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
