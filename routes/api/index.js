const router = require("express").Router();
const cardRoutes = require("./cards");
const deckRoutes = require("./decks");
const userRoutes = require("./users")

// Card routes
router.use("/cards", cardRoutes);
router.use("/decks", deckRoutes);
router.use("/users", userRoutes)

module.exports = router;
