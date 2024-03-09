const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const noteRoute = require("./routes/note.routes");
const userRoute = require("./routes/user.routes");

const app = express();
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use(cookieParser());

app.use("/notes", noteRoute);
app.use("/users", userRoute);

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
