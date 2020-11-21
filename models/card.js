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
    imgId: {
        type: String
    },
    properties: [{ type: Schema.Types.ObjectId, ref: "Properties" }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Cards", CardSchema);