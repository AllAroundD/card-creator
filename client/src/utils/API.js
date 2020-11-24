import axios from "axios";

export default {
    // Gets all cards
    getBooks: function () {
        return axios.get("/api/cards");
    },
    // Gets the card with the given id
    getBook: function (id) {
        return axios.get("/api/cards/" + id);
    },
    // Deletes the card with the given id
    deleteBook: function (id) {
        return axios.delete("/api/cards/" + id);
    },
    // Saves a card to the database
    saveBook: function (bookData) {
        return axios.post("/api/cards", bookData);
    },
    // Gets all decks
    getBooks: function () {
        return axios.get("/api/decks");
    },
    // Gets the deck with the given id
    getBook: function (id) {
        return axios.get("/api/decks/" + id);
    },
    // Deletes the deck with the given id
    deleteBook: function (id) {
        return axios.delete("/api/decks/" + id);
    },
    // Saves a deck to the database
    saveBook: function (bookData) {
        return axios.post("/api/decks", bookData);
    }
};
