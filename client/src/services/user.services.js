import axios from "axios";
import config from "../config.json";
const userEndpoint = "users/";

const http = axios.create({
    baseURL: config.baseUrl,
});

const userService = {
    async loginUser(email, password) {
        const { data } = await http.post(userEndpoint + "login", { email, password });
        return data;
    },

    async addUser(email, password) {
        const newUser = {
            email,
            password,
            role: "admin",
        };
        const { data } = await http.post(userEndpoint, newUser);
        return data;
    },
};

export default userService;
