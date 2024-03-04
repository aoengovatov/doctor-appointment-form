const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get("port");

async function start() {
    try {
        mongoose.connection.once("open", () => {
            console.log("База данных подключена");
        });
        mongoose.connect(config.get("mongoUri"));

        app.listen(4000, () => {
            console.log(`Сервер запущен на ${PORT} порту`);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

start();
