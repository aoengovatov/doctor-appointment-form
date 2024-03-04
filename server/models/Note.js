const { Schema, model } = require("mongoose");
const schema = new Schema(
    {
        fio: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        problem: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Note", schema);
