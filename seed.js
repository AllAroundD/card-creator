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
let deckSeed = [
    {
        name: "Doug Deck",
        desc: 'hi deck',
        imgId: '123123',
        cards: []
    },
    {
        name: "Eddi Deck",
        desc: 'it me deck',
        imgId: '234234234',
        cards: []
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

db.Decks.deleteMany({})
    .then(() => db.Decks.collection.insertMany(deckSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })