const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
    playlist: { type: String, required: true },
    title: { type: String, required: true },
    publicId: { type: String, required: true },
    date: { type: Date, required: true },
});

const Audio = mongoose.model("audio", audioSchema);

module.exports = Audio;
