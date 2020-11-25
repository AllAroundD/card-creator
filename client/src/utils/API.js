import axios from "axios";

const api = {
    // Gets all cards
    getCards: function () {
        return axios.get("/api/cards");
    },
    // Gets the card with the given id
    getCard: function (id) {
        return axios.get("/api/cards/" + id);
    },
    // Deletes the card with the given id
    deleteCard: function (id) {
        return axios.delete("/api/cards/" + id);
    },
    // Saves a card to the database
    saveCard: function (cardData) {
        return axios.post("/api/cards", cardData);
    },
    // Gets all decks
    getDecks: function () {
        return axios.get("/api/decks");
    },
    // Gets the deck with the given id
    getDeck: function (id) {
        return axios.get("/api/decks/" + id);
    },
    // Deletes the deck with the given id
    deleteDeck: function (id) {
        return axios.delete("/api/decks/" + id);
    },
    // Saves a deck to the database
    saveDeck: function (deckData) {
        return axios.post("/api/decks", deckData);
    }
};

export default api;
