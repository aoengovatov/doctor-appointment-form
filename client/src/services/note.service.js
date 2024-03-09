import axios from "axios";
import config from "../config.json";
const noteEndpoint = "notes/";

const http = axios.create({
    baseURL: config.baseUrl,
});

const noteService = {
    async getNotes(token) {
        const { data } = await http.get(noteEndpoint, {
            headers: {
                user: token,
            },
        });
        return data;
    },

    async addNote(fio, phone, problem) {
        const newNote = {
            fio,
            phone,
            problem,
        };
        const { data } = await http.post(noteEndpoint, newNote);
        return data;
    },
};

export default noteService;
