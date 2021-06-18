require("dotenv").config();
let mongoose = require("mongoose");
let db = require("./models");
const config = require("./config");
const { connectDB, disconnectDB } = require("./utils/dbUtils");
const { Cards, Decks } = require("./models");
// connect to the mongo DB using mongoose
connectDB();

// Function to get sample data
const updateDeck = async (cardName, deckName) => {
  const cardID = await Cards.findOne({ name: cardName }, "id").exec();
  const query = { name: deckName };
  const updateDocument = {
    $addToSet: { cards: cardID },
  };
  const result = await Decks.updateOne(query, updateDocument);
  if (result.nModified)
    console.log(`'${cardName}' was added to '${deckName}'.`);
};

// function with seed updates
const updateSeed = async () => {
  console.log("Updating decks to assign cards...");

  let deckUpdate1 = await updateDeck("Doug", "Doug Deck");
  let deckUpdate2 = await updateDeck("Eddi", "Eddi Deck");
  let deckUpdate3 = await updateDeck("Developers", "New Deck");
  let deckUpdate4 = await updateDeck("Lego 1", "Awesome Deck");
  let deckUpdate5 = await updateDeck("Joker", "Cool Deck");
  let deckUpdate6 = await updateDeck("Lego Galaxy Blue", "Deck Test");
  let deckUpdate7 = await updateDeck("Lego Galaxy Blue 2", "Card Deck");
  let deckUpdate8 = await updateDeck("Lego Galaxy", "Doug Deck");
  let deckUpdate9 = await updateDeck("Eddi", "New Deck");
  let deckUpdate10 = await updateDeck("Developers", "Doug Deck");
};

// Add all the data to the array to be used
let cardSeed = [
  {
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
    console.log("Cards: " + data.result.n + " records inserted!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Decks.deleteMany({})
  .then(() => db.Decks.collection.insertMany(deckSeed))
  .then((data) => {
    console.log("Decks: " + data.result.n + " records inserted!");
  })
  .then(async () => {
    let data = await updateSeed();
  })
  .then(() => {
    disconnectDB();
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
