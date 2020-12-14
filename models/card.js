const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    desc: {
        type: String,
        trim: true,
    },
    img_path: {
        type: String,
        required: true
    },
    img_mimetype: {
        type: String,
        required: true
    },
    properties: [{ type: Schema.Types.ObjectId, ref: "Properties" }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Cards", CardSchema);