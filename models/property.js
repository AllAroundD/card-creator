const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    properties: {
        type: {},
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Properties", PropertySchema);