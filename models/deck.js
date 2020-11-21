const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
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
    cards: [{ type: Schema.Types.ObjectId, ref: "Cards" }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Decks", DeckSchema);