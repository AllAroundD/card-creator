require("dotenv").config();
let mongoose = require("mongoose");
let db = require("./models");
const config = require("./config");
// connect to the mongo DB using mongoose
mongoose.connect(
  config.dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("DB Connected Successfully");
  }
);
// Add all the data to the array to be used
let cardSeed = [
  {
    // _id: '507c35dd8fada716c89d0013',
    name: "Doug",
    desc: "hi",
    file_path: "assets/img/cardsample1.jpg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "Status", value: "Very Cool" },
      { name: "Capacity of Stacks", value: "Full" },
    ],
  },
  {
    // _id: '507c35dd8fada716c89d0014',
    name: "Eddi",
    desc: "it me",
    file_path: "assets/img/cardsample2.jpg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "Hobby", value: "Playing Piano" },
      { name: "Feeling", value: "Hungry" },
    ],
  },
  {
    name: "Developers",
    desc: "This is a funny developer meme",
    file_path: "assets/img/developers.jpeg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "Front End", value: "React" },
      { name: "Back End", value: "Node Express" },
    ],
  },
  {
    name: "Lego 1",
    desc: "This is a lego card",
    file_path: "assets/img/green.png",
    file_mimetype: "image/png",
    properties: [
      { name: "color", value: "green" },
      { name: "size", value: "small" },
    ],
  },
  {
    name: "Joker",
    desc: "This is another lego card",
    file_path: "assets/img/joker.jpg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "color", value: "green" },
      { name: "size", value: "small" },
    ],
  },
  {
    name: "Lego Galaxy Blue",
    desc: "This is a lego Galaxy Blue card",
    file_path: "assets/img/lego_galaxy_blue.png",
    file_mimetype: "image/png",
    properties: [
      { name: "color", value: "blue" },
      { name: "size", value: "small" },
    ],
  },
  {
    name: "Lego Galaxy Blue 2",
    desc: "This is another lego Galaxy Blue card",
    file_path: "assets/img/lego_galaxy_cover.jpg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "color", value: "blue" },
      { name: "size", value: "small" },
    ],
  },
  {
    name: "Lego Galaxy Crater Creeper",
    desc: "This is a lego Galaxy Crater Creeper card",
    file_path: "assets/img/lego_galaxy_cratercreeper.jpg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "color", value: "blue" },
      { name: "size", value: "small" },
    ],
  },
  {
    name: "Lego Galaxy",
    desc: "This is a lego Galaxy card",
    file_path: "assets/img/lego_galaxy.jpg",
    file_mimetype: "image/jpg",
    properties: [
      { name: "color", value: "orange" },
      { name: "size", value: "small" },
    ],
  },
];
let deckSeed = [
  {
    name: "Doug Deck",
    desc: "hi deck",
    file_path: "assets/img/decksample1.jpg",
    file_mimetype: "image/jpg",
    cards: [],
  },
  {
    name: "Eddi Deck",
    desc: "it me deck",
    file_path: "assets/img/decksample2.jpg",
    file_mimetype: "image/jpg",
    cards: [],
  },
  {
    name: "New Deck",
    desc: "This is a new deck",
    file_path: "assets/img/decksample1.jpg",
    file_mimetype: "image/jpg",
    cards: [],
  },
  {
    name: "Awesome Deck",
    desc: "This is an awesome deck",
    file_path: "assets/img/3po.jpeg",
    file_mimetype: "image/jpg",
    cards: [],
  },
  {
    name: "Cool Deck",
    desc: "This is a cool deck",
    file_path: "assets/img/decksample1.png",
    file_mimetype: "image/png",
    cards: [],
  },
  {
    name: "Deck Test",
    desc: "This is a deck test",
    file_path: "assets/img/Bizarro.png",
    file_mimetype: "image/png",
    cards: [],
  },
  {
    name: "Card Deck",
    desc: "This is a card deck",
    file_path: "assets/img/developers.jpeg",
    file_mimetype: "image/jpg",
    cards: [],
  },
];

// delete any data that was there and then insert the data
db.Cards.deleteMany({})
  .then(() => db.Cards.collection.insertMany(cardSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Decks.deleteMany({})
  .then(() => db.Decks.collection.insertMany(deckSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
