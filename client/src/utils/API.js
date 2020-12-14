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
    // Creates a card to the database
    createCard: function (cardData) {
        return axios.post("/api/cards/", cardData);
    },
    // Edits a card in the database
    editCard: function (id, cardData) {
        return axios.put("/api/cards/" + id, cardData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
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
    // Creates a deck to the database
    createDeck: function (deckData) {
        return axios.post("/api/decks", deckData);
    }
};

export default api;
