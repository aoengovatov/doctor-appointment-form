import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/utils";
import noteService from "../../services/note.service";

export const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        noteService.getNotes().then((data) => setNotes(data));
    }, []);

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
        </>
    );
};
