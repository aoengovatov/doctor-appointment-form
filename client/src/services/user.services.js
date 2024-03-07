import axios from "axios";
import config from "../config.json";
const userEndpoint = "users/";

const http = axios.create({
    baseURL: config.baseUrl,
});

const userService = {
    async getUsers() {
        const { data } = await http.get(userEndpoint);
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
