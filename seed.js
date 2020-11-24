require('dotenv').config()
let mongoose = require("mongoose")
let db = require("./models")
// connect to the mongo DB using mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
        if (err) throw err
        console.log("DB Connected Successfully")
    })
// Add all the data to the array to be used
let cardSeed = [
    {
        name: "Doug",
        desc: 'hi',
        imgId: '111111',
        properties: {}
    },
    {
        name: "Eddi",
        desc: 'it me',
        imgId: '111111',
        properties: {}
    },
]
// delete any data that was there and then insert the data
db.Cards.deleteMany({})
    .then(() => db.Cards.collection.insertMany(cardSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })