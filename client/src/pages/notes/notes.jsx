import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/utils";
import { Alert } from "../../components";
import noteService from "../../services/note.service";

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const token = sessionStorage.getItem("user");

    useEffect(() => {
        noteService.getNotes(token).then((data) => {
            if (data) {
                setNotes(data);
            }
        });
    }, [token]);
    console.log(notes);

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
                    {notes.map(({ _id, fio, phone, problem, createdAt }) => (
                        <tr key={_id}>
                            <th scope="row">{dateFormatter(createdAt)}</th>
                            <td>{fio}</td>
                            <td>{phone}</td>
                            <td>{problem}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {notes.length === 0 && (
                <Alert success={false}>Ошибка загрузки. У Вас недостаточно прав.</Alert>
            )}
        </>
    );
};
