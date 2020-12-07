const router = require("express").Router();
const cardRoutes = require("./cards");
const deckRoutes = require("./decks");

// Card routes
router.use("/cards", cardRoutes);
router.use("/decks", deckRoutes);

module.exports = router;
