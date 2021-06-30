const router = require("express").Router()
const cardRoutes = require("./cards")
const deckRoutes = require("./decks")
const userRoutes = require("./users")
const sessionRoutes = require("./sessions")

// Card routes
router.use("/cards", cardRoutes)
router.use("/decks", deckRoutes)
router.use("/users", userRoutes)
router.use("/sessions", sessionRoutes)

module.exports = router;
