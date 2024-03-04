const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = 4000;

async function start() {
    try {
        app.listen(4000, () => {
            console.log(`Сервер запущен на ${PORT} порту`);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

start();
