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
        // _id: '507c35dd8fada716c89d0013',
        name: "Doug",
        desc: 'hi',
        file_path: 'assets/img/cardsample1.jpg',
        file_mimetype: 'image/jpg',
        properties: [
            {name: 'Status', value: 'Very Cool'},
            {name: 'Capacity of Stacks', value: 'Full'}
        ]
    },
    {
        // _id: '507c35dd8fada716c89d0014',
        name: "Eddi",
        desc: 'it me',
        file_path: 'assets/img/cardsample2.jpg',
        file_mimetype: 'image/jpg',
        properties: [
            {name: 'Hobby', value: 'Playing Piano'},
            {name: 'Feeling', value: 'Hungry'}
        ]
    },
]
let deckSeed = [
    {
        name: "Doug Deck",
        desc: 'hi deck',
        file_path: 'assets/img/decksample1.jpg',
        file_mimetype: 'image/jpg',
        cards: ['507c35dd8fada716c89d0014', '507c35dd8fada716c89d0013']
    },
    {
        name: "Eddi Deck",
        desc: 'it me deck',
        file_path: 'assets/img/decksample2.jpg',
        file_mimetype: 'image/jpg',
        cards: ['507c35dd8fada716c89d0013', '507c35dd8fada716c89d0013', '507c35dd8fada716c89d0013']
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