import axios from "axios";
import config from "../config.json";
const noteEndpoint = "notes/";

axios.defaults.baseURL = config.baseUrl;

const noteService = {
    async getNotes() {
        const { data } = await axios.get(noteEndpoint);
        return data;
    },
};

export default noteService;
